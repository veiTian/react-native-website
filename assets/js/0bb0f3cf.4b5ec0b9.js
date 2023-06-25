"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[11450],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=u(a),s=l,c=k["".concat(p,".").concat(s)]||k[s]||d[s]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},19673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>s,default:()=>f,frontMatter:()=>k,metadata:()=>c,toc:()=>g});var n=a(35318),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e};const k={id:"animatedvalue",title:"Animated.Value"},s=void 0,c={unversionedId:"animatedvalue",id:"version-0.72/animatedvalue",title:"Animated.Value",description:"\u9a71\u52a8\u52a8\u753b\u7684\u4e00\u7ef4\u6807\u91cf\u503c. \u4e00\u4e2aAnimated.Value\u53ef\u4ee5\u540c\u6b65\u5730\u9a71\u52a8\u591a\u4e2a\u5c5e\u6027\uff0c\u4f46\u6bcf\u6b21\u53ea\u80fd\u4ee5\u4e00\u79cd\u52a8\u753b\u673a\u5236\u53d8\u5316\u3002\u5982\u679c\u6539\u7528\u4e86\u5176\u4ed6\u52a8\u753b\u673a\u5236\uff08\u4f8b\u5982\u5f00\u59cb\u4e00\u4e2a\u65b0\u7684\u52a8\u753b\u6216\u662f\u8c03\u7528setValue\uff09\uff0c\u5219\u4f1a\u505c\u6b62\u5148\u524d\u7684\u52a8\u753b\u3002",source:"@site/versioned_docs/version-0.72/animatedvalue.md",sourceDirName:".",slug:"/animatedvalue",permalink:"/docs/animatedvalue",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/animatedvalue.md",tags:[],version:"0.72",frontMatter:{id:"animatedvalue",title:"Animated.Value"},sidebar:"api",previous:{title:"Animated",permalink:"/docs/animated"},next:{title:"Animated.ValueXY",permalink:"/docs/animatedvaluexy"}},N={},g=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>setValue()</code>",id:"setvalue",level:3},{value:"<code>setOffset()</code>",id:"setoffset",level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",level:3},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",level:3},{value:"<code>interpolate()</code>",id:"interpolate",level:3},{value:"<code>animate()</code>",id:"animate",level:3},{value:"<code>stopTracking()</code>",id:"stoptracking",level:3},{value:"<code>track()</code>",id:"track",level:3}],h={toc:g};function f(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},h),m),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u9a71\u52a8\u52a8\u753b\u7684\u4e00\u7ef4\u6807\u91cf\u503c. \u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.Value"),"\u53ef\u4ee5\u540c\u6b65\u5730\u9a71\u52a8\u591a\u4e2a\u5c5e\u6027\uff0c\u4f46\u6bcf\u6b21\u53ea\u80fd\u4ee5\u4e00\u79cd\u52a8\u753b\u673a\u5236\u53d8\u5316\u3002\u5982\u679c\u6539\u7528\u4e86\u5176\u4ed6\u52a8\u753b\u673a\u5236\uff08\u4f8b\u5982\u5f00\u59cb\u4e00\u4e2a\u65b0\u7684\u52a8\u753b\u6216\u662f\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"setValue"),"\uff09\uff0c\u5219\u4f1a\u505c\u6b62\u5148\u524d\u7684\u52a8\u753b\u3002"),(0,n.kt)("p",null,"\u4e00\u822c\u8fd9\u6837\u6765\u521d\u59cb\u5316",(0,n.kt)("inlineCode",{parentName:"p"},"new Animated.Value(0);")),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",d({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",d({},{id:"setvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setValue()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setValue(value);\n")),(0,n.kt)("p",null,"\u76f4\u63a5\u8d4b\u503c\u3002\u6ce8\u610f\u8fd9\u4f1a\u5bfc\u81f4\u6b63\u5728\u8fd0\u884c\u7684\u52a8\u753b\u4e2d\u65ad\u800c\u76f4\u63a5\u66f4\u65b0\u5230\u65b0\u503c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u65b0\u7684\u52a8\u753b\u503c")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"setoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setOffset(offset);\n")),(0,n.kt)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",(0,n.kt)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"offset"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Offset value")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"flattenoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flattenOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"flattenOffset();\n")),(0,n.kt)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"extractoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"extractOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"extractOffset();\n")),(0,n.kt)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"addlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"addListener(callback);\n")),(0,n.kt)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),(0,n.kt)("p",null,"Returns a string that serves as an identifier for the listener."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The callback function which will receive an object with a ",(0,n.kt)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removelistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeListener(id);\n")),(0,n.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002 The ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"addListener()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Id for the listener being removed.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removealllisteners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeAllListeners();\n")),(0,n.kt)("p",null,"\u79fb\u9664\u6240\u6709\u76d1\u542c\u51fd\u6570\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"stopanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stopAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"stopAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any running animation or tracking. ",(0,n.kt)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the final value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"resetanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"resetAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"resetAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any animation and resets the value to its original."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the original value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"interpolate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"interpolate()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"interpolate(config);\n")),(0,n.kt)("p",null,"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."),(0,n.kt)("p",null,"See ",(0,n.kt)("inlineCode",{parentName:"p"},"AnimatedInterpolation.js")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," object is composed of the following keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"inputRange"),": an array of numbers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"outputRange"),": an array of numbers or strings"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," (optional): a function that returns a number, given an input number"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extrapolate")," (optional): a string such as 'extend', 'identity', or 'clamp'"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extrapolateLeft")," (optional): a string such as 'extend', 'identity', or 'clamp'"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extrapolateRight")," (optional): a string such as 'extend', 'identity', or 'clamp'")),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"animate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animate()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"animate(animation, callback);\n")),(0,n.kt)("p",null,"Typically only used internally, but could be used by a custom Animation class."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"animation"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Animation"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"See ",(0,n.kt)("inlineCode",{parentName:"td"},"Animation.js"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Callback function.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"stoptracking"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stopTracking()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"stopTracking();\n")),(0,n.kt)("p",null,"Typically only used internally."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"track"}),(0,n.kt)("inlineCode",{parentName:"h3"},"track()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"track(tracking);\n")),(0,n.kt)("p",null,"Typically only used internally."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"tracking"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"AnimatedNode"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"See ",(0,n.kt)("inlineCode",{parentName:"td"},"AnimatedNode.js"))))))}f.isMDXComponent=!0}}]);