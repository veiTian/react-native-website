"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[85719],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>C,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&s(e,n,t[n]);return e};const d={id:"handling-text-input",title:"\u5904\u7406\u6587\u672c\u8f93\u5165"},f=void 0,m={unversionedId:"handling-text-input",id:"version-0.67/handling-text-input",title:"\u5904\u7406\u6587\u672c\u8f93\u5165",description:"TextInput\u662f\u4e00\u4e2a\u5141\u8bb8\u7528\u6237\u8f93\u5165\u6587\u672c\u7684\u57fa\u7840\u7ec4\u4ef6\u3002\u5b83\u6709\u4e00\u4e2a\u540d\u4e3aonChangeText\u7684\u5c5e\u6027\uff0c\u6b64\u5c5e\u6027\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u800c\u6b64\u51fd\u6570\u4f1a\u5728\u6587\u672c\u53d8\u5316\u65f6\u88ab\u8c03\u7528\u3002\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3aonSubmitEditing\u7684\u5c5e\u6027\uff0c\u4f1a\u5728\u6587\u672c\u88ab\u63d0\u4ea4\u540e\uff08\u7528\u6237\u6309\u4e0b\u8f6f\u952e\u76d8\u4e0a\u7684\u63d0\u4ea4\u952e\uff09\u8c03\u7528\u3002",source:"@site/versioned_docs/version-0.67/handling-text-input.md",sourceDirName:".",slug:"/handling-text-input",permalink:"/docs/0.67/handling-text-input",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/handling-text-input.md",tags:[],version:"0.67",frontMatter:{id:"handling-text-input",title:"\u5904\u7406\u6587\u672c\u8f93\u5165"},sidebar:"docs",previous:{title:"React \u57fa\u7840",permalink:"/docs/0.67/intro-react"},next:{title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe",permalink:"/docs/0.67/using-a-scrollview"}},b={},y=[],g={toc:y};function C(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"textinput#content"}),(0,r.kt)("inlineCode",{parentName:"a"},"TextInput")),"\u662f\u4e00\u4e2a\u5141\u8bb8\u7528\u6237\u8f93\u5165\u6587\u672c\u7684",(0,r.kt)("a",u({parentName:"p"},{href:"intro-react-native-components"}),"\u57fa\u7840\u7ec4\u4ef6"),"\u3002\u5b83\u6709\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"onChangeText"),"\u7684\u5c5e\u6027\uff0c\u6b64\u5c5e\u6027\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u800c\u6b64\u51fd\u6570\u4f1a\u5728\u6587\u672c\u53d8\u5316\u65f6\u88ab\u8c03\u7528\u3002\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"onSubmitEditing"),"\u7684\u5c5e\u6027\uff0c\u4f1a\u5728\u6587\u672c\u88ab\u63d0\u4ea4\u540e\uff08\u7528\u6237\u6309\u4e0b\u8f6f\u952e\u76d8\u4e0a\u7684\u63d0\u4ea4\u952e\uff09\u8c03\u7528\u3002"),(0,r.kt)("p",null,'\u5047\u5982\u6211\u4eec\u8981\u5b9e\u73b0\u5f53\u7528\u6237\u8f93\u5165\u65f6\uff0c\u5b9e\u65f6\u5c06\u5176\u4ee5\u5355\u8bcd\u4e3a\u5355\u4f4d\u7ffb\u8bd1\u4e3a\u53e6\u4e00\u79cd\u6587\u5b57\u3002\u6211\u4eec\u5047\u8bbe\u8fd9\u53e6\u4e00\u79cd\u6587\u5b57\u6765\u81ea\u67d0\u4e2a\u5403\u8d27\u661f\u7403\uff0c\u53ea\u6709\u4e00\u4e2a\u5355\u8bcd\uff1a \ud83c\udf55\u3002\u6240\u4ee5"Hello there Bob"\u5c06\u4f1a\u88ab\u7ffb\u8bd1\u4e3a"\ud83c\udf55\ud83c\udf55\ud83c\udf55"\u3002'),(0,r.kt)("div",u({},{className:"snack-player","data-snack-name":"Handling Text Input","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20TextInput%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20PizzaTranslator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState('')%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bpadding%3A%2010%7D%7D%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2040%7D%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22Type%20here%20to%20translate!%5C%22%5Cn%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setText(text)%7D%5Cn%20%20%20%20%20%20%20%20defaultValue%3D%7Btext%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%7Bpadding%3A%2010%2C%20fontSize%3A%2042%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%7Btext.split('%20').map((word)%20%3D%3E%20word%20%26%26%20'%F0%9F%8D%95').join('%20')%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20PizzaTranslator%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"\u4fdd\u5b58\u5230 state \u4e2d\uff0c\u56e0\u4e3a\u5b83\u4f1a\u968f\u7740\u65f6\u95f4\u53d8\u5316\u3002"),(0,r.kt)("p",null,"\u6587\u672c\u8f93\u5165\u65b9\u9762\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7684\u4e1c\u897f\u8981\u5904\u7406\u3002\u6bd4\u5982\u4f60\u53ef\u80fd\u60f3\u8981\u5728\u7528\u6237\u8f93\u5165\u7684\u65f6\u5019\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5728",(0,r.kt)("a",u({parentName:"p"},{href:"https://doc.react-china.org/docs/forms.html#%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6"}),"React \u4e2d\u7684\u53d7\u9650\u7ec4\u4ef6"),"\u4e00\u8282\u4e2d\u6709\u4e00\u4e9b\u8be6\u7ec6\u7684\u793a\u4f8b\uff08\u6ce8\u610f react \u4e2d\u7684 onChange \u5bf9\u5e94\u7684\u662f rn \u4e2d\u7684 onChangeText\uff09\u3002\u6b64\u5916\u4f60\u8fd8\u9700\u8981\u770b\u770b",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.67/textinput"}),"TextInput \u7684\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"TextInput \u53ef\u80fd\u662f\u5929\u7136\u5177\u6709\u201c\u52a8\u6001\u72b6\u6001\u201d\u7684\u6700\u7b80\u5355\u7684\u7ec4\u4ef6\u4e86\u3002\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b\u53e6\u4e00\u7c7b\u8f93\u5165\u7ec4\u4ef6\uff0c\u5148\u4ece",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.67/handling-touches"}),"\u5982\u4f55\u5904\u7406\u89e6\u6478\u5f00\u59cb\u5b66\u4e60"),"\u3002"))}C.isMDXComponent=!0}}]);