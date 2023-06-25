"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13727],{35318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>C,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>g});var n=r(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&d(e,r,t[r]);return e};const m={id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"},u=void 0,k={unversionedId:"progressbarandroid",id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-bar-android instead.",source:"@site/../cndocs/progressbarandroid.md",sourceDirName:".",slug:"/progressbarandroid",permalink:"/docs/next/progressbarandroid",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/progressbarandroid.md",tags:[],version:"current",frontMatter:{id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"}},C={},g=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>indeterminate</code>",id:"indeterminate",level:3},{value:"<code>progress</code>",id:"progress",level:3},{value:"<code>styleAttr</code>",id:"styleattr",level:3},{value:"<code>testID</code>",id:"testid",level:3}],b={toc:g};function y(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),d),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/progress-bar-android"}),"@react-native-community/progress-bar-android")," instead.")),(0,n.kt)("p",null,"\u5c01\u88c5\u4e86 Android \u5e73\u53f0\u4e0a\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"ProgressBar"),"\u7684 React \u7ec4\u4ef6\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u7528\u6765\u8868\u793a\u5e94\u7528\u6b63\u5728\u52a0\u8f7d\u6216\u8005\u6709\u4e9b\u4e8b\u60c5\u6b63\u5728\u8fdb\u884c\u4e2d\u3002"),(0,n.kt)("h3",c({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",c({},{className:"snack-player","data-snack-name":"ProgressBarAndroid","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20ProgressBarAndroid%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECircle%20Progress%20Indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EHorizontal%20Progress%20Indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%5C%22Horizontal%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%5C%22Horizontal%5C%22%20color%3D%5C%22%232196F3%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EFixed%20Progress%20Value%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%5Cn%20%20%20%20%20%20%20%20%20%20styleAttr%3D%5C%22Horizontal%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20indeterminate%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20example%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,n.kt)("hr",null),(0,n.kt)("h1",c({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",c({},{id:"props"}),"Props"),(0,n.kt)("h3",c({},{id:"animating"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animating")),(0,n.kt)("p",null,"\u662f\u5426\u663e\u793a\u8fdb\u5ea6\u6761\uff08\u9ed8\u8ba4\u4e3a true \u663e\u793a\uff09\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"color"}),(0,n.kt)("inlineCode",{parentName:"h3"},"color")),(0,n.kt)("p",null,"\u8fdb\u5ea6\u6761\u7684\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/docs/next/colors"}),"color")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"indeterminate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"indeterminate")),(0,n.kt)("p",null,"\u51b3\u5b9a\u8fdb\u5ea6\u6761\u662f\u5426\u8981\u663e\u793a\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u3002\u6ce8\u610f\u8fd9\u4e2a\u5728 styleAttr \u662f Horizontal \u7684\u65f6\u5019\u5fc5\u987b\u662f false\uff0c\u5e76\u4e14\u9700\u8981\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"p"},"progress"),"\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"indeterminateType"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"progress"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progress")),(0,n.kt)("p",null,"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff08\u5728 0 \u5230 1 \u4e4b\u95f4\uff09\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"styleattr"}),(0,n.kt)("inlineCode",{parentName:"h3"},"styleAttr")),(0,n.kt)("p",null,"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002\u53ef\u53d6\u503c\u6709\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Horizontal"),(0,n.kt)("li",{parentName:"ul"},"Normal (default)"),(0,n.kt)("li",{parentName:"ul"},"Small"),(0,n.kt)("li",{parentName:"ul"},"Large"),(0,n.kt)("li",{parentName:"ul"},"Inverse"),(0,n.kt)("li",{parentName:"ul"},"SmallInverse"),(0,n.kt)("li",{parentName:"ul"},"LargeInverse")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"testid"}),(0,n.kt)("inlineCode",{parentName:"h3"},"testID")),(0,n.kt)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u8fd9\u4e2a\u89c6\u56fe\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u5426")))))}y.isMDXComponent=!0}}]);