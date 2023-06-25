"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75021],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(27378),r=a(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&u(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>z});var n=a(27378),r=a(38944),l=a(12112),i=a(35331),o=a(14953),s=a(27886),c=a(7106),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function C(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}function y(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:C(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const a=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);var n,l;t.set(r,e),a.replace((n=((e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&v(e,a,t[a]);return e})({},a.location),l={search:t.toString()},d(n,p(l))))}),[r,a])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=y(e),[i,o]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:r}),[d,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=s?s:d;return k({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var w=a(14185);const O="tabList_J5MA",N="tabItem_l0OV";var D=Object.defineProperty,E=Object.defineProperties,A=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,S=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&I(e,a,t[a]);if(x)for(var a of x(t))P.call(t,a)&&I(e,a,t[a]);return e};function B({className:e,block:t,selectedValue:a,selectValue:i,tabValues:o}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},d=e=>{var t,a;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>{return n.createElement("li",(i=S({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},l),o={className:(0,r.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":a===e})},E(i,A(o))),null!=t?t:e);var i,o})))}function T({lazy:e,children:t,selectedValue:a}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function V(e){const t=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",O)},n.createElement(B,S(S({},e),t)),n.createElement(T,S(S({},e),t)))}function z(e){const t=(0,w.Z)();return n.createElement(V,S({key:String(t)},e))}},59965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>C,toc:()=>k});var n=a(35318),r=a(48375),l=a(86386),i=a(11674),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&m(e,a,t[a]);return e};const f={id:"activityindicator",title:"ActivityIndicator"},v=void 0,C={unversionedId:"activityindicator",id:"version-0.69/activityindicator",title:"ActivityIndicator",description:"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002",source:"@site/versioned_docs/version-0.69/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/0.69/activityindicator",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/activityindicator.md",tags:[],version:"0.69",frontMatter:{id:"activityindicator",title:"ActivityIndicator"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI",permalink:"/docs/0.69/components-and-apis"},next:{title:"Button",permalink:"/docs/0.69/button"}},y={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",level:3},{value:"<code>size</code>",id:"size",level:3}],h={toc:k};function g(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},h),m),s(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002"),(0,n.kt)("h2",b({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"ActivityIndicator Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"ActivityIndicator Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,n.kt)("h1",b({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",b({},{id:"props"}),"Props"),(0,n.kt)("h3",b({},{id:"view-props"}),(0,n.kt)("a",b({parentName:"h3"},{href:"/docs/0.69/view#props"}),"View Props")),(0,n.kt)("p",null,"\u7ee7\u627f\u4e86\u6240\u6709\u7684",(0,n.kt)("a",b({parentName:"p"},{href:"/docs/0.69/view#props"}),"View Props"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"animating"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animating")),(0,n.kt)("p",null,"\u662f\u5426\u8981\u663e\u793a\u6307\u793a\u5668\u52a8\u753b\uff0c\u9ed8\u8ba4\u4e3a true \u8868\u793a\u663e\u793a\uff0cfalse \u5219\u9690\u85cf\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"color"}),(0,n.kt)("inlineCode",{parentName:"h3"},"color")),(0,n.kt)("p",null,"\u6eda\u8f6e\u7684\u524d\u666f\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("a",b({parentName:"td"},{href:"colors"}),"color")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"null")," (\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5f3a\u8c03\u8272)",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("hr",null),(0,n.kt)("ins",{style:{background:"#999"},className:"color-box"}),(0,n.kt)("inlineCode",{parentName:"td"},"'#999999'")," ",(0,n.kt)("div",{className:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"hideswhenstopped-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"animating"),"\u4e3a false \u7684\u65f6\u5019\uff0c\u662f\u5426\u8981\u9690\u85cf\u6307\u793a\u5668\uff08\u9ed8\u8ba4\u4e3a true\uff09\u3002\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"p"},"animating"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"hidesWhenStopped"),"\u90fd\u4e3a false\uff0c\u5219\u663e\u793a\u4e00\u4e2a\u9759\u6b62\u7684\u6307\u793a\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a'small'\u3002\u76ee\u524d\u53ea\u80fd\u5728 Android \u4e0a\u8bbe\u5b9a\u5177\u4f53\u7684\u6570\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"enum(",(0,n.kt)("inlineCode",{parentName:"td"},"'small'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'large'"),")",(0,n.kt)("hr",null),"number ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'small'"))))))}g.isMDXComponent=!0}}]);