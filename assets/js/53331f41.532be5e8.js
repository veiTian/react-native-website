"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75283],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31043:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&s(e,n,t[n]);return e};const u={toc:[]};function m(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},u),s),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}m.isMDXComponent=!0},63631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>N,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var a=n(35318),r=n(31043),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e};const m={id:"new-architecture-app-renderer-android",title:"\u5728 Android \u4e0a\u542f\u7528 Fabric"},g=void 0,y={unversionedId:"new-architecture-app-renderer-android",id:"version-0.71/new-architecture-app-renderer-android",title:"\u5728 Android \u4e0a\u542f\u7528 Fabric",description:"Make sure your application meets all the prerequisites.",source:"@site/versioned_docs/version-0.71/new-architecture-app-renderer-android.md",sourceDirName:".",slug:"/new-architecture-app-renderer-android",permalink:"/docs/0.71/new-architecture-app-renderer-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-android.md",tags:[],version:"0.71",frontMatter:{id:"new-architecture-app-renderer-android",title:"\u5728 Android \u4e0a\u542f\u7528 Fabric"},sidebar:"docs",previous:{title:"\u5728 iOS \u4e0a\u542f\u7528 TurboModule",permalink:"/docs/0.71/new-architecture-app-modules-ios"},next:{title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric",permalink:"/docs/0.71/new-architecture-app-renderer-ios"}},v={},h=[{value:"1. Provide a <code>JSIModulePackage</code> inside your <code>ReactNativeHost</code>",id:"1-provide-a-jsimodulepackage-inside-your-reactnativehost",level:2},{value:"2. Make sure your call <code>setIsFabric</code> on your Activity\u2019s <code>ReactRootView</code>",id:"2-make-sure-your-call-setisfabric-on-your-activitys-reactrootview",level:2},{value:"Migrating Android ViewManagers",id:"migrating-android-viewmanagers",level:2},{value:"JavaScript changes",id:"javascript-changes",level:3},{value:"Native/Java Changes",id:"nativejava-changes",level:3},{value:"Native/C++ Changes",id:"nativec-changes",level:3}],k={toc:h};function N(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},k),d),o(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)(r.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"Make sure your application meets all the ",(0,a.kt)("a",u({parentName:"p"},{href:"new-architecture-app-intro"}),"prerequisites"),"."),(0,a.kt)("h2",u({},{id:"1-provide-a-jsimodulepackage-inside-your-reactnativehost"}),"1. Provide a ",(0,a.kt)("inlineCode",{parentName:"h2"},"JSIModulePackage")," inside your ",(0,a.kt)("inlineCode",{parentName:"h2"},"ReactNativeHost")),(0,a.kt)("p",null,"In order to enable Fabric in your app, you would need to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSIModulePackage")," inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNativeHost"),". If you followed the TurboModule section of this guide, you probably already know where to find your ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNativeHost"),". If not, you can locate your ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," by searching for the ",(0,a.kt)("inlineCode",{parentName:"p"},"getReactNativeHost()"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," is usually located inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," class."),(0,a.kt)("p",null,"Once you located it, you need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"getJSIModulePackage")," method as from the snippet below:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java",metastring:"title='MyApplication.java'",title:"'MyApplication.java'"}),"public class MyApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost mReactNativeHost =\n    new ReactNativeHost(this) {\n\n      // Add those lines:\n      @Nullable\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new JSIModulePackage() {\n          @Override\n          public List<JSIModuleSpec> getJSIModules(\n              final ReactApplicationContext reactApplicationContext,\n              final JavaScriptContextHolder jsContext) {\n            final List<JSIModuleSpec> specs = new ArrayList<>();\n            specs.add(new JSIModuleSpec() {\n              @Override\n              public JSIModuleType getJSIModuleType() {\n                return JSIModuleType.UIManager;\n              }\n\n              @Override\n              public JSIModuleProvider<UIManager> getJSIModuleProvider() {\n                final ComponentFactory componentFactory = new ComponentFactory();\n                CoreComponentsRegistry.register(componentFactory);\n                final ReactInstanceManager reactInstanceManager = getReactInstanceManager();\n\n                ViewManagerRegistry viewManagerRegistry =\n                    new ViewManagerRegistry(\n                        reactInstanceManager.getOrCreateViewManagers(\n                            reactApplicationContext));\n\n                return new FabricJSIModuleProvider(\n                    reactApplicationContext,\n                    componentFactory,\n                    new EmptyReactNativeConfig(),\n                    viewManagerRegistry);\n              }\n            });\n            return specs;\n          }\n        };\n      }\n    };\n}\n")),(0,a.kt)("h2",u({},{id:"2-make-sure-your-call-setisfabric-on-your-activitys-reactrootview"}),"2. Make sure your call ",(0,a.kt)("inlineCode",{parentName:"h2"},"setIsFabric")," on your Activity\u2019s ",(0,a.kt)("inlineCode",{parentName:"h2"},"ReactRootView")),(0,a.kt)("p",null,"Inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"Activity")," class, you need to make sure you\u2019re calling ",(0,a.kt)("inlineCode",{parentName:"p"},"setIsFabric")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactRootView"),".\nIf you don\u2019t have a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactActivityDelegate")," you might need to create one."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"public class MainActivity extends ReactActivity {\n\n  // Add the Activity Delegate, if you don't have one already.\n  public static class MainActivityDelegate extends ReactActivityDelegate {\n\n    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {\n      super(activity, mainComponentName);\n    }\n\n    @Override\n    protected ReactRootView createRootView() {\n      ReactRootView reactRootView = new ReactRootView(getContext());\n\n      // Make sure to call setIsFabric(true) on your ReactRootView\n      reactRootView.setIsFabric(true);\n      return reactRootView;\n    }\n  }\n\n  // Make sure to override the `createReactActivityDelegate()` method.\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new MainActivityDelegate(this, getMainComponentName());\n  }\n}\n")),(0,a.kt)("p",null,"The crucial part in this code is the ",(0,a.kt)("inlineCode",{parentName:"p"},"reactRootView.setIsFabric(true)")," which will enable the new renderer for this Activity."),(0,a.kt)("p",null,"You can now verify that everything works correctly by running your android app:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")),(0,a.kt)("p",null,"In your Metro terminal log, you will now see the following log to confirm that Fabric is running correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),'BUNDLE ./App.js\nLOG Running "App" with {"fabric":true,"initialProps":{},"rootTag":1}\n')),(0,a.kt)("h2",u({},{id:"migrating-android-viewmanagers"}),"Migrating Android ViewManagers"),(0,a.kt)("p",null,"First, make sure you followed the instructions to ",(0,a.kt)("a",u({parentName:"p"},{href:"#enabling-the-new-renderer-fabric-in-your-android-application"}),"Enabling the New Renderer (Fabric) in Your Android Application"),". Plus we will also assume that you followed the instructions from ",(0,a.kt)("a",u({parentName:"p"},{href:"#enabling-the-new-nativemodule-system-turbomodule-in-your-android-application"}),"Enabling the New NativeModule System (TurboModule) in Your Android Application")," as the Makefile (",(0,a.kt)("inlineCode",{parentName:"p"},"Android.mk"),") and other native builds setup steps are presented over there and won\u2019t be repeated here."),(0,a.kt)("h3",u({},{id:"javascript-changes"}),"JavaScript changes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure your other JS changes are ready to go by following Preparing your JavaScript codebase for the new React Native Renderer (Fabric)"),(0,a.kt)("li",{parentName:"ol"},"Replace the call to ",(0,a.kt)("inlineCode",{parentName:"li"},"requireNativeComponent")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"codegenNativeComponent"),". This tells the JS codegen to start generating the native implementation of the component, consisting of C++ and Java classes. This is how it looks for the WebView component:")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\n// babel-plugin-codegen will replace the function call to use NativeComponentRegistry\n// 'RCTWebView' is interopped by RCTFabricComponentsPlugins\n\nexport default (codegenNativeComponent<NativeProps>(\n  'RCTWebView',\n): HostComponent<NativeProps>);\n")),(0,a.kt)("ol",u({},{start:4}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"[Flow users]")," Make sure your native component has Flow types for its props, since the JS codegen uses these types to generate the type-safe native implementation of the component. The codegen generates C++ classes during the build time, which guarantees that the native implementation is always up-to-date with its JS interface. Use ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/Libraries/Types/CodegenTypes.js#L28-L30"}),"these c++ compatible types"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts",metastring:'title="RNTMyNativeViewNativeComponent.js"',title:'"RNTMyNativeViewNativeComponent.js"'}),"import type {Int32} from 'react-native/Libraries/Types/CodegenTypes';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\nimport type {HostComponent} from 'react-native';\nimport type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';\n\ntype NativeProps = $ReadOnly<{|\n  ...ViewProps, // This is required.\n  someNumber: Int32,\n|}>;\n\n[...]\n\nexport default (codegenNativeComponent<NativeProps>(\n  'RNTMyNativeView',\n): HostComponent<NativeProps>);\n")),(0,a.kt)("ol",u({},{start:5}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"[TypeScript users]")," We are currently investigating a support for TypeScript.")),(0,a.kt)("h3",u({},{id:"nativejava-changes"}),"Native/Java Changes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Update (or Create) your ViewManager to use the generated classes from the Codegen."))),(0,a.kt)("p",null,"Specifically you will have to implement the generated ",(0,a.kt)("strong",{parentName:"p"},"ViewManagerInterface")," and to pass events to the generated ",(0,a.kt)("strong",{parentName:"p"},"ViewManagerDelegate."),"\nYour ViewManager could follow this structure. The MyNativeView class in this example is an Android View implementation (like a subclass of LinearLayout, Button, TextView, etc.)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java",metastring:"title='MyNativeViewManager.java'",title:"'MyNativeViewManager.java'"}),'// View manager for MyNativeView components.\n@ReactModule(name = MyNativeViewManager.REACT_CLASS)\npublic class MyNativeViewManager extends SimpleViewManager<MyNativeView>\n        implements RNTMyNativeViewManagerInterface<MyNativeView> {\n\n  public static final String REACT_CLASS = "RNTMyNativeView";\n\n  private final ViewManagerDelegate<MyNativeView> mDelegate;\n\n  public MyNativeViewManager() {\n    mDelegate = new RNTMyNativeViewManagerDelegate<>(this);\n  }\n\n  @Nullable\n  @Override\n  protected ViewManagerDelegate<MyNativeView> getDelegate() {\n    return mDelegate;\n  }\n\n  @NonNull\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @NonNull\n  @Override\n  protected MyNativeView createViewInstance(@NonNull ThemedReactContext reactContext) {\n    return new MyNativeView(reactContext);\n  }\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add your ViewManager to one of the Packages loaded by your Application."))),(0,a.kt)("p",null,"Specifically inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," , update ",(0,a.kt)("inlineCode",{parentName:"p"},"getPackages")," method to include the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"public class MyApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n    @Override\n    public boolean getUseDeveloperSupport() { /* ... */ }\n\n    @Override\n    protected List<ReactPackage> getPackages() {\n      List<ReactPackage> packages = new PackageList(this).getPackages();\n\n      // ... other packages or `TurboReactPackage added` here...\n\n      // Add those lines.\n      packages.add(new ReactPackage() {\n        @NonNull\n        @Override\n        public List<NativeModule> createNativeModules(\n            @NonNull ReactApplicationContext reactContext) {\n          return Collections.emptyList();\n        }\n\n        @NonNull\n        @Override\n        public List<ViewManager> createViewManagers(\n            @NonNull ReactApplicationContext reactContext) {\n          // Your ViewManager is returned here.\n          return Collections.singletonList(new MyNativeViewManager());\n        }\n      });\n      return packages;\n    }\n  };\n}\n")),(0,a.kt)("ol",u({},{start:3}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add a Fabric Component Registry"))),(0,a.kt)("p",null,"You need to create a new component Registry that will allow you to ",(0,a.kt)("strong",{parentName:"p"},"register")," your components to be discovered by Fabric. Let\u2019s create the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponentsRegistry")," file with the following content."),(0,a.kt)("p",null,"As you can see, some methods are ",(0,a.kt)("inlineCode",{parentName:"p"},"native()")," which we will implement in C++ in the following paragraph."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'package com.awesomeproject;\n\nimport com.facebook.jni.HybridData;\nimport com.facebook.proguard.annotations.DoNotStrip;\nimport com.facebook.react.fabric.ComponentFactory;\nimport com.facebook.soloader.SoLoader;\n\n@DoNotStrip\npublic class MyComponentsRegistry {\n  static {\n    SoLoader.loadLibrary("fabricjni");\n  }\n\n  @DoNotStrip private final HybridData mHybridData;\n\n  @DoNotStrip\n  private native HybridData initHybrid(ComponentFactory componentFactory);\n\n  @DoNotStrip\n  private MyComponentsRegistry(ComponentFactory componentFactory) {\n    mHybridData = initHybrid(componentFactory);\n  }\n\n  @DoNotStrip\n  public static MyComponentsRegistry register(ComponentFactory componentFactory) {\n    return new MyComponentsRegistry(componentFactory);\n  }\n}\n')),(0,a.kt)("ol",u({},{start:4}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Register your custom Fabric Component Registry"))),(0,a.kt)("p",null,"Finally, let\u2019s edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"getJSIModulePackage")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," to also register your Component Registry alongside the Core one:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"public class MyApplication extends Application implements ReactApplication {\n\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n    @Nullable\n    @Override\n    protected JSIModulePackage getJSIModulePackage() {\n      return new JSIModulePackage() {\n        @Override\n        public List<JSIModuleSpec> getJSIModules(\n                final ReactApplicationContext reactApplicationContext,\n                final JavaScriptContextHolder jsContext) {\n          final List<JSIModuleSpec> specs = new ArrayList<>();\n          specs.add(new JSIModuleSpec() {\n            // ...\n\n            @Override\n            public JSIModuleProvider<UIManager> getJSIModuleProvider() {\n              final ComponentFactory componentFactory = new ComponentFactory();\n              CoreComponentsRegistry.register(componentFactory);\n\n              // Add this line just below CoreComponentsRegistry.register\n              MyComponentsRegistry.register(componentFactory);\n\n              // ...\n            }\n          });\n          return specs;\n        }\n      };\n    }\n  };\n}\n")),(0,a.kt)("h3",u({},{id:"nativec-changes"}),"Native/C++ Changes"),(0,a.kt)("p",null,"It\u2019s now time to provide an implementation for your ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponentsRegistry")," in C++:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create a header file: ",(0,a.kt)("inlineCode",{parentName:"strong"},"MyComponentsRegistry.h")))),(0,a.kt)("p",null,"The file should be placed inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder.\nPlease note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"kJavaDescriptor")," should be adapted to follow the package name you picked for your project."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:'title="MyComponentsRegistry.h"',title:'"MyComponentsRegistry.h"'}),'#pragma once\n\n#include <ComponentFactory.h>\n#include <fbjni/fbjni.h>\n#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>\n#include <react/renderer/componentregistry/ComponentDescriptorRegistry.h>\n\nnamespace facebook {\nnamespace react {\n\nclass MyComponentsRegistry\n    : public facebook::jni::HybridClass<MyComponentsRegistry> {\n  public:\n  constexpr static auto kJavaDescriptor =\n      "Lcom/awesomeproject/MyComponentsRegistry;";\n\n  static void registerNatives();\n\n  MyComponentsRegistry(ComponentFactory *delegate);\n\n  private:\n  friend HybridBase;\n\n  static std::shared_ptr<ComponentDescriptorProviderRegistry const>\n  sharedProviderRegistry();\n\n  const ComponentFactory *delegate_;\n\n  static jni::local_ref<jhybriddata> initHybrid(\n      jni::alias_ref<jclass>,\n      ComponentFactory *delegate);\n};\n\n} // namespace react\n} // namespace facebook\n')),(0,a.kt)("ol",u({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create an implementation file: ",(0,a.kt)("inlineCode",{parentName:"strong"},"MyComponentsRegistry.cpp")))),(0,a.kt)("p",null,"The file should be placed inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder alongside `MyComponentsRegistry.h"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:'title="MyComponentsRegistry.cpp"',title:'"MyComponentsRegistry.cpp"'}),'#include "MyComponentsRegistry.h"\n\n#include <CoreComponentsRegistry.h>\n#include <fbjni/fbjni.h>\n#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>\n#include <react/renderer/components/rncore/ComponentDescriptors.h>\n#include <react/renderer/components/samplelibrary/ComponentDescriptors.h>\n\nnamespace facebook {\nnamespace react {\n\nMyComponentsRegistry::MyComponentsRegistry(\n    ComponentFactory *delegate)\n    : delegate_(delegate) {}\n\nstd::shared_ptr<ComponentDescriptorProviderRegistry const>\nMyComponentsRegistry::sharedProviderRegistry() {\n  auto providerRegistry = CoreComponentsRegistry::sharedProviderRegistry();\n\n  providerRegistry->add(concreteComponentDescriptorProvider<\n                        RNTMyNativeViewComponentDescriptor>());\n\n  return providerRegistry;\n}\n\njni::local_ref<MyComponentsRegistry::jhybriddata>\nMyComponentsRegistry::initHybrid(\n    jni::alias_ref<jclass>,\n    ComponentFactory *delegate) {\n  auto instance = makeCxxInstance(delegate);\n\n  auto buildRegistryFunction =\n      [](EventDispatcher::Weak const &eventDispatcher,\n          ContextContainer::Shared const &contextContainer)\n      -> ComponentDescriptorRegistry::Shared {\n    auto registry = MyComponentsRegistry::sharedProviderRegistry()\n                        ->createComponentDescriptorRegistry(\n                            {eventDispatcher, contextContainer});\n\n    auto mutableRegistry =\n        std::const_pointer_cast<ComponentDescriptorRegistry>(registry);\n\n    mutableRegistry->setFallbackComponentDescriptor(\n        std::make_shared<UnimplementedNativeViewComponentDescriptor>(\n            ComponentDescriptorParameters{\n                eventDispatcher, contextContainer, nullptr}));\n\n    return registry;\n  };\n\n  delegate->buildRegistryFunction = buildRegistryFunction;\n  return instance;\n}\n\nvoid MyComponentsRegistry::registerNatives() {\n  registerHybrid({\n      makeNativeMethod("initHybrid", MyComponentsRegistry::initHybrid),\n  });\n}\n\n} // namespace react\n} // namespace facebook\n')),(0,a.kt)("ol",u({},{start:4}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Load your file in the OnLoad.cpp"))),(0,a.kt)("p",null,"If you followed the TurboModule instructions, you should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"OnLoad.cpp")," file inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder. There you should add a line to load the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponentsRegistry")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:'title="OnLoad.cpp"',title:'"OnLoad.cpp"'}),'#include <fbjni/fbjni.h>\n#include "MyApplicationTurboModuleManagerDelegate.h"\n// Add this import\n#include "MyComponentsRegistry.h"\n\nJNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *) {\n  return facebook::jni::initialize(vm, [] {\n    facebook::react::MyApplicationTurboModuleManagerDelegate::registerNatives();\n\n    // Add this line\n    facebook::react::MyComponentsRegistry::registerNatives();\n  });\n}\n')),(0,a.kt)("p",null,"You can now verify that everything works correctly by running your android app:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")))}N.isMDXComponent=!0}}]);