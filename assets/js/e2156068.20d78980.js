"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[97464],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11674:function(e,t,r){var n=r(63445);const o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=o?"ios":"android",i=o?"macos":a?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,r){var n=r(27378),o=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;t.Z=function({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},65941:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(27378),o=r(14185),a=r(40488);var l=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(18870),c=r(38944),s="tabItem_c0e5",u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&v(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&v(e,r,t[r]);return e};function h(e){var t,r,o;const{lazy:a,block:u,defaultValue:m,values:f,groupId:b,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),g=(0,i.lx)(O,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(o=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(r=h[0])?void 0:r.props.value;if(null!==w&&!O.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:j}=l(),[C,D]=(0,n.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=b){const e=k[b];null!=e&&e!==C&&O.some((t=>t.value===e))&&D(e)}const N=e=>{const t=e.currentTarget,r=S.indexOf(t),n=O[r].value;n!==C&&(T(t),D(n),null!=b&&j(b,n))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;t=S[r]||S[0];break}case"ArrowLeft":{const r=S.indexOf(e.currentTarget)-1;t=S[r]||S[S.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},v)},O.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(o=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>S.push(e),onKeyDown:x,onFocus:N,onClick:N},r),a={className:(0,c.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===e})},p(o,d(a))),null!=t?t:e);var o,a}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function O(e){const t=(0,o.Z)();return n.createElement(h,y({key:String(t)},e))}},53223:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return b},contentTitle:function(){return v},metadata:function(){return y},toc:function(){return h},default:function(){return g}});var n=r(35318),o=r(65941),a=r(37785),l=r(11674),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&m(e,r,t[r]);return e};const b={id:"dynamiccolorios",title:"DynamicColorIOS"},v=void 0,y={unversionedId:"dynamiccolorios",id:"version-0.64/dynamiccolorios",title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/versioned_docs/version-0.64/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/0.64/dynamiccolorios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dynamiccolorios.md",tags:[],version:"0.64",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"version-0.64/api",previous:{title:"ActionSheetIOS",permalink:"/docs/0.64/actionsheetios"},next:{title:"Settings",permalink:"/docs/0.64/settings"}},h=[{value:"Developer notes",id:"developer-notes",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2}],O={toc:h};function g(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},O),m),c(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"DynamicColorIOS({ light: color, dark: color });\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",(0,n.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),(0,n.kt)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),(0,n.kt)("h4",f({},{id:"developer-notes"}),"Developer notes"),(0,n.kt)(o.Z,{groupId:"guide",defaultValue:"web",values:l.Z.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},(0,n.kt)(a.Z,{value:"web",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",(0,n.kt)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),(0,n.kt)(a.Z,{value:"ios",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",(0,n.kt)("a",f({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"}),(0,n.kt)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),(0,n.kt)("h2",f({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n")))}g.isMDXComponent=!0}}]);