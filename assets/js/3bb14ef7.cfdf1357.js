"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64070],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11674:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(63445);const n=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:n?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(27378),n=r(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel",className:(0,n.Z)(l,r)},{hidden:t}),e)}},48375:(e,t,r)=>{r.d(t,{Z:()=>Z});var a=r(27378),n=r(38944),l=r(12112),o=r(35331),i=r(14953),u=r(27886),c=r(7106),s=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function v(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a})))}function g(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:v(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const r=(0,o.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);var a,l;t.set(n,e),r.replace((a=((e,t)=>{for(var r in t||(t={}))h.call(t,r)&&f(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&f(e,r,t[r]);return e})({},r.location),l={search:t.toString()},p(a,d(l))))}),[n,r])]}function w(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=g(e),[o,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(r=t.find((e=>e.default)))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=y({queryString:r,groupId:n}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),m=(()=>{const e=null!=u?u:p;return k({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),d(e)}),[s,d,l]),tabValues:l}}var O=r(14185);const N="tabList_J5MA",j="tabItem_l0OV";var C=Object.defineProperty,S=Object.defineProperties,T=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&I(e,r,t[r]);if(x)for(var r of x(t))E.call(t,r)&&I(e,r,t[r]);return e};function D({className:e,block:t,selectedValue:r,selectValue:o,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),s=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==r&&(c(t),o(n))},p=e=>{var t,r;let a=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;a=null!=(t=u[r])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=null!=(r=u[t])?r:u[u.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>{return a.createElement("li",(o=A({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:s},l),i={className:(0,n.Z)("tabs__item",j,null==l?void 0:l.className,{"tabs__item--active":r===e})},S(o,T(i))),null!=t?t:e);var o,i})))}function V({lazy:e,children:t,selectedValue:r}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function q(e){const t=w(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",N)},a.createElement(D,A(A({},e),t)),a.createElement(V,A(A({},e),t)))}function Z(e){const t=(0,O.Z)();return a.createElement(q,A({key:String(t)},e))}},14732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>k});var a=r(35318),n=r(48375),l=r(86386),o=r(11674),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&m(e,r,t[r]);return e};const b={id:"appearance",title:"Appearance"},f=void 0,v={unversionedId:"appearance",id:"version-0.70/appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.70/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.70/appearance",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appearance.md",tags:[],version:"0.70",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.70/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.70/appregistry"}},g={},k=[{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getColorScheme()</code>",id:"getcolorscheme",level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",level:3},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",level:3}],y={toc:k};function w(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),m),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"import { Appearance } from 'react-native';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,a.kt)("h4",h({},{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),(0,a.kt)(n.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://drafts.csswg.org/mediaqueries-5/"}),"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),(0,a.kt)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),(0,a.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"}),"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),(0,a.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"}),"Dark Mode")," preference on iOS 13 devices and higher.")))),(0,a.kt)("h2",h({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Appearance")," \u6a21\u5757\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\uff08\u591c\u95f4\u6a21\u5f0f\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // \u7528\u6237\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\n}\n")),(0,a.kt)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,a.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,a.kt)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,a.kt)("hr",null),(0,a.kt)("h1",h({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",h({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",h({},{id:"getcolorscheme"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getColorScheme()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static getColorScheme()\n")),(0,a.kt)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,a.kt)("p",null,"Supported color schemes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u53d6\u503c"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"light"')),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u9009\u62e9\u4e86\u6d45\u8272\u6a21\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"dark"')),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u9009\u62e9\u4e86\u6df1\u8272\u6a21\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u67d0\u79cd\u6a21\u5f0f\u3002")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"getColorScheme()"),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"light"),"\u3002")),(0,a.kt)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,a.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,a.kt)("inlineCode",{parentName:"a"},"useColorScheme")),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"addchangelistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addChangeListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static addChangeListener(listener)\n")),(0,a.kt)("p",null,"Add an event handler that is fired when appearance preferences change."),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"removechangelistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeChangeListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static removeChangeListener(listener)\n")),(0,a.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"))}w.isMDXComponent=!0}}]);