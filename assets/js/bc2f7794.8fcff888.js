"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[620],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=a,m=s["".concat(d,".").concat(b)]||s[b]||u[b]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return y}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const s={id:"keyboardavoidingview",title:"KeyboardAvoidingView"},b=void 0,m={unversionedId:"keyboardavoidingview",id:"version-0.70/keyboardavoidingview",title:"KeyboardAvoidingView",description:"\u672c\u7ec4\u4ef6\u7528\u4e8e\u89e3\u51b3\u4e00\u4e2a\u5e38\u89c1\u7684\u5c34\u5c2c\u95ee\u9898\uff1a\u624b\u673a\u4e0a\u5f39\u51fa\u7684\u952e\u76d8\u5e38\u5e38\u4f1a\u6321\u4f4f\u5f53\u524d\u7684\u89c6\u56fe\u3002\u672c\u7ec4\u4ef6\u53ef\u4ee5\u81ea\u52a8\u6839\u636e\u952e\u76d8\u7684\u9ad8\u5ea6\uff0c\u8c03\u6574\u81ea\u8eab\u7684 height \u6216\u5e95\u90e8\u7684 padding\uff0c\u4ee5\u907f\u514d\u88ab\u906e\u6321\u3002",source:"@site/versioned_docs/version-0.70/keyboardavoidingview.md",sourceDirName:".",slug:"/keyboardavoidingview",permalink:"/docs/keyboardavoidingview",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/keyboardavoidingview.md",tags:[],version:"0.70",frontMatter:{id:"keyboardavoidingview",title:"KeyboardAvoidingView"},sidebar:"\u7ec4\u4ef6",previous:{title:"ImageBackground",permalink:"/docs/imagebackground"},next:{title:"Modal",permalink:"/docs/modal"}},k={},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>behavior</code>",id:"behavior",level:3},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>keyboardVerticalOffset</code>",id:"keyboardverticaloffset",level:3}],f={toc:y};function v(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},f),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u89e3\u51b3\u4e00\u4e2a\u5e38\u89c1\u7684\u5c34\u5c2c\u95ee\u9898\uff1a\u624b\u673a\u4e0a\u5f39\u51fa\u7684\u952e\u76d8\u5e38\u5e38\u4f1a\u6321\u4f4f\u5f53\u524d\u7684\u89c6\u56fe\u3002\u672c\u7ec4\u4ef6\u53ef\u4ee5\u81ea\u52a8\u6839\u636e\u952e\u76d8\u7684\u9ad8\u5ea6\uff0c\u8c03\u6574\u81ea\u8eab\u7684 height \u6216\u5e95\u90e8\u7684 padding\uff0c\u4ee5\u907f\u514d\u88ab\u906e\u6321\u3002"),(0,r.kt)("h2",u({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("div",u({},{className:"snack-player","data-snack-name":"KeyboardAvoidingView","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20KeyboardAvoidingView%2C%20TextInput%2C%20StyleSheet%2C%20Text%2C%20Platform%2C%20TouchableWithoutFeedback%2C%20Button%2C%20Keyboard%20%20%7D%20from%20'react-native'%3B%0A%0Aconst%20KeyboardAvoidingComponent%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CKeyboardAvoidingView%0A%20%20%20%20%20%20behavior%3D%7BPlatform.OS%20%3D%3D%20%22ios%22%20%3F%20%22padding%22%20%3A%20%22height%22%7D%0A%20%20%20%20%20%20style%3D%7Bstyles.container%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7BKeyboard.dismiss%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.inner%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EHeader%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTextInput%20placeholder%3D%22Username%22%20style%3D%7Bstyles.textInput%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.btnContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Submit%22%20onPress%3D%7B()%20%3D%3E%20null%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%3C%2FKeyboardAvoidingView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20inner%3A%20%7B%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2036%2C%0A%20%20%20%20marginBottom%3A%2048%0A%20%20%7D%2C%0A%20%20textInput%3A%20%7B%0A%20%20%20%20height%3A%2040%2C%0A%20%20%20%20borderColor%3A%20%22%23000000%22%2C%0A%20%20%20%20borderBottomWidth%3A%201%2C%0A%20%20%20%20marginBottom%3A%2036%0A%20%20%7D%2C%0A%20%20btnContainer%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20marginTop%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20KeyboardAvoidingComponent%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("hr",null),(0,r.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",u({},{id:"props"}),"Props"),(0,r.kt)("h3",u({},{id:"view-props"}),(0,r.kt)("a",u({parentName:"h3"},{href:"/docs/view#props"}),"View Props")),(0,r.kt)("p",null,"Inherits ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/view#props"}),"View Props"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"behavior"}),(0,r.kt)("inlineCode",{parentName:"h3"},"behavior")),(0,r.kt)("p",null,"Specify how to react to the presence of the keyboard."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Android \u548c iOS \u5728\u6b64\u5c5e\u6027\u4e0a\u8868\u73b0\u5e76\u4e0d\u4e00\u81f4\u3002\u4f46\u6211\u4eec\u5efa\u8bae\u5728\u4e24\u4e2a\u5e73\u53f0\u4e0a\u90fd\u660e\u786e\u8bbe\u7f6e\u6b64\u5c5e\u6027\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"enum(",(0,r.kt)("inlineCode",{parentName:"td"},"'height'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'position'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'padding'"),")")))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"contentcontainerstyle"}),(0,r.kt)("inlineCode",{parentName:"h3"},"contentContainerStyle")),(0,r.kt)("p",null,"\u5982\u679c\u8bbe\u5b9a behavior \u503c\u4e3a'position'\uff0c\u5219\u4f1a\u751f\u6210\u4e00\u4e2a View \u4f5c\u4e3a\u5185\u5bb9\u5bb9\u5668\u3002\u6b64\u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u6b64\u5185\u5bb9\u5bb9\u5668\u7684\u6837\u5f0f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/docs/view-style-props"}),"View Style"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"enabled"}),(0,r.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,r.kt)("p",null,"\u662f\u5426\u542f\u7528 KeyboardAvoidingView\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"keyboardverticaloffset"}),(0,r.kt)("inlineCode",{parentName:"h3"},"keyboardVerticalOffset")),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u5e94\u7528\u79bb\u5c4f\u5e55\u9876\u90e8\u8fd8\u6709\u4e00\u4e9b\u8ddd\u79bb\uff08\u6bd4\u5982\u72b6\u6001\u680f\u7b49\u7b49\uff09\uff0c\u5229\u7528\u6b64\u5c5e\u6027\u6765\u8865\u507f\u4fee\u6b63\u8fd9\u6bb5\u8ddd\u79bb\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"0"))))))}v.isMDXComponent=!0}}]);