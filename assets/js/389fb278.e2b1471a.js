"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87277],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>C});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),C=r,m=d["".concat(s,".").concat(C)]||d[C]||u[C]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>y,frontMatter:()=>C,metadata:()=>k,toc:()=>f});var a=n(35318),r=n(54818),o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const C={id:"direct-manipulation",title:"\u76f4\u63a5\u64cd\u4f5c"},m=void 0,k={unversionedId:"direct-manipulation",id:"version-0.71/direct-manipulation",title:"\u76f4\u63a5\u64cd\u4f5c",description:"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u76f4\u63a5\u6539\u52a8\u7ec4\u4ef6\u5e76\u89e6\u53d1\u5c40\u90e8\u7684\u5237\u65b0\uff0c\u4f46\u4e0d\u4f7f\u7528 state \u6216\u662f props\u3002\u8b6c\u5982\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528 React \u5e93\uff0c\u6709\u65f6\u5019\u4f1a\u9700\u8981\u76f4\u63a5\u4fee\u6539\u4e00\u4e2a DOM \u8282\u70b9\uff0c\u800c\u5728\u624b\u673a App \u4e2d\u64cd\u4f5c View \u65f6\u4e5f\u4f1a\u78b0\u5230\u540c\u6837\u7684\u60c5\u51b5\u3002\u5728 React Native \u4e2d\uff0csetNativeProps\u5c31\u662f\u7b49\u4ef7\u4e8e\u76f4\u63a5\u64cd\u4f5c DOM \u8282\u70b9\u7684\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-0.71/direct-manipulation.md",sourceDirName:".",slug:"/direct-manipulation",permalink:"/docs/0.71/direct-manipulation",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/direct-manipulation.md",tags:[],version:"0.71",frontMatter:{id:"direct-manipulation",title:"\u76f4\u63a5\u64cd\u4f5c"},sidebar:"docs",previous:{title:"iOS \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/0.71/native-components-ios"},next:{title:"\u65b0\u67b6\u6784\u4ecb\u7ecd",permalink:"/docs/0.71/the-new-architecture/landing-page"}},v={},f=[{value:"setNativeProps \u4e0e TouchableOpacity",id:"setnativeprops-\u4e0e-touchableopacity",level:2},{value:"\u590d\u5408\u7ec4\u4ef6\u4e0e setNativeProps",id:"\u590d\u5408\u7ec4\u4ef6\u4e0e-setnativeprops",level:2},{value:"\u5c06 setNativeProps \u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6",id:"\u5c06-setnativeprops-\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6",level:4},{value:"setNativeProps to clear TextInput value",id:"setnativeprops-to-clear-textinput-value",level:2},{value:"setNativeProps \u4e0e shouldComponentUpdate",id:"setnativeprops-\u4e0e-shouldcomponentupdate",level:2},{value:"\u5176\u4ed6\u539f\u751f\u65b9\u6cd5",id:"\u5176\u4ed6\u539f\u751f\u65b9\u6cd5",level:2},{value:"measure(callback)",id:"measurecallback",level:3},{value:"measureInWindow(callback)",id:"measureinwindowcallback",level:3},{value:"measureLayout(relativeToNativeComponentRef, onSuccess, onFail)",id:"measurelayoutrelativetonativecomponentref-onsuccess-onfail",level:3},{value:"focus()",id:"focus",level:3},{value:"blur()",id:"blur",level:3}],h={toc:f};function y(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),u),i(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)(r.ZP,{mdxType:"NativeDeprecated"}),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u76f4\u63a5\u6539\u52a8\u7ec4\u4ef6\u5e76\u89e6\u53d1\u5c40\u90e8\u7684\u5237\u65b0\uff0c\u4f46\u4e0d\u4f7f\u7528 state \u6216\u662f props\u3002\u8b6c\u5982\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528 React \u5e93\uff0c\u6709\u65f6\u5019\u4f1a\u9700\u8981\u76f4\u63a5\u4fee\u6539\u4e00\u4e2a DOM \u8282\u70b9\uff0c\u800c\u5728\u624b\u673a App \u4e2d\u64cd\u4f5c View \u65f6\u4e5f\u4f1a\u78b0\u5230\u540c\u6837\u7684\u60c5\u51b5\u3002\u5728 React Native \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u5c31\u662f\u7b49\u4ef7\u4e8e\u76f4\u63a5\u64cd\u4f5c DOM \u8282\u70b9\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 setNativeProps \u5462\uff1f\u5728\uff08\u4e0d\u5f97\u4e0d\uff09\u9891\u7e41\u5237\u65b0\u800c\u53c8\u9047\u5230\u4e86\u6027\u80fd\u74f6\u9888\u7684\u65f6\u5019\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u76f4\u63a5\u64cd\u4f5c\u7ec4\u4ef6\u5e76\u4e0d\u662f\u5e94\u8be5\u7ecf\u5e38\u4f7f\u7528\u7684\u5de5\u5177\u3002\u4e00\u822c\u6765\u8bf4\u53ea\u662f\u7528\u6765\u521b\u5efa\u8fde\u7eed\u7684\u52a8\u753b\uff0c\u540c\u65f6\u907f\u514d\u6e32\u67d3\u7ec4\u4ef6\u7ed3\u6784\u548c\u540c\u6b65\u592a\u591a\u89c6\u56fe\u53d8\u5316\u6240\u5e26\u6765\u7684\u5927\u91cf\u5f00\u9500\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u662f\u4e00\u4e2a\u201c\u7b80\u5355\u7c97\u66b4\u201d\u7684\u65b9\u6cd5\uff0c\u5b83\u76f4\u63a5\u5728\u5e95\u5c42\uff08DOM\u3001UIView \u7b49\uff09\u800c\u4e0d\u662f React \u7ec4\u4ef6\u4e2d\u8bb0\u5f55 state\uff0c\u8fd9\u6837\u4f1a\u4f7f\u4ee3\u7801\u903b\u8f91\u96be\u4ee5\u7406\u6e05\u3002\u6240\u4ee5\u5728\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u4e4b\u524d\uff0c\u8bf7\u5c3d\u91cf\u5148\u5c1d\u8bd5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"\u548c",(0,a.kt)("a",d({parentName:"p"},{href:"http://facebook.github.io/react/docs/advanced-performance.html#shouldcomponentupdate-in-action"}),"shouldComponentUpdate"),"\u65b9\u6cd5\u6765\u89e3\u51b3\u95ee\u9898\u3002")),(0,a.kt)("h2",d({},{id:"setnativeprops-\u4e0e-touchableopacity"}),"setNativeProps \u4e0e TouchableOpacity"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js"}),"TouchableOpacity"),"\u8fd9\u4e2a\u7ec4\u4ef6\u5c31\u5728\u5185\u90e8\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u65b9\u6cd5\u6765\u66f4\u65b0\u5176\u5b50\u7ec4\u4ef6\u7684\u900f\u660e\u5ea6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setOpacityTo(value) {\n  // Redacted: animation related code\n  this.refs[CHILD_REF].setNativeProps({\n    opacity: value\n  });\n},\n")),(0,a.kt)("p",null,"\u7531\u6b64\u6211\u4eec\u53ef\u4ee5\u5199\u51fa\u4e0b\u9762\u8fd9\u6837\u7684\u4ee3\u7801\uff1a\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u54cd\u5e94\u70b9\u51fb\u4e8b\u4ef6\uff0c\u66f4\u6539\u81ea\u5df1\u7684\u900f\u660e\u5ea6\u3002\u800c\u5b50\u7ec4\u4ef6\u81ea\u8eab\u5e76\u4e0d\u9700\u8981\u5904\u7406\u8fd9\u4ef6\u4e8b\u60c5\uff0c\u4e5f\u4e0d\u9700\u8981\u5728\u5b9e\u73b0\u4e2d\u505a\u4efb\u4f55\u4fee\u6539\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"<TouchableOpacity onPress={this._handlePress}>\n  <View style={styles.button}>\n    <Text>Press me!</Text>\n  </View>\n</TouchableOpacity>\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u6765\u5b9e\u73b0\u8fd9\u4e00\u9700\u6c42\uff0c\u90a3\u4e48\u4e00\u79cd\u53ef\u80fd\u7684\u529e\u6cd5\u662f\u628a\u900f\u660e\u503c\u4fdd\u5b58\u5230 state \u4e2d\uff0c\u7136\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"onPress"),"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u66f4\u65b0\u8fd9\u4e2a\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"constructor(props) {\n  super(props);\n  this.state = { myButtonOpacity: 1, };\n}\n\nrender() {\n  return (\n    <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}\n                      onPressOut={() => this.setState({myButtonOpacity: 1})}>\n      <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>\n        <Text>Press me!</Text>\n      </View>\n    </TouchableOpacity>\n  )\n}\n")),(0,a.kt)("p",null,"\u6bd4\u8d77\u4e4b\u524d\u7684\u4f8b\u5b50\uff0c\u8fd9\u4e00\u505a\u6cd5\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u8ba1\u7b97 \u2014\u2014 \u6bcf\u4e00\u6b21\u900f\u660e\u503c\u53d8\u66f4\u7684\u65f6\u5019 React \u90fd\u8981\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u7ed3\u6784\uff0c\u5373\u4fbf\u89c6\u56fe\u7684\u5176\u4ed6\u5c5e\u6027\u548c\u5b50\u7ec4\u4ef6\u5e76\u6ca1\u6709\u53d8\u5316\u3002\u4e00\u822c\u6765\u8bf4\u8fd9\u4e00\u5f00\u9500\u4e5f\u4e0d\u8db3\u4e3a\u8651\uff0c\u4f46\u5f53\u6267\u884c\u8fde\u7eed\u7684\u52a8\u753b\u4ee5\u53ca\u54cd\u5e94\u7528\u6237\u624b\u52bf\u7684\u65f6\u5019\uff0c\u53ea\u6709\u6b63\u786e\u5730\u4f18\u5316\u7ec4\u4ef6\u624d\u80fd\u63d0\u9ad8\u52a8\u753b\u7684\u6d41\u7545\u5ea6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u770b\u8fc7",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Renderer/oss/ReactNativeRenderer-prod.js"}),"NativeMethodsMixin"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u65b9\u6cd5\u7684\u5b9e\u73b0\uff0c\u4f60\u5c31\u4f1a\u53d1\u73b0\u5b83\u5b9e\u9645\u662f\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"RCTUIManager.updateView"),"\u7684\u5c01\u88c5 \u2014\u2014 \u800c\u8fd9\u6b63\u662f\u91cd\u6e32\u67d3\u6240\u89e6\u53d1\u7684\u51fd\u6570\u8c03\u7528\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u770b",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react/blob/master/src/renderers/native/ReactNativeBaseComponent.js"}),"ReactNativeBaseComponent.js \u4e2d\u7684 receiveComponent"),"."),(0,a.kt)("h2",d({},{id:"\u590d\u5408\u7ec4\u4ef6\u4e0e-setnativeprops"}),"\u590d\u5408\u7ec4\u4ef6\u4e0e setNativeProps"),(0,a.kt)("p",null,"\u590d\u5408\u7ec4\u4ef6\u5e76\u4e0d\u662f\u5355\u7eaf\u7684\u7531\u4e00\u4e2a\u539f\u751f\u89c6\u56fe\u6784\u6210\uff0c\u6240\u4ee5\u4f60\u4e0d\u80fd\u5bf9\u5176\u76f4\u63a5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"setNativeProps with Composite Components","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20MyButton%20%3D%20(props)%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CMyButton%20label%3D%5C%22Press%20me!%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20)%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("p",null,"\u8dd1\u8fd9\u4e2a\u4f8b\u5b50\u4f1a\u9a6c\u4e0a\u770b\u5230\u4e00\u884c\u62a5\u9519\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable child must either be native or forward setNativeProps to a native component"),"\u3002\u8fd9\u662f\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"MyButton"),"\u5e76\u975e\u76f4\u63a5\u7531\u539f\u751f\u89c6\u56fe\u6784\u6210\uff0c\u800c\u6211\u4eec\u53ea\u80fd\u7ed9\u539f\u751f\u89c6\u56fe\u8bbe\u7f6e\u900f\u660e\u503c\u3002\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u8fd9\u6837\u53bb\u7406\u89e3\uff1a\u5982\u679c\u4f60\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"React.createClass"),"\u65b9\u6cd5\u81ea\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u76f4\u63a5\u7ed9\u5b83\u8bbe\u7f6e\u6837\u5f0f prop \u662f\u4e0d\u4f1a\u751f\u6548\u7684\uff0c\u4f60\u5f97\u628a\u6837\u5f0f props \u5c42\u5c42\u5411\u4e0b\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\uff0c\u76f4\u5230\u5b50\u7ec4\u4ef6\u662f\u4e00\u4e2a\u80fd\u591f\u76f4\u63a5\u5b9a\u4e49\u6837\u5f0f\u7684\u539f\u751f\u7ec4\u4ef6\u3002\u540c\u7406\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u4f20\u9012\u7ed9\u7531\u539f\u751f\u7ec4\u4ef6\u5c01\u88c5\u7684\u5b50\u7ec4\u4ef6\u3002"),(0,a.kt)("h4",d({},{id:"\u5c06-setnativeprops-\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"}),"\u5c06 setNativeProps \u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5177\u4f53\u8981\u505a\u7684\u5c31\u662f\u5728\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u518d\u5c01\u88c5\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u65b9\u6cd5\uff0c\u5176\u5185\u5bb9\u4e3a\u5bf9\u5408\u9002\u7684\u5b50\u7ec4\u4ef6\u8c03\u7528\u771f\u6b63\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u65b9\u6cd5\uff0c\u5e76\u4f20\u9012\u8981\u8bbe\u7f6e\u7684\u53c2\u6570\u3002"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"Forwarding setNativeProps","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20MyButton%20%3D%20(props)%20%3D%3E%20%7B%5Cn%20%20setNativeProps%20%3D%20(nativeProps)%20%3D%3E%20%7B%5Cn%20%20%20%20_root.setNativeProps(nativeProps)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%20ref%3D%7Bcomponent%20%3D%3E%20_root%20%3D%20component%7D%20%7B...props%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%5Cn%7D%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CMyButton%20label%3D%5C%22Press%20me!%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20)%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MyButton"),"\u6765\u4ee3\u66ff",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u4e86\uff01\u6709\u4e00\u70b9\u9700\u8981\u7279\u522b\u8bf4\u660e\uff1a\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86",(0,a.kt)("a",d({parentName:"p"},{href:"https://doc.react-china.org/docs/refs-and-the-dom.html"}),"ref \u56de\u8c03"),"\u8bed\u6cd5\uff0c\u800c\u4e0d\u662f\u4f20\u7edf\u7684\u5b57\u7b26\u4e32\u578b ref \u5f15\u7528\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u8fd8\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u5728\u5411\u4e0b\u4f20\u9012 props \u65f6\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"{...this.props}"),"\u8bed\u6cd5\uff08\u8fd9\u4e00\u7528\u6cd5\u7684\u8bf4\u660e\u8bf7\u53c2\u8003",(0,a.kt)("a",d({parentName:"p"},{href:"http://es6.ruanyifeng.com/#docs/object"}),"\u5bf9\u8c61\u7684\u6269\u5c55\u8fd0\u7b97\u7b26"),"\uff09\u3002\u8fd9\u662f\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u672c\u8eab\u5176\u5b9e\u4e5f\u662f\u4e2a\u590d\u5408\u7ec4\u4ef6\uff0c \u5b83\u9664\u4e86\u8981\u6c42\u5728\u5b50\u7ec4\u4ef6\u4e0a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," \u4ee5\u5916\uff0c\u8fd8\u8981\u6c42\u5b50\u7ec4\u4ef6\u5bf9\u89e6\u6478\u4e8b\u4ef6\u8fdb\u884c\u5904\u7406\u3002\u56e0\u6b64\uff0c\u5b83\u4f1a\u4f20\u9012\u591a\u4e2a props\uff0c\u5176\u4e2d\u5305\u542b\u4e86",(0,a.kt)("a",d({parentName:"p"},{href:"view#onmoveshouldsetresponder"}),"onmoveshouldsetresponder")," \u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u9700\u8981\u56de\u8c03\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u7ec4\u4ef6\uff0c\u4ee5\u5b8c\u6210\u89e6\u6478\u4e8b\u4ef6\u7684\u5904\u7406\u3002\u4e0e\u4e4b\u76f8\u5bf9\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),"\u7ec4\u4ef6\uff0c\u5b83\u672c\u8eab\u662f\u7531\u539f\u751f\u89c6\u56fe\u6784\u6210\uff0c\u56e0\u800c\u53ea\u9700\u8981\u6211\u4eec\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u3002"),(0,a.kt)("h2",d({},{id:"setnativeprops-to-clear-textinput-value"}),"setNativeProps to clear TextInput value"),(0,a.kt)("p",null,"\u6e05\u9664\u6587\u672c\u8f93\u5165\u6846\u5185\u5bb9\u662f setNativeProps \u7684\u53e6\u4e00\u4e2a\u5e38\u7528\u65b9\u5f0f.\u5f53 bufferDely \u5f88\u4f4e,\u7528\u6237\u8f93\u5165\u5f88\u5feb\u65f6,\u6587\u672c\u8f93\u5165\u6846\u7684 controlled \u53c2\u6570\u6709\u65f6\u4f1a\u4e22\u5931. \u4e00\u4e9b\u5f00\u53d1\u8005\u504f\u5411\u4e8e\u8df3\u8fc7 prop \u64cd\u4f5c,\u76f4\u63a5 \u4f7f\u7528 setNativeProps \u6765\u8fdb\u884c\u6587\u672c\u8f93\u5165\u6846\u503c\u7684\u663e\u793a\u64cd\u4f5c.\u4e0b\u9762\u5c31\u662f\u4e00\u4e2a\u6309\u4e0b\u6309\u94ae\u6e05\u9664\u6587\u672c\u8f93\u5165\u6846\u5185\u5bb9\u7684\u4f8b\u5b50:"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"Clear text","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20TextInput%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20clearText%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20_textInput.setNativeProps(%7Btext%3A%20''%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20alignItems%3A%20'center'%2C%20justifyContent%3A%20'center'%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20ref%3D%7Bcomponent%20%3D%3E%20_textInput%20%3D%20component%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2050%2C%20width%3A%20200%2C%20marginHorizontal%3A%2020%2C%20borderWidth%3A%201%2C%20borderColor%3A%20'%23ccc'%7D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BclearText%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EClear%20text%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("h1",d({},{id:"\u907f\u514d\u548c-render-\u65b9\u6cd5\u7684\u51b2\u7a81"}),"\u907f\u514d\u548c render \u65b9\u6cd5\u7684\u51b2\u7a81"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u66f4\u65b0\u4e00\u4e2a\u7531 render \u65b9\u6cd5\u6765\u7ef4\u62a4\u7684\u5c5e\u6027\uff0c\u5219\u53ef\u80fd\u4f1a\u78b0\u5230\u4e00\u4e9b\u51fa\u4eba\u610f\u6599\u7684 bug\u3002\u56e0\u4e3a\u6bcf\u4e00\u6b21\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u90fd\u53ef\u80fd\u5f15\u8d77\u5c5e\u6027\u53d8\u5316\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u4e4b\u524d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u6240\u8bbe\u5b9a\u7684\u503c\u5c31\u88ab\u5b8c\u5168\u5ffd\u7565\u548c\u8986\u76d6\u6389\u4e86\u3002"),(0,a.kt)("h2",d({},{id:"setnativeprops-\u4e0e-shouldcomponentupdate"}),"setNativeProps \u4e0e shouldComponentUpdate"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("a",d({parentName:"p"},{href:"https://facebook.github.io/react/docs/advanced-performance.html#avoiding-reconciling-the-dom"}),"\u5de7\u5999\u8fd0\u7528",(0,a.kt)("inlineCode",{parentName:"a"},"shouldComponentUpdate"),"\u65b9\u6cd5"),"\uff0c\u53ef\u4ee5\u907f\u514d\u91cd\u65b0\u6e32\u67d3\u90a3\u4e9b\u5b9e\u9645\u6ca1\u6709\u53d8\u5316\u7684\u5b50\u7ec4\u4ef6\u6240\u5e26\u6765\u7684\u989d\u5916\u5f00\u9500\uff0c\u6b64\u65f6\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"\u7684\u6027\u80fd\u5df2\u7ecf\u53ef\u4ee5\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"\u76f8\u5ab2\u7f8e\u4e86\u3002"),(0,a.kt)("h2",d({},{id:"\u5176\u4ed6\u539f\u751f\u65b9\u6cd5"}),"\u5176\u4ed6\u539f\u751f\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6b64\u5904\u63cf\u8ff0\u7684\u65b9\u6cd5\u5927\u591a\u6570 React Native \u5df2\u7ecf\u63d0\u4f9b\u3002\u4f46\u662f\u8fd9\u4e9b\u5728\u7ec4\u5408\u7ec4\u4ef6\u662f\u4e0d\u652f\u6301\u7684\uff0c\u56e0\u4e3a\u539f\u751f\u7684\u89c6\u56fe\u4e0d\u63d0\u4f9b\u652f\u6301\uff0c\u5305\u542b\u4f60\u81ea\u5df1\u7684\u5e94\u7528\u4e2d\u4f60\u81ea\u5b9a\u7684\u7edd\u5927\u591a\u6570\u7ec4\u4ef6"),(0,a.kt)("h3",d({},{id:"measurecallback"}),"measure(callback)"),(0,a.kt)("p",null,"\u6d4b\u91cf\u89c6\u56fe\u5728\u5c4f\u5e55\u4e0a\u7684\u5750\u6807\u3001\u5bbd\u5ea6\u3001\u9ad8\u5ea6\uff0c\u5f02\u6b65\u56de\u8c03\u8fd9\u4e9b\u53c2\u6570\u3002\u5982\u679c\u6d4b\u91cf\u6210\u529f\u5219\u56de\u8c03\u5982\u4e0b\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x"),(0,a.kt)("li",{parentName:"ul"},"y"),(0,a.kt)("li",{parentName:"ul"},"width"),(0,a.kt)("li",{parentName:"ul"},"height"),(0,a.kt)("li",{parentName:"ul"},"pageX"),(0,a.kt)("li",{parentName:"ul"},"pageY")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u4e9b\u53c2\u6570\u5fc5\u987b\u5728\u7ec4\u4ef6\u539f\u751f\u7aef\u6e32\u67d3\u5b8c\u6210\u540e\u624d\u80fd\u8fd4\u56de\u89c6\u56fe\u6d4b\u91cf\u503c\u3002\u82e5\u4f60\u60f3\u5c3d\u5feb\u7684\u83b7\u53d6\u89c6\u56fe\u7ec4\u4ef6\u7684\u6d4b\u91cf\u503c\uff08\u4e14\u4e0d\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"pageX"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"pageY"),"\uff09\uff0c\u53ef\u8003\u8651\u4f7f\u7528",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.71/view#onlayout"}),(0,a.kt)("inlineCode",{parentName:"a"},"onLayout")," prop")," \u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"Also the width and height returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"measure()")," are the width and height of the component in the viewport. If you need the actual size of the component, consider using the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.71/view#onlayout"}),(0,a.kt)("inlineCode",{parentName:"a"},"onLayout"))," property instead."),(0,a.kt)("h3",d({},{id:"measureinwindowcallback"}),"measureInWindow(callback)"),(0,a.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a\u89c6\u56fe\u5728\u7a97\u53e3\u4e0a\u7684\u4f4d\u7f6e\uff0c\u5f02\u6b65\u8fd4\u56de\u91cf\u6d4b\u503c\u3002\u5982\u679c\u6839\u89c6\u56fe\u5728\u53e6\u4e00\u4e2a\u89c6\u56fe\u4e0a\uff0c\u5c06\u8fd4\u56de\u7edd\u5bf9\u7684\u4f4d\u7f6e\u3002\u83b7\u53d6\u6210\u529f\u8fd4\u56de\u5982\u4e0b\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x"),(0,a.kt)("li",{parentName:"ul"},"y"),(0,a.kt)("li",{parentName:"ul"},"width"),(0,a.kt)("li",{parentName:"ul"},"height")),(0,a.kt)("h3",d({},{id:"measurelayoutrelativetonativecomponentref-onsuccess-onfail"}),"measureLayout(relativeToNativeComponentRef, onSuccess, onFail)"),(0,a.kt)("p",null,"\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"measure()"),"\u65b9\u6cd5\uff0c\u6d4b\u91cf\u76f8\u5bf9\u4e8e\u7956\u89c6\u56fe\uff08\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"relativeToNativeComponentRef"),"\u6765\u6307\u5b9a\uff09\u7684\u4f4d\u7f6e\u5173\u7cfb\u3002\u8fd4\u56de\u7684\u662f\u76f8\u5bf9\u4e8e\u7956\u89c6\u56fe\u539f\u70b9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\u3002"),(0,a.kt)("admonition",d({},{title:"\u5907\u6ce8",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"This method can also be called with a ",(0,a.kt)("inlineCode",{parentName:"p"},"relativeToNativeNode")," handler (instead of reference), but this variant is deprecated.")),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"measureLayout example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%2C%20useRef%2C%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20textContainerRef%20%3D%20useRef(null)%3B%5Cn%20%20const%20textRef%20%3D%20useRef(null)%3B%5Cn%20%20const%20%5Bmeasure%2C%20setMeasure%5D%20%3D%20useState(null)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(textRef.current%20%26%26%20textContainerRef.current)%20%7B%5Cn%20%20%20%20%20%20textRef.current.measureLayout(%5Cn%20%20%20%20%20%20%20%20textContainerRef.current%2C%5Cn%20%20%20%20%20%20%20%20(left%2C%20top%2C%20width%2C%20height)%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setMeasure(%7B%20left%2C%20top%2C%20width%2C%20height%20%7D)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%2C%20%5Bmeasure%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20ref%3D%7BtextContainerRef%7D%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.textContainer%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20ref%3D%7BtextRef%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20Where%20am%20I%3F%20(relative%20to%20the%20text%20container)%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.measure%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BJSON.stringify(measure)%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20textContainer%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2012%2C%5Cn%20%20%7D%2C%5Cn%20%20measure%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2012%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("h3",d({},{id:"focus"}),"focus()"),(0,a.kt)("p",null,"\u83b7\u53d6\u7ed9\u5b9a\u8f93\u5165\u6846\u6216\u8005\u89c6\u56fe\u7684\u7126\u70b9\u3002\u66f4\u8fdb\u4e00\u6b65\u7684\u53d8\u6362\u64cd\u4f5c\u4f9d\u8d56\u4e0e\u4e0d\u540c\u7684\u5e73\u53f0\u548c\u4e0d\u540c\u7684\u89c6\u56fe\u3002"),(0,a.kt)("h3",d({},{id:"blur"}),"blur()"),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"focus()")," \u65b9\u6cd5\u76f8\u53cd\uff0c\u8be5\u65b9\u6cd5\u7528\u6765\u79fb\u9664\u7ed9\u5b9a\u89c6\u56fe\u6216\u8005\u8f93\u5165\u6846\u7684\u7126\u70b9\u3002"))}y.isMDXComponent=!0},54818:(e,t,n)=>{n.d(t,{ZP:()=>C});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&c(e,n,t[n]);return e};const d={toc:[]};function C(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},d),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",u({},{title:"\u63d0\u793a",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,a.kt)("a",u({parentName:"p"},{href:"./the-new-architecture/pillars-turbomodules"}),"TurboModule")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"./the-new-architecture/pillars-fabric-components"}),"Fabric Components")," to achieve similar results.")))}C.isMDXComponent=!0}}]);