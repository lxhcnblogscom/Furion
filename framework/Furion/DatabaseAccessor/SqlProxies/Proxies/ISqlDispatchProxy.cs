﻿// -----------------------------------------------------------------------------
// 让 .NET 开发更简单，更通用，更流行。
// Copyright © 2020-2021 Furion, 百小僧, Baiqian Co.,Ltd.
//
// 框架名称：Furion
// 框架作者：百小僧
// 框架版本：2.9.4
// 源码地址：Gitee： https://gitee.com/dotnetchina/Furion
//          Github：https://github.com/monksoul/Furion
// 开源协议：Apache-2.0（https://gitee.com/dotnetchina/Furion/blob/master/LICENSE）
// -----------------------------------------------------------------------------

namespace Furion.DatabaseAccessor
{
    /// <summary>
    /// Sql 执行代理依赖接口
    /// </summary>
    public interface ISqlDispatchProxy
    {
        /// <summary>
        /// 切换数据库上下文定位器
        /// </summary>
        /// <typeparam name="TDbContextLocator"></typeparam>
        /// <returns></returns>
        public void Change<TDbContextLocator>()
            where TDbContextLocator : IDbContextLocator
        { }

        /// <summary>
        /// 重置运行时数据库上下文定位器
        /// </summary>
        public void ResetIt() { }
    }
}