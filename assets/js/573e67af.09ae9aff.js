(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70103],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27623:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(29603),a=n(50120),o=(n(27378),n(35318)),i={id:"profile-hermes",title:"Profiling with Hermes"},l=void 0,s={unversionedId:"profile-hermes",id:"version-0.64/profile-hermes",isDocsHomePage:!1,title:"Profiling with Hermes",description:"You can visualize JavaScript's performance in a React Native app using Hermes. Hermes is a small and lightweight JavaScript engine optimized for running React Native on Android (you can read more about using it with React Native here. Hermes helps improve app performance and also exposes ways to analyze the performance of the JavaScript that it runs.",source:"@site/versioned_docs/version-0.64/profile-hermes.md",sourceDirName:".",slug:"/profile-hermes",permalink:"/docs/0.64/profile-hermes",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/profile-hermes.md",tags:[],version:"0.64",frontMatter:{id:"profile-hermes",title:"Profiling with Hermes"},sidebar:"version-0.64/docs",previous:{title:"Profiling",permalink:"/docs/0.64/profiling"},next:{title:"JavaScript \u73af\u5883",permalink:"/docs/0.64/javascript-environment"}},p=[{value:"Record a Hermes sampling profile",id:"record-a-hermes-sampling-profile",children:[]},{value:"Execute command from CLI",id:"execute-command-from-cli",children:[{value:"Enabling source map",id:"enabling-source-map",children:[]},{value:"Common errors",id:"common-errors",children:[]}]},{value:"Open the downloaded profile in Chrome DevTools",id:"open-the-downloaded-profile-in-chrome-devtools",children:[]},{value:"How does the Hermes Profile Transformer work?",id:"how-does-the-hermes-profile-transformer-work",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can visualize JavaScript's performance in a React Native app using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/hermes"},"Hermes"),". Hermes is a small and lightweight JavaScript engine optimized for running React Native on Android (you can ",(0,o.kt)("a",{parentName:"p",href:"hermes"},"read more about using it with React Native here"),". Hermes helps improve app performance and also exposes ways to analyze the performance of the JavaScript that it runs."),(0,o.kt)("p",null,"In this section, you will learn how to profile your React Native app running on Hermes and how to visualize the profile using ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"},"the Performance tab on Chrome DevTools")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be sure to ",(0,o.kt)("a",{parentName:"p",href:"hermes"},"enable hermes in your app")," before you get started!")),(0,o.kt)("p",null,"Follow the instructions below to get started profiling:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.64/profile-hermes#record-a-hermes-sampling-profile"},"Record a Hermes sampling profile")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.64/profile-hermes#execute-command-from-cli"},"Execute command from CLI")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.64/profile-hermes#open-the-downloaded-profile-on-chrome-devtools"},"Open the downloaded profile on Chrome DevTools"))),(0,o.kt)("h2",{id:"record-a-hermes-sampling-profile"},"Record a Hermes sampling profile"),(0,o.kt)("p",null,"To record a sampling profiler from the Developer Menu:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to your running Metro server terminal."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"d")," to open the ",(0,o.kt)("strong",{parentName:"li"},"Developer Menu.")),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Enable Sampling Profiler.")),(0,o.kt)("li",{parentName:"ol"},"Execute your JavaScript by in your app (press buttons, etc.)"),(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("strong",{parentName:"li"},"Developer Menu")," by pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"d")," again."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Disable Sampling Profiler")," to stop recording and save the sampling profiler.")),(0,o.kt)("p",null,"A toast will show the location where the sampling profiler has been saved, usually in ",(0,o.kt)("inlineCode",{parentName:"p"},"/data/user/0/com.appName/cache/*.cpuprofile")),(0,o.kt)("img",{src:"assets/HermesProfileSaved.png",height:"465",width:"250",alt:"Toast Notification of Profile saving"}),(0,o.kt)("h2",{id:"execute-command-from-cli"},"Execute command from CLI"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli"},"React Native CLI")," to convert the Hermes tracing profile to Chrome tracing profile, and then pull it to your local machine using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native profile-hermes [destinationDir]\n")),(0,o.kt)("h3",{id:"enabling-source-map"},"Enabling source map"),(0,o.kt)("p",null,"A source map is used to enhance the profile and associate trace events with the application code. You can automatically generate a source map when converting the Hermes tracing profile to a Chrome tracing profile by enabling ",(0,o.kt)("inlineCode",{parentName:"p"},"bundleInDebug")," if the app is running in development mode. This allows React Native to build the bundle during its running process. Here's how:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your app's ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," file, add:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"project.ext.react = [\n  bundleInDebug: true,\n]\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be sure to clean the build whenever you make any changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Clean the build by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd android && ./gradlew clean\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Run your app:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native run-android\n")),(0,o.kt)("h3",{id:"common-errors"},"Common errors"),(0,o.kt)("h4",{id:"adb-no-devicesemulators-found-or-adb-device-offline"},(0,o.kt)("inlineCode",{parentName:"h4"},"adb: no devices/emulators found")," or ",(0,o.kt)("inlineCode",{parentName:"h4"},"adb: device offline")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Why this happens")," The CLI cannot access the device or emulator (through adb) you are using to run the app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"How to fix")," Make sure your Android device/emulator is connected and running. The command only works when it can access adb.")),(0,o.kt)("h4",{id:"there-is-no-file-in-the-cache-directory"},(0,o.kt)("inlineCode",{parentName:"h4"},"There is no file in the cache/ directory")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Why this happens")," The CLI cannot find any ",(0,o.kt)("strong",{parentName:"li"},".cpuprofile")," file in your app's ",(0,o.kt)("strong",{parentName:"li"},"cache/")," directory. You might have forgotten to record a profile from the device."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"How to fix")," Follow the ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.64/profile-hermes#record-a-hermes-sampling-profile"},"instructions")," to enable/disable profiler from device.")),(0,o.kt)("h4",{id:"error-your_profile_namecpuprofile-is-an-empty-file"},(0,o.kt)("inlineCode",{parentName:"h4"},"Error: your_profile_name.cpuprofile is an empty file")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Why this happens")," The profile is empty, it might be because Hermes is not running correctly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"How to fix")," Make sure your app is running on the latest version of Hermes.")),(0,o.kt)("h2",{id:"open-the-downloaded-profile-in-chrome-devtools"},"Open the downloaded profile in Chrome DevTools"),(0,o.kt)("p",null,"To open the profile in Chrome DevTools:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Chrome DevTools.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Performance")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Right click and choose ",(0,o.kt)("strong",{parentName:"p"},"Load profile...")),(0,o.kt)("img",{src:"assets/openChromeProfile.png",alt:"Loading a performance profile on Chrome DevTools"}))),(0,o.kt)("h2",{id:"how-does-the-hermes-profile-transformer-work"},"How does the Hermes Profile Transformer work?"),(0,o.kt)("p",null,"The Hermes Sample Profile is of the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON object format"),", while the format that Google's DevTools supports is ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Array Format"),". (More information about the formats can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview"},"Trace Event Format Document"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface HermesCPUProfile {\n  traceEvents: SharedEventProperties[];\n  samples: HermesSample[];\n  stackFrames: { [key in string]: HermesStackFrame };\n}\n")),(0,o.kt)("p",null,"The Hermes profile has most of its information encoded into the ",(0,o.kt)("inlineCode",{parentName:"p"},"samples")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stackFrames")," properties. Each sample is a snapshot of the function call stack at that particular timestamp as each sample has a ",(0,o.kt)("inlineCode",{parentName:"p"},"sf")," property which corresponds to a function call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface HermesSample {\n  cpu: string;\n  name: string;\n  ts: string;\n  pid: number;\n  tid: string;\n  weight: string;\n  /**\n   * Will refer to an element in the stackFrames object of the Hermes Profile\n   */\n  sf: number;\n  stackFrameData?: HermesStackFrame;\n}\n")),(0,o.kt)("p",null,"The information about a function call can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"stackFrames")," which contains key-object pairs, where the key is the ",(0,o.kt)("inlineCode",{parentName:"p"},"sf")," number and the corresponding object gives us all the relevant information about the function including the ",(0,o.kt)("inlineCode",{parentName:"p"},"sf")," number of its parent function. This parent-child relationship can be traced upwards to find the information of all the functions running at a particular timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface HermesStackFrame {\n  line: string;\n  column: string;\n  funcLine: string;\n  funcColumn: string;\n  name: string;\n  category: string;\n  /**\n   * A parent function may or may not exist\n   */\n  parent?: number;\n}\n")),(0,o.kt)("p",null,"At this point, you should define a few more terms, namely:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Nodes: The objects corresponding to ",(0,o.kt)("inlineCode",{parentName:"li"},"sf")," numbers in ",(0,o.kt)("inlineCode",{parentName:"li"},"stackFrames")),(0,o.kt)("li",{parentName:"ol"},"Active Nodes: The nodes which are currently running at a particular timestamp. A node is classified as running if its ",(0,o.kt)("inlineCode",{parentName:"li"},"sf")," number is in the function call stack. This call stack can be obtained from the ",(0,o.kt)("inlineCode",{parentName:"li"},"sf")," number of the sample and tracing upwards till parent ",(0,o.kt)("inlineCode",{parentName:"li"},"sf"),"s are available")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"samples")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"stackFrames")," in tandem can then be used to generate all the start and end events at the corresponding timestamps, wherein:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start Nodes/Events: Nodes absent in the previous sample's function call stack but present in the current sample's."),(0,o.kt)("li",{parentName:"ol"},"End Nodes/Events: Nodes present in the previous sample's function call stack but absent in the current sample's.")),(0,o.kt)("img",{src:"assets/CallStackDemo.jpg",height:"800",width:"600",alt:"CallStack Terms Explained"}),(0,o.kt)("p",null,"You can now construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"flamechart")," of function calls as you have all the function information including its start and end timestamps."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hermes-profile-transformer")," can convert any profile generated using Hermes into a format that can be directly displayed in Chrome DevTools. More information about this can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/hermes-profile-transformer"}," ",(0,o.kt)("inlineCode",{parentName:"a"},"@react-native-community/hermes-profile-transformer")," ")))}c.isMDXComponent=!0}}]);