"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[97012],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&l(e,n,t[n]);return e};const d={id:"inputaccessoryview",title:"InputAccessoryView"},m=void 0,y={unversionedId:"inputaccessoryview",id:"version-0.66/inputaccessoryview",title:"InputAccessoryView",description:"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.",source:"@site/versioned_docs/version-0.66/inputaccessoryview.md",sourceDirName:".",slug:"/inputaccessoryview",permalink:"/docs/0.66/inputaccessoryview",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/inputaccessoryview.md",tags:[],version:"0.66",frontMatter:{id:"inputaccessoryview",title:"InputAccessoryView"},sidebar:"\u7ec4\u4ef6",previous:{title:"TouchableNativeFeedback",permalink:"/docs/0.66/touchablenativefeedback"},next:{title:"SafeAreaView",permalink:"/docs/0.66/safeareaview"}},k={},b=[{value:"Props",id:"props",level:2},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>nativeID</code>",id:"nativeid",level:3},{value:"<code>style</code>",id:"style",level:3}],h={toc:b};function v(e){var t,n=e,{components:r}=n,l=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},h),l),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," has focus. This component can be used to create custom toolbars."),(0,a.kt)("p",null,"To use this component wrap your custom toolbar with the InputAccessoryView component, and set a ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeID"),". Then, pass that ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeID")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputAccessoryViewID")," of whatever ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," you desire. A simple example:"),(0,a.kt)("div",u({},{className:"snack-player","data-snack-name":"InputAccessoryView","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Button%2C%20InputAccessoryView%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20inputAccessoryViewID%20%3D%20'uniqueID'%3B%5Cn%20%20const%20initialText%20%3D%20''%3B%5Cn%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState(initialText)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%3CScrollView%20keyboardDismissMode%3D%5C%22interactive%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20inputAccessoryViewID%3D%7BinputAccessoryViewID%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BsetText%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7Btext%7D%5Cn%20%20%20%20%20%20%20%20%20%20placeholder%3D%7B'Please%20type%20here%E2%80%A6'%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%20%20%3CInputAccessoryView%20nativeID%3D%7BinputAccessoryViewID%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setText(initialText)%7D%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Clear%20text%5C%22%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FInputAccessoryView%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("p",null,"This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," component, and don't set a ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeID"),". For an example, look at ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js"}),"InputAccessoryViewExample.js"),"."),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",u({},{id:"props"}),"Props"),(0,a.kt)("h3",u({},{id:"backgroundcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/docs/0.66/colors"}),"color"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"nativeid"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nativeID")),(0,a.kt)("p",null,"An ID which is used to associate this ",(0,a.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," to specified TextInput(s)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"style"}),(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/docs/0.66/view-style-props"}),"style"))))),(0,a.kt)("h1",u({},{id:"\u5df2\u77e5\u95ee\u9898"}),"\u5df2\u77e5\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/18997"}),"react-native#18997"),": \u4e0d\u652f\u6301\u591a\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"TextInput")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/20157"}),"react-native#20157"),": \u4e0d\u80fd\u548c\u5e95\u90e8 tab \u680f\u4e00\u8d77\u4f7f\u7528")))}v.isMDXComponent=!0}}]);