"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[98348],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var i=n(35318),r=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"actionsheetios",title:"ActionSheetIOS"},h=void 0,m={unversionedId:"actionsheetios",id:"version-0.67/actionsheetios",title:"ActionSheetIOS",description:"\u663e\u793a\u4e00\u4e2a iOS \u539f\u751f\u7684Action Sheet\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.67/actionsheetios.md",sourceDirName:".",slug:"/actionsheetios",permalink:"/docs/0.67/actionsheetios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/actionsheetios.md",tags:[],version:"0.67",frontMatter:{id:"actionsheetios",title:"ActionSheetIOS"},sidebar:"api",previous:{title:"ToastAndroid",permalink:"/docs/0.67/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/0.67/dynamiccolorios"}},f={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",level:3},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",level:3}],A={toc:k};function b(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=u(u({},A),p),o(t,a({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"\u663e\u793a\u4e00\u4e2a iOS \u539f\u751f\u7684",(0,i.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/"}),"Action Sheet"),"\u7ec4\u4ef6\u3002"),(0,i.kt)("h2",u({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,i.kt)("div",u({},{className:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%22%F0%9F%94%AE%22)%3B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%0A%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20options%3A%20%5B%22Cancel%22%2C%20%22Generate%20number%22%2C%20%22Reset%22%5D%2C%0A%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%0A%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%2C%0A%20%20%20%20%20%20%20%20userInterfaceStyle%3A%20'dark'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(%22%F0%9F%94%AE%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%22Show%20Action%20Sheet%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20result%3A%20%7B%0A%20%20%20%20fontSize%3A%2064%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,i.kt)("h2",u({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,i.kt)("h3",u({},{id:"showactionsheetwithoptions"}),(0,i.kt)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static showActionSheetWithOptions(options, callback)\n")),(0,i.kt)("p",null,"\u5728 iOS \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a ActionSheet \u5f39\u51fa\u6846\uff0c\u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u4e00\u9879\u6216\u591a\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," \uff08\u5b57\u7b26\u4e32\u6570\u7ec4\uff09 - \u4e00\u7ec4\u6309\u94ae\u7684\u6587\u5b57\uff08\u5fc5\u9009\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cancelButtonIndex")," \uff08\u6574\u578b\uff09 - \u53d6\u6d88\u6027\u8d28\u7684\u6309\u94ae\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"options"),"\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," \uff08\u6574\u578b\uff09 - \u5220\u9664\u6027\u8d28\u7684\u6309\u94ae\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"options"),"\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," \uff08\u5b57\u7b26\u4e32\uff09 - \u5f39\u51fa\u6846\u9876\u90e8\u7684\u6807\u9898"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," \uff08\u5b57\u7b26\u4e32\uff09 - \u5f39\u51fa\u6846\u9876\u90e8\u6807\u9898\u4e0b\u65b9\u7684\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tintColor")," (\u5b57\u7b26\u4e32) - \u6307\u5b9a\u5220\u9664\u6027\u8d28\u7684\u6309\u94ae\u7684\u6587\u5b57\u7684",(0,i.kt)("a",u({parentName:"li"},{href:"/docs/0.67/colors"}),"\u989c\u8272")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabledButtonIndices")," (array of numbers) - a list of button indices which should be disabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userInterfaceStyle")," (string) - the interface style used for the action sheet, can be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"light")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dark"),", otherwise the default system style will be used")),(0,i.kt)("p",null,"'callback'\u51fd\u6570\u5219\u4ec5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u6240\u70b9\u51fb\u6309\u94ae\u7684\u7d22\u5f15\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{}),"ActionSheetIOS.showActionSheetWithOptions({\n  options: ['\u53d6\u6d88', '\u5220\u9664'],\n  destructiveButtonIndex: 1,\n  cancelButtonIndex: 0,\n},\n(buttonIndex) => {\nif (buttonIndex === 1) { /* \u5f53\u63a5\u6536\u5230\u7684\u7d22\u5f15\u4e3a1\uff0c\u5373\u70b9\u51fb\u4e86\u5220\u9664\u6309\u94ae\u65f6\uff0c\u6267\u884c\u5bf9\u5e94\u64cd\u4f5c */ }\n});\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",u({},{id:"showshareactionsheetwithoptions"}),(0,i.kt)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),(0,i.kt)("p",null,"\u5728 iOS \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u5206\u4eab\u5f39\u51fa\u6846\uff0c\u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u5305\u542b\u4ee5\u4e0b\u51e0\u9879\uff08\u5fc5\u987b\u81f3\u5c11\u6709 message \u6216 url\uff09:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684 URL \u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subject")," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684\u4fe1\u606f\u4e3b\u9898"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"excludedActivityTypes")," \uff08\u6570\u7ec4\uff09 - \u6307\u5b9a\u5728 actionsheet \u4e2d\u4e0d\u663e\u793a\u7684\u6d3b\u52a8")),(0,i.kt)("p",null,"\u6ce8\uff1a\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"\u6307\u5411\u672c\u5730\u6587\u4ef6\uff0c\u6216\u8005\u662f\u4e00\u4e2a base64 \u7f16\u7801\u7684 url\uff0c\u5219\u4f1a\u76f4\u63a5\u8bfb\u53d6\u5e76\u5206\u4eab\u76f8\u5e94\u7684\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u5206\u4eab\u56fe\u7247\u3001\u89c6\u9891\u4ee5\u53ca PDF \u6587\u4ef6\u7b49\u3002If ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," points to a remote file or address it must conform to URL format as described in ",(0,i.kt)("a",u({parentName:"p"},{href:"https://www.ietf.org/rfc/rfc2396.txt"}),"RFC 2396"),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared."),(0,i.kt)("p",null,"'failureCallback'\u51fd\u6570\u4ec5\u63a5\u53d7\u4e00\u4e2a\u9519\u8bef\u5bf9\u8c61\u53c2\u6570\u3002\u6b64\u5bf9\u8c61\u4e2d\u4ec5\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"stack"),"\u5c5e\u6027\uff0c\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"'successCallback'\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8868\u793a\u6210\u529f\u4e0e\u5426\u7684\u5e03\u5c14\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u6210\u529f\u7684\u8bdd\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u5206\u4eab\u65b9\u5f0f\u7684\u5b57\u7b26\u4e32")))}b.isMDXComponent=!0}}]);