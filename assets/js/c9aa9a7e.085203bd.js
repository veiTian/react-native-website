"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54745],{35318:function(e,t,a){a.d(t,{Zo:function(){return A},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},A=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,p=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return a?r.createElement(p,o(o({ref:t},A),{},{components:a})):r.createElement(p,o({ref:t},A))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11674:function(e,t,a){var r=a(63445);const n=!!r.default.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!r.default.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",l=n?"macos":s?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(27378),n=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},93139:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(27378),n=a(14185),s=a(15324),o=a(38944),l="tabItem_WhCL",i=Object.defineProperty,c=Object.defineProperties,A=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(d)for(var a of d(t))m.call(t,a)&&p(e,a,t[a]);return e};function D(e){var t,a,n;const{lazy:i,block:d,defaultValue:u,values:m,groupId:p,className:D}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),C=(0,s.lx)(b,((e,t)=>e.value===t.value));if(C.length>0)throw new Error(`Docusaurus error: Duplicate values "${C.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const B=null===u?u:null!=(n=null!=u?u:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==B&&!b.some((e=>e.value===B)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${B}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,s.UB)(),[h,g]=(0,r.useState)(B),v=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=p){const e=x[p];null!=e&&e!==h&&b.some((t=>t.value===e))&&g(e)}const k=e=>{const t=e.currentTarget,a=v.indexOf(t),r=b[a].value;r!==h&&(E(t),g(r),null!=p&&w(p,r))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=v.indexOf(e.currentTarget)+1;t=v[a]||v[0];break}case"ArrowLeft":{const a=v.indexOf(e.currentTarget)-1;t=v[a]||v[v.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},D)},b.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=y({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:e=>v.push(e),onKeyDown:T,onFocus:k,onClick:k},a),s={className:(0,o.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":h===e})},c(n,A(s))),null!=t?t:e);var n,s}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function f(e){const t=(0,n.Z)();return r.createElement(D,y({key:String(t)},e))}},62403:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return D},default:function(){return x},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return C}});var r=a(35318),n=a(93139),s=a(37785),o=a(11674),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(A)for(var a of A(t))u.call(t,a)&&m(e,a,t[a]);return e};const y={id:"transforms",title:"Transforms"},D=void 0,f={unversionedId:"transforms",id:"version-0.63/transforms",title:"Transforms",description:"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.",source:"@site/versioned_docs/version-0.63/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/docs/0.63/transforms",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/transforms.md",tags:[],version:"0.63",frontMatter:{id:"transforms",title:"Transforms"},sidebar:"version-0.63/api",previous:{title:"Systrace",permalink:"/docs/0.63/systrace"},next:{title:"Vibration",permalink:"/docs/0.63/vibration"}},b={},C=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>transform()</code>",id:"transform",level:3},{value:"<code>decomposedMatrix</code>, <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>transformMatrix</code>, <code>translateX</code>, <code>translateY</code>",id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(95.59%), sunnylqm(4.41%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9559-sunnylqm441",level:5}],B={toc:C};function x(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&A)for(var r of A(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},B),m),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps."),(0,r.kt)("h2",p({},{id:"example"}),"Example"),(0,r.kt)(n.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",p({},{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%2230deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%2230deg%22%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FSafeAreaView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20scrollContentContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20paddingBottom%3A%2060%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20marginVertical%3A%2040%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)(s.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",p({},{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%2230deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%2230deg%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20scrollContentContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20paddingBottom%3A%2060%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20marginVertical%3A%2040%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,r.kt)("hr",null),(0,r.kt)("h1",p({},{id:"reference"}),"Reference"),(0,r.kt)("h2",p({},{id:"methods"}),"Methods"),(0,r.kt)("h3",p({},{id:"transform"}),(0,r.kt)("inlineCode",{parentName:"h3"},"transform()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transform")," accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object."),(0,r.kt)("p",null,"The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'transform([{ rotateX: "45deg" }, { rotateZ: "0.785398rad" }]);\n')),(0,r.kt)("p",null,"The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'transform([{ skewX: "45deg" }]);\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"array of objects: {matrix: number[]}, {perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey"}),(0,r.kt)("inlineCode",{parentName:"h3"},"decomposedMatrix"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"rotation"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"scaleX"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"scaleY"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"transformMatrix"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"translateX"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"translateY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,r.kt)("a",p({parentName:"p"},{href:"transforms#transform"}),(0,r.kt)("inlineCode",{parentName:"a"},"transform"))," prop instead.")),(0,r.kt)("hr",null),(0,r.kt)("h5",p({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9559-sunnylqm441"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",p({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.59%), ",(0,r.kt)("a",p({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.41%)"))}x.isMDXComponent=!0}}]);