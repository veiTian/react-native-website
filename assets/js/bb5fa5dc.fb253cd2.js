"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[15867],{35318:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(a),k=r,m=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(m,o(o({ref:e},d),{},{components:a})):n.createElement(m,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},52016:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>k,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>b});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&d(t,a,e[a]);if(i)for(var a of i(e))c.call(e,a)&&d(t,a,e[a]);return t};const s={id:"switch",title:"Switch"},k=void 0,m={unversionedId:"switch",id:"version-0.66/switch",title:"Switch",description:"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.66/switch.md",sourceDirName:".",slug:"/switch",permalink:"/docs/0.66/switch",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/switch.md",tags:[],version:"0.66",frontMatter:{id:"switch",title:"Switch"},sidebar:"\u7ec4\u4ef6",previous:{title:"StatusBar",permalink:"/docs/0.66/statusbar"},next:{title:"Text",permalink:"/docs/0.66/text"}},h={},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>trackColor</code>",id:"trackcolor",level:3},{value:"<code>ios_backgroundColor</code>",id:"ios_backgroundcolor",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>testID</code>",id:"testid",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>tintColor</code>",id:"tintcolor",level:3},{value:"<code>value</code>",id:"value",level:3}],C={toc:b};function N(t){var e,a=t,{components:r}=a,d=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=u(u({},C),d),l(e,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u201c\u53d7\u63a7\u7ec4\u4ef6\u201d\uff08controlled component\uff09\u3002\u4f60\u5fc5\u987b\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"onValueChange"),"\u56de\u8c03\u6765\u66f4\u65b0",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\u4ee5\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4e0d\u66f4\u65b0",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\uff0c\u7ec4\u4ef6\u53ea\u4f1a\u6309\u4e00\u5f00\u59cb\u7ed9\u5b9a\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"\u503c\u6765\u6e32\u67d3\u4e14\u4fdd\u6301\u4e0d\u53d8\uff0c\u770b\u4e0a\u53bb\u5c31\u50cf\u5b8c\u5168\u70b9\u4e0d\u52a8\u3002"),(0,n.kt)("h2",u({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",u({},{className:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CSwitch%5Cn%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%5C%22%23767577%5C%22%2C%20true%3A%20%5C%22%2381b0ff%5C%22%20%7D%7D%5Cn%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%5C%22%23f5dd4b%5C%22%20%3A%20%5C%22%23f4f3f4%5C%22%7D%5Cn%20%20%20%20%20%20%20%20ios_backgroundColor%3D%5C%22%233e3e3e%5C%22%5Cn%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,n.kt)("hr",null),(0,n.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",u({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",u({parentName:"p"},{href:"view#props"}),"View Props"),"."),(0,n.kt)("h3",u({},{id:"disabled"}),(0,n.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,n.kt)("p",null,"\u5982\u679c\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"\u5219\u7981\u7528\u6b64\u7ec4\u4ef6\u7684\u4ea4\u4e92\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"trackcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"trackColor")),(0,n.kt)("p",null,"\u5f00\u542f\u72b6\u6001\u65f6\u7684\u80cc\u666f\u989c\u8272\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"iOS"),": when the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.66/switch#ios_backgroundColor"}),(0,n.kt)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"object: {false: ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/0.66/colors"}),"color"),", true: ",(0,n.kt)("a",u({parentName:"td"},{href:"/docs/0.66/colors"}),"color"),"}"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"ios_backgroundcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"ios_backgroundColor")),(0,n.kt)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/0.66/colors"}),"color")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"onvaluechange"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,n.kt)("p",null,"\u5f53\u503c\u6539\u53d8\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u65b0\u7684\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"testid"}),(0,n.kt)("inlineCode",{parentName:"h3"},"testID")),(0,n.kt)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"thumbcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,n.kt)("p",null,"\u5f00\u5173\u4e0a\u5706\u5f62\u6309\u94ae\u7684\u80cc\u666f\u989c\u8272\u3002\u5728 iOS \u4e0a\u8bbe\u7f6e\u6b64\u989c\u8272\u4f1a\u4e22\u5931\u6309\u94ae\u7684\u6295\u5f71\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/0.66/colors"}),"color")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"tintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tintColor")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"tintColor")," is deprecated, use ",(0,n.kt)("inlineCode",{parentName:"p"},"trackColor")," instead."),(0,n.kt)("p",null,"\u5173\u95ed\u72b6\u6001\u65f6\u7684\u8fb9\u6846\u989c\u8272(iOS)\u6216\u80cc\u666f\u989c\u8272(Android)\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/0.66/colors"}),"color")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"value"}),(0,n.kt)("inlineCode",{parentName:"h3"},"value")),(0,n.kt)("p",null,"\u8868\u793a\u6b64\u5f00\u5173\u662f\u5426\u6253\u5f00\u3002\u9ed8\u8ba4\u4e3a false\uff08\u5173\u95ed\u72b6\u6001\uff09\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))))}N.isMDXComponent=!0}}]);