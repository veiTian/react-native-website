"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96828],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),v=n,f=m["".concat(c,".").concat(v)]||m[v]||s[v]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var r=a(35318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&u(e,a,t[a]);return e};const m={id:"out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301"},v=void 0,f={unversionedId:"out-of-tree-platforms",id:"version-0.72/out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301",description:"React Native\u4e0d\u4ec5\u9002\u7528\u4e8e Android \u548c iOS - \u8fd8\u6709\u793e\u533a\u652f\u6301\u7684\u9879\u76ee\u5c06\u5176\u5e94\u7528\u4e8e\u5176\u4ed6\u5e73\u53f0\uff0c\u4f8b\u5982\uff1a",source:"@site/versioned_docs/version-0.72/out-of-tree-platforms.md",sourceDirName:".",slug:"/out-of-tree-platforms",permalink:"/docs/out-of-tree-platforms",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/out-of-tree-platforms.md",tags:[],version:"0.72",frontMatter:{id:"out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301"},sidebar:"docs",previous:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/building-for-tv"},next:{title:"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c",permalink:"/docs/running-on-device"}},d={},b=[{value:"\u521b\u5efa\u4f60\u81ea\u5df1\u7684 React Native \u5e73\u53f0",id:"\u521b\u5efa\u4f60\u81ea\u5df1\u7684-react-native-\u5e73\u53f0",level:2},{value:"\u6253\u5305",id:"\u6253\u5305",level:3}],N={toc:b};function k(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},N),u),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"React Native\u4e0d\u4ec5\u9002\u7528\u4e8e Android \u548c iOS - \u8fd8\u6709\u793e\u533a\u652f\u6301\u7684\u9879\u76ee\u5c06\u5176\u5e94\u7528\u4e8e\u5176\u4ed6\u5e73\u53f0\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/Microsoft/react-native-windows"}),"React Native Windows")," - React Native \u652f\u6301 Microsoft Universal Windows Platform (UWP) \u548c Windows Presentation Foundation (WPF)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/vincentriemer/react-native-dom"}),"React Native DOM")," - \u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u3001\u5168\u9762\u7684 React Native \u5230 web \u7684\u7aef\u53e3\u3002\uff08\u4e0d\u8981\u4e0e",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/necolas/react-native-web"}),"React Native Web"),"\u6df7\u6dc6\uff0c\u4e24\u8005\u76ee\u6807\u4e0d\u540c\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/status-im/react-native-desktop"}),"React Native Desktop")," - \u4e00\u4e2a\u65e8\u5728\u901a\u8fc7 Qt \u7684 QML \u5c06 React Native \u5e26\u5230\u684c\u9762\u7684\u9879\u76ee\u3002",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/CanonicalLtd/react-native/"}),"React Native Ubuntu"),"\u7684\u4e00\u4e2a\u5206\u652f\uff0c\u5df2\u4e0d\u518d\u7ef4\u62a4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/ptmt/react-native-macos"}),"React Native macOS")," - \u9488\u5bf9 macOS \u548c Cocoa \u7684\u5b9e\u9a8c\u6027 React Native \u5206\u652f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/react-native-community/react-native-tvos"}),"React Native tvOS")," - \u4e3a Apple tvOS \u9002\u914d React Native"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/areslabs/alita"}),"alita")," - \u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u3001\u7efc\u5408\u6027\u7684 React Native \u5230\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/kusti8/proton-native"}),"Proton Native")," - React Native \u7684\u5c01\u88c5\u5668\uff0c\u4f7f\u7528 Qt \u9762\u5411 Linux\u3001MacOS \u548c Windows")),(0,r.kt)("h2",s({},{id:"\u521b\u5efa\u4f60\u81ea\u5df1\u7684-react-native-\u5e73\u53f0"}),"\u521b\u5efa\u4f60\u81ea\u5df1\u7684 React Native \u5e73\u53f0"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u4ece\u5934\u5f00\u59cb\u521b\u5efa React Native \u5e73\u53f0\u7684\u8fc7\u7a0b\u5e76\u6ca1\u6709\u5f88\u597d\u7684\u8bb0\u5f55\u2014\u2014\u5373\u5c06\u5230\u6765\u7684\u5168\u65b0\u67b6\u6784\uff08",(0,r.kt)("a",s({parentName:"p"},{href:"https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018"}),"Fabric"),"\uff09\u7684\u76ee\u6807\u4e4b\u4e00\u662f\u4f7f\u5e73\u53f0\u7684\u7ef4\u62a4\u66f4\u5bb9\u6613\u3002"),(0,r.kt)("h3",s({},{id:"\u6253\u5305"}),"\u6253\u5305"),(0,r.kt)("p",null,"\u4ece React Native 0.57 \u5f00\u59cb\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 React Native \u7684 JavaScript \u6253\u5305\u5668",(0,r.kt)("a",s({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"Metro"),"\u6ce8\u518c\u4f60\u7684 React Native \u5e73\u53f0\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"--platform example"),"\u4f20\u9012\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native bundle"),"\uff0c\u5b83\u4f1a\u67e5\u627e\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},".example.js"),"\u540e\u7f00\u7684 JavaScript \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8981\u5c06\u4f60\u7684\u5e73\u53f0\u6ce8\u518c\u5230 RNPM\uff0c\u6a21\u5757\u540d\u79f0\u5fc5\u987b\u4e0e\u4ee5\u4e0b\u6a21\u5f0f\u4e4b\u4e00\u5339\u914d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-native-example")," - \u5b83\u4f1a\u641c\u7d22\u6240\u6709\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-"),"\u5f00\u5934\u7684\u9876\u7ea7\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@org/react-native-example")," - \u5b83\u4f1a\u5728\u6240\u6709\u8303\u56f4\u5185\u641c\u7d22\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-"),"\u5f00\u5934\u7684\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@react-native-example/module")," - \u5b83\u4f1a\u5728\u540d\u79f0\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"@react-native-"),"\u5f00\u5934\u7684\u8303\u56f4\u5185\u641c\u7d22\u6240\u6709\u6a21\u5757")),(0,r.kt)("p",null,"\u4f60\u8fd8\u5fc5\u987b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u8bbe\u7f6e\u4e00\u4e9b\u5185\u5bb9\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "rnpm": {\n    "haste": {\n      "providesModuleNodeModules": ["react-native-example"],\n      "platforms": ["example"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"providesModuleNodeModules"'),"\u662f\u4e00\u7ec4\u5c06\u88ab\u6dfb\u52a0\u5230 Haste \u6a21\u5757\u641c\u7d22\u8def\u5f84\u7684\u6a21\u5757\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},'"platforms"'),"\u5219\u662f\u4e00\u7ec4\u5c06\u4f5c\u4e3a\u6709\u6548\u5e73\u53f0\u6dfb\u52a0\u7684\u5e73\u53f0\u540e\u7f00\u3002"))}k.isMDXComponent=!0}}]);