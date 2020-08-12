﻿using System;

namespace Fur.Extensions
{
    /// <summary>
    /// 对象拓展类
    /// </summary>
    internal static class ObjectExtensions
    {
        /// <summary>
        /// 判断是否是富基元类型
        /// </summary>
        /// <param name="type">类型</param>
        /// <returns></returns>
        internal static bool IsRichPrimitive(this Type type)
        {
            // 基元类型或值类型或字符串类型
            if (type.IsPrimitive || type.IsValueType || type == typeof(string)) return true;

            if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>)) return type.GenericTypeArguments[0].IsRichPrimitive();

            return false;
        }

        /// <summary>
        /// 根据条件
        /// </summary>
        /// <param name="str">字符串</param>
        /// <param name="condition">条件</param>
        /// <returns></returns>
        internal static string ToLower(this string str, bool condition)
            => condition ? str.ToLower() : str;
    }
}