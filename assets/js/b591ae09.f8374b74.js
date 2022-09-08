"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55087],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(27378),r=n(38944),o="tabItem_wHwb",i=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function s({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27378),r=n(38944),o=n(14185),i=n(27886),l=n(77184),u=n(12112),c="tabList_J5MA",p="tabItem_l0OV",s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))b.call(t,n)&&v(e,n,t[n]);return e};function k(e){var t,n;const{lazy:o,block:s,defaultValue:h,values:f,groupId:b,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=f?f:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===h?h:null!=(n=null!=h?h:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,l.U)(),[j,P]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=O[b];null!=e&&e!==j&&g.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==j&&(E(t),P(a),null!=b&&C(b,String(a)))},A=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=w({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:A,onFocus:T,onClick:T},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(o,m(i))),null!=t?t:e);var o,i}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function g(e){const t=(0,o.Z)();return a.createElement(k,w({key:String(t)},e))}},38286:function(e,t,n){n.d(t,{ZP:function(){return m}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={toc:[]};function m(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},d),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},56940:function(e,t,n){n.d(t,{ZP:function(){return m}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={toc:[]};function m(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},d),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u4e4b\u524d\u5168\u5c40\u5b89\u88c5\u8fc7\u65e7\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-cli"),"\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm uninstall -g react-native-cli"),"\u5378\u8f7d\u6389\u5b83\u4ee5\u907f\u514d\u4e00\u4e9b\u51b2\u7a81\uff1a"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"npm uninstall -g react-native-cli @react-native-community/cli\n"))))}m.isMDXComponent=!0},55286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return w},default:function(){return O},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return y}});var a=n(35318),r=n(27789),o=n(86386),i=n(11674),l=n(56940),u=n(38286),c=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(d)for(var n of d(t))h.call(t,n)&&f(e,n,t[n]);return e};const v={id:"use-app-template",title:"Creating a New Architecture App"},w=void 0,k={unversionedId:"the-new-architecture/use-app-template",id:"the-new-architecture/use-app-template",title:"Creating a New Architecture App",description:"This page will help you create a new React Native app that uses the New Architecture.",source:"@site/../cndocs/the-new-architecture/use-app-template.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/use-app-template",permalink:"/docs/next/the-new-architecture/use-app-template",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/the-new-architecture/use-app-template.md",tags:[],version:"current",frontMatter:{id:"use-app-template",title:"Creating a New Architecture App"},sidebar:"docs",previous:{title:"Why A New Architecture",permalink:"/docs/next/the-new-architecture/why"},next:{title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u9a7e\u9a6c\u8f66\u201d",permalink:"/docs/next/the-new-architecture/pillars"}},g={},y=[{value:"Development environment",id:"development-environment",level:2},{value:"Creating a new application",id:"creating-a-new-application",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Enable Hermes",id:"enable-hermes",level:3},{value:"Enable the New Architecture",id:"enable-the-new-architecture",level:3},{value:"Target OS",id:"target-os",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"<code>react-native run-ios</code> fails",id:"react-native-run-ios-fails",level:5},{value:"Confirming the New Architecture is in use",id:"confirming-the-new-architecture-is-in-use",level:3},{value:"Want to know more?",id:"want-to-know-more",level:3},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4}],N={toc:y};function O(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=b(b({},N),f),p(t,s({components:c,mdxType:"MDXLayout"}))),(0,a.kt)(u.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"This page will help you create a new React Native app that uses the New Architecture."),(0,a.kt)("h2",b({},{id:"development-environment"}),"Development environment"),(0,a.kt)("p",null,"Before continuing, make sure you've followed all the steps in ",(0,a.kt)("a",b({parentName:"p"},{href:"/docs/next/environment-setup"}),"Setting up the development environment"),", under the ",(0,a.kt)("strong",{parentName:"p"},"React Native CLI Quickstart")," tab."),(0,a.kt)("p",null,"If following the setup guide, stop when you reach the section ",(0,a.kt)("strong",{parentName:"p"},"Running your React Native Application"),", and resume following this guide."),(0,a.kt)("admonition",b({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"If you're using Expo, you can't enable the New Architecture at the moment, and will have to wait for a future release of the Expo SDK.")),(0,a.kt)("h2",b({},{id:"creating-a-new-application"}),"Creating a new application"),(0,a.kt)(l.ZP,{mdxType:"RemoveGlobalCLI"}),(0,a.kt)("p",null,"If you already have your development environment set up, create a new React Native project from the template:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-shell"}),"npx react-native init AwesomeProject\n")),(0,a.kt)("admonition",b({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The New Architecture is available in React Native version 0.68 or later.")),(0,a.kt)("h2",b({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Follow the steps below to enable the New Architecture and build the app."),(0,a.kt)("h3",b({},{id:"enable-hermes"}),"Enable Hermes"),(0,a.kt)("p",null,"Hermes is an open-source JavaScript engine optimized for React Native. ",(0,a.kt)("a",b({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/4"}),"Hermes will be the default engine in the future"),", and we highly recommend you use it."),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",b({parentName:"p"},{href:"/docs/next/hermes"}),"follow the instructions on the React Native website")," in order to enable Hermes in your application."),(0,a.kt)("h3",b({},{id:"enable-the-new-architecture"}),"Enable the New Architecture"),(0,a.kt)("h4",b({},{id:"target-os"}),"Target OS"),(0,a.kt)(r.Z,{groupId:"platform",defaultValue:i.Z.defaultPlatform,values:i.Z.platforms,className:"pill-tabs",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ios")," directory and run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-shell"}),"# from `ios` directory\nbundle install && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n")),(0,a.kt)("p",null,"Then build and run the app as usual:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-shell"}),"yarn ios\n")),(0,a.kt)("admonition",b({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"You will need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," each time a dependency with native code changes. Make this command easier to run by adding it to ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",b({parentName:"pre"},{}),'"scripts": {\n  "pod-install": "RCT_NEW_ARCH_ENABLED=1 bundle exec pod install"\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"and run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn pod-install"),". Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle install")," does not need to run a second time, as long as the Gemfile has not changed.")),(0,a.kt)("h4",b({},{id:"troubleshooting"}),"Troubleshooting"),(0,a.kt)("h5",b({},{id:"react-native-run-ios-fails"}),(0,a.kt)("inlineCode",{parentName:"h5"},"react-native run-ios")," fails"),(0,a.kt)("p",null,"If you see a build failure from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native run-ios"),", there may be cached files from a previous build with the old architecture. Clean the build cache and try again:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the project ",(0,a.kt)("inlineCode",{parentName:"li"},"ios/project.xcworkspace")," in Xcode"),(0,a.kt)("li",{parentName:"ol"},"In XCode, choose Product > Clean Build Folder"),(0,a.kt)("li",{parentName:"ol"},"In the project directory, remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"ios/Podfile.lock")," file and ",(0,a.kt)("inlineCode",{parentName:"li"},"ios/Pods")," directory: ",(0,a.kt)("inlineCode",{parentName:"li"},"rm -rf ios/Podfile.lock ios/Pods")),(0,a.kt)("li",{parentName:"ol"},"Re-run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn pod-install")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn ios")))),(0,a.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"newArchEnabled")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," by ",(0,a.kt)("strong",{parentName:"p"},"either"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changing the corresponding line in ",(0,a.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")),(0,a.kt)("li",{parentName:"ul"},"Setting the environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"ORG_GRADLE_PROJECT_newArchEnabled=true"))),(0,a.kt)("p",null,"Then build and run the app as usual:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-shell"}),"yarn android\n")),(0,a.kt)("admonition",b({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"You may notice longer build times with the New Architecture, due to additional step of C++ compilation with the Android NDK. To improve your build time, see ",(0,a.kt)("a",b({parentName:"p"},{href:"/docs/next/build-speed"}),"Speeding Up Your Build Phase"),".")))),(0,a.kt)("h3",b({},{id:"confirming-the-new-architecture-is-in-use"}),"Confirming the New Architecture is in use"),(0,a.kt)("p",null,"After you build and run the app, when Metro serves the JavaScript bundle, you should see ",(0,a.kt)("inlineCode",{parentName:"p"},'"fabric": true')," in the Metro logs:"),(0,a.kt)("img",{src:"/docs/assets/metro-new-arch.png",alt:"Metro shows fabric: true",width:"600"}),(0,a.kt)("h3",b({},{id:"want-to-know-more"}),"Want to know more?"),(0,a.kt)("p",null,"If you'd like to view the code changes relevant for the New Architecture, take a look at the ",(0,a.kt)("a",b({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/?from=0.67.4&to=0.68.0"}),"upgrade helper from version 0.67.4 to 0.68.0"),". Files that were added for the New Architecture are marked with a yellow banner."),(0,a.kt)("p",null,"For further explanations of what each file is doing, check out these guides to walk through the changes step-by-step:"),(0,a.kt)("h4",b({},{id:"android"}),"Android"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",b({parentName:"li"},{href:"/docs/next/new-architecture-app-modules-android"}),"Enabling TurboModules on Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",b({parentName:"li"},{href:"/docs/next/new-architecture-app-renderer-android"}),"Enabling Fabric on Android"))),(0,a.kt)("h4",b({},{id:"ios"}),"iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",b({parentName:"li"},{href:"/docs/next/new-architecture-app-modules-ios"}),"Enabling TurboModules on iOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",b({parentName:"li"},{href:"/docs/next/new-architecture-app-renderer-ios"}),"Enabling Fabric on iOS"))))}O.isMDXComponent=!0}}]);