"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41325],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(27378),r=a(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(27378),r=a(38944),l=a(12112),i=a(35331),o=a(14953),s=a(27886),u=a(7106),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function h(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}function y(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:h(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function C({queryString:e=!1,groupId:t}){const a=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);var n,l;t.set(r,e),a.replace((n=((e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&v(e,a,t[a]);return e})({},a.location),l={search:t.toString()},d(n,p(l))))}),[r,a])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=y(e),[i,o]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=C({queryString:a,groupId:r}),[d,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=s?s:d;return k({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),p(e)}),[c,p,l]),tabValues:l}}var w=a(14185);const O="tabList_J5MA",D="tabItem_l0OV";var N=Object.defineProperty,S=Object.defineProperties,E=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&P(e,a,t[a]);if(B)for(var a of B(t))j.call(t,a)&&P(e,a,t[a]);return e};function T({className:e,block:t,selectedValue:a,selectValue:i,tabValues:o}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=o[n].value;r!==a&&(u(t),i(r))},d=e=>{var t,a;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>{return n.createElement("li",(i=A({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:c},l),o={className:(0,r.Z)("tabs__item",D,null==l?void 0:l.className,{"tabs__item--active":a===e})},S(i,E(o))),null!=t?t:e);var i,o})))}function V({lazy:e,children:t,selectedValue:a}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function q(e){const t=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",O)},n.createElement(T,A(A({},e),t)),n.createElement(V,A(A({},e),t)))}function I(e){const t=(0,w.Z)();return n.createElement(q,A({key:String(t)},e))}},64084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>h,toc:()=>k});var n=a(35318),r=a(48375),l=a(86386),i=a(11674),o=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&m(e,a,t[a]);return e};const f={id:"share",title:"Share"},v=void 0,h={unversionedId:"share",id:"version-0.63/share",title:"Share",description:"\u793a\u4f8b",source:"@site/versioned_docs/version-0.63/share.md",sourceDirName:".",slug:"/share",permalink:"/docs/0.63/share",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/share.md",tags:[],version:"0.63",frontMatter:{id:"share",title:"Share"},sidebar:"version-0.63/api",previous:{title:"PlatformColor",permalink:"/docs/0.63/platformcolor"},next:{title:"StyleSheet",permalink:"/docs/0.63/stylesheet"}},y={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>share()</code>",id:"share",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>sharedAction</code>",id:"sharedaction",level:3},{value:'<code>dismissedAction</code> <div class="label ios">iOS</div>',id:"dismissedaction-ios",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(87.50%), sunnylqm(12.50%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm8750-sunnylqm1250",level:5}],C={toc:k};function g(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},C),m),s(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",b({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20dismissed%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20alert(error.message)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%5C%22Share%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20ShareExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20ShareExample%20extends%20Component%20%7B%5Cn%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20dismissed%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20alert(error.message)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%5C%22Share%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnexport%20default%20ShareExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",b({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",b({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",b({},{id:"share"}),(0,n.kt)("inlineCode",{parentName:"h3"},"share()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static share(content, options)\n")),(0,n.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u5bf9\u8bdd\u6846\u6765\u5206\u4eab\u6587\u672c\u5185\u5bb9\u3002"),(0,n.kt)("p",null,"\u5728 iOS \u4e2d\uff0c\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u6700\u7ec8\u4f1a\u89e3\u6790\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"action"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"activityType"),"\u4e24\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u5bf9\u8bdd\u6846\uff0c\u5219 Promise \u4ecd\u5c06\u88ab\u89e3\u6790\uff0c\u6700\u7ec8\u8fd4\u56de\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"action"),"\u5c5e\u6027\u4f1a\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"Share.dismissedAction"),"\uff0c\u800c\u5176\u4ed6\u5c5e\u6027\u4e3a undefined\u3002Note that some share options will not appear or work on the iOS simulator."),(0,n.kt)("p",null,"\u5728 Android \u4e2d\u540c\u6837\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u4f46\u8fd4\u56de\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"action"),"\u59cb\u7ec8\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Share.sharedAction"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"content ",(0,n.kt)("div",{className:"label basic required"},"\u5fc5\u9700")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"message")," - \u8981\u5206\u4eab\u7684\u6d88\u606f",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"url")," - \u8981\u5206\u4eab\u7684\u7f51\u5740 ",(0,n.kt)("div",{class:"label ios"},"iOS"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"title")," - \u6d88\u606f\u7684\u6807\u9898 ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("hr",null),(0,n.kt)("inlineCode",{parentName:"td"},"url"),"\u6216",(0,n.kt)("inlineCode",{parentName:"td"},"message"),"\u81f3\u5c11\u8981\u63d0\u4f9b\u4e00\u4e2a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"dialogTitle")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"excludedActivityTypes")," ",(0,n.kt)("div",{class:"label ios"},"iOS"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"subject")," - \u901a\u8fc7\u90ae\u4ef6\u5206\u4eab\u7684\u6807\u9898 ",(0,n.kt)("div",{class:"label ios"},"iOS"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"tintColor")," ",(0,n.kt)("div",{class:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",b({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("h3",b({},{id:"sharedaction"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sharedAction")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static sharedAction\n")),(0,n.kt)("p",null,"\u8868\u793a\u5185\u5bb9\u5df2\u6210\u529f\u5206\u4eab\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"dismissedaction-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"dismissedAction")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction\n")),(0,n.kt)("p",null,"\u8868\u793a\u5bf9\u8bdd\u6846\u88ab\u53d6\u6d88\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h5",b({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm8750-sunnylqm1250"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",b({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(87.50%), ",(0,n.kt)("a",b({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(12.50%)"))}g.isMDXComponent=!0}}]);