"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88576],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45981:function(e,t,r){var a=r(161),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),n=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=o?"ios":"android",i=o?"macos":n?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,r){var a=r(27378);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},12120:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(52685),o=r(27378),n=r(76457),l=r(84956);var i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(92373),s=r(38944),c="tabItem_c0e5";function p(e){var t,r,n,l=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=b[0])?void 0:n.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),C=g.tabGroupChoices,A=g.setTabGroupChoices,w=(0,o.useState)(y),N=w[0],x=w[1],P=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=C[f];null!=E&&E!==N&&h.some((function(e){return e.value===E}))&&x(E)}var D=function(e){var t=e.currentTarget,r=P.indexOf(t),a=h[r].value;a!==N&&(O(t),x(a),null!=f&&A(f,a))},T=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;r=P[a]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;r=P[o]||P[P.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,r=e.label,n=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return P.push(e)},onKeyDown:T,onFocus:D,onClick:D},n,{className:(0,s.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),l?(0,o.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,n.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},88593:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=r(52685),o=r(1244),n=(r(27378),r(35318)),l=(r(12120),r(70517),r(45981),["components"]),i={id:"platformcolor",title:"PlatformColor"},u=void 0,s={unversionedId:"platformcolor",id:"version-0.66/platformcolor",title:"PlatformColor",description:"You can use the PlatformColor function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.",source:"@site/versioned_docs/version-0.66/platformcolor.md",sourceDirName:".",slug:"/platformcolor",permalink:"/docs/0.66/platformcolor",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/platformcolor.md",tags:[],version:"0.66",frontMatter:{id:"platformcolor",title:"PlatformColor"},sidebar:"api",previous:{title:"Platform",permalink:"/docs/0.66/platform"},next:{title:"RootTag",permalink:"/docs/0.66/roottag"}},c=[{value:"Supported colors",id:"supported-colors",children:[],level:3},{value:"Example",id:"example",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"PlatformColor(color1, [color2, ...colorN]);\n")),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",(0,n.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),(0,n.kt)("p",null,"If you pass more than one string value to the ",(0,n.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"PlatformColor('bogusName', 'linkColor');\n")),(0,n.kt)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),(0,n.kt)("h3",{id:"supported-colors"},"Supported colors"),(0,n.kt)("p",null,"For a full list of the types of system colors supported, see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.attr"},"R.attr")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"?attr")," prefix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.color"},"R.color")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),(0,n.kt)("li",{parentName:"ul"},"iOS (Objective-C and Swift notations):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"},"UIColor Standard Colors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"},"UIColor UI Element Colors"))))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("div",{className:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Platform%2C%0A%20%20PlatformColor%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%0A%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%0A%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20label%3A%20%7B%0A%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20...Platform.select(%7B%0A%20%20%20%20%20%20ios%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20android%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fandroid%3Aattr%2FtextColor')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,n.kt)("p",null,"The string value provided to the ",(0,n.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",(0,n.kt)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",(0,n.kt)("inlineCode",{parentName:"p"},"Platform.select()"),", as shown on the example above."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",(0,n.kt)("inlineCode",{parentName:"p"},"PlatformColor")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"},"PlatformColorExample.js"),".")))}d.isMDXComponent=!0}}]);