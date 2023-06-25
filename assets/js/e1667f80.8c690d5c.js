"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[38723],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},C={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,h=p["".concat(d,".").concat(u)]||p[u]||C[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>h,toc:()=>f});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e};const p={id:"toastandroid",title:"ToastAndroid"},u=void 0,h={unversionedId:"toastandroid",id:"version-0.65/toastandroid",title:"ToastAndroid",description:"\u672c\u6a21\u5757\u5c06\u539f\u751f\u7684 ToastAndroid \u6a21\u5757\u5bfc\u51fa\u4e3a\u4e00\u4e2a JS \u6a21\u5757\uff0c\u7528\u4e8e\u5728 Android \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u60ac\u6d6e\u7684\u63d0\u793a\u4fe1\u606f\u3002\u672c\u6a21\u5757\u5305\u542b\u4e00\u4e2ashow\u65b9\u6cd5\u63a5\u53d7\u4ee5\u4e0b\u7684\u53c2\u6570\uff1a",source:"@site/versioned_docs/version-0.65/toastandroid.md",sourceDirName:".",slug:"/toastandroid",permalink:"/docs/0.65/toastandroid",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/toastandroid.md",tags:[],version:"0.65",frontMatter:{id:"toastandroid",title:"ToastAndroid"},sidebar:"version-0.65/api",previous:{title:"PermissionsAndroid",permalink:"/docs/0.65/permissionsandroid"},next:{title:"ActionSheetIOS",permalink:"/docs/0.65/actionsheetios"}},m={},f=[{value:"Imperative hack",id:"imperative-hack",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>show()</code>",id:"show",level:3},{value:"<code>showWithGravity()</code>",id:"showwithgravity",level:3},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>SHORT</code>",id:"short",level:3},{value:"<code>LONG</code>",id:"long",level:3},{value:"<code>TOP</code>",id:"top",level:3},{value:"<code>BOTTOM</code>",id:"bottom",level:3},{value:"<code>CENTER</code>",id:"center",level:3}],v={toc:f};function k(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=C(C({},v),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u6a21\u5757\u5c06\u539f\u751f\u7684 ToastAndroid \u6a21\u5757\u5bfc\u51fa\u4e3a\u4e00\u4e2a JS \u6a21\u5757\uff0c\u7528\u4e8e\u5728 Android \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u60ac\u6d6e\u7684\u63d0\u793a\u4fe1\u606f\u3002\u672c\u6a21\u5757\u5305\u542b\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"show"),"\u65b9\u6cd5\u63a5\u53d7\u4ee5\u4e0b\u7684\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"message")," \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5c06\u8981\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"duration")," \u63d0\u793a\u4fe1\u606f\u6301\u7eed\u663e\u793a\u7684\u65f6\u95f4\u3002\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"ToastAndroid.SHORT"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"li"},"ToastAndroid.LONG"),"\u3002")),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"showWithGravity"),"\u7684\u65b9\u6cd5\u53ef\u4ee5\u6307\u5b9a\u5f39\u51fa\u7684\u4f4d\u7f6e\u3002\u53ef\u9009\u9879\u6709\uff1aToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER."),(0,a.kt)("p",null,"The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify an offset with in pixels."),(0,a.kt)("div",C({},{className:"snack-player","data-snack-name":"Toast Android API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20showToast%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.show(%5C%22A%20pikachu%20appeared%20nearby%20!%5C%22%2C%20ToastAndroid.SHORT)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20showToastWithGravity%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravity(%5Cn%20%20%20%20%20%20%5C%22All%20Your%20Base%20Are%20Belong%20To%20Us%5C%22%2C%5Cn%20%20%20%20%20%20ToastAndroid.SHORT%2C%5Cn%20%20%20%20%20%20ToastAndroid.CENTER%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20showToastWithGravityAndOffset%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravityAndOffset(%5Cn%20%20%20%20%20%20%5C%22A%20wild%20toast%20appeared!%5C%22%2C%5Cn%20%20%20%20%20%20ToastAndroid.LONG%2C%5Cn%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%5Cn%20%20%20%20%20%2025%2C%5Cn%20%20%20%20%20%2050%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Toast%5C%22%20onPress%3D%7B()%20%3D%3E%20showToast()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Toggle%20Toast%20With%20Gravity%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravity()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Toggle%20Toast%20With%20Gravity%20%26%20Offset%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravityAndOffset()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23888888%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("h3",C({},{id:"imperative-hack"}),"Imperative hack"),(0,a.kt)("p",null,"The ToastAndroid API is imperative, but there is a way to expose a declarative component from it as in this example:"),(0,a.kt)("div",C({},{className:"snack-player","data-snack-name":"Advanced Toast Android API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Toast%20%3D%20(%7B%20visible%2C%20message%20%7D)%20%3D%3E%20%7B%5Cn%20%20if%20(visible)%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravityAndOffset(%5Cn%20%20%20%20%20%20message%2C%5Cn%20%20%20%20%20%20ToastAndroid.LONG%2C%5Cn%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%5Cn%20%20%20%20%20%2025%2C%5Cn%20%20%20%20%20%2050%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20return%20null%3B%5Cn%20%20%7D%5Cn%20%20return%20null%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BvisibleToast%2C%20setvisibleToast%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20setvisibleToast(false)%2C%20%5BvisibleToast%5D)%3B%5Cn%5Cn%20%20const%20handleButtonPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20setvisibleToast(true)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CToast%20visible%3D%7BvisibleToast%7D%20message%3D%5C%22Example%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Toast%5C%22%20onPress%3D%7B()%20%3D%3E%20handleButtonPress()%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23888888%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("hr",null),(0,a.kt)("h1",C({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",C({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",C({},{id:"show"}),(0,a.kt)("inlineCode",{parentName:"h3"},"show()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"static show(message, duration)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"showwithgravity"}),(0,a.kt)("inlineCode",{parentName:"h3"},"showWithGravity()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"static showWithGravity(message, duration, gravity)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"showwithgravityandoffset"}),(0,a.kt)("inlineCode",{parentName:"h3"},"showWithGravityAndOffset()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n")),(0,a.kt)("h2",C({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,a.kt)("h3",C({},{id:"short"}),(0,a.kt)("inlineCode",{parentName:"h3"},"SHORT")),(0,a.kt)("p",null,"Indicates the duration on the screen."),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.SHORT;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"long"}),(0,a.kt)("inlineCode",{parentName:"h3"},"LONG")),(0,a.kt)("p",null,"Indicates the duration on the screen."),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.LONG;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"top"}),(0,a.kt)("inlineCode",{parentName:"h3"},"TOP")),(0,a.kt)("p",null,"Indicates the position on the screen."),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.TOP;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"bottom"}),(0,a.kt)("inlineCode",{parentName:"h3"},"BOTTOM")),(0,a.kt)("p",null,"Indicates the position on the screen."),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.BOTTOM;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"center"}),(0,a.kt)("inlineCode",{parentName:"h3"},"CENTER")),(0,a.kt)("p",null,"Indicates the position on the screen."),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.CENTER;\n")))}k.isMDXComponent=!0}}]);