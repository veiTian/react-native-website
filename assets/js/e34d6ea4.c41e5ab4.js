"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[56225],{35318:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(a),m=r,C=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(C,o(o({ref:e},d),{},{components:a})):n.createElement(C,o({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11674:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(t=["android","ios","web","windows"])=>[t.includes("android")?{label:"Android",value:"android"}:void 0,t.includes("ios")?{label:"iOS",value:"ios"}:void 0,t.includes("web")?{label:"Web",value:"web"}:void 0,t.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(27378),r=a(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;function p({children:t,hidden:e,className:a}){return n.createElement("div",((t,e)=>{for(var a in e||(e={}))s.call(e,a)&&d(t,a,e[a]);if(i)for(var a of i(e))u.call(e,a)&&d(t,a,e[a]);return t})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:e}),t)}},48375:(t,e,a)=>{a.d(e,{Z:()=>M});var n=a(27378),r=a(38944),l=a(12112),o=a(35331),i=a(14953),s=a(27886),u=a(7106),d=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;function g(t){return function(t){return n.Children.map(t,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((({props:{value:t,label:e,attributes:a,default:n}})=>({value:t,label:e,attributes:a,default:n})))}function f(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=null!=e?e:g(a);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function y({value:t,tabValues:e}){return e.some((e=>e.value===t))}function N({queryString:t=!1,groupId:e}){const a=(0,o.k6)(),r=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e});return[(0,i._X)(r),(0,n.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(a.location.search);var n,l;e.set(r,t),a.replace((n=((t,e)=>{for(var a in e||(e={}))C.call(e,a)&&b(t,a,e[a]);if(m)for(var a of m(e))k.call(e,a)&&b(t,a,e[a]);return t})({},a.location),l={search:e.toString()},p(n,c(l))))}),[r,a])]}function v(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=f(t),[o,i]=(0,n.useState)((()=>function({defaultValue:t,tabValues:e}){var a;if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=null!=(a=e.find((t=>t.default)))?a:e[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[s,d]=N({queryString:a,groupId:r}),[p,c]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[a,r]=(0,u.Nk)(e);return[a,(0,n.useCallback)((t=>{e&&r.set(t)}),[e,r])]}({groupId:r}),m=(()=>{const t=null!=s?s:p;return y({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!y({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),d(t),c(t)}),[d,c,l]),tabValues:l}}var h=a(14185);const A="tabList_J5MA",D="tabItem_l0OV";var O=Object.defineProperty,w=Object.defineProperties,B=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(t,e,a)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,T=(t,e)=>{for(var a in e||(e={}))E.call(e,a)&&S(t,a,e[a]);if(x)for(var a of x(e))P.call(e,a)&&S(t,a,e[a]);return t};function j({className:t,block:e,selectedValue:a,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=t=>{const e=t.currentTarget,n=s.indexOf(e),r=i[n].value;r!==a&&(u(e),o(r))},p=t=>{var e,a;let n=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=s.indexOf(t.currentTarget)+1;n=null!=(e=s[a])?e:s[0];break}case"ArrowLeft":{const e=s.indexOf(t.currentTarget)-1;n=null!=(a=s[e])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":e},t)},i.map((({value:t,label:e,attributes:l})=>{return n.createElement("li",(o=T({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:t=>s.push(t),onKeyDown:p,onClick:d},l),i={className:(0,r.Z)("tabs__item",D,null==l?void 0:l.className,{"tabs__item--active":a===t})},w(o,B(i))),null!=e?e:t);var o,i})))}function V({lazy:t,children:e,selectedValue:a}){if(e=Array.isArray(e)?e:[e],t){const t=e.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},e.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function I(t){const e=v(t);return n.createElement("div",{className:(0,r.Z)("tabs-container",A)},n.createElement(j,T(T({},t),e)),n.createElement(V,T(T({},t),e)))}function M(t){const e=(0,h.Z)();return n.createElement(I,T({key:String(e)},t))}},7536:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>b,default:()=>v,frontMatter:()=>k,metadata:()=>g,toc:()=>y});var n=a(35318),r=a(48375),l=a(86386),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,C=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(t,a,e[a]);if(d)for(var a of d(e))c.call(e,a)&&m(t,a,e[a]);return t};const k={id:"alert",title:"Alert"},b=void 0,g={unversionedId:"alert",id:"version-0.69/alert",title:"Alert",description:"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-0.69/alert.md",sourceDirName:".",slug:"/alert",permalink:"/docs/0.69/alert",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alert.md",tags:[],version:"0.69",frontMatter:{id:"alert",title:"Alert"},sidebar:"api",previous:{title:"AccessibilityInfo",permalink:"/docs/0.69/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/0.69/animated"}},f={},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:'\u793a\u4f8b <div class="label android">Android</div>',id:"\u793a\u4f8b-android",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>alert()</code>",id:"alert",level:3},{value:'<code>prompt()</code> <div class="label ios">iOS</div>',id:"prompt-ios",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:'AlertButtonStyle <div class="label ios">iOS</div>',id:"alertbuttonstyle-ios",level:3},{value:'AlertType <div class="label ios">iOS</div>',id:"alerttype-ios",level:3},{value:"Buttons",id:"buttons",level:3},{value:'Options <div class="label android">Android</div>',id:"options-android",level:3}],N={toc:y};function v(t){var e,a=t,{components:i}=a,m=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=C(C({},N),m),s(e,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e00\u7cfb\u5217\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u6309\u94ae\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684 onPress \u56de\u8c03\u5e76\u4e14\u5173\u95ed\u63d0\u793a\u6846\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8bdd\u6846\u4f1a\u4ec5\u6709\u4e00\u4e2a'\u786e\u5b9a'\u6309\u94ae\u3002"),(0,n.kt)("p",null,"\u672c\u63a5\u53e3\u53ef\u4ee5\u5728 iOS \u548c Android \u4e0a\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u3002\u53ea\u6709 iOS \u7cfb\u7edf\u652f\u6301\u5728\u63d0\u793a\u6846\u4e2d\u52a0\u5165\u6587\u672c\u6846\u3002"),(0,n.kt)("h3",C({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",C({},{className:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Ask%20me%20later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Ask%20me%20later%20pressed%5C%22)%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%7B%5C%222-Button%20Alert%5C%22%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%7B%5C%223-Button%20Alert%5C%22%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",C({},{className:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Ask%20me%20later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Ask%20me%20later%20pressed%5C%22)%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B%5C%222-Button%20Alert%5C%22%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%7B%5C%223-Button%20Alert%5C%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,n.kt)("h2",C({},{id:"ios"}),"iOS"),(0,n.kt)("p",null,"\u5728 iOS \u4e0a\u4f60\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u6309\u94ae\u3002\u6bcf\u4e2a\u6309\u94ae\u8fd8\u90fd\u53ef\u4ee5\u6307\u5b9a\u81ea\u5df1\u7684\u6837\u5f0f\uff0c\u6b64\u5916\u8fd8\u53ef\u4ee5\u6307\u5b9a\u63d0\u793a\u7684\u7c7b\u522b\u3002\u53c2\u9605",(0,n.kt)("a",C({parentName:"p"},{href:"#alertbuttonstyle.md"}),"AlertButtonStyle"),"\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),(0,n.kt)("h2",C({},{id:"android"}),"Android"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u6700\u591a\u80fd\u6307\u5b9a\u4e09\u4e2a\u6309\u94ae\uff0c\u8fd9\u4e09\u4e2a\u6309\u94ae\u5206\u522b\u5177\u6709\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\u7684\u6982\u5ff5\uff1a"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u6307\u5b9a\u4e00\u4e2a\u6309\u94ae\uff0c\u5219\u5b83\u5177\u6709\u201c\u79ef\u6781\u6001\u201d\u7684\u5c5e\u6027\uff08\u6bd4\u5982\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e24\u4e2a\u6309\u94ae\uff0c\u5219\u5206\u522b\u662f\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u53d6\u6d88\u201d\u548c\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e09\u4e2a\u6309\u94ae\u5219\u610f\u5473\u7740\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u7a0d\u5019\u518d\u8bf4\u201d\uff0c\u201c\u53d6\u6d88\u201d\uff0c\u201c\u786e\u5b9a\u201d\uff09\u3002"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u63d0\u793a\u6846\u7684\u5916\u9762\u6765\u53d6\u6d88\u63d0\u793a\u6846\uff0c\u4f46\u8fd9\u4e00\u884c\u4e3a\u9ed8\u8ba4\u6ca1\u6709\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u5728",(0,n.kt)("a",C({parentName:"p"},{href:"#options"}),(0,n.kt)("inlineCode",{parentName:"a"},"Options")),"\u4e2d\u63d0\u4f9b\u4e00\u4e2a\u989d\u5916\u53c2\u6570\u6765\u542f\u7528\u8fd9\u4e00\u884c\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"{ cancelable: true }"),"\u3002"),(0,n.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"\u4e2d\u6dfb\u52a0",(0,n.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u51fd\u6570\u6765\u6355\u83b7\u7528\u6237\u7684\u53d6\u6d88\u64cd\u4f5c\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"{ onDismiss: () => {} }"),"\u3002"),(0,n.kt)("h3",C({},{id:"\u793a\u4f8b-android"}),"\u793a\u4f8b ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("div",C({},{className:"snack-player","data-snack-name":"Alert Android Dissmissable Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20showAlert%20%3D%20()%20%3D%3E%5Cn%20%20Alert.alert(%5Cn%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20Alert.alert(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20cancelable%3A%20true%2C%5Cn%20%20%20%20%20%20onDismiss%3A%20()%20%3D%3E%5Cn%20%20%20%20%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22This%20alert%20was%20dismissed%20by%20tapping%20outside%20of%20the%20alert%20dialog.%5C%22%5Cn%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%7D%5Cn%20%20)%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CButton%20title%3D%5C%22Show%20alert%5C%22%20onPress%3D%7BshowAlert%7D%20%2F%3E%5Cn)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,n.kt)("hr",null),(0,n.kt)("h1",C({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",C({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",C({},{id:"alert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,n.kt)("pre",null,(0,n.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"static alert(title, message?, buttons?, options?)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"The dialog's title. Passing ",(0,n.kt)("inlineCode",{parentName:"td"},"null")," or empty string will hide the title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"An optional message that appears below the dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"buttons"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("a",C({parentName:"td"},{href:"alert#buttons"}),"Buttons")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"An optional array containg buttons configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("a",C({parentName:"td"},{href:"alert#options"}),"Options")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"An optional Alert configuration for the Android.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"prompt-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prompt()")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("pre",null,(0,n.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"static prompt(title, message?, callbackOrButtons?, type?, defaultValue?, keyboardType?)\n")),(0,n.kt)("p",null,"Create and display a prompt to enter some text in form of Alert."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"The dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"An optional message that appears above the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"function",(0,n.kt)("hr",null),(0,n.kt)("a",C({parentName:"td"},{href:"alert#buttons"}),"Buttons")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"If passed a function, it will be called with the prompt's value",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"(text: string) => void"),", when the user taps 'OK'.",(0,n.kt)("hr",null),"If passed an array, buttons will be configured based on the array content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("a",C({parentName:"td"},{href:"alert#alerttype"}),"AlertType")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"This configures the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"defaultValue"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"The default text in text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"keyboardType"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"The keyboard type of first text field (if exists). One of TextInput ",(0,n.kt)("a",C({parentName:"td"},{href:"textinput#keyboardtype"}),"keyboardTypes"),".")))),(0,n.kt)("hr",null),(0,n.kt)("h2",C({},{id:"\u7c7b\u578b\u5b9a\u4e49"}),"\u7c7b\u578b\u5b9a\u4e49"),(0,n.kt)("h3",C({},{id:"alertbuttonstyle-ios"}),"AlertButtonStyle ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"An iOS Alert button style."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Default button style.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'cancel'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Cancel button style.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'destructive'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Destructive button style.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"alerttype-ios"}),"AlertType ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"An iOS Alert type."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u503c"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Default alert with no inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'plain-text'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Plain text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'secure-text'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Secure text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'login-password'")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Login and password alert")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"buttons"}),"Buttons"),(0,n.kt)("p",null,"Array of objects containg Alert buttons configuration."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"array of objects")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Objects properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Button label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"onPress"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Callback function when button is pressed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"style ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("a",C({parentName:"td"},{href:"alert#alertbuttonstyle"}),"AlertButtonStyle")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Button style, on Android this property will be ignored.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"options-android"}),"Options ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"cancelable"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Defines if alert can be dismissed by tapping outside of the alert box.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"onDismiss"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"Callback function fired when alert has been dismissed.")))))}v.isMDXComponent=!0}}]);