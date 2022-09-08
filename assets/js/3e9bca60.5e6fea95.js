"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[11692],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(27378),r=n(38944),l="tabItem_wHwb",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(27378),r=n(38944),l=n(14185),i=n(27886),o=n(77184),s=n(12112),u="tabList_J5MA",p="tabItem_l0OV",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&b(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:m,defaultValue:h,values:k,groupId:f,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=k?k:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===h?h:null!=(n=null!=h?h:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:x}=(0,o.U)(),[C,T]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=f){const e=O[f];null!=e&&e!==C&&y.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=j.indexOf(t),a=y[n].value;a!==C&&(P(t),T(a),null!=f&&x(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;a=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=null!=(n=j[t])?n:j[j.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=v({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>j.push(e),onKeyDown:E,onFocus:I,onClick:I},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},d(l,c(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function y(e){const t=(0,l.Z)();return a.createElement(g,v({key:String(t)},e))}},96305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return g}});var a=n(35318),r=n(27789),l=n(86386),i=n(11674),o=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&c(e,n,t[n]);return e};const k={id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316"},f=void 0,b={unversionedId:"optimizing-flatlist-configuration",id:"version-0.69/optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316",description:"\u672f\u8bed\u5b9a\u4e49",source:"@site/versioned_docs/version-0.69/optimizing-flatlist-configuration.md",sourceDirName:".",slug:"/optimizing-flatlist-configuration",permalink:"/docs/0.69/optimizing-flatlist-configuration",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/optimizing-flatlist-configuration.md",tags:[],version:"0.69",frontMatter:{id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316"},sidebar:"docs",previous:{title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",permalink:"/docs/0.69/build-speed"},next:{title:"RAM Bundles \u548c\u5185\u8054\u5f15\u7528\u4f18\u5316",permalink:"/docs/0.69/ram-bundles-inline-requires"}},v={},g=[{value:"\u672f\u8bed\u5b9a\u4e49",id:"\u672f\u8bed\u5b9a\u4e49",level:2},{value:"Props",id:"props",level:2},{value:"removeClippedSubviews",id:"removeclippedsubviews",level:3},{value:"maxToRenderPerBatch",id:"maxtorenderperbatch",level:3},{value:"updateCellsBatchingPeriod",id:"updatecellsbatchingperiod",level:3},{value:"initialNumToRender",id:"initialnumtorender",level:3},{value:"windowSize",id:"windowsize",level:3},{value:"List items",id:"list-items",level:2},{value:"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6",id:"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6",id:"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6",level:3},{value:"\u4f7f\u7528 shouldComponentUpdate",id:"\u4f7f\u7528-shouldcomponentupdate",level:3},{value:"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93",id:"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93",level:3},{value:"\u4f7f\u7528 getItemLayout",id:"\u4f7f\u7528-getitemlayout",level:3},{value:"\u4f7f\u7528 keyExtractor \u6216 key",id:"\u4f7f\u7528-keyextractor-\u6216-key",level:3},{value:"\u907f\u514d\u5728 renderItem \u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570",id:"\u907f\u514d\u5728-renderitem-\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570",level:3}],y={toc:g};function N(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),c),s(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",h({},{id:"\u672f\u8bed\u5b9a\u4e49"}),"\u672f\u8bed\u5b9a\u4e49"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"VirtualizedList:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u80cc\u540e\u7684\u57fa\u7840\u652f\u6491\u7ec4\u4ef6\uff08\u662f React Native \u5bf9",(0,a.kt)("a",h({parentName:"p"},{href:"https://bvaughn.github.io/react-virtualized/#/components/List"}),(0,a.kt)("inlineCode",{parentName:"a"},"\u865a\u62df\u5217\u8868 Virtual List")),"\u6982\u5ff5\u7684\u5b9e\u73b0\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5185\u5b58\u5f00\u9500 Memory consumption:")," \u5217\u8868\u5728\u5185\u5b58\u4e2d\u5b58\u653e\u591a\u5c11\u6570\u636e\u3002\u5f00\u9500\u8fc7\u5927\u53ef\u80fd\u5bfc\u81f4\u5e94\u7528\u5d29\u6e83\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5ea6 Responsiveness:")," \u5e94\u7528\u5bf9\u4e8e\u7528\u6237\u64cd\u4f5c\u7684\u54cd\u5e94\u901f\u5ea6\u3002\u6bd4\u5982\u4f4e\u54cd\u5e94\u5ea6\u5c31\u662f\u4f60\u5728\u64cd\u4f5c\u65f6\uff0c\u5e94\u7528\u8981\u5361\u4e00\u4f1a\u513f\u624d\u54cd\u5e94\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u767d\u533a Blank areas:")," \u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList"),"\u6e32\u67d3\u7684\u901f\u5ea6\u8ddf\u4e0d\u4e0a\u4f60\u6ed1\u52a8\u7684\u901f\u5ea6\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728\u5217\u8868\u4e2d\u770b\u5230\u4e00\u4e9b\u5c1a\u672a\u5b8c\u6210\u6e32\u67d3\u7684\u7a7a\u767d\u5360\u4f4d\u5143\u7d20\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u89c6\u53e3 Viewport:")," \u5df2\u6e32\u67d3\u5185\u5bb9\u7684\u53ef\u89c6\u533a\u57df\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6ed1\u52a8\u7a97\u53e3 Window:")," The area in which items should be mounted, which is generally much larger than the viewport."))),(0,a.kt)("h2",h({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Here are a list of props that can help to improve ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," performance:"),(0,a.kt)("h3",h({},{id:"removeclippedsubviews"}),"removeClippedSubviews"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", views that are outside of the viewport are detached from the native view hierarchy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," \u542f\u7528\u6b64\u9009\u9879\u53ef\u51cf\u5c11\u82b1\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u65f6\u95f4\uff0c\u4ece\u800c\u964d\u4f4e\u4e22\u5e27\u7684\u98ce\u9669\u3002\u539f\u7406\u662f\u5bf9\u89c6\u53e3\u4e4b\u5916\u7684\u89c6\u56fe\u4e0d\u8fdb\u884c\u672c\u5730\u6e32\u67d3\u548c\u7ed8\u56fe\u904d\u5386\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," \u8bf7\u6ce8\u610f\uff0c\u8fd9\u79cd\u5b9e\u73b0\u53ef\u80fd\u4f1a\u6709 bug\uff0c\u6bd4\u5982\u4e22\u5931\u5185\u5bb9\uff08\u4e3b\u8981\u662f\u5728 iOS \u4e0a\u89c2\u5bdf\u5230\u7684\uff09\uff0c\u7279\u522b\u662f\u5f53\u4f60\u4f7f\u7528\u53d8\u6362\u548c/\u6216\u7edd\u5bf9\u5b9a\u4f4d\u505a\u590d\u6742\u7684\u4e8b\u60c5\u65f6\u3002\u53e6\u5916\uff0c\u8bf7\u6ce8\u610f\u8fd9\u5e76\u4e0d\u4f1a\u8282\u7701\u5927\u91cf\u7684\u5185\u5b58\uff0c\u56e0\u4e3a\u89c6\u56fe\u5e76\u6ca1\u6709\u88ab\u9500\u6bc1\uff0c\u53ea\u662f\u88ab\u5206\u79bb\u4e86\u3002"),(0,a.kt)("h3",h({},{id:"maxtorenderperbatch"}),"maxToRenderPerBatch"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"10")))),(0,a.kt)("p",null,"It is a ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," prop that can be passed through ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),". This controls the amount of items rendered per batch, which is the next chunk of items rendered on every scroll."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Setting a bigger number means less visual blank areas when scrolling (increases the fill rate)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," More items per batch means longer periods of JavaScript execution potentially blocking other event processing, like presses, hurting responsiveness."),(0,a.kt)("h3",h({},{id:"updatecellsbatchingperiod"}),"updateCellsBatchingPeriod"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"50")))),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," tells the amount of items rendered per batch, setting ",(0,a.kt)("inlineCode",{parentName:"p"},"updateCellsBatchingPeriod")," tells your ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," the delay in milliseconds between batch renders (how frequently your component will be rendering the windowed items)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Combining this prop with ",(0,a.kt)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," gives you the power to, for example, render more items in a less frequent batch, or less items in a more frequent batch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," Less frequent batches may cause blank areas, More frequent batches may cause responsiveness issues."),(0,a.kt)("h3",h({},{id:"initialnumtorender"}),"initialNumToRender"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"10")))),(0,a.kt)("p",null,"The initial amount of items to render."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," \u4e3a\u6bcf\u4e2a\u8bbe\u5907\u5b9a\u4e49\u7cbe\u786e\u7684\uff08\u521a\u597d\u53ef\u4ee5\uff09\u8986\u76d6\u5c4f\u5e55\u7684\u9879\u76ee\u6570\u91cf\u3002\u8fd9\u53ef\u4ee5\u5927\u5927\u63d0\u5347\u521d\u59cb\u6e32\u67d3\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," Setting a low ",(0,a.kt)("inlineCode",{parentName:"p"},"initialNumToRender")," may cause blank areas, especially if it's too small to cover the viewport on initial render."),(0,a.kt)("h3",h({},{id:"windowsize"}),"windowSize"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"21")))),(0,a.kt)("p",null,"The number passed here is a measurement unit where 1 is equivalent to your viewport height. The default value is 21 (10 viewports above, 10 below, and one in between)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Bigger ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize")," will result in less chance of seeing blank space while scrolling. On the other hand, smaller ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize")," will result in fewer items mounted simultaneously, saving memory."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," For a bigger ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize"),", you will have more memory consumption. For a lower ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize"),", you will have a bigger chance of seeing blank areas."),(0,a.kt)("h2",h({},{id:"list-items"}),"List items"),(0,a.kt)("p",null,"Below are some tips about list item components. They are the core of your list, so they need to be fast."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6"}),"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u8d8a\u590d\u6742\u4e00\u822c\u6e32\u67d3\u5c31\u8d8a\u6162\u3002Try to avoid a lot of logic and nesting in your list items. If you are reusing this list item component a lot in your app, create a component just for your big lists and make them with as little logic and nesting as possible."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6"}),"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u592a\u91cd\u81ea\u7136\u4e5f\u4f1a\u62d6\u6162\u6e32\u67d3\u3002\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5927\u56fe\u7247\uff08\u4f18\u5148\u4f7f\u7528\u88c1\u526a\u8fc7\u7684\u7248\u672c\u6216\u662f\u7f29\u7565\u56fe\uff0c\u603b\u4e4b\u8d8a\u5c0f\u8d8a\u597d\uff09\u3002\u548c\u8d1f\u8d23\u8bbe\u8ba1\u7684\u540c\u4e8b\u534f\u5546\uff0c\u5728\u5217\u8868\u4e2d\u5c3d\u53ef\u80fd\u7b80\u5316\u7279\u6548\u548c\u4ea4\u4e92\uff0c\u7cbe\u7b80\u8981\u5c55\u793a\u7684\u4fe1\u606f\uff0c\u628a\u957f\u5185\u5bb9\u79fb\u5230\u8be6\u60c5\u9875\u4e2d\u3002"),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528-shouldcomponentupdate"}),"\u4f7f\u7528 shouldComponentUpdate"),(0,a.kt)("p",null,"Implement update verification to your components. React's ",(0,a.kt)("inlineCode",{parentName:"p"},"PureComponent")," implement a ",(0,a.kt)("a",h({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"shouldComponentUpdate"))," with shallow comparison. This is expensive here because it need to check all your props. If you want a good bit-level performance, create the strictest rules for your list item components, checking only props that could potentially change. If your list is simple enough, you could even use"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"shouldComponentUpdate() {\n  return false\n}\n")),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93"}),"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93"),(0,a.kt)("p",null,"You can use the community packages (such as ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/DylanVann/react-native-fast-image"}),"react-native-fast-image")," from ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/DylanVann"}),"@DylanVann"),") for more performant images. Every image in your list is a ",(0,a.kt)("inlineCode",{parentName:"p"},"new Image()")," instance. The faster it reaches the ",(0,a.kt)("inlineCode",{parentName:"p"},"loaded")," hook, the faster your Javascript thread will be free again."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528-getitemlayout"}),"\u4f7f\u7528 getItemLayout"),(0,a.kt)("p",null,"If all your list item components have the same height (or width, for a horizontal list), providing the ",(0,a.kt)("a",h({parentName:"p"},{href:"flatlist#getitemlayout"}),"getItemLayout")," prop removes the need for your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," to manage async layout calculations. This is a very desirable optimization technique."),(0,a.kt)("p",null,"If your components have dynamic size and you really need performance, consider asking your design team if they may think of a redesign in order to perform better."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528-keyextractor-\u6216-key"}),"\u4f7f\u7528 keyExtractor \u6216 key"),(0,a.kt)("p",null,"You can set the ",(0,a.kt)("a",h({parentName:"p"},{href:"flatlist#keyextractor"}),(0,a.kt)("inlineCode",{parentName:"a"},"keyExtractor"))," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," component. This prop is used for caching and as the React ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to track item re-ordering."),(0,a.kt)("p",null,"You can also use a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," prop in you item component."),(0,a.kt)("h3",h({},{id:"\u907f\u514d\u5728-renderitem-\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570"}),"\u907f\u514d\u5728 renderItem \u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570"),(0,a.kt)("p",null,"Move out the ",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem")," function to the outside of render function, so it won't recreate itself each time render function called."),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"renderItem = ({ item }) => (<View key={item.key}><Text>{item.title}</Text></View>);\n\nrender(){\n  // ...\n\n  <FlatList\n    data={items}\n    renderItem={renderItem}\n  />\n\n  // ...\n}\n"))),(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const renderItem = ({ item }) => (\n   <View key={item.key}>\n      <Text>{item.title}</Text>\n   </View>\n );\nreturn (\n  // ...\n  <FlatList data={items} renderItem={renderItem} />;\n  // ...\n);\n")))))}N.isMDXComponent=!0}}]);