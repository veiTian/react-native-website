"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[73455],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,C=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(C,i(i({ref:t},p),{},{components:n})):a.createElement(C,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(27378),r=n(38944),l=n(12112),i=n(35331),o=n(14953),s=n(27886),d=n(7106),p=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function b(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:b(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function A({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,l;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))C.call(t,n)&&N(e,n,t[n]);if(c)for(var n of c(t))k.call(t,n)&&N(e,n,t[n]);return e})({},n.location),l={search:t.toString()},u(a,m(l))))}),[r,n])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=f(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=A({queryString:n,groupId:r}),[u,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),c=(()=>{const e=null!=s?s:u;return g({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{c&&o(c)}),[c]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),m(e)}),[p,m,l]),tabValues:l}}var E=n(14185);const y="tabList_J5MA",h="tabItem_l0OV";var O=Object.defineProperty,S=Object.defineProperties,D=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&_(e,n,t[n]);if(w)for(var n of w(t))P.call(t,n)&&_(e,n,t[n]);return e};function B({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),r=o[a].value;r!==n&&(d(t),i(r))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(n=s[t])?n:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>{return a.createElement("li",(i=R({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:u,onClick:p},l),o={className:(0,r.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":n===e})},S(i,D(o))),null!=t?t:e);var i,o})))}function I({lazy:e,children:t,selectedValue:n}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=v(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",y)},a.createElement(B,R(R({},e),t)),a.createElement(I,R(R({},e),t)))}function L(e){const t=(0,E.Z)();return a.createElement(x,R({key:String(t)},e))}},67503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>v,frontMatter:()=>k,metadata:()=>b,toc:()=>g});var a=n(35318),r=n(48375),l=n(86386),i=n(11674),o=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&c(e,n,t[n]);return e};const k={id:"permissionsandroid",title:"PermissionsAndroid"},N=void 0,b={unversionedId:"permissionsandroid",id:"version-0.65/permissionsandroid",title:"PermissionsAndroid",description:"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee",source:"@site/versioned_docs/version-0.65/permissionsandroid.md",sourceDirName:".",slug:"/permissionsandroid",permalink:"/docs/0.65/permissionsandroid",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/permissionsandroid.md",tags:[],version:"0.65",frontMatter:{id:"permissionsandroid",title:"PermissionsAndroid"},sidebar:"version-0.65/api",previous:{title:"BackHandler",permalink:"/docs/0.65/backhandler"},next:{title:"ToastAndroid",permalink:"/docs/0.65/toastandroid"}},f={},g=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868",id:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868",level:3},{value:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c",id:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>constructor()</code>",id:"constructor",level:3},{value:"<code>check()</code>",id:"check",level:3},{value:"<code>request()</code>",id:"request",level:3},{value:"<code>requestMultiple()</code>",id:"requestmultiple",level:3}],A={toc:g};function v(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=C(C({},A),c),s(t,d({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("div",{className:"banner-native-code-required"},(0,a.kt)("h3",null,"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee"),(0,a.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,a.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,a.kt)("a",{href:"https://docs.expo.io/versions/latest/sdk/permissions/"},"Permissions")," in the Expo documentation for the appropriate alternative.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid")," \u53ef\u4ee5\u8bbf\u95ee Android M(\u4e5f\u5c31\u662f 6.0)\u5f00\u59cb\u63d0\u4f9b\u7684\u6743\u9650\u6a21\u578b\u3002\u6709\u4e00\u4e9b\u6743\u9650\u5199\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u5c31\u53ef\u4ee5\u5728\u5b89\u88c5\u65f6\u81ea\u52a8\u83b7\u5f97\uff0c\u4f46\u6709\u4e00\u4e9b\u201c\u5371\u9669\u201d\u7684\u6743\u9650\u5219\u9700\u8981\u5f39\u51fa\u63d0\u793a\u6846\u4f9b\u7528\u6237\u9009\u62e9\u3002\u672c API \u5373\u7528\u4e8e\u540e\u4e00\u79cd\u60c5\u5f62\u3002"),(0,a.kt)("p",null,"\u5728\u4f4e\u4e8e Android 6.0 \u7684\u8bbe\u5907\u4e0a\uff0c\u6743\u9650\u53ea\u8981\u5199\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u91cc\u5c31\u4f1a\u81ea\u52a8\u83b7\u5f97\uff0c\u6b64\u60c5\u5f62\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"check"),"\u4f1a\u59cb\u7ec8\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u548c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"request"),"\u65b9\u6cd5\u5c06\u59cb\u7ec8\u89e3\u6790\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS.GRANTED"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7528\u6237\u4e4b\u524d\u62d2\u7edd\u8fc7\u4f60\u7684\u67d0\u9879\u6743\u9650\u8bf7\u6c42\uff0c\u90a3\u4e48\u7cfb\u7edf\u4f1a\u5efa\u8bae\u4f60\u663e\u793a\u4e00\u4e2a\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e2a\u6743\u9650\u7684\u201c\u8be6\u7ec6\u89e3\u91ca\u201d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\uff09\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u62d2\u7edd\u8fc7\uff0c\u90a3\u4e48\u5f53\u4f60\u518d\u6b21\u7533\u8bf7\u7684\u65f6\u5019\uff0c\u5f39\u51fa\u7684\u5c31\u53ef\u80fd\u4e0d\u662f\u539f\u5148\u7684\u7533\u8bf7\u4fe1\u606f\uff0c\u800c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\u91cc\u63d0\u4f9b\u7684\u8fdb\u4e00\u6b65\u89e3\u91ca\u3002"),(0,a.kt)("h3",C({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",C({},{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnimport%20Constants%20from%20%5C%22expo-constants%5C%22%3B%5Cn%5Cnconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20try%20%7B%5Cn%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%5Cn%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22Cool%20Photo%20App%20Camera%20Permission%5C%22%2C%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%5C%22%20%2B%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22so%20you%20can%20take%20awesome%20pictures.%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNeutral%3A%20%5C%22Ask%20Me%20Later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNegative%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonPositive%3A%20%5C%22OK%5C%22%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22You%20can%20use%20the%20camera%5C%22)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22Camera%20permission%20denied%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%20catch%20(err)%20%7B%5Cn%20%20%20%20console.warn(err)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%5Cn%20%20%20%20%3CButton%20title%3D%5C%22request%20permissions%5C%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",C({},{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnimport%20Constants%20from%20%5C%22expo-constants%5C%22%3B%5Cn%5Cnconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20try%20%7B%5Cn%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%5Cn%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22Cool%20Photo%20App%20Camera%20Permission%5C%22%2C%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%5C%22%20%2B%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22so%20you%20can%20take%20awesome%20pictures.%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNeutral%3A%20%5C%22Ask%20Me%20Later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonNegative%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20buttonPositive%3A%20%5C%22OK%5C%22%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22You%20can%20use%20the%20camera%5C%22)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22Camera%20permission%20denied%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%20catch%20(err)%20%7B%5Cn%20%20%20%20console.warn(err)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22request%20permissions%5C%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20item%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("h3",C({},{id:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868"}),"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868"),(0,a.kt)("p",null,"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u90fd\u4ee5\u5e38\u91cf\u5f62\u5f0f\u5217\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.PERMISSIONS"),"\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"READ_CALENDAR"),": 'android.permission.READ_CALENDAR'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WRITE_CALENDAR"),": 'android.permission.WRITE_CALENDAR'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CAMERA"),": 'android.permission.CAMERA'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"READ_CONTACTS"),": 'android.permission.READ_CONTACTS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WRITE_CONTACTS"),": 'android.permission.WRITE_CONTACTS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET_ACCOUNTS"),": 'android.permission.GET_ACCOUNTS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ACCESS_BACKGROUND_LOCATION"),": 'android.permission.ACCESS_BACKGROUND_LOCATION`"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION"),": 'android.permission.ACCESS_FINE_LOCATION'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ACCESS_COARSE_LOCATION"),": 'android.permission.ACCESS_COARSE_LOCATION'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RECORD_AUDIO"),": 'android.permission.RECORD_AUDIO'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"READ_PHONE_STATE"),": 'android.permission.READ_PHONE_STATE'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CALL_PHONE"),": 'android.permission.CALL_PHONE'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"READ_CALL_LOG"),": 'android.permission.READ_CALL_LOG'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WRITE_CALL_LOG"),": 'android.permission.WRITE_CALL_LOG'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADD_VOICEMAIL"),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USE_SIP"),": 'android.permission.USE_SIP'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROCESS_OUTGOING_CALLS"),": 'android.permission.PROCESS_OUTGOING_CALLS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BODY_SENSORS"),": 'android.permission.BODY_SENSORS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SEND_SMS"),": 'android.permission.SEND_SMS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RECEIVE_SMS"),": 'android.permission.RECEIVE_SMS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"READ_SMS"),": 'android.permission.READ_SMS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RECEIVE_WAP_PUSH"),": 'android.permission.RECEIVE_WAP_PUSH'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RECEIVE_MMS"),": 'android.permission.RECEIVE_MMS'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"READ_EXTERNAL_STORAGE"),": 'android.permission.READ_EXTERNAL_STORAGE'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WRITE_EXTERNAL_STORAGE"),": 'android.permission.WRITE_EXTERNAL_STORAGE'")),(0,a.kt)("h3",C({},{id:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c"}),"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\u90fd\u4ee5\u5e38\u91cf\u5f62\u5f0f\u8bb0\u5f55\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GRANTED"),": 'granted'\uff0c \u8868\u793a\u7528\u6237\u5df2\u6388\u6743"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DENIED"),": 'denied'\uff0c \u8868\u793a\u7528\u6237\u5df2\u62d2\u7edd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEVER_ASK_AGAIN"),": 'never_ask_again'\uff0c\u8868\u793a\u7528\u6237\u5df2\u62d2\u7edd\uff0c\u4e14\u4e0d\u613f\u88ab\u518d\u6b21\u8be2\u95ee\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h1",C({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",C({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",C({},{id:"constructor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"constructor();\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"check"}),(0,a.kt)("inlineCode",{parentName:"h3"},"check()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"check(permission);\n")),(0,a.kt)("p",null,"\u68c0\u67e5\u67d0\u9879\u6743\u9650\u662f\u5426\u7ecf\u8fc7\u7528\u6237\u6388\u6743\u3002\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u89e3\u6790\u4e3a\u5e03\u5c14\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"permission"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u8981\u68c0\u67e5\u7684\u6743\u9650")))),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"request"}),(0,a.kt)("inlineCode",{parentName:"h3"},"request()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"request(permission, [rationale]);\n")),(0,a.kt)("p",null,"\u5f39\u51fa\u63d0\u793a\u6846\u5411\u7528\u6237\u8bf7\u6c42\u67d0\u9879\u6743\u9650\u3002\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u503c\u4e3a\u4e0a\u6587\u6240\u8bf4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\uff0c\u5219\u6b64\u65b9\u6cd5\u4f1a\u548c\u7cfb\u7edf\u534f\u5546\uff0c\u662f\u5f39\u51fa\u7cfb\u7edf\u5185\u7f6e\u7684\u6743\u9650\u7533\u8bf7\u5bf9\u8bdd\u6846\uff0c\u8fd8\u662f\u663e\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"rationale"),"\u4e2d\u7684\u4fe1\u606f\u4ee5\u5411\u7528\u6237\u8fdb\u884c\u89e3\u91ca\u3002\u5177\u4f53\u539f\u7406\u8bf7\u53c2\u9605 android \u5b98\u65b9\u6587\u6863(",(0,a.kt)("a",C({parentName:"p"},{href:"https://developer.android.com/training/permissions/requesting.html#explain)%E3%80%82"}),"https://developer.android.com/training/permissions/requesting.html#explain)\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"permission"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u8981\u8bf7\u6c42\u7684\u6743\u9650")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"rationale"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u89c1\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"td"},"rationale"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rationale:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u5bf9\u8bdd\u6846\u7684\u6b63\u6587\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"buttonPositive"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u540c\u610f\u6309\u94ae\u7684\u6587\u672c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"buttonNegative"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u62d2\u7edd\u6309\u94ae\u7684\u6587\u672c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"buttonNeutral"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u8df3\u8fc7\u6309\u94ae\u7684\u6587\u672c\u3002")))),(0,a.kt)("hr",null),(0,a.kt)("h3",C({},{id:"requestmultiple"}),(0,a.kt)("inlineCode",{parentName:"h3"},"requestMultiple()")),(0,a.kt)("pre",null,(0,a.kt)("code",C({parentName:"pre"},{className:"language-jsx"}),"requestMultiple(permissions);\n")),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u5f39\u51fa\u6846\u4e2d\u5411\u7528\u6237\u8bf7\u6c42\u591a\u4e2a\u6743\u9650\u3002\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a object\uff0ckey \u4e3a\u5404\u6743\u9650\u540d\u79f0\uff0c\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",C({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",C({parentName:"tr"},{align:null}),"permissions"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"array"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",C({parentName:"tr"},{align:null}),"\u8981\u7533\u8bf7\u7684\u6743\u9650\u7684\u6570\u7ec4")))))}v.isMDXComponent=!0}}]);