(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1507],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1407:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=t(4034),a=t(9973),i=(t(7294),t(3905)),o={id:"app",title:"1. App \u9759\u6001\u7c7b",sidebar_label:"1. App \u9759\u6001\u7c7b"},p={unversionedId:"global/app",id:"global/app",isDocsHomePage:!1,title:"1. App \u9759\u6001\u7c7b",description:"1.1 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e",source:"@site/docs/global/app.mdx",sourceDirName:"global",slug:"/global/app",permalink:"/furion/docs/global/app",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/app.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1623904646,formattedLastUpdatedAt:"6/17/2021",sidebar_label:"1. App \u9759\u6001\u7c7b",frontMatter:{id:"app",title:"1. App \u9759\u6001\u7c7b",sidebar_label:"1. App \u9759\u6001\u7c7b"},sidebar:"global",next:{title:"2. Db \u9759\u6001\u7c7b",permalink:"/furion/docs/global/db"}},l=[{value:"1.1 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e",id:"11-\u83b7\u53d6\u5168\u5c40\u914d\u7f6e",children:[]},{value:"1.2 \u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61",id:"12-\u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61",children:[]},{value:"1.3 \u83b7\u53d6\u73af\u5883\u5bf9\u8c61",id:"13-\u83b7\u53d6\u73af\u5883\u5bf9\u8c61",children:[]},{value:"1.4 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6",id:"14-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6",children:[]},{value:"1.5 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b",id:"15-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b",children:[]},{value:"1.6 \u83b7\u53d6 <code>HttpContext</code>",id:"16-\u83b7\u53d6-httpcontext",children:[]},{value:"1.7 \u83b7\u53d6\u767b\u5f55\u7684 <code>User</code> \u5bf9\u8c61",id:"17-\u83b7\u53d6\u767b\u5f55\u7684-user-\u5bf9\u8c61",children:[]},{value:"1.8 \u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668",id:"18-\u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668",children:[]},{value:"1.9 \u89e3\u6790\u670d\u52a1",id:"19-\u89e3\u6790\u670d\u52a1",children:[]},{value:"1.10 \u83b7\u53d6\u9009\u9879\u914d\u7f6e",id:"110-\u83b7\u53d6\u9009\u9879\u914d\u7f6e",children:[]},{value:"1.11 \u6253\u5370\u6570\u636e\u5230 <code>MiniProfiler</code>",id:"111-\u6253\u5370\u6570\u636e\u5230-miniprofiler",children:[]},{value:"1.12 \u83b7\u53d6\u5e94\u7528\u540d\u79f0",id:"112-\u83b7\u53d6\u5e94\u7528\u540d\u79f0",children:[]},{value:"1.13 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55",id:"113-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55",children:[]},{value:"1.14 \u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55 <code>wwwroot</code> \u76ee\u5f55",id:"114-\u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55-wwwroot-\u76ee\u5f55",children:[]},{value:"1.15 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6",id:"115-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6",children:[]},{value:"1.16 \u83b7\u53d6\u542f\u52a8\u9879\u76ee <code>bin</code> \u76ee\u5f55",id:"116-\u83b7\u53d6\u542f\u52a8\u9879\u76ee-bin-\u76ee\u5f55",children:[]},{value:"1.17 \u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d",id:"117-\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d",children:[]},{value:"1.18 \u5224\u65ad\u7cfb\u7edf\u73af\u5883",id:"118-\u5224\u65ad\u7cfb\u7edf\u73af\u5883",children:[]},{value:"1.19 \u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f",id:"119-\u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f",children:[]},{value:"1.20 \u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61",id:"120-\u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61",children:[]},{value:"1.21 \u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61",id:"121-\u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61",children:[]}],c={toc:l};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"11-\u83b7\u53d6\u5168\u5c40\u914d\u7f6e"},"1.1 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var settings = App.Settings;\n")),(0,i.kt)("h2",{id:"12-\u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61"},"1.2 \u83b7\u53d6\u914d\u7f6e\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u83b7\u53d6 IConfiguration \u5bf9\u8c61\nvar configuration = App.Configuration;\nvar value = configuration["xxx:xxx"];\n\n// \u83b7\u53d6\u6307\u5b9a\u8282\u70b9\u503c\u5e76\u8f6c\u6210 T \u7c7b\u578b\nvar data = App.GetConfig<TConfig>("key:key2");\n')),(0,i.kt)("h2",{id:"13-\u83b7\u53d6\u73af\u5883\u5bf9\u8c61"},"1.3 \u83b7\u53d6\u73af\u5883\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var webHostEnvironment = App.WebHostEnvironment;\n")),(0,i.kt)("h2",{id:"14-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6"},"1.4 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u7a0b\u5e8f\u96c6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var assemblies = App.Assemblies;\n")),(0,i.kt)("h2",{id:"15-\u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b"},"1.5 \u83b7\u53d6\u9879\u76ee\u6240\u6709\u6709\u6548\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var types = App.EffectiveTypes;\n")),(0,i.kt)("h2",{id:"16-\u83b7\u53d6-httpcontext"},"1.6 \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"h2"},"HttpContext")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var httpContext = App.HttpContext;\n")),(0,i.kt)("h2",{id:"17-\u83b7\u53d6\u767b\u5f55\u7684-user-\u5bf9\u8c61"},"1.7 \u83b7\u53d6\u767b\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"h2"},"User")," \u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'var contextUser = App.User;\n\n// \u83b7\u53d6 `Jwt` \u5b58\u50a8\u7684\u4fe1\u606f\nvar userId = App.User?.FindFirstValue("\u952e");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"strong"},"System.Security.Claims")," \u547d\u540d\u7a7a\u95f4")),(0,i.kt)("h2",{id:"18-\u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668"},"1.8 \u83b7\u53d6\u670d\u52a1\u63d0\u4f9b\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var serviceProvider = App.ServiceProvider;\n\n// \u83b7\u53d6\u6839\u670d\u52a1\uff0c\u901a\u5e38\u7528\u6765\u89e3\u6790\u5355\u4f8b\u548c\u77ac\u65f6\u7684\uff0c\u53ef\u4f18\u5316\u6027\u80fd\nvar rootService = App.RootServices;\n")),(0,i.kt)("h2",{id:"19-\u89e3\u6790\u670d\u52a1"},"1.9 \u89e3\u6790\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var service = App.GetService<TService>([IServiceProvider]);\nvar service2 = App.GetService(typeof(TService), [IServiceProvider]);\n\nvar service3 = App.GetRequiredService<TService>([IServiceProvider]);\nvar service4 = App.GetRequiredService(typeof(TService), [IServiceProvider]);\n")),(0,i.kt)("h2",{id:"110-\u83b7\u53d6\u9009\u9879\u914d\u7f6e"},"1.10 \u83b7\u53d6\u9009\u9879\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var options = App.GetOptions<TOptions>([IServiceProvider]);\nvar options2 = App.GetOptionsMonitor<TOptions>([IServiceProvider]);\nvar options3 = App.GetOptionsSnapshot<TOptions>([IServiceProvider]);\n")),(0,i.kt)("h2",{id:"111-\u6253\u5370\u6570\u636e\u5230-miniprofiler"},"1.11 \u6253\u5370\u6570\u636e\u5230 ",(0,i.kt)("inlineCode",{parentName:"h2"},"MiniProfiler")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'App.PrintToMiniProfiler("\u5206\u7c7b", "\u72b6\u6001", "\u8981\u6253\u5370\u7684\u6d88\u606f");\n')),(0,i.kt)("h2",{id:"112-\u83b7\u53d6\u5e94\u7528\u540d\u79f0"},"1.12 \u83b7\u53d6\u5e94\u7528\u540d\u79f0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var applicationName = App.HostEnvironment.ApplicationName;\n")),(0,i.kt)("h2",{id:"113-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55"},"1.13 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6839\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var webRootPath = App.HostEnvironment.ContentRootPath;\n")),(0,i.kt)("h2",{id:"114-\u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55-wwwroot-\u76ee\u5f55"},"1.14 \u83b7\u53d6\u7f51\u7ad9\u6839\u76ee\u5f55 ",(0,i.kt)("inlineCode",{parentName:"h2"},"wwwroot")," \u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var wwwroot = App.WebHostEnvironment.WebRootPath;\n")),(0,i.kt)("h2",{id:"115-\u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6"},"1.15 \u83b7\u53d6\u542f\u52a8\u9879\u76ee\u6240\u5728\u7a0b\u5e8f\u96c6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var webAssembly = Assembly.GetEntryAssembly();\n")),(0,i.kt)("h2",{id:"116-\u83b7\u53d6\u542f\u52a8\u9879\u76ee-bin-\u76ee\u5f55"},"1.16 \u83b7\u53d6\u542f\u52a8\u9879\u76ee ",(0,i.kt)("inlineCode",{parentName:"h2"},"bin")," \u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var binPath = AppContext.BaseDirectory;\n")),(0,i.kt)("h2",{id:"117-\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d"},"1.17 \u83b7\u53d6\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var environmentName = App.HostEnvironment.EnvironmentName;\n")),(0,i.kt)("h2",{id:"118-\u5224\u65ad\u7cfb\u7edf\u73af\u5883"},"1.18 \u5224\u65ad\u7cfb\u7edf\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u5224\u65ad\u662f\u5426\u5f00\u53d1\u73af\u5883\nvar isDevelopment = App.HostEnvironment.IsDevelopment();\n\n// \u5224\u65ad\u662f\u5426\u751f\u4ea7\u73af\u5883\nvar isProduction = App.HostEnvironment.IsProduction();\n\n// \u5224\u65ad\u662f\u5426 Stage \u73af\u5883\nvar isStaging = App.HostEnvironment.IsStaging();\n\n// \u5224\u65ad\u662f\u5426\u662f\u7279\u5b9a\u73af\u5883\uff0c\u6bd4\u5982\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u73af\u5883\nvar isTest = App.HostEnvironment.IsEnvironment("TestEnvironment");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff0c\u9700\u5f15\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Microsoft.Extensions.Hosting")," \u547d\u540d\u7a7a\u95f4")),(0,i.kt)("h2",{id:"119-\u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f"},"1.19 \u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u83b7\u53d6\u7cfb\u7edf\u67b6\u6784\nvar osArchitecture = RuntimeInformation.OSArchitecture; // => X64\n\n// \u83b7\u53d6\u7cfb\u7edf\u540d\u79f0\nvar osDescription = RuntimeInformation.OSDescription;   // => Windows 10 \u4f01\u4e1a\u7248\n\n// \u83b7\u53d6\u8fdb\u7a0b\u67b6\u6784\nvar processArchitecture = RuntimeInformation.ProcessArchitecture;   // => X64\n\n// \u662f\u5426\u662f64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\nvar is64BitOperatingSystem = Environment.Is64BitOperatingSystem;    // => True\n")),(0,i.kt)("h2",{id:"120-\u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61"},"1.20 \u83b7\u53d6\u6846\u67b6\u5e95\u5c42\u6240\u6709\u672a\u6258\u7ba1\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var objs = App.UnmanagedObjects;\n")),(0,i.kt)("h2",{id:"121-\u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61"},"1.21 \u624b\u52a8\u91ca\u653e\u975e\u6258\u7ba1\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"App.DisposeUnmanagedObjects();\n")))}s.isMDXComponent=!0}}]);