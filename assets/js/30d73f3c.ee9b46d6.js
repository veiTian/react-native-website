"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[30981],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31043:(e,t,n)=>{n.d(t,{ZP:()=>m});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const u={toc:[]};function m(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},u),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("admonition",c({},{title:"\u6ce8\u610f",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}m.isMDXComponent=!0},50803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>y,frontMatter:()=>m,metadata:()=>g,toc:()=>k});var r=n(35318),a=n(31043),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(d)for(var n of d(t))s.call(t,n)&&c(e,n,t[n]);return e};const m={id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},h=void 0,g={unversionedId:"new-architecture-app-intro",id:"version-0.71/new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",description:"There are a few prerequisites that should be addressed before the New Architecture is enabled in your application.",source:"@site/versioned_docs/version-0.71/new-architecture-app-intro.md",sourceDirName:".",slug:"/new-architecture-app-intro",permalink:"/docs/0.71/new-architecture-app-intro",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-intro.md",tags:[],version:"0.71",frontMatter:{id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},sidebar:"docs",previous:{title:"\u5728 iOS \u5e93\u4e2d\u542f\u7528",permalink:"/docs/0.71/new-architecture-library-ios"},next:{title:"\u5728 Android \u4e0a\u542f\u7528 TurboModule",permalink:"/docs/0.71/new-architecture-app-modules-android"}},f={},k=[{value:"Use a React Native &gt;= 0.68 release",id:"use-a-react-native--068-release",level:2},{value:"Android specifics",id:"android-specifics",level:3},{value:"Use Hermes",id:"use-hermes",level:2},{value:"Android",id:"android",level:3},{value:"iOS: Make the project build",id:"ios-make-the-project-build",level:2},{value:"iOS: Use Objective-C++ (<code>.mm</code> extension)",id:"ios-use-objective-c-mm-extension",level:2},{value:"iOS: TurboModules: Ensure your App Provides an <code>RCTCxxBridgeDelegate</code>",id:"ios-turbomodules-ensure-your-app-provides-an-rctcxxbridgedelegate",level:2}],b={toc:k};function y(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),c),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,r.kt)("p",null,"There are a few prerequisites that should be addressed before the New Architecture is enabled in your application."),(0,r.kt)("h2",u({},{id:"use-a-react-native--068-release"}),"Use a React Native >= 0.68 release"),(0,r.kt)("p",null,"React Native released the support for the New Architecture with the release ",(0,r.kt)("inlineCode",{parentName:"p"},"0.68.0"),"."),(0,r.kt)("p",null,"This guide is written with the expectation that you\u2019re using the latest React Native release. At the moment of writing, this is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.70.0"),". Other than this guide, you can leverage the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/"}),"upgrade helper")," to determine what other changes may be required for your project."),(0,r.kt)("p",null,"To update to the most recent version of React Native, you can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yarn add react-native@0.70.0\n")),(0,r.kt)("p",null,"Starting from React Native ",(0,r.kt)("inlineCode",{parentName:"p"},"0.69.0"),", you may also need to update the version of React to 18. You can do so by using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yarn add react@18.0.0\n")),(0,r.kt)("h3",u({},{id:"android-specifics"}),"Android specifics"),(0,r.kt)("p",null,"Using the New Architecture on Android has some prerequisites that you need to meet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using Gradle 7.x and Android Gradle Plugin 7.x"),(0,r.kt)("li",{parentName:"ol"},"Using the ",(0,r.kt)("strong",{parentName:"li"},"new React Gradle Plugin")),(0,r.kt)("li",{parentName:"ol"},"Building ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native")," ",(0,r.kt)("strong",{parentName:"li"},"from Source"))),(0,r.kt)("p",null,"You can update Gradle by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"cd android && ./gradlew wrapper --gradle-version 7.3.3 --distribution-type=all\n")),(0,r.kt)("p",null,"While the AGP version should be updated inside the ",(0,r.kt)("strong",{parentName:"p"},"top-level")," ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file at the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.android.tools.build:gradle")," dependency line."),(0,r.kt)("p",null,"Now, you can edit your ",(0,r.kt)("strong",{parentName:"p"},"top-level")," ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.gradle")," file to include the following line at the end of the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-groovy"}),'includeBuild(\'../node_modules/react-native-gradle-plugin\')\n\ninclude(":ReactAndroid")\nproject(":ReactAndroid").projectDir = file(\'../node_modules/react-native/ReactAndroid\')\ninclude(":ReactAndroid:hermes-engine")\nproject(":ReactAndroid:hermes-engine").projectDir = file(\'../node_modules/react-native/ReactAndroid/hermes-engine\')\n')),(0,r.kt)("p",null,"Then, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml")," file and add this line:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'android:windowSoftInputMode="adjustResize"\n+ android:exported="true">\n<intent-filter>\n')),(0,r.kt)("p",null,"Then, edit your ",(0,r.kt)("strong",{parentName:"p"},"top-level Gradle file")," to include the highlighted lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-groovy"}),'buildscript {\n    ext {\n        buildToolsVersion = "31.0.0"\n        minSdkVersion = 21\n        compileSdkVersion = 31\n        targetSdkVersion = 31\n        if (System.properties[\'os.arch\'] == "aarch64") {\n            // For M1 Users we need to use the NDK 24 which added support for aarch64\n            ndkVersion = "24.0.8215888"\n        } else {\n            // Otherwise we default to the side-by-side NDK version from AGP.\n            ndkVersion = "21.4.7075529"\n        }\n    }\n\n    // ...\n    dependencies {\n        // Make sure that AGP is at least at version 7.x\n        classpath("com.android.tools.build:gradle:7.2.0")\n\n        // Add those lines\n        classpath("com.facebook.react:react-native-gradle-plugin")\n        classpath("de.undercouch:gradle-download-task:4.1.2")\n    }\n}\n')),(0,r.kt)("p",null,"Edit your ",(0,r.kt)("strong",{parentName:"p"},"module-level")," ",(0,r.kt)("strong",{parentName:"p"},"Gradle file")," (usually ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.gradle[.kts]"),") to include the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'// ...\n\napply plugin: "com.android.application"\n\n// ...\n\nif (enableHermes) {\n-    def hermesPath = "../../node_modules/hermes-engine/android/";\n-    debugImplementation files(hermesPath + "hermes-debug.aar")\n-    releaseImplementation files(hermesPath + "hermes-release.aar")\n+    //noinspection GradleDynamicVersion\n+    implementation("com.facebook.react:hermes-engine:+") { // From node_modules\n+        exclude group:\'com.facebook.fbjni\'\n+    }\n} else {\n\n// ...\n\n+ configurations.all {\n+     resolutionStrategy.dependencySubstitution {\n+         substitute(module("com.facebook.react:react-native"))\n+                 .using(project(":ReactAndroid"))\n+                 .because("On New Architecture we\'re building React Native from source")\n+         substitute(module("com.facebook.react:hermes-engine"))\n+                .using(project(":ReactAndroid:hermes-engine"))\n+                .because("On New Architecture we\'re building Hermes from source")\n+     }\n+ }\n\n// Run this once to be able to run the application with BUCK\n// puts all compile dependencies into folder libs for BUCK to use\ntask copyDownloadableDepsToLibs(type: Copy) {\n\n// ...\n\n+ def isNewArchitectureEnabled() {\n+     // To opt-in for the New Architecture, you can either:\n+     // - Set `newArchEnabled` to true inside the `gradle.properties` file\n+     // - Invoke gradle with `-newArchEnabled=true`\n+     // - Set an environment variable `ORG_GRADLE_PROJECT_newArchEnabled=true`\n+     return project.hasProperty("newArchEnabled") && project.newArchEnabled == "true"\n+ }\n')),(0,r.kt)("p",null,"Finally, it\u2019s time to update your project to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," dependency from source, rather than using a precompiled artifact from the NPM package. This is needed as the later setup will rely on building the native code from source."),(0,r.kt)("p",null,"Let\u2019s edit your ",(0,r.kt)("strong",{parentName:"p"},"module-level")," ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," (the one inside ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," folder) and change the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'dependencies {\n-  implementation "com.facebook.react:react-native:+"  // From node_modules\n+  implementation project(":ReactAndroid")  // From node_modules\n')),(0,r.kt)("h2",u({},{id:"use-hermes"}),"Use Hermes"),(0,r.kt)("p",null,"Hermes is an open-source JavaScript engine optimized for React Native. Hermes is enabled by default and you have to explicitly disable it if you want to use JSC."),(0,r.kt)("p",null,"We highly recommend using Hermes in your application. With Hermes enabled, you will be able to use the JavaScript debugger in Flipper to directly debug your JavaScript code."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",u({parentName:"p"},{href:"hermes"}),"follow the instructions on the React Native website")," to learn how to enable/disable Hermes."),(0,r.kt)("admonition",u({},{title:"\u6ce8\u610f",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"iOS:")," If you opt out of using Hermes, you will need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesExecutorFactory")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"JSCExecutorFactory")," in any examples used throughout the rest of this guide.")),(0,r.kt)("h3",u({},{id:"android"}),"Android"),(0,r.kt)("p",null,"To enable Hermes in Android, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," and apply the following changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'project.ext.react = [\n-    enableHermes: true,  // clean and rebuild if changing\n+    enableHermes: true,  // clean and rebuild if changing\n]\n// ...\n\n}\n\nif (enableHermes) {\n-    def hermesPath = "../../node_modules/hermes-engine/android/";\n-    debugImplementation files(hermesPath + "hermes-debug.aar")\n-    releaseImplementation files(hermesPath + "hermes-release.aar")\n+    //noinspection GradleDynamicVersion\n+    implementation("com.facebook.react:hermes-engine:+") { // From node_modules\n+        exclude group:\'com.facebook.fbjni\'\n+    }\n} else {\n')),(0,r.kt)("p",null,"Moreover, you'll need to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"proguard-rules"),", adding the following ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n")),(0,r.kt)("p",null,"After that, remember to cleanup the project, running"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"cd android\n./gradlew clean\n")),(0,r.kt)("h2",u({},{id:"ios-make-the-project-build"}),"iOS: Make the project build"),(0,r.kt)("p",null,"After upgrading the project, there are a few changes you need to apply:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fix an API change in the ",(0,r.kt)("inlineCode",{parentName:"li"},"AppDelegate.m"),". Open this file and apply this change:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'#if DEBUG\n-       return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];\n+       return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];\n#else\n')),(0,r.kt)("ol",u({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Target the proper iOS version. Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Podfile")," and apply this change:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"- platform :ios, '11.0'\n+ platform :ios, '12.4'\n")),(0,r.kt)("ol",u({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Create an ",(0,r.kt)("inlineCode",{parentName:"li"},".xcode.env")," file to export the locaion of the NODE_BINARY. Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"ios")," folder and run this command:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"echo 'export NODE_BINARY=$(command -v node)' > .xcode.env\n")),(0,r.kt)("p",null,"If you need it, you can also open the file and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"$(command -v node)")," with the path to the node executable.\nReact Native supports also a local version of this file ",(0,r.kt)("inlineCode",{parentName:"p"},".xcode.env.local"),". This file is not synced with the repository to let you customize your local setup, if it differs from the Continuous Integration or the team one."),(0,r.kt)("h2",u({},{id:"ios-use-objective-c-mm-extension"}),"iOS: Use Objective-C++ (",(0,r.kt)("inlineCode",{parentName:"h2"},".mm")," extension)"),(0,r.kt)("p",null,"TurboModules can be written using Objective-C or C++. In order to support both cases, any source files that include C++ code should use the ",(0,r.kt)("inlineCode",{parentName:"p"},".mm")," file extension. This extension corresponds to Objective-C++, a language variant that allows for the use of a combination of C++ and Objective-C in source files."),(0,r.kt)("admonition",u({},{title:"\u63d0\u793a",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Use Xcode to rename existing files to ensure file references persist in your project. You might need to clean the build folder (",(0,r.kt)("em",{parentName:"p"},"Project \u2192 Clean Build Folder"),") before re-building the app. If the file is renamed outside of Xcode, you may need to click on the old ",(0,r.kt)("inlineCode",{parentName:"p"},".m")," file reference and Locate the new file.")),(0,r.kt)("h2",u({},{id:"ios-turbomodules-ensure-your-app-provides-an-rctcxxbridgedelegate"}),"iOS: TurboModules: Ensure your App Provides an ",(0,r.kt)("inlineCode",{parentName:"h2"},"RCTCxxBridgeDelegate")),(0,r.kt)("p",null,"In order to set up the TurboModule system, you will add some code to interact with the bridge in your AppDelegate. Before you start, go ahead and rename your AppDelegate file to use the ",(0,r.kt)("inlineCode",{parentName:"p"},".mm")," extension."),(0,r.kt)("p",null,"Now you will have your AppDelegate conform to ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTCxxBridgeDelegate"),". Start by adding the following imports at the top of your AppDelegate file:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-objc"}),"#import <reacthermes/HermesExecutorFactory.h>\n#import <React/RCTCxxBridgeDelegate.h>\n#import <React/RCTJSIExecutorRuntimeInstaller.h>\n")),(0,r.kt)("p",null,"Then, declare your app delegate as a ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTCxxBridgeDelegate")," provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-objc"}),"@interface AppDelegate () <RCTCxxBridgeDelegate> {\n  // ...\n}\n@end\n")),(0,r.kt)("p",null,"To conform to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTCxxBridgeDelegate")," protocol, you will need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsExecutorFactoryForBridge:")," method. Typically, this is where you would return a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSCExecutorFactory")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesExecutorFactory"),", and we will use it to install our TurboModules bindings later on."),(0,r.kt)("p",null,"You can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsExecutorFactoryForBridge:")," method like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-objc"}),"#pragma mark - RCTCxxBridgeDelegate\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  return std::make_unique<facebook::react::HermesExecutorFactory>(facebook::react::RCTJSIExecutorRuntimeInstaller([bridge](facebook::jsi::Runtime &runtime) {\n      if (!bridge) {\n        return;\n      }\n    })\n  );\n}\n")))}y.isMDXComponent=!0}}]);