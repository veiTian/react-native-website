"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[98679],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,l(l({ref:t},c),{},{components:r})):o.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>C,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var o=r(35318),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const u={id:"platformcolor",title:"PlatformColor"},d=void 0,f={unversionedId:"platformcolor",id:"version-0.63/platformcolor",title:"PlatformColor",description:"You can use the PlatformColor function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.",source:"@site/versioned_docs/version-0.63/platformcolor.md",sourceDirName:".",slug:"/platformcolor",permalink:"/docs/0.63/platformcolor",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/platformcolor.md",tags:[],version:"0.63",frontMatter:{id:"platformcolor",title:"PlatformColor"},sidebar:"version-0.63/api",previous:{title:"PixelRatio",permalink:"/docs/0.63/pixelratio"},next:{title:"Share",permalink:"/docs/0.63/share"}},C={},h=[{value:"Supported colors",id:"supported-colors",level:3},{value:"Example",id:"example",level:2},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(52.44%), sunnylqm(47.56%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm5244-sunnylqm4756",level:5}],y={toc:h};function k(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=m(m({},y),c),a(t,l({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-js"}),"PlatformColor(color1, [color2, ...colorN]);\n")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),(0,o.kt)("p",null,"If you pass more than one string value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-js"}),'PlatformColor("bogusName", "linkColor");\n')),(0,o.kt)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),(0,o.kt)("h3",m({},{id:"supported-colors"}),"Supported colors"),(0,o.kt)("p",null,"For a full list of the types of system colors supported, see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"https://developer.android.com/reference/android/R.attr"}),"R.attr")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"?attr")," prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"https://developer.android.com/reference/android/R.color"}),"R.color")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),(0,o.kt)("li",{parentName:"ul"},"iOS (Objective-C and Swift notations):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"}),"UIColor Standard Colors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"UIColor UI Element Colors"))))),(0,o.kt)("h2",m({},{id:"example"}),"Example"),(0,o.kt)("div",m({},{className:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Platform%2C%5Cn%20%20PlatformColor%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%5Cn%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%5Cn%20%20%20%20%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20...Platform.select(%7B%5Cn%20%20%20%20%20%20ios%3A%20%7B%5Cn%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%5Cn%20%20%20%20%20%20%20%20backgroundColor%3A%5Cn%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20android%3A%20%7B%5Cn%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fattr%2FtextColor')%2C%5Cn%20%20%20%20%20%20%20%20backgroundColor%3A%5Cn%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,o.kt)("p",null,"The string value provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform.Select()"),", as shown on the example above."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," in ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"}),"PlatformColorExample.js"),".")),(0,o.kt)("hr",null),(0,o.kt)("h5",m({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm5244-sunnylqm4756"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,o.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(52.44%), ",(0,o.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(47.56%)"))}k.isMDXComponent=!0}}]);