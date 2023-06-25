"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[10677],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const o="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(o,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(27378),r=a(38944),o=a(12112),i=a(35331),l=a(14953),s=a(27886),u=a(7106),c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function g(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}function b(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:g(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function w({queryString:e=!1,groupId:t}){const a=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);var n,o;t.set(r,e),a.replace((n=((e,t)=>{for(var a in t||(t={}))v.call(t,a)&&h(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&h(e,a,t[a]);return e})({},a.location),o={search:t.toString()},p(n,d(o))))}),[r,a])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=b(e),[i,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=w({queryString:a,groupId:r}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=s?s:p;return y({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var N=a(14185);const O="tabList_J5MA",R="tabItem_l0OV";var P=Object.defineProperty,T=Object.defineProperties,j=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))S.call(t,a)&&I(e,a,t[a]);if(x)for(var a of x(t))A.call(t,a)&&I(e,a,t[a]);return e};function C({className:e,block:t,selectedValue:a,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(u(t),i(r))},p=e=>{var t,a;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>{return n.createElement("li",(i=E({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:p,onClick:c},o),l={className:(0,r.Z)("tabs__item",R,null==o?void 0:o.className,{"tabs__item--active":a===e})},T(i,j(l))),null!=t?t:e);var i,l})))}function L({lazy:e,children:t,selectedValue:a}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function V(e){const t=k(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",O)},n.createElement(C,E(E({},e),t)),n.createElement(L,E(E({},e),t)))}function D(e){const t=(0,N.Z)();return n.createElement(V,E({key:String(t)},e))}},98738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=a(35318),r=a(48375),o=a(86386),i=a(11674),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};const f={id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},h=void 0,g={unversionedId:"communication-android",id:"version-0.72/communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",description:"\u901a\u8fc7\u690d\u5165\u539f\u751f\u5e94\u7528\u548c\u539f\u751f UI \u7ec4\u4ef6\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002",source:"@site/versioned_docs/version-0.72/communication-android.md",sourceDirName:".",slug:"/communication-android",permalink:"/docs/communication-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/communication-android.md",tags:[],version:"0.72",frontMatter:{id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u6253\u5305\u53d1\u5e03",permalink:"/docs/signed-apk-android"},next:{title:"\u94fe\u63a5\u539f\u751f\u5e93",permalink:"/docs/linking-libraries-ios"}},b={},y=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native",id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",level:3},{value:"Passing properties from React Native to native",id:"passing-properties-from-react-native-to-native",level:3},{value:"Limits of properties",id:"limits-of-properties",level:3},{value:"Other ways of cross-language interaction (events and native modules)",id:"other-ways-of-cross-language-interaction-events-and-native-modules",level:2},{value:"Calling React Native functions from native (events)",id:"calling-react-native-functions-from-native-events",level:3},{value:"Calling native functions from React Native (native modules)",id:"calling-native-functions-from-react-native-native-modules",level:3}],w={toc:y};function k(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},w),m),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u901a\u8fc7",(0,n.kt)("a",v({parentName:"p"},{href:"integration-with-existing-apps"}),"\u690d\u5165\u539f\u751f\u5e94\u7528"),"\u548c",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android"}),"\u539f\u751f UI \u7ec4\u4ef6"),"\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002"),(0,n.kt)("h2",v({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,n.kt)("p",null,"React Native \u662f\u4ece React \u4e2d\u5f97\u5230\u7684\u7075\u611f\uff0c\u56e0\u6b64\u57fa\u672c\u7684\u4fe1\u606f\u6d41\u662f\u7c7b\u4f3c\u7684\u3002\u5728 React \u4e2d\u4fe1\u606f\u662f\u5355\u5411\u7684\u3002\u6211\u4eec\u7ef4\u62a4\u7740\u7ec4\u4ef6\u5c42\u6b21\uff0c\u5728\u5176\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4ec5\u4f9d\u8d56\u4e8e\u5b83\u7236\u7ec4\u4ef6\u548c\u81ea\u5df1\u7684\u72b6\u6001\u3002\u901a\u8fc7\u5c5e\u6027\uff08props\uff09\u6211\u4eec\u5c06\u4fe1\u606f\u4ece\u4e0a\u800c\u4e0b\u7684\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u5230\u5b50\u5143\u7d20\u3002\u5982\u679c\u4e00\u4e2a\u7956\u5148\u7ec4\u4ef6\u9700\u8981\u81ea\u5df1\u5b50\u5b59\u7684\u72b6\u6001\uff0c\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7ed9\u5bf9\u5e94\u7684\u5b50\u5143\u7d20\u3002"),(0,n.kt)("p",null,"React Native \u4e5f\u8fd0\u7528\u4e86\u76f8\u540c\u7684\u6982\u5ff5\u3002\u53ea\u8981\u6211\u4eec\u5b8c\u5168\u5728\u6846\u67b6\u5185\u6784\u5efa\u5e94\u7528\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u548c\u56de\u8c03\u51fd\u6570\u6765\u8c03\u52a8\u6574\u4e2a\u5e94\u7528\u3002\u4f46\u662f\uff0c\u5f53\u6211\u4eec\u6df7\u5408 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\uff0c\u8de8\u8bed\u8a00\u7684\u673a\u5236\u6765\u4f20\u9012\u4fe1\u606f\u3002"),(0,n.kt)("h2",v({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("p",null,"\u5c5e\u6027\u662f\u6700\u7b80\u5355\u7684\u8de8\u7ec4\u4ef6\u901a\u4fe1\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native \u6216\u8005\u4ece React Native \u5230\u539f\u751f\u7ec4\u4ef6\u3002"),(0,n.kt)("h3",v({},{id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native"}),"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native"),(0,n.kt)("p",null,"You can pass properties down to the React Native app by providing a custom implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"ReactActivityDelegate")," in your main activity. This implementation should override ",(0,n.kt)("inlineCode",{parentName:"p"},"getLaunchOptions")," to return a ",(0,n.kt)("inlineCode",{parentName:"p"},"Bundle")," with the desired properties."),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:i.Z.defaultAndroidLanguage,values:i.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'public class MainActivity extends ReactActivity {\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new ReactActivityDelegate(this, getMainComponentName()) {\n      @Override\n      protected Bundle getLaunchOptions() {\n        Bundle initialProperties = new Bundle();\n        ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n                "http://foo.com/bar1.png",\n                "http://foo.com/bar2.png"\n        ));\n        initialProperties.putStringArrayList("images", imageList);\n        return initialProperties;\n      }\n    };\n  }\n}\n'))),(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'class MainActivity : ReactActivity() {\n    override fun createReactActivityDelegate(): ReactActivityDelegate {\n        return object : ReactActivityDelegate(this, mainComponentName) {\n            override fun getLaunchOptions(): Bundle {\n                val imageList = arrayListOf("http://foo.com/bar1.png", "http://foo.com/bar2.png")\n                val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }\n                return initialProperties\n            }\n        }\n    }\n}\n')))),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport {View, Image} from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{uri: imgURI}} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ReactRootView")," provides a read-write property ",(0,n.kt)("inlineCode",{parentName:"p"},"appProperties"),". After ",(0,n.kt)("inlineCode",{parentName:"p"},"appProperties")," is set, the React Native app is re-rendered with new properties. The update is only performed when the new updated properties differ from the previous ones."),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:i.Z.defaultAndroidLanguage,values:i.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'Bundle updatedProps = mReactRootView.getAppProperties();\nArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n        "http://foo.com/bar3.png",\n        "http://foo.com/bar4.png"\n));\nupdatedProps.putStringArrayList("images", imageList);\n\nmReactRootView.setAppProperties(updatedProps);\n'))),(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'var updatedProps: Bundle = reactRootView.getAppProperties()\nvar imageList = arrayListOf("http://foo.com/bar3.png", "http://foo.com/bar4.png")\n')))),(0,n.kt)("p",null,"It is fine to update properties anytime. However, updates have to be performed on the main thread. You use the getter on any thread."),(0,n.kt)("p",null,"There is no way to update only a few properties at a time. We suggest that you build it into your own wrapper instead."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," Currently, JS function ",(0,n.kt)("inlineCode",{parentName:"p"},"componentWillUpdateProps")," of the top level RN component will not be called after a prop update. However, you can access the new props in ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidMount")," function.")),(0,n.kt)("h3",v({},{id:"passing-properties-from-react-native-to-native"}),"Passing properties from React Native to native"),(0,n.kt)("p",null,"The problem exposing properties of native components is covered in detail in ",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"}),"this article"),". In short, properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"@ReactProp"),", then use them in React Native as if the component was an ordinary React Native component."),(0,n.kt)("h3",v({},{id:"limits-of-properties"}),"Limits of properties"),(0,n.kt)("p",null,"The main drawback of cross-language properties is that they do not support callbacks, which would allow us to handle bottom-up data bindings. Imagine you have a small RN view that you want to be removed from the native parent view as a result of a JS action. There is no way to do that with props, as the information would need to go bottom-up."),(0,n.kt)("p",null,"Although we have a flavor of cross-language callbacks (",(0,n.kt)("a",v({parentName:"p"},{href:"native-modules-android#callbacks"}),"described here"),"), these callbacks are not always the thing we need. The main problem is that they are not intended to be passed as properties. Rather, this mechanism allows us to trigger a native action from JS, and handle the result of that action in JS."),(0,n.kt)("h2",v({},{id:"other-ways-of-cross-language-interaction-events-and-native-modules"}),"Other ways of cross-language interaction (events and native modules)"),(0,n.kt)("p",null,"As stated in the previous chapter, using properties comes with some limitations. Sometimes properties are not enough to drive the logic of our app and we need a solution that gives more flexibility. This chapter covers other communication techniques available in React Native. They can be used for internal communication (between JS and native layers in RN) as well as for external communication (between RN and the 'pure native' part of your app)."),(0,n.kt)("p",null,"React Native enables you to perform cross-language function calls. You can execute custom native code from JS and vice versa. Unfortunately, depending on the side we are working on, we achieve the same goal in different ways. For native - we use events mechanism to schedule an execution of a handler function in JS, while for React Native we directly call methods exported by native modules."),(0,n.kt)("h3",v({},{id:"calling-react-native-functions-from-native-events"}),"Calling React Native functions from native (events)"),(0,n.kt)("p",null,"Events are described in detail in ",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android#events"}),"this article"),". Note that using events gives us no guarantees about execution time, as the event is handled on a separate thread."),(0,n.kt)("p",null,"Events are powerful, because they allow us to change React Native components without needing a reference to them. However, there are some pitfalls that you can fall into while using them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As events can be sent from anywhere, they can introduce spaghetti-style dependencies into your project."),(0,n.kt)("li",{parentName:"ul"},"Events share namespace, which means that you may encounter some name collisions. Collisions will not be detected statically, which makes them hard to debug."),(0,n.kt)("li",{parentName:"ul"},"If you use several instances of the same React Native component and you want to distinguish them from the perspective of your event, you'll likely need to introduce identifiers and pass them along with events (you can use the native view's ",(0,n.kt)("inlineCode",{parentName:"li"},"reactTag")," as an identifier).")),(0,n.kt)("h3",v({},{id:"calling-native-functions-from-react-native-native-modules"}),"Calling native functions from React Native (native modules)"),(0,n.kt)("p",null,"Native modules are Java/Kotlin classes that are available in JS. Typically one instance of each module is created per JS bridge. They can export arbitrary functions and constants to React Native. They have been covered in detail in ",(0,n.kt)("a",v({parentName:"p"},{href:"native-modules-android"}),"this article"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Warning")),": All native modules share the same namespace. Watch out for name collisions when creating new ones.")))}k.isMDXComponent=!0}}]);