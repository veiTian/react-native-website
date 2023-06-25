"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54561],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>C});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),C=r,m=u["".concat(s,".").concat(C)]||u[C]||p[C]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>C,default:()=>B,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={id:"height-and-width",title:"\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6"},C=void 0,m={unversionedId:"height-and-width",id:"version-0.63/height-and-width",title:"\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6",description:"\u7ec4\u4ef6\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u51b3\u5b9a\u4e86\u5176\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u7684\u5c3a\u5bf8\u3002",source:"@site/versioned_docs/version-0.63/height-and-width.md",sourceDirName:".",slug:"/height-and-width",permalink:"/docs/0.63/height-and-width",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/height-and-width.md",tags:[],version:"0.63",frontMatter:{id:"height-and-width",title:"\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6"},sidebar:"version-0.63/docs",previous:{title:"\u6837\u5f0f",permalink:"/docs/0.63/style"},next:{title:"\u4f7f\u7528 Flexbox \u5e03\u5c40",permalink:"/docs/0.63/flexbox"}},h={},f=[{value:"\u6307\u5b9a\u5bbd\u9ad8",id:"\u6307\u5b9a\u5bbd\u9ad8",level:2},{value:"\u5f39\u6027\uff08Flex\uff09\u5bbd\u9ad8",id:"\u5f39\u6027flex\u5bbd\u9ad8",level:2},{value:"\u767e\u5206\u6bd4\u5bbd\u9ad8",id:"\u767e\u5206\u6bd4\u5bbd\u9ad8",level:2},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(67.86%), sunnylqm(32.14%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm6786-sunnylqm3214",level:5}],k={toc:f};function B(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},k),d),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u7ec4\u4ef6\u7684\u9ad8\u5ea6\u548c\u5bbd\u5ea6\u51b3\u5b9a\u4e86\u5176\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u7684\u5c3a\u5bf8\u3002"),(0,a.kt)("h2",p({},{id:"\u6307\u5b9a\u5bbd\u9ad8"}),"\u6307\u5b9a\u5bbd\u9ad8"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u7ed9\u7ec4\u4ef6\u8bbe\u5b9a\u5c3a\u5bf8\u7684\u65b9\u5f0f\u5c31\u662f\u5728\u6837\u5f0f\u4e2d\u6307\u5b9a\u56fa\u5b9a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"width"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"\u3002React Native \u4e2d\u7684\u5c3a\u5bf8\u90fd\u662f\u65e0\u5355\u4f4d\u7684\uff0c\u8868\u793a\u7684\u662f\u4e0e\u8bbe\u5907\u50cf\u7d20\u5bc6\u5ea6\u65e0\u5173\u7684\u903b\u8f91\u50cf\u7d20\u70b9\u3002"),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Height and Width","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FixedDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20100%2C%20height%3A%20100%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20150%2C%20height%3A%20150%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FixedDimensionsBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("p",null,"\u8fd9\u6837\u7ed9\u7ec4\u4ef6\u8bbe\u7f6e\u5c3a\u5bf8\u4e5f\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u6a21\u5f0f\uff0c\u6bd4\u5982\u8981\u6c42\u5728\u4e0d\u540c\u5c3a\u5bf8\u7684\u5c4f\u5e55\u4e0a\u90fd\u663e\u793a\u6210\u4e00\u6837\u7684\u5927\u5c0f\u3002"),(0,a.kt)("h2",p({},{id:"\u5f39\u6027flex\u5bbd\u9ad8"}),"\u5f39\u6027\uff08Flex\uff09\u5bbd\u9ad8"),(0,a.kt)("p",null,"\u5728\u7ec4\u4ef6\u6837\u5f0f\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),"\u53ef\u4ee5\u4f7f\u5176\u5728\u53ef\u5229\u7528\u7684\u7a7a\u95f4\u4e2d\u52a8\u6001\u5730\u6269\u5f20\u6216\u6536\u7f29\u3002\u4e00\u822c\u800c\u8a00\u6211\u4eec\u4f1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"flex:1"),"\u6765\u6307\u5b9a\u67d0\u4e2a\u7ec4\u4ef6\u6269\u5f20\u4ee5\u6491\u6ee1\u6240\u6709\u5269\u4f59\u7684\u7a7a\u95f4\u3002\u5982\u679c\u6709\u591a\u4e2a\u5e76\u5217\u7684\u5b50\u7ec4\u4ef6\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"flex:1"),"\uff0c\u5219\u8fd9\u4e9b\u5b50\u7ec4\u4ef6\u4f1a\u5e73\u5206\u7236\u5bb9\u5668\u4e2d\u5269\u4f59\u7684\u7a7a\u95f4\u3002\u5982\u679c\u8fd9\u4e9b\u5e76\u5217\u7684\u5b50\u7ec4\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),"\u503c\u4e0d\u4e00\u6837\uff0c\u5219\u8c01\u7684\u503c\u66f4\u5927\uff0c\u8c01\u5360\u636e\u5269\u4f59\u7a7a\u95f4\u7684\u6bd4\u4f8b\u5c31\u66f4\u5927\uff08\u5373\u5360\u636e\u5269\u4f59\u7a7a\u95f4\u7684\u6bd4\u7b49\u4e8e\u5e76\u5217\u7ec4\u4ef6\u95f4",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),"\u503c\u7684\u6bd4\uff09\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7ec4\u4ef6\u80fd\u591f\u6491\u6ee1\u5269\u4f59\u7a7a\u95f4\u7684\u524d\u63d0\u662f\u5176\u7236\u5bb9\u5668\u7684\u5c3a\u5bf8\u4e0d\u4e3a\u96f6\u3002\u5982\u679c\u7236\u5bb9\u5668\u65e2\u6ca1\u6709\u56fa\u5b9a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"width"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"\uff0c\u4e5f\u6ca1\u6709\u8bbe\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),"\uff0c\u5219\u7236\u5bb9\u5668\u7684\u5c3a\u5bf8\u4e3a\u96f6\u3002\u5176\u5b50\u7ec4\u4ef6\u5982\u679c\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),"\uff0c\u4e5f\u662f\u65e0\u6cd5\u663e\u793a\u7684\u3002")),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Flex Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20FlexDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%2F%2F%20%E8%AF%95%E8%AF%95%E5%8E%BB%E6%8E%89%E7%88%B6View%E4%B8%AD%E7%9A%84%60flex%3A%201%60%E3%80%82%5Cn%20%20%20%20%2F%2F%20%E5%88%99%E7%88%B6View%E4%B8%8D%E5%86%8D%E5%85%B7%E6%9C%89%E5%B0%BA%E5%AF%B8%EF%BC%8C%E5%9B%A0%E6%AD%A4%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B9%9F%E6%97%A0%E6%B3%95%E5%86%8D%E6%92%91%E5%BC%80%E3%80%82%5Cn%20%20%20%20%2F%2F%20%E7%84%B6%E5%90%8E%E5%86%8D%E7%94%A8%60height%3A%20300%60%E6%9D%A5%E4%BB%A3%E6%9B%BF%E7%88%B6View%E7%9A%84%60flex%3A%201%60%E8%AF%95%E8%AF%95%E7%9C%8B%EF%BC%9F%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%202%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%203%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20FlexDimensionsBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("h2",p({},{id:"\u767e\u5206\u6bd4\u5bbd\u9ad8"}),"\u767e\u5206\u6bd4\u5bbd\u9ad8"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u6309\u6bd4\u4f8b\u586b\u5145\u5c4f\u5e55\u4e0a\u67d0\u4e00\u90e8\u5206\uff0c\u53c8\u4e0d\u60f3\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," \u5e03\u5c40\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u7ec4\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"style"),"\u4e2d\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u767e\u5206\u6bd4"),"\u3002\u4e0e\u5f39\u6027\u5bbd\u9ad8\u76f8\u4f3c\uff0c\u767e\u5206\u6bd4\u5bbd\u9ad8\u8981\u6c42\u7236\u5bb9\u5668\u6709\u4e00\u4e2a\u660e\u786e\u7684\u5c3a\u5bf8\u3002"),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Percentage Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20View%20%7D%20from%20'react-native'%3B%5Cnconst%20PercentageDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%2F%2F%20Try%20removing%20the%20%60height%3A%20'100%25'%60%20on%20the%20parent%20View.%5Cn%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20height%3A%20'100%25'%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20height%3A%20'15%25'%2C%20backgroundColor%3A%20'powderblue'%5Cn%20%20%20%20%20%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20width%3A%20'66%25'%2C%20height%3A%20'35%25'%2C%20backgroundColor%3A%20'skyblue'%5Cn%20%20%20%20%20%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20width%3A%20'33%25'%2C%20height%3A%20'50%25'%2C%20backgroundColor%3A%20'steelblue'%5Cn%20%20%20%20%20%20%7D%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cnexport%20default%20PercentageDimensionsBasics%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("p",null,"\u5f53\u4f60\u719f\u7ec3\u638c\u63e1\u4e86\u5982\u4f55\u63a7\u5236\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u540e\uff0c\u4e0b\u4e00\u6b65\u53ef\u4ee5",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/0.63/flexbox"}),"\u5b66\u4e60\u5982\u4f55\u5728\u5c4f\u5e55\u4e0a\u6392\u5217\u7ec4\u4ef6\u4e86"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h5",p({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm6786-sunnylqm3214"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",p({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(67.86%), ",(0,a.kt)("a",p({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(32.14%)"))}B.isMDXComponent=!0}}]);