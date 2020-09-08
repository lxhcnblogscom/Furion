﻿// -----------------------------------------------------------------------------
// Fur 是 .NET 5 平台下极易入门、极速开发的 Web 应用框架。
// Copyright © 2020 Fur, Baiqian Co.,Ltd.
//
// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 源码地址：https://gitee.com/monksoul/Fur
// 开源协议：Apache-2.0（http://www.apache.org/licenses/LICENSE-2.0）
// -----------------------------------------------------------------------------

using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Reflection;
using System.Threading.Tasks;
using System.Transactions;

namespace Fur.DatabaseAccessor
{
    /// <summary>
    /// 工作单元拦截器
    /// </summary>
    internal sealed class UnitOfWorkFilter : IAsyncActionFilter
    {
        /// <summary>
        /// MiniProfiler 分类名
        /// </summary>
        private const string MiniProfilerCategory = "transaction";

        /// <summary>
        /// 数据库上下文池
        /// </summary>
        private readonly IDbContextPool _dbContextPool;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="dbContextPool">数据库上下文池</param>
        public UnitOfWorkFilter(IDbContextPool dbContextPool)
        {
            _dbContextPool = dbContextPool;
        }

        /// <summary>
        /// 拦截请求
        /// </summary>
        /// <param name="context">动作方法上下文</param>
        /// <param name="next">中间件委托</param>
        /// <returns></returns>
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            // 获取动作方法描述器
            var actionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;
            var method = actionDescriptor.MethodInfo;

            // 如果方法贴了 [NonTransact] 则跳过事务
            if (method.IsDefined(typeof(NonTransactAttribute), true))
            {
                // 打印验证跳过消息
                App.PrintToMiniProfiler(MiniProfilerCategory, "Skipped");

                // 继续执行
                await next();
                return;
            }

            // 打印事务开始消息
            App.PrintToMiniProfiler(MiniProfilerCategory, "Beginning");

            // 获取工作单元特性
            UnitOfWorkAttribute unitOfWorkAttribute = null;
            if (!method.IsDefined(typeof(UnitOfWorkAttribute), true)) unitOfWorkAttribute ??= new UnitOfWorkAttribute();
            else unitOfWorkAttribute = method.GetCustomAttribute<UnitOfWorkAttribute>();

            // 开启分布式事务
            using var transaction = new TransactionScope(unitOfWorkAttribute.ScopeOption
               , new TransactionOptions { IsolationLevel = unitOfWorkAttribute.IsolationLevel }
               , unitOfWorkAttribute.AsyncFlowOption);

            // 继续执行
            var resultContext = await next();

            // 判断是否出现异常
            if (resultContext.Exception == null)
            {
                // 将所有上下文提交事务
                var hasChangesCount = await _dbContextPool.SavePoolNowAsync();
                transaction.Complete();

                // 打印事务提交消息
                App.PrintToMiniProfiler(MiniProfilerCategory, "Completed", $"Has {hasChangesCount} DbContext Changes.");
            }
            else
            {
                // 打印事务回滚消息
                App.PrintToMiniProfiler(MiniProfilerCategory, "Rollback", isError: true);
            }
        }
    }
}