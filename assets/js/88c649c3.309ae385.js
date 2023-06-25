"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[28437],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},C=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),C=c(t),p=r,m=C["".concat(s,".").concat(p)]||C[p]||d[p]||l;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=C;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}C.displayName="MDXCreateElement"},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(27378),r=t(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function d({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&u(e,t,n[t]);return e})({role:"tabpanel",className:(0,r.Z)(l,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>V});var a=t(27378),r=t(38944),l=t(12112),o=t(35331),i=t(14953),s=t(27886),c=t(7106),u=Object.defineProperty,d=Object.defineProperties,C=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function b(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}function v(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:b(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h({value:e,tabValues:n}){return n.some((n=>n.value===e))}function y({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);var a,l;n.set(r,e),t.replace((a=((e,n)=>{for(var t in n||(n={}))m.call(n,t)&&f(e,t,n[t]);if(p)for(var t of p(n))k.call(n,t)&&f(e,t,n[t]);return e})({},t.location),l={search:n.toString()},d(a,C(l))))}),[r,t])]}function B(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=v(e),[o,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,u]=y({queryString:t,groupId:r}),[d,C]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),p=(()=>{const e=null!=s?s:d;return h({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{p&&i(p)}),[p]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),C(e)}),[u,C,l]),tabValues:l}}var D=t(14185);const g="tabList_J5MA",w="tabItem_l0OV";var A=Object.defineProperty,E=Object.defineProperties,x=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,n,t)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,j=(e,n)=>{for(var t in n||(n={}))N.call(n,t)&&S(e,t,n[t]);if(O)for(var t of O(n))P.call(n,t)&&S(e,t,n[t]);return e};function T({className:e,block:n,selectedValue:t,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,a=s.indexOf(n),r=i[a].value;r!==t&&(c(n),o(r))},d=e=>{var n,t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;a=null!=(t=s[n])?t:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},i.map((({value:e,label:n,attributes:l})=>{return a.createElement("li",(o=j({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},l),i={className:(0,r.Z)("tabs__item",w,null==l?void 0:l.className,{"tabs__item--active":t===e})},E(o,x(i))),null!=n?n:e);var o,i})))}function H({lazy:e,children:n,selectedValue:t}){if(n=Array.isArray(n)?n:[n],e){const e=n.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function I(e){const n=B(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",g)},a.createElement(T,j(j({},e),n)),a.createElement(H,j(j({},e),n)))}function V(e){const n=(0,D.Z)();return a.createElement(I,j({key:String(n)},e))}},11109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>B,frontMatter:()=>k,metadata:()=>b,toc:()=>h});var a=t(35318),r=t(48375),l=t(86386),o=t(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&p(e,t,n[t]);if(u)for(var t of u(n))C.call(n,t)&&p(e,t,n[t]);return e};const k={id:"backhandler",title:"BackHandler"},f=void 0,b={unversionedId:"backhandler",id:"version-0.68/backhandler",title:"BackHandler",description:"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-0.68/backhandler.md",sourceDirName:".",slug:"/backhandler",permalink:"/docs/0.68/backhandler",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/backhandler.md",tags:[],version:"0.68",frontMatter:{id:"backhandler",title:"BackHandler"},sidebar:"api",previous:{title:"useWindowDimensions",permalink:"/docs/0.68/usewindowdimensions"},next:{title:"PermissionsAndroid",permalink:"/docs/0.68/permissionsandroid"}},v={},h=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Usage with React Navigation",id:"usage-with-react-navigation",level:2},{value:"Backhandler hook",id:"backhandler-hook",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>exitApp()</code>",id:"exitapp",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3}],y={toc:h};function B(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&C.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},y),p),s(n,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u56de\u8c03\u51fd\u6570\u662f\u5012\u5e8f\u6267\u884c\u7684\uff08\u5373\u540e\u6dfb\u52a0\u7684\u51fd\u6570\u5148\u6267\u884c\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u67d0\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de true"),"\uff0c\u5219\u540e\u7eed\u7684\u51fd\u6570\u90fd\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6dfb\u52a0\u4efb\u4f55\u76d1\u542c\u51fd\u6570\uff0c\u6216\u8005\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u8fd4\u56de false"),"\uff0c\u5219\u4f1a\u6267\u884c\u9ed8\u8ba4\u884c\u4e3a\uff0c\u9000\u51fa\u5e94\u7528\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c app \u5f53\u524d\u6253\u5f00\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Modal"),"\u7a97\u53e3\uff0c\u5219 BackHandler \u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002(",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.68/modal#onrequestclose"}),"\u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"a"},"Modal"),"\u7684\u6587\u6863"),").")),(0,a.kt)("h2",m({},{id:"\u7528\u6cd5"}),"\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"BackHandler.addEventListener('hardwareBackPress', function () {\n  /**\n   * this.onMainScreen()\u548cthis.goBack()\u4e24\u4e2a\u65b9\u6cd5\u90fd\u53ea\u662f\u4f2a\u65b9\u6cd5\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u53bb\u5b9e\u73b0\n   * \u4e00\u822c\u6765\u8bf4\u90fd\u8981\u914d\u5408\u5bfc\u822a\u5668\u7ec4\u4ef6\u4f7f\u7528\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * \u8fd4\u56detrue\u65f6\u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u4f20\u9012\uff0c\u56e0\u800c\u4e0d\u4f1a\u6267\u884c\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n     */\n    return true;\n  }\n  /**\n   * \u8fd4\u56defalse\u65f6\u4f1a\u4f7f\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u9012\uff0c\u89e6\u53d1\u5176\u4ed6\u6ce8\u518c\u7684\u76d1\u542c\u51fd\u6570\uff0c\u6216\u662f\u7cfb\u7edf\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n   */\n  return false;\n});\n")),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%20%20%5D)%3B%5Cn%20%20%20%20%20%20return%20true%3B%5Cn%20%20%20%20%7D%3B%5Cn%5Cn%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%5Cn%20%20%20%20%20%20%5C%22hardwareBackPress%5C%22%2C%5Cn%20%20%20%20%20%20backAction%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%5D)%3B%5Cn%20%20%20%20return%20true%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%5Cn%20%20%20%20%20%20%5C%22hardwareBackPress%5C%22%2C%5Cn%20%20%20%20%20%20this.backAction%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.backHandler.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),(0,a.kt)("p",null,"Additionally ",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%5D)%3B%5Cn%20%20%20%20return%20true%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20BackHandler.addEventListener(%5C%22hardwareBackPress%5C%22%2C%20backAction)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%5Cn%20%20%20%20%20%20BackHandler.removeEventListener(%5C%22hardwareBackPress%5C%22%2C%20backAction)%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%5D)%3B%5Cn%20%20%20%20return%20true%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20BackHandler.addEventListener(%5C%22hardwareBackPress%5C%22%2C%20this.backAction)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20BackHandler.removeEventListener(%5C%22hardwareBackPress%5C%22%2C%20this.backAction)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("h2",m({},{id:"usage-with-react-navigation"}),"Usage with React Navigation"),(0,a.kt)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",(0,a.kt)("a",m({parentName:"p"},{href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"}),"Custom Android back button behaviour")),(0,a.kt)("h2",m({},{id:"backhandler-hook"}),"Backhandler hook"),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/react-native-community/hooks#usebackhandler"}),"React Native Hooks")," has a nice ",(0,a.kt)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",m({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"exitapp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"exitApp()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static exitApp()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")))}B.isMDXComponent=!0}}]);