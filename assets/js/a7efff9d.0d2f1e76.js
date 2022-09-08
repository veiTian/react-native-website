"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25437],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(27378),r=a(38944),l="tabItem_wHwb",i=Object.defineProperty,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},27789:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(27378),r=a(38944),l=a(14185),i=a(27886),o=a(77184),p=a(12112),s="tabList_J5MA",c="tabItem_l0OV",u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&A(e,a,t[a]);if(v)for(var a of v(t))h.call(t,a)&&A(e,a,t[a]);return e};function k(e){var t,a;const{lazy:l,block:u,defaultValue:v,values:f,groupId:h,className:A}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===v?v:null!=(a=null!=v?v:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:S,setTabGroupChoices:C}=(0,o.U)(),[D,O]=(0,n.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,p.o5)();if(null!=h){const e=S[h];null!=e&&e!==D&&y.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==D&&(N(t),O(n),null!=h&&C(h,String(n)))},B=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},A)},y.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=b({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>E.push(e),onKeyDown:B,onFocus:x,onClick:x},a),i={className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":D===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function y(e){const t=(0,l.Z)();return n.createElement(k,b({key:String(t)},e))}},67284:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return f},metadata:function(){return A},toc:function(){return k}});var n=a(35318),r=a(27789),l=a(86386),i=a(11674),o=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};const f={id:"appstate",title:"AppState"},h=void 0,A={unversionedId:"appstate",id:"version-0.69/appstate",title:"AppState",description:"AppState\u80fd\u544a\u8bc9\u4f60\u5e94\u7528\u5f53\u524d\u662f\u5728\u524d\u53f0\u8fd8\u662f\u5728\u540e\u53f0\uff0c\u5e76\u4e14\u80fd\u5728\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u901a\u77e5\u4f60\u3002",source:"@site/versioned_docs/version-0.69/appstate.md",sourceDirName:".",slug:"/appstate",permalink:"/docs/0.69/appstate",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/appstate.md",tags:[],version:"0.69",frontMatter:{id:"appstate",title:"AppState"},sidebar:"api",previous:{title:"AppRegistry",permalink:"/docs/0.69/appregistry"},next:{title:"DevSettings",permalink:"/docs/0.69/devsettings"}},b={},k=[{value:"App States",id:"app-states",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>blur</code>",id:"blur",level:3},{value:"<code>change</code>",id:"change",level:3},{value:"<code>focus</code>",id:"focus",level:3},{value:"<code>memoryWarning</code>",id:"memorywarning",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>currentState</code>",id:"currentstate",level:3}],y={toc:k};function g(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},y),m),p(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AppState"),"\u80fd\u544a\u8bc9\u4f60\u5e94\u7528\u5f53\u524d\u662f\u5728\u524d\u53f0\u8fd8\u662f\u5728\u540e\u53f0\uff0c\u5e76\u4e14\u80fd\u5728\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u901a\u77e5\u4f60\u3002"),(0,n.kt)("p",null,"AppState \u901a\u5e38\u5728\u5904\u7406\u63a8\u9001\u901a\u77e5\u7684\u65f6\u5019\u7528\u6765\u51b3\u5b9a\u5185\u5bb9\u548c\u5bf9\u5e94\u7684\u884c\u4e3a\u3002"),(0,n.kt)("h3",v({},{id:"app-states"}),"App States"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"active")," - \u5e94\u7528\u6b63\u5728\u524d\u53f0\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"background")," - \u5e94\u7528\u6b63\u5728\u540e\u53f0\u8fd0\u884c\u3002\u7528\u6237\u53ef\u80fd\u9762\u5bf9\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u522b\u7684\u5e94\u7528\u4e2d"),(0,n.kt)("li",{parentName:"ul"},"\u505c\u7559\u5728\u684c\u9762"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9 Android \u6765\u8bf4\u8fd8\u53ef\u80fd\u5904\u5728\u53e6\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"li"},"Activity"),"\u4e2d\uff08\u5373\u4fbf\u662f\u7531\u4f60\u7684\u5e94\u7528\u62c9\u8d77\u7684\uff09"))),(0,n.kt)("li",{parentName:"ul"},"[iOS]"," ",(0,n.kt)("inlineCode",{parentName:"li"},"inactive")," - \u6b64\u72b6\u6001\u8868\u793a\u5e94\u7528\u6b63\u5728\u524d\u540e\u53f0\u7684\u5207\u6362\u8fc7\u7a0b\u4e2d\uff0c\u6216\u662f\u5904\u5728\u7cfb\u7edf\u7684\u591a\u4efb\u52a1\u89c6\u56fe\uff0c\u53c8\u6216\u662f\u5904\u5728\u6765\u7535\u72b6\u6001\u4e2d\u3002")),(0,n.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u9605\u8bfb",(0,n.kt)("a",v({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"}),"Apple \u7684\u6587\u6863"),"\u3002"),(0,n.kt)("h2",v({},{id:"\u57fa\u672c\u7528\u6cd5"}),"\u57fa\u672c\u7528\u6cd5"),(0,n.kt)("p",null,"\u8981\u83b7\u53d6\u5f53\u524d\u7684\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"AppState.currentState"),"\uff0c\u8fd9\u4e2a\u53d8\u91cf\u4f1a\u4e00\u76f4\u4fdd\u6301\u66f4\u65b0\u3002\u4e0d\u8fc7\u5728\u542f\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"currentState"),"\u53ef\u80fd\u4e3a null\uff0c\u76f4\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"AppState"),"\u4ece\u539f\u751f\u4ee3\u7801\u5f97\u5230\u901a\u77e5\u4e3a\u6b62\u3002"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%0A%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AppState.removeEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20_handleAppStateChange%20%3D%20(nextAppState)%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20appState.current%20%3D%20nextAppState%3B%0A%20%20%20%20setAppStateVisible(appState.current)%3B%0A%20%20%20%20console.log(%22AppState%22%2C%20appState.current)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"If you don't want to see the AppState update from ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"appState.current")," value.")),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20AppStateExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20appState%3A%20AppState.currentState%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AppState.removeEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20_handleAppStateChange%20%3D%20nextAppState%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("p",null,'\u4e0a\u9762\u7684\u8fd9\u4e2a\u4f8b\u5b50\u53ea\u4f1a\u663e\u793a"Current state is: active"\uff0c\u8fd9\u662f\u56e0\u4e3a\u5e94\u7528\u53ea\u6709\u5728',(0,n.kt)("inlineCode",{parentName:"p"},"active"),"\u72b6\u6001\u4e0b\u624d\u80fd\u88ab\u7528\u6237\u770b\u5230\u3002\u5e76\u4e14 null \u72b6\u6001\u53ea\u4f1a\u5728\u4e00\u5f00\u59cb\u7684\u4e00\u77ac\u95f4\u51fa\u73b0\u3002If you want to experiment with the code we recommend to use your own device instead of embedded preview."),(0,n.kt)("hr",null),(0,n.kt)("h1",v({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",v({},{id:"\u4e8b\u4ef6"}),"\u4e8b\u4ef6"),(0,n.kt)("h3",v({},{id:"blur"}),(0,n.kt)("inlineCode",{parentName:"h3"},"blur")),(0,n.kt)("p",null,"[Android only]"," Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",(0,n.kt)("a",v({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"}),"notification drawer"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",(0,n.kt)("inlineCode",{parentName:"p"},"blur")," event will get fired."),(0,n.kt)("h3",v({},{id:"change"}),(0,n.kt)("inlineCode",{parentName:"h3"},"change")),(0,n.kt)("p",null,"This even is received when the app state has changed. The listener is called with one of ",(0,n.kt)("a",v({parentName:"p"},{href:"/docs/0.69/appstate#app-states"}),"the current app state values"),"."),(0,n.kt)("h3",v({},{id:"focus"}),(0,n.kt)("inlineCode",{parentName:"h3"},"focus")),(0,n.kt)("p",null,"[Android only]"," Received when the app gains focus (the user is interacting with the app)."),(0,n.kt)("h3",v({},{id:"memorywarning"}),(0,n.kt)("inlineCode",{parentName:"h3"},"memoryWarning")),(0,n.kt)("p",null,"This event is used in the need of throwing memory warning or releasing it."),(0,n.kt)("h2",v({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",v({},{id:"addeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"addEventListener(type, handler);\n")),(0,n.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u7528\u4e8e\u76d1\u542c\u5e94\u7528\u72b6\u6001\u7684\u53d8\u5316\u3002type \u53c2\u6570\u5e94\u586b",(0,n.kt)("inlineCode",{parentName:"p"},"change"),"\u3002"),(0,n.kt)("p",null,"TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate ",(0,n.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"removeEventListener")," and use ",(0,n.kt)("inlineCode",{parentName:"p"},"addListener")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"listener.remove()")," directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique)."),(0,n.kt)("hr",null),(0,n.kt)("h3",v({},{id:"removeeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"removeEventListener(type, handler);\n")),(0,n.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002type \u53c2\u6570\u5e94\u586b",(0,n.kt)("inlineCode",{parentName:"p"},"change"),"\u3002"),(0,n.kt)("h2",v({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("h3",v({},{id:"currentstate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"currentState")),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"AppState.currentState;\n")))}g.isMDXComponent=!0}}]);