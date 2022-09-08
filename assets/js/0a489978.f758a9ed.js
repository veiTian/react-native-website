"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7440],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4290:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return g}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&s(e,a,t[a]);return e};const u={id:"platform",title:"Platform"},c=void 0,k={unversionedId:"platform",id:"version-0.70/platform",title:"Platform",description:"Example",source:"@site/versioned_docs/version-0.70/platform.md",sourceDirName:".",slug:"/platform",permalink:"/docs/platform",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/platform.md",tags:[],version:"0.70",frontMatter:{id:"platform",title:"Platform"},sidebar:"api",previous:{title:"PixelRatio",permalink:"/docs/pixelratio"},next:{title:"PlatformColor",permalink:"/docs/platformcolor"}},N={},g=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>constants</code>",id:"constants",level:3},{value:'<code>isPad</code> <div class="label ios">iOS</div>',id:"ispad-ios",level:3},{value:"<code>isTV</code>",id:"istv",level:3},{value:"<code>isTesting</code>",id:"istesting",level:3},{value:"<code>OS</code>",id:"os",level:3},{value:"<code>Version</code>",id:"version",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>select()</code>",id:"select",level:3},{value:"Parameters:",id:"parameters",level:4}],f={toc:g};function b(e){var t,a=e,{components:r}=a,s=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},f),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"Platform API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Platform%2C%20StyleSheet%2C%20Text%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CScrollView%20contentContainerStyle%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EOS%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.OS%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EOS%20Version%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.Version%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EisTV%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isTV.toString()%7D%3C%2FText%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%26%26%20%3C%3E%0A%20%20%20%20%20%20%20%20%3CText%3EisPad%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isPad.toString()%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2F%3E%7D%0A%20%20%20%20%20%20%3CText%3EConstants%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%0A%20%20%20%20%20%20%20%20%7BJSON.stringify(Platform.constants%2C%20null%2C%202)%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontWeight%3A%20'600'%2C%0A%20%20%20%20padding%3A%204%2C%0A%20%20%20%20marginBottom%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"reference"}),"Reference"),(0,n.kt)("h2",m({},{id:"properties"}),"Properties"),(0,n.kt)("h3",m({},{id:"constants"}),(0,n.kt)("inlineCode",{parentName:"h3"},"constants")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Platform.constants;\n")),(0,n.kt)("p",null,"Returns an object which contains all available common and specific constants related to the platform."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("div",{className:"widerColumn"},"Name")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"isTesting"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"reactNativeVersion"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Information about React Native version. Keys are ",(0,n.kt)("inlineCode",{parentName:"td"},"major"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"minor"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"patch")," with optional ",(0,n.kt)("inlineCode",{parentName:"td"},"prerelease")," and values are ",(0,n.kt)("inlineCode",{parentName:"td"},"number"),"s.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Version ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"OS version constant specific to Android.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Release ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Serial ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Hardware serial number of an Android device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Fingerprint ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A string that uniquely identifies the build.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Model ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The end-user-visible name for the Android device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Brand ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The consumer-visible brand with which the product/hardware will be associated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Manufacturer ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The manufacturer of the Android device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ServerHost ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"uiMode ",(0,n.kt)("div",{className:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Possible values are: ",(0,n.kt)("inlineCode",{parentName:"td"},"'car'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'desk'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'normal'"),",",(0,n.kt)("inlineCode",{parentName:"td"},"'tv'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'watch'")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"'unknown'"),". Read more about ",(0,n.kt)("a",m({parentName:"td"},{href:"https://developer.android.com/reference/android/app/UiModeManager.html"}),"Android ModeType"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"forceTouchAvailable ",(0,n.kt)("div",{className:"label ios"},"iOS")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Indicate the availability of 3D Touch on a device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"interfaceIdiom ",(0,n.kt)("div",{className:"label ios"},"iOS")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The interface type for the device. Read more about ",(0,n.kt)("a",m({parentName:"td"},{href:"https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom"}),"UIUserInterfaceIdiom"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"osVersion ",(0,n.kt)("div",{className:"label ios"},"iOS")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"OS version constant specific to iOS.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"systemName ",(0,n.kt)("div",{className:"label ios"},"iOS")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"OS name constant specific to iOS.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"ispad-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isPad")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Platform.isPad;\n")),(0,n.kt)("p",null,"Returns a boolean which defines if device is an iPad."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"istv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isTV")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Platform.isTV;\n")),(0,n.kt)("p",null,"Returns a boolean which defines if device is a TV."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"istesting"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isTesting")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Platform.isTesting;\n")),(0,n.kt)("p",null,"Returns a boolean which defines if application is running in Developer Mode with testing flag set."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"os"}),(0,n.kt)("inlineCode",{parentName:"h3"},"OS")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static Platform.OS\n")),(0,n.kt)("p",null,"Returns string value representing the current OS."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"enum(",(0,n.kt)("inlineCode",{parentName:"td"},"'android'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'ios'"),")")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"version"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Version")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Platform.Version;\n")),(0,n.kt)("p",null,"Returns the version of the OS."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number ",(0,n.kt)("div",{className:"label android"},"Android"),(0,n.kt)("hr",null),"string ",(0,n.kt)("div",{className:"label ios"},"iOS"))))),(0,n.kt)("h2",m({},{id:"methods"}),"Methods"),(0,n.kt)("h3",m({},{id:"select"}),(0,n.kt)("inlineCode",{parentName:"h3"},"select()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static select(config: object): any\n")),(0,n.kt)("p",null,"Returns the most fitting value for the platform you are currently running on."),(0,n.kt)("h4",m({},{id:"parameters"}),"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"See config description below.")))),(0,n.kt)("p",null,"Select method returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ",(0,n.kt)("inlineCode",{parentName:"p"},"android")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," keys will take preference. If those are not specified, ",(0,n.kt)("inlineCode",{parentName:"p"},"native")," key will be used and then the ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," key."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," parameter is an object with the following keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"android")," (any)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ios")," (any)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"native")," (any)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default")," (any)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example usage:")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    ...Platform.select({\n      android: {\n        backgroundColor: 'green'\n      },\n      ios: {\n        backgroundColor: 'red'\n      },\n      default: {\n        // other platforms, web for example\n        backgroundColor: 'blue'\n      }\n    })\n  }\n});\n")),(0,n.kt)("p",null,"This will result in a container having ",(0,n.kt)("inlineCode",{parentName:"p"},"flex: 1")," on all platforms, a green background color on Android, a red background color on iOS, and a blue background color on other platforms."),(0,n.kt)("p",null,"Since the value of the corresponding platform key can be of type ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/platform#select"}),(0,n.kt)("inlineCode",{parentName:"a"},"select"))," method can also be used to return platform-specific components, like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"const Component = Platform.select({\n  ios: () => require('ComponentIOS'),\n  android: () => require('ComponentAndroid')\n})();\n\n<Component />;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"const Component = Platform.select({\n  native: () => require('ComponentForNative'),\n  default: () => require('ComponentForWeb')\n})();\n\n<Component />;\n")))}b.isMDXComponent=!0}}]);