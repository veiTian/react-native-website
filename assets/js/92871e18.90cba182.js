"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37442],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>k,toc:()=>f});var i=n(35318),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const u={id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93"},m=void 0,k={unversionedId:"linking-libraries-ios",id:"version-0.72/linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93",description:"\u5e76\u4e0d\u662f\u6240\u6709\u7684 APP \u90fd\u9700\u8981\u4f7f\u7528\u5168\u90e8\u7684\u539f\u751f\u529f\u80fd\uff0c\u5305\u542b\u652f\u6301\u5168\u90e8\u7279\u6027\u7684\u4ee3\u7801\u4f1a\u589e\u5927\u5e94\u7528\u7684\u4f53\u79ef\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u80fd\u8ba9\u4f60\u7b80\u5355\u5730\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6dfb\u52a0\u9700\u8981\u7684\u7279\u6027\u3002",source:"@site/versioned_docs/version-0.72/linking-libraries-ios.md",sourceDirName:".",slug:"/linking-libraries-ios",permalink:"/docs/linking-libraries-ios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/linking-libraries-ios.md",tags:[],version:"0.72",frontMatter:{id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93"},sidebar:"docs",previous:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/communication-android"},next:{title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c",permalink:"/docs/running-on-simulator-ios"}},b={},f=[{value:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a",id:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4",level:2},{value:"\u81ea\u52a8\u94fe\u63a5",id:"\u81ea\u52a8\u94fe\u63a5",level:3},{value:"\u624b\u52a8\u94fe\u63a5",id:"\u624b\u52a8\u94fe\u63a5",level:3},{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65",level:4},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",level:4},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",level:4}],v={toc:f};function g(e){var t,r=e,{components:s}=r,u=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(r,["components"]);return(0,i.kt)("wrapper",(t=d(d({},v),u),a(t,o({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"\u5e76\u4e0d\u662f\u6240\u6709\u7684 APP \u90fd\u9700\u8981\u4f7f\u7528\u5168\u90e8\u7684\u539f\u751f\u529f\u80fd\uff0c\u5305\u542b\u652f\u6301\u5168\u90e8\u7279\u6027\u7684\u4ee3\u7801\u4f1a\u589e\u5927\u5e94\u7528\u7684\u4f53\u79ef\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u80fd\u8ba9\u4f60\u7b80\u5355\u5730\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6dfb\u52a0\u9700\u8981\u7684\u7279\u6027\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u601d\u60f3\u4e0b\uff0c\u6211\u4eec\u628a\u8bb8\u591a\u7279\u6027\u90fd\u53d1\u5e03\u6210\u4e3a\u4e92\u4e0d\u76f8\u5173\u7684\u9759\u6001\u5e93\u3002"),(0,i.kt)("p",null,"\u5927\u90e8\u5206\u7684\u5e93\u53ea\u9700\u8981\u62d6\u8fdb\u4e24\u4e2a\u6587\u4ef6\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\uff0c\u5076\u5c14\u4f60\u8fd8\u9700\u8981\u51e0\u6b65\u989d\u5916\u7684\u5de5\u4f5c\uff0c\u4f46\u4e0d\u4f1a\u518d\u6709\u66f4\u591a\u7684\u4e8b\u60c5\u8981\u505a\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6211\u4eec\u968f\u7740 React Native \u53d1\u5e03\u7684\u6240\u6709\u5e93\u90fd\u5728\u4ed3\u5e93\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"em"},"Libraries"),"\u6587\u4ef6\u5939\u4e0b\u3002\u5176\u4e2d\u6709\u4e00\u4e9b\u662f\u7eaf Javascript \u4ee3\u7801\uff0c\u4f60\u53ea\u9700\u8981\u53bb",(0,i.kt)("inlineCode",{parentName:"em"},"import"),"\u5b83\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002\u53e6\u5916\u6709\u4e00\u4e9b\u5e93\u57fa\u4e8e\u4e00\u4e9b\u539f\u751f\u4ee3\u7801\u5b9e\u73b0\uff0c\u4f60\u5fc5\u987b\u628a\u8fd9\u4e9b\u6587\u4ef6\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\uff0c\u5426\u5219\u5e94\u7528\u4f1a\u5728\u4f60\u4f7f\u7528\u8fd9\u4e9b\u5e93\u7684\u65f6\u5019\u4ea7\u751f\u62a5\u9519\u3002")),(0,i.kt)("h2",d({},{id:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4"}),"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("h3",d({},{id:"\u81ea\u52a8\u94fe\u63a5"}),"\u81ea\u52a8\u94fe\u63a5"),(0,i.kt)("p",null,"\u5b89\u88c5\u67d0\u4e2a\u5e26\u539f\u751f\u4f9d\u8d56\u7684\u5e93\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"$ npm install \u67d0\u4e2a\u5e26\u6709\u539f\u751f\u4f9d\u8d56\u7684\u5e93\n")),(0,i.kt)("admonition",d({},{title:"\u63d0\u793a",type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"React Native will link your libs based on ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file.")),(0,i.kt)("p",null,"That's it! Next time you build your app the native code will be linked thanks to the ",(0,i.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/main/docs/autolinking.md"}),"autolinking")," mechanism."),(0,i.kt)("h3",d({},{id:"\u624b\u52a8\u94fe\u63a5"}),"\u624b\u52a8\u94fe\u63a5"),(0,i.kt)("h4",d({},{id:"\u7b2c\u4e00\u6b65"}),"\u7b2c\u4e00\u6b65"),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u5e93\u5305\u542b\u539f\u751f\u4ee3\u7801\uff0c\u90a3\u4e48\u5728\u5b83\u7684\u6587\u4ef6\u5939\u4e0b\u4e00\u5b9a\u6709\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},".xcodeproj"),"\u6587\u4ef6\u3002\u628a\u8fd9\u4e2a\u6587\u4ef6\u62d6\u5230\u4f60\u7684 XCode \u5de5\u7a0b\u4e0b\uff08\u901a\u5e38\u62d6\u5230 XCode \u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Libraries"),"\u5206\u7ec4\u91cc\uff09"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72089).Z,width:"2560",height:"1552"})),(0,i.kt)("h4",d({},{id:"\u7b2c\u4e8c\u6b65"}),"\u7b2c\u4e8c\u6b65"),(0,i.kt)("p",null,"\u70b9\u51fb\u4f60\u7684\u4e3b\u5de5\u7a0b\u6587\u4ef6\uff0c\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"Build Phases"),"\uff0c\u7136\u540e\u628a\u521a\u624d\u6240\u6dfb\u52a0\u8fdb\u53bb\u7684",(0,i.kt)("inlineCode",{parentName:"p"},".xcodeproj"),"\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Products"),"\u6587\u4ef6\u5939\u4e2d\u7684\u9759\u6001\u5e93\u6587\u4ef6\uff08.a \u6587\u4ef6\uff09\uff0c\u62d6\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Link Binary With Libraries"),"\u7ec4\u5185\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(600).Z,width:"2560",height:"1564"})),(0,i.kt)("h4",d({},{id:"\u7b2c\u4e09\u6b65"}),"\u7b2c\u4e09\u6b65"),(0,i.kt)("p",null,"\u4e0d\u662f\u6240\u6709\u7684\u5e93\u90fd\u9700\u8981\u8fdb\u884c\u8fd9\u4e2a\u6b65\u9aa4\uff0c\u4f60\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u5728\u4e8e\uff1a"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6211\u9700\u8981\u5728\u7f16\u8bd1\u7684\u671f\u95f4\u4e86\u89e3\u5e93\u7684\u5185\u5bb9\u5417\uff1f")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u610f\u601d\u662f\uff0c\u4f60\u662f\u9700\u8981\u5728\u539f\u751f\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u5e93\uff0c\u8fd8\u662f\u53ea\u9700\u8981\u901a\u8fc7 JavaScript \u8bbf\u95ee\uff1f\u5982\u679c\u4f60\u53ea\u9700\u8981\u901a\u8fc7 JavaScript \u8bbf\u95ee\u8fd9\u4e2a\u5e93\uff0c\u4f60\u5c31\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u6b65\u4e86\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e00\u6b65\u9aa4\u5bf9\u4e8e\u6211\u4eec\u968f React Native \u53d1\u5e03\u7684\u5927\u90e8\u5206\u5e93\u6765\u8bf4\u90fd\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u6709\u4e24\u4e2a\u4f8b\u5916\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"LinkingIOS"),"\u3002"),(0,i.kt)("p",null,"\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS"),"\u4e3a\u4f8b\uff0c\u4f60\u9700\u8981\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"AppDelegate"),"\u6bcf\u6536\u5230\u4e00\u6761\u63a8\u9001\u901a\u77e5\u4e4b\u540e\uff0c\u8c03\u7528\u5e93\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u80fd\u591f\u8bbf\u95ee\u5230\u5e93\u7684\u5934\u6587\u4ef6\u3002\u4e3a\u4e86\u80fd\u591f\u987a\u5229\u6253\u5305\uff0c\u4f60\u9700\u8981\u6253\u5f00\u4f60\u7684\u5de5\u7a0b\u6587\u4ef6\uff0c\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"Build Settings"),"\uff0c\u7136\u540e\u641c\u7d22",(0,i.kt)("inlineCode",{parentName:"p"},"Header Search Paths"),"\uff0c\u7136\u540e\u6dfb\u52a0\u5e93\u6240\u5728\u7684\u76ee\u5f55\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(88928).Z,width:"2706",height:"1708"})))}g.isMDXComponent=!0},600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png"},72089:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png"},88928:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/AddToSearchPaths-7b278a6ea5ef28cfa94e8d22da5a8b13.png"}}]);