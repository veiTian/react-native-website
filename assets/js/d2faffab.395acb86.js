"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[67304],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,h=u["".concat(c,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&d(e,n,t[n]);return e};const u={id:"switch",title:"Switch"},k=void 0,h={unversionedId:"switch",id:"version-0.69/switch",title:"Switch",description:"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.69/switch.md",sourceDirName:".",slug:"/switch",permalink:"/docs/0.69/switch",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/switch.md",tags:[],version:"0.69",frontMatter:{id:"switch",title:"Switch"},sidebar:"\u7ec4\u4ef6",previous:{title:"StatusBar",permalink:"/docs/0.69/statusbar"},next:{title:"Text",permalink:"/docs/0.69/text"}},m={},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:'<code>ios_backgroundColor</code> <div class="label ios">iOS</div>',id:"ios_backgroundcolor-ios",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>trackColor</code>",id:"trackcolor",level:3},{value:"<code>value</code>",id:"value",level:3}],C={toc:b};function f(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},C),d),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u201c\u53d7\u63a7\u7ec4\u4ef6\u201d\uff08controlled component\uff09\u3002\u4f60\u5fc5\u987b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange"),"\u56de\u8c03\u6765\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\u4ee5\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4e0d\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\uff0c\u7ec4\u4ef6\u53ea\u4f1a\u6309\u4e00\u5f00\u59cb\u7ed9\u5b9a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u503c\u6765\u6e32\u67d3\u4e14\u4fdd\u6301\u4e0d\u53d8\uff0c\u770b\u4e0a\u53bb\u5c31\u50cf\u5b8c\u5168\u70b9\u4e0d\u52a8\u3002"),(0,a.kt)("h2",s({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("div",s({},{className:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CSwitch%5Cn%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%5C%22%23767577%5C%22%2C%20true%3A%20%5C%22%2381b0ff%5C%22%20%7D%7D%5Cn%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%5C%22%23f5dd4b%5C%22%20%3A%20%5C%22%23f4f3f4%5C%22%7D%5Cn%20%20%20%20%20%20%20%20ios_backgroundColor%3D%5C%22%233e3e3e%5C%22%5Cn%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("hr",null),(0,a.kt)("h1",s({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",s({},{id:"props"}),"Props"),(0,a.kt)("h3",s({},{id:"view-props"}),(0,a.kt)("a",s({parentName:"h3"},{href:"/docs/0.69/view#props"}),"View Props")),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/0.69/view#props"}),"View Props"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"disabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,a.kt)("p",null,"\u5982\u679c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u5219\u7981\u7528\u6b64\u7ec4\u4ef6\u7684\u4ea4\u4e92\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"ios_backgroundcolor-ios"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ios_backgroundColor")," ",(0,a.kt)("div",{class:"label ios"},"iOS")),(0,a.kt)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," or when the switch is disabled (and the switch is translucent)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/0.69/colors"}),"color"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"onchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,a.kt)("p",null,"\u5f53\u503c\u6539\u53d8\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u4e8b\u4ef6\u3002 If you want to only receive the new value, use ",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange")," instead."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"function")))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"onvaluechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,a.kt)("p",null,"\u5f53\u503c\u6539\u53d8\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u65b0\u7684\u503c\u3002 If you want to instead receive an event, use ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"function")))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"thumbcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,a.kt)("p",null,"\u5f00\u5173\u4e0a\u5706\u5f62\u6309\u94ae\u7684\u80cc\u666f\u989c\u8272\u3002\u5728 iOS \u4e0a\u8bbe\u7f6e\u6b64\u989c\u8272\u4f1a\u4e22\u5931\u6309\u94ae\u7684\u6295\u5f71\u6548\u679c\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/0.69/colors"}),"color"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"trackcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"trackColor")),(0,a.kt)("p",null,"\u5173\u95ed\u72b6\u6001\u65f6\u7684\u8fb9\u6846\u989c\u8272(iOS)\u6216\u80cc\u666f\u989c\u8272(Android)\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"iOS"),": When the switch value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/0.69/switch#ios_backgroundColor"}),(0,a.kt)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"object: { false: ",(0,a.kt)("a",s({parentName:"td"},{href:"/docs/0.69/colors"}),"color"),", true: ",(0,a.kt)("a",s({parentName:"td"},{href:"/docs/0.69/colors"}),"color")," }")))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"value"}),(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"\u8868\u793a\u6b64\u5f00\u5173\u662f\u5426\u6253\u5f00\u3002\u9ed8\u8ba4\u4e3a false\uff08\u5173\u95ed\u72b6\u6001\uff09\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"bool")))))}f.isMDXComponent=!0}}]);