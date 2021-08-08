"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2533],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",s=i?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},64535:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),i=n(84956);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(38944),s="tabItem_c0e5",l="tabItemActive_28AG";var d=37,c=39;var u=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,m=e.groupId,p=e.className,h=r(),k=h.tabGroupChoices,v=h.setTabGroupChoices,w=(0,a.useState)(i),f=w[0],g=w[1],A=a.Children.toArray(e.children),b=[];if(null!=m){var D=k[m];null!=D&&D!==f&&u.some((function(e){return e.value===D}))&&g(D)}var C=function(e){var t=e.currentTarget,n=b.indexOf(t),a=u[n].value;g(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,i,r,o,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,d=o.innerWidth,n>=0&&r<=d&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case c:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case d:var i=b.indexOf(e.target)-1;n=b[i]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":f===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:y,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(A.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},84956:function(e,t,n){var a=(0,n(27378).createContext)(void 0);t.Z=a},8357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var a=n(25773),i=n(30808),r=(n(27378),n(35318)),o=n(64535),s=n(70517),l=n(45981),d=["components"],c={id:"dimensions",title:"Dimensions"},u=void 0,m={unversionedId:"dimensions",id:"dimensions",isDocsHomePage:!1,title:"Dimensions",description:"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002",source:"@site/../cndocs/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/next/dimensions",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dimensions.md",version:"current",lastUpdatedAt:1628418991,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"dimensions",title:"Dimensions"},sidebar:"api",previous:{title:"DevSettings",permalink:"/docs/next/devsettings"},next:{title:"Easing",permalink:"/docs/next/easing"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>set()</code>",id:"set",children:[]}]}],h={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"usewindowdimensions"},(0,r.kt)("inlineCode",{parentName:"a"},"useWindowDimensions"))," is the preferred API for React components. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"Dimensions"),", it updates as the window's dimensions update. This works nicely with the React paradigm.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Dimensions } from 'react-native';\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u8bbe\u5907\u7684\u5bbd\u9ad8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5c3d\u7ba1\u5c3a\u5bf8\u4fe1\u606f\u7acb\u5373\u5c31\u53ef\u7528\uff0c\u4f46\u5b83\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u88ab\u4fee\u6539\uff08\u8b6c\u5982\u8bbe\u5907\u7684\u65b9\u5411\u6539\u53d8\uff09\uff0c\u6240\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u5e38\u91cf\u7684\u6e32\u67d3\u903b\u8f91\u548c\u6837\u5f0f\u5e94\u5f53\u6bcf\u6b21 render \u4e4b\u540e\u90fd\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u5c06\u5bf9\u5e94\u7684\u503c\u4fdd\u5b58\u4e0b\u6765\u3002\uff08\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5185\u8054\u7684\u6837\u5f0f\u800c\u4e0d\u662f\u5728",(0,r.kt)("code",null,"StyleSheet"),"\u4e2d\u4fdd\u5b58\u76f8\u5e94\u7684\u5c3a\u5bf8\uff09\u3002")),(0,r.kt)("p",null,"If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example."),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(o.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20const%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)(s.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static get(dim)\n")),(0,r.kt)("p",null,"\u521d\u59cb\u7684\u5c3a\u5bf8\u4fe1\u606f\u5e94\u8be5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"runApplication"),"\u4e4b\u540e\u88ab\u6267\u884c\uff0c\u8fd9\u6837\u624d\u53ef\u4ee5\u5728\u4efb\u4f55\u5176\u4ed6\u7684 require \u88ab\u6267\u884c\u4e4b\u524d\u4f7f\u7528\u3002\u4e0d\u8fc7\u5728\u7a0d\u540e\u53ef\u80fd\u8fd8\u4f1a\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"const {height, width} = Dimensions.get('window');")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dim"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u60f3\u8981\u83b7\u53d6\u7684\u5c3a\u5bf8\u4fe1\u606f\u7684\u5b57\u6bb5\u540d\u3002 @returns {Object?} \u8fd4\u56de\u7684\u5c3a\u5bf8\u4fe1\u606f\u503c\u3002")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For Android the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom navigation bar"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(type, handler)\n")),(0,r.kt)("p",null,"Add an event handler. Supported events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is an object with ",(0,r.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"screen")," properties whose values are the same as the return values of ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions.get('window')")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions.get('screen')"),", respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"window")," - Size of the visible Application window"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screen")," - Size of the device's screen")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removeeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(type, handler)\n")),(0,r.kt)("p",null,"Remove an event handler."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set"},(0,r.kt)("inlineCode",{parentName:"h3"},"set()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static set(dims)\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u53ea\u5e94\u8be5\u88ab\u539f\u751f\u4ee3\u7801\u8c03\u7528\u3002 by sending the didUpdateDimensions event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dims"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"string-keyed object of dimensions to set")))))}k.isMDXComponent=!0}}]);