"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[82843],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return v},default:function(){return m}});var o=n(35318),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"roottag",title:"RootTag"},g=void 0,f={unversionedId:"roottag",id:"version-0.65/roottag",title:"RootTag",description:"RootTag is an opaque identifier assigned to the native root view of your React Native surface \u2014 i.e. the ReactRootView or RCTRootView instance for Android or iOS respectively. In short, it is a surface identifier.",source:"@site/versioned_docs/version-0.65/roottag.md",sourceDirName:".",slug:"/roottag",permalink:"/docs/0.65/roottag",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/roottag.md",tags:[],version:"0.65",frontMatter:{id:"roottag",title:"RootTag"},sidebar:"version-0.65/api",previous:{title:"PlatformColor",permalink:"/docs/0.65/platformcolor"},next:{title:"Share",permalink:"/docs/0.65/share"}},v=[{value:"When to use a RootTag?",id:"when-to-use-a-roottag",children:[],level:2},{value:"How to access the RootTag... if you need it",id:"how-to-access-the-roottag-if-you-need-it",children:[{value:"Breaking Change in 0.65",id:"breaking-change-in-065",children:[],level:3},{value:"Breaking Change in 0.66",id:"breaking-change-in-066",children:[],level:3}],level:2},{value:"Future Plans",id:"future-plans",children:[],level:2}],h={toc:v};function m(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=u(u({},h),p),r(t,i({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," is an opaque identifier assigned to the native root view of your React Native surface \u2014 i.e. the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactRootView")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTRootView")," instance for Android or iOS respectively. In short, it is a surface identifier."),(0,o.kt)("h2",u({},{id:"when-to-use-a-roottag"}),"When to use a RootTag?"),(0,o.kt)("p",null,"For most React Native developers, you likely won\u2019t need to deal with ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag"),"s."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RootTag"),"s are useful for when an app renders ",(0,o.kt)("strong",{parentName:"p"},"multiple React Native root views")," and you need to handle native API calls differently depending on the surface. An example of this is when an app is using native navigation and each screen is a separate React Native root view."),(0,o.kt)("p",null,"In native navigation, every React Native root view is rendered in a platform\u2019s navigation view (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Activity")," for Android, ",(0,o.kt)("inlineCode",{parentName:"p"},"UINavigationViewController")," for iOS). By this, you are able to leverage the navigation paradigms of the platform such as native look and feel and navigation transitions. The functionality to interact with the native navigation APIs can be exposed to React Native via a ",(0,o.kt)("a",u({parentName:"p"},{href:"native-modules-intro"}),"native module"),"."),(0,o.kt)("p",null,"For example, to update the title bar of a screen, you would call the navigation module\u2019s API ",(0,o.kt)("inlineCode",{parentName:"p"},'setTitle("Updated Title")'),", but it would need to know which screen in the stack to update. A ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," is necessary here to identify the root view and its hosting container."),(0,o.kt)("p",null,"Another use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," is when your app needs to attribute a certain JavaScript call to native based on its originating root view. A ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," is necessary to differentiate the source of the call from different surfaces."),(0,o.kt)("h2",u({},{id:"how-to-access-the-roottag-if-you-need-it"}),"How to access the RootTag... if you need it"),(0,o.kt)("p",null,"In versions 0.65 and below, RootTag is accessed via a ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/v0.64.1/Libraries/ReactNative/AppContainer.js#L56"}),"legacy context"),". To prepare React Native for Concurrent features coming in React 18 and beyond, we are migrating to the latest ",(0,o.kt)("a",u({parentName:"p"},{href:"https://reactjs.org/docs/context.html#api"}),"Context API")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext")," in 0.66. Version 0.65 supports both the legacy context and the recommended ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext")," to allow developers time to migrate their call-sites. See the breaking changes summary."),(0,o.kt)("p",null,"How to access ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"import { RootTagContext } from 'react-native';\nimport NativeAnalytics from 'native-analytics';\nimport NativeNavigation from 'native-navigation';\n\nfunction ScreenA() {\n  const rootTag = useContext(RootTagContext);\n\n  const updateTitle = (title) => {\n    NativeNavigation.setTitle(rootTag, title);\n  };\n\n  const handleOneEvent = () => {\n    NativeAnalytics.logEvent(rootTag, 'one_event');\n  };\n\n  // ...\n}\n\nclass ScreenB extends React.Component {\n  static contextType: typeof RootTagContext = RootTagContext;\n\n  updateTitle(title) {\n    NativeNavigation.setTitle(this.context, title);\n  }\n\n  handleOneEvent() {\n    NativeAnalytics.logEvent(this.context, 'one_event');\n  }\n\n  // ...\n}\n")),(0,o.kt)("p",null,"Learn more about the Context API for ",(0,o.kt)("a",u({parentName:"p"},{href:"https://reactjs.org/docs/context.html#classcontexttype"}),"classes")," and ",(0,o.kt)("a",u({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usecontext"}),"hooks")," from the React docs."),(0,o.kt)("h3",u({},{id:"breaking-change-in-065"}),"Breaking Change in 0.65"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext")," was formerly named ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_RootTagContext")," and changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext")," in 0.65. Please update any usages of ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_RootTagContext")," in your codebase."),(0,o.kt)("h3",u({},{id:"breaking-change-in-066"}),"Breaking Change in 0.66"),(0,o.kt)("p",null,"The legacy context access to ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," will be removed and replaced by ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext"),". Beginning in 0.65, we encourage developers to proactively migrate ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," accesses to ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTagContext"),"."),(0,o.kt)("h2",u({},{id:"future-plans"}),"Future Plans"),(0,o.kt)("p",null,"With the new React Native architecture progressing, there will be future iterations to ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag"),", with the intention to keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootTag")," type opaque and prevent thrash in React Native codebases. Please do not rely on the fact that RootTag currently aliases to a number! If your app relies on RootTags, keep an eye on our version change logs, which you can find ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md"}),"here"),"."))}m.isMDXComponent=!0}}]);