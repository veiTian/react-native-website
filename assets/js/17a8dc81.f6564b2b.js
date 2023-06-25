"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[803],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=i,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var a=n(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const c={id:"react-native-gradle-plugin",title:"React Native Gradle Plugin"},g=void 0,m={unversionedId:"react-native-gradle-plugin",id:"version-0.72/react-native-gradle-plugin",title:"React Native Gradle Plugin",description:"This guide describes how to configure the React Native Gradle Plugin (often referred as RNGP), when building your React Native application for Android.",source:"@site/versioned_docs/version-0.72/react-native-gradle-plugin.md",sourceDirName:".",slug:"/react-native-gradle-plugin",permalink:"/docs/react-native-gradle-plugin",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/react-native-gradle-plugin.md",tags:[],version:"0.72",frontMatter:{id:"react-native-gradle-plugin",title:"React Native Gradle Plugin"}},h={},f=[{value:"Using the plugin",id:"using-the-plugin",level:2},{value:"Configuring the plugin",id:"configuring-the-plugin",level:2},{value:"<code>root</code>",id:"root",level:3},{value:"<code>reactNativeDir</code>",id:"reactnativedir",level:3},{value:"<code>codegenDir</code>",id:"codegendir",level:3},{value:"<code>cliFile</code>",id:"clifile",level:3},{value:"<code>debuggableVariants</code>",id:"debuggablevariants",level:3},{value:"<code>nodeExecutableAndArgs</code>",id:"nodeexecutableandargs",level:3},{value:"<code>bundleCommand</code>",id:"bundlecommand",level:3},{value:"<code>bundleConfig</code>",id:"bundleconfig",level:3},{value:"<code>bundleAssetName</code>",id:"bundleassetname",level:3},{value:"<code>entryFile</code>",id:"entryfile",level:3},{value:"<code>extraPackagerArgs</code>",id:"extrapackagerargs",level:3},{value:"<code>hermesCommand</code>",id:"hermescommand",level:3},{value:"<code>hermesFlags</code>",id:"hermesflags",level:3},{value:"Using Flavors &amp; Build Variants",id:"using-flavors--build-variants",level:2},{value:"What is the plugin doing under the hood?",id:"what-is-the-plugin-doing-under-the-hood",level:2}],k={toc:f};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},k),u),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This guide describes how to configure the ",(0,a.kt)("strong",{parentName:"p"},"React Native Gradle Plugin")," (often referred as RNGP), when building your React Native application for Android."),(0,a.kt)("h2",p({},{id:"using-the-plugin"}),"Using the plugin"),(0,a.kt)("p",null,"The React Native Gradle Plugin is distributed as a separate NPM package which is installed automatically with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,a.kt)("p",null,"The plugin is ",(0,a.kt)("strong",{parentName:"p"},"already configured")," for new projects created using ",(0,a.kt)("inlineCode",{parentName:"p"},"npx react-native init"),". You don't need to do any extra steps to install it if you created your app with this command."),(0,a.kt)("p",null,"If you're integrating React Native into an existing project, please refer to ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/integration-with-existing-apps#configuring-gradle"}),"the corresponding page"),": it contains specific instructions on how to install the plugin."),(0,a.kt)("h2",p({},{id:"configuring-the-plugin"}),"Configuring the plugin"),(0,a.kt)("p",null,"By default, the plugin will work ",(0,a.kt)("strong",{parentName:"p"},"out of the box")," with sensible defaults. You should refer to this guide and customize the behavior only if you need it."),(0,a.kt)("p",null,"To configure the plugin you can modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," block, inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'apply plugin: "com.facebook.react"\n\n/**\n * This is the configuration block to customize your React Native Android app.\n * By default you don\'t need to apply any configuration, just uncomment the lines you need.\n */\nreact {\n  // Custom configuration goes here.\n}\n')),(0,a.kt)("p",null,"Each configuration key is described below:"),(0,a.kt)("h3",p({},{id:"root"}),(0,a.kt)("inlineCode",{parentName:"h3"},"root")),(0,a.kt)("p",null,"This is the root folder of your React Native project, i.e. where the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file lives. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},".."),". You can customize it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'root = file("../")\n')),(0,a.kt)("h3",p({},{id:"reactnativedir"}),(0,a.kt)("inlineCode",{parentName:"h3"},"reactNativeDir")),(0,a.kt)("p",null,"This is the folder where the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native")," package lives. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"../node_modules/react-native"),".\nIf you're in a monorepo or using a different package manager, you can use adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"reactNativeDir")," to your setup."),(0,a.kt)("p",null,"You can customize it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'reactNativeDir = file("../node_modules/react-native")\n')),(0,a.kt)("h3",p({},{id:"codegendir"}),(0,a.kt)("inlineCode",{parentName:"h3"},"codegenDir")),(0,a.kt)("p",null,"This is the folder where the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package lives. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"../node_modules/react-native-codegen"),".\nIf you're in a monorepo or using a different package manager, you can adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"codegenDir")," to your setup."),(0,a.kt)("p",null,"You can customize it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'codegenDir = file("../node_modules/@react-native/codegen")\n')),(0,a.kt)("h3",p({},{id:"clifile"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cliFile")),(0,a.kt)("p",null,"This is the entrypoint file for the React Native CLI. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"../node_modules/react-native/cli.js"),".\nThe entrypoint file is needed as the plugin needs to invoke the CLI for bundling and creating your app."),(0,a.kt)("p",null,"If you're in a monorepo or using a different package manager, you can adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"cliFile")," to your setup.\nYou can customize it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'cliFile = file("../node_modules/react-native/cli.js")\n')),(0,a.kt)("h3",p({},{id:"debuggablevariants"}),(0,a.kt)("inlineCode",{parentName:"h3"},"debuggableVariants")),(0,a.kt)("p",null,"This is the list of variants that are debuggable (see ",(0,a.kt)("a",p({parentName:"p"},{href:"#using-variants"}),"using variants")," for more context on variants)."),(0,a.kt)("p",null,"By default the plugin is considering as ",(0,a.kt)("inlineCode",{parentName:"p"},"debuggableVariants")," only ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", while ",(0,a.kt)("inlineCode",{parentName:"p"},"release")," is not. If you have other\nvariants (like ",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lite"),", etc.) you'll need to adjust this accordingly."),(0,a.kt)("p",null,"Variants that are listed as ",(0,a.kt)("inlineCode",{parentName:"p"},"debuggableVariants")," will not come with a shipped bundle, so you'll need Metro to run them."),(0,a.kt)("p",null,"You can customize it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'debuggableVariants = ["liteDebug", "prodDebug"]\n')),(0,a.kt)("h3",p({},{id:"nodeexecutableandargs"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nodeExecutableAndArgs")),(0,a.kt)("p",null,"This is the list of node command and arguments that should be invoked for all the scripts. By default is ",(0,a.kt)("inlineCode",{parentName:"p"},"[node]")," but can be customized to add extra flags as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'nodeExecutableAndArgs = ["node"]\n')),(0,a.kt)("h3",p({},{id:"bundlecommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"bundleCommand")),(0,a.kt)("p",null,"This is the name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle")," command to be invoked when creating the bundle for your app. That's useful if you're using ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/ram-bundles-inline-requires"}),"RAM Bundles"),". By default is ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle")," but can be customized to add extra flags as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'bundleCommand = "ram-bundle"\n')),(0,a.kt)("h3",p({},{id:"bundleconfig"}),(0,a.kt)("inlineCode",{parentName:"h3"},"bundleConfig")),(0,a.kt)("p",null,"This is the path to a configuration file that will be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle --config <file>")," if provided. Default is empty (no config file will be probided). More information on bundling config files can be found ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle"}),"on the CLI documentation"),". Can be customized as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),"bundleConfig = file(../rn-cli.config.js)\n")),(0,a.kt)("h3",p({},{id:"bundleassetname"}),(0,a.kt)("inlineCode",{parentName:"h3"},"bundleAssetName")),(0,a.kt)("p",null,"This is the name of the bundle file that should be generated. Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"index.android.bundle"),". Can be customized as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'bundleAssetName = "MyApplication.android.bundle"\n')),(0,a.kt)("h3",p({},{id:"entryfile"}),(0,a.kt)("inlineCode",{parentName:"h3"},"entryFile")),(0,a.kt)("p",null,"The entry file used for bundle generation. The default is to search for ",(0,a.kt)("inlineCode",{parentName:"p"},"index.android.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),". Can be customized as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'entryFile = file("../js/MyApplication.android.js")\n')),(0,a.kt)("h3",p({},{id:"extrapackagerargs"}),(0,a.kt)("inlineCode",{parentName:"h3"},"extraPackagerArgs")),(0,a.kt)("p",null,"A list of extra flags that will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle")," command. The list of available flags is in ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle"}),"the CLI documentation"),". Default is empty. Can be customized as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),"extraPackagerArgs = []\n")),(0,a.kt)("h3",p({},{id:"hermescommand"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hermesCommand")),(0,a.kt)("p",null,"The path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hermesc")," command (the Hermes Compiler). React Native comes with a version of the Hermes compiler bundled with it, so you generally won't be needing to customize this. The plugin will use the correct compiler for your system by default."),(0,a.kt)("h3",p({},{id:"hermesflags"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hermesFlags")),(0,a.kt)("p",null,"The list of flags to pass to ",(0,a.kt)("inlineCode",{parentName:"p"},"hermesc"),". By default is ",(0,a.kt)("inlineCode",{parentName:"p"},'["-O", "-output-source-map"]'),". You can customize it as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-groovy"}),'hermesFlags = ["-O", "-output-source-map"]\n')),(0,a.kt)("h2",p({},{id:"using-flavors--build-variants"}),"Using Flavors & Build Variants"),(0,a.kt)("p",null,"When building Android apps, you might want to use ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/studio/build/build-variants#product-flavors"}),"custom flavors")," to have different versions of your app starting from the same project."),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/studio/build/build-variants"}),"official Android guide")," to configure custom build types (like ",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),") or custom flavors (like ",(0,a.kt)("inlineCode",{parentName:"p"},"full"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lite"),", etc.).\nBy default new apps are create with two build types (",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"release"),") and no custom flavors."),(0,a.kt)("p",null,"The combination of all the build types and all the flavors generates a set of ",(0,a.kt)("strong",{parentName:"p"},"build variants"),". For instance for ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"release")," build types and ",(0,a.kt)("inlineCode",{parentName:"p"},"full"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"lite")," you will have 6 build variants: ",(0,a.kt)("inlineCode",{parentName:"p"},"fullDebug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fullStaging"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fullRelease")," and so on."),(0,a.kt)("p",null,"If you're using custom variants beyond ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"release"),", you need to instruct the React Native Gradle Plugin specifying which of your variants are ",(0,a.kt)("strong",{parentName:"p"},"debuggable")," using the ",(0,a.kt)("a",p({parentName:"p"},{href:"#debuggablevariants"}),(0,a.kt)("inlineCode",{parentName:"a"},"debuggableVariants"))," configuration as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-diff"}),'apply plugin: "com.facebook.react"\n\nreact {\n+ debuggableVariants = ["fullStaging", "fullDebug"]\n}\n')),(0,a.kt)("p",null,"This is necessary because the plugin will skip the JS bundling for all the ",(0,a.kt)("inlineCode",{parentName:"p"},"debuggableVariants"),": you'll need Metro to run them. For example, if you list ",(0,a.kt)("inlineCode",{parentName:"p"},"fullStaging")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"debuggableVariants"),", you won't be able to publish it to a store as it will be missing the bundle."),(0,a.kt)("h2",p({},{id:"what-is-the-plugin-doing-under-the-hood"}),"What is the plugin doing under the hood?"),(0,a.kt)("p",null,"The React Native Gradle Plugin is responsible for configuring your Application build to ship React Native applications to production.\nThe plugin is also used inside 3rd party libraries, to run the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/the-new-architecture/pillars-codegen"}),"Codegen")," used for the New Architecture."),(0,a.kt)("p",null,"Here is a summary of the plugin responsibilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"createBundle<Variant>JsAndAssets")," task for every non debuggable variant, that is responsible of invoking the ",(0,a.kt)("inlineCode",{parentName:"li"},"bundle"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"hermesc")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"compose-source-map")," commands."),(0,a.kt)("li",{parentName:"ul"},"Setting up the proper version of the ",(0,a.kt)("inlineCode",{parentName:"li"},"com.facebook.react:react-android")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"com.facebook.react:hermes-android")," dependency, reading the React Native version from the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"react-native"),"."),(0,a.kt)("li",{parentName:"ul"},"Setting up the proper Maven repositories (Maven Central, Google Maven Repo, JSC local Maven repo, etc.) needed to consume all the necessary Maven Dependencies."),(0,a.kt)("li",{parentName:"ul"},"Setting up the NDK to let you build apps that are using the New Architecture."),(0,a.kt)("li",{parentName:"ul"},"Setting up the ",(0,a.kt)("inlineCode",{parentName:"li"},"buildConfigFields")," so that you can know at runtime if Hermes or the New Architecture are enabled."),(0,a.kt)("li",{parentName:"ul"},"Setting up the Metro DevServer Port as an Android resource so the app knows on which port to connect."),(0,a.kt)("li",{parentName:"ul"},"Invoking the ",(0,a.kt)("a",p({parentName:"li"},{href:"/docs/the-new-architecture/pillars-codegen"}),"React Native Codegen")," if a library or app is using the Codegen for the New Architecture.")))}b.isMDXComponent=!0}}]);