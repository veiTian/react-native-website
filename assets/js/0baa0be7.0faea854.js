"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24192],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>k,toc:()=>C});var n=r(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const m={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},u=void 0,k={unversionedId:"progressviewios",id:"version-0.64/progressviewios",title:"\ud83d\udea7 ProgressViewIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-view instead.",source:"@site/versioned_docs/version-0.64/progressviewios.md",sourceDirName:".",slug:"/progressviewios",permalink:"/docs/0.64/progressviewios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/progressviewios.md",tags:[],version:"0.64",frontMatter:{id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"}},g={},C=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>progress</code>",id:"progress",level:3},{value:"<code>progressImage</code>",id:"progressimage",level:3},{value:"<code>progressTintColor</code>",id:"progresstintcolor",level:3},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",level:3},{value:"<code>trackImage</code>",id:"trackimage",level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",level:3}],y={toc:C};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-community/progress-view"}),"@react-native-community/progress-view")," instead.")),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"ProgressViewIOS"),"\u6765\u5728 iOS \u4e0a\u6e32\u67d3\u4e00\u4e2a UIProgressView\u3002"),(0,n.kt)("h3",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",d({},{className:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%5Cn%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%5C%22%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%5Cn%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%5C%22black%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20example%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20progress%3A%20%7B%5Cn%20%20%20%20width%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",d({},{id:"props"}),"Props"),(0,n.kt)("h3",d({},{id:"progress"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progress")),(0,n.kt)("p",null,"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"progressimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressImage")),(0,n.kt)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u62c9\u4f38\u7684\u56fe\u7247\uff0c\u7528\u4e8e\u663e\u793a\u8fdb\u5ea6\u6761\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"progresstintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressTintColor")),(0,n.kt)("p",null,"\u8fdb\u5ea6\u6761\u672c\u8eab\u67d3\u4e0a\u7684\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"progressviewstyle"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressViewStyle")),(0,n.kt)("p",null,"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"enum('default', 'bar')"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"trackimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"trackImage")),(0,n.kt)("p",null,"\u4e00\u4e2a\u53ef\u62c9\u4f38\u7684\u56fe\u7247\uff0c\u7528\u4e8e\u663e\u793a\u8fdb\u5ea6\u6761\u540e\u9762\u7684\u8f68\u9053\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"tracktintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"trackTintColor")),(0,n.kt)("p",null,"\u8fdb\u5ea6\u6761\u8f68\u9053\u67d3\u4e0a\u7684\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))))}b.isMDXComponent=!0}}]);