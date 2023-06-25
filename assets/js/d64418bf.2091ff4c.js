"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57834],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},C=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),C=c(t),d=i,m=C["".concat(o,".").concat(d)]||C[d]||u[d]||l;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=C;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}C.displayName="MDXCreateElement"},26118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>d,default:()=>f,frontMatter:()=>C,metadata:()=>m,toc:()=>g});var a=t(35318),i=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&p(e,t,n[t]);return e};const C={id:"easing",title:"Easing"},d=void 0,m={unversionedId:"easing",id:"version-0.71/easing",title:"Easing",description:"Easing\u6a21\u5757\u5b9e\u73b0\u4e86\u5e38\u89c1\u7684\u52a8\u753b\u7f13\u52a8\u51fd\u6570\u3002 This module is used by Animated.timing() to convey physically believable motion in animations.",source:"@site/versioned_docs/version-0.71/easing.md",sourceDirName:".",slug:"/easing",permalink:"/docs/0.71/easing",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/easing.md",tags:[],version:"0.71",frontMatter:{id:"easing",title:"Easing"},sidebar:"api",previous:{title:"Dimensions",permalink:"/docs/0.71/dimensions"},next:{title:"InteractionManager",permalink:"/docs/0.71/interactionmanager"}},k={},g=[{value:"\u67e5\u770b\u9884\u7f6e\u52a8\u753b",id:"\u67e5\u770b\u9884\u7f6e\u52a8\u753b",level:3},{value:"\u67e5\u770b\u6807\u51c6\u51fd\u6570",id:"\u67e5\u770b\u6807\u51c6\u51fd\u6570",level:3},{value:"\u67e5\u770b\u8865\u5145\u51fd\u6570",id:"\u67e5\u770b\u8865\u5145\u51fd\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>step0()</code>",id:"step0",level:3},{value:"<code>step1()</code>",id:"step1",level:3},{value:"<code>linear()</code>",id:"linear",level:3},{value:"<code>ease()</code>",id:"ease",level:3},{value:"<code>quad()</code>",id:"quad",level:3},{value:"<code>cubic()</code>",id:"cubic",level:3},{value:"<code>poly()</code>",id:"poly",level:3},{value:"<code>sin()</code>",id:"sin",level:3},{value:"<code>circle()</code>",id:"circle",level:3},{value:"<code>exp()</code>",id:"exp",level:3},{value:"<code>elastic()</code>",id:"elastic",level:3},{value:"<code>back()</code>",id:"back",level:3},{value:"<code>bounce()</code>",id:"bounce",level:3},{value:"<code>bezier()</code>",id:"bezier",level:3},{value:"<code>in()</code>",id:"in",level:3},{value:"<code>out()</code>",id:"out",level:3},{value:"<code>inOut()</code>",id:"inout",level:3}],h={toc:g};function f(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var a in e)o.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},h),p),l(n,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Easing"),"\u6a21\u5757\u5b9e\u73b0\u4e86\u5e38\u89c1\u7684\u52a8\u753b\u7f13\u52a8\u51fd\u6570\u3002 This module is used by ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/0.71/animated#timing"}),"Animated.timing()")," to convey physically believable motion in animations."),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/"}),"http://easings.net/")," \u67e5\u770b\u4e00\u4e9b\u5e38\u89c1\u7684\u7f13\u52a8\u51fd\u6570\u7684\u89c6\u89c9\u5c55\u793a\u3002"),(0,a.kt)("h3",u({},{id:"\u67e5\u770b\u9884\u7f6e\u52a8\u753b"}),"\u67e5\u770b\u9884\u7f6e\u52a8\u753b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Easing"),"\u6a21\u5757\u901a\u8fc7\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5\u63d0\u4f9b\u4e86\u51e0\u79cd\u9884\u7f6e\u7684\u52a8\u753b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#back"}),(0,a.kt)("inlineCode",{parentName:"a"},"back"))," provides a simple animation where the object goes slightly back before moving forward"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#bounce"}),(0,a.kt)("inlineCode",{parentName:"a"},"bounce"))," provides a bouncing animation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#ease"}),(0,a.kt)("inlineCode",{parentName:"a"},"ease"))," provides a simple inertial animation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#elastic"}),(0,a.kt)("inlineCode",{parentName:"a"},"elastic"))," provides a simple spring interaction")),(0,a.kt)("h3",u({},{id:"\u67e5\u770b\u6807\u51c6\u51fd\u6570"}),"\u67e5\u770b\u6807\u51c6\u51fd\u6570"),(0,a.kt)("p",null,"\u76ee\u524d\u63d0\u4f9b\u4e86\u4e09\u79cd\u6807\u51c6\u7f13\u52a8\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#linear"}),(0,a.kt)("inlineCode",{parentName:"a"},"linear"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#quad"}),(0,a.kt)("inlineCode",{parentName:"a"},"quad"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#cubic"}),(0,a.kt)("inlineCode",{parentName:"a"},"cubic")))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/0.71/easing#poly"}),(0,a.kt)("inlineCode",{parentName:"a"},"poly"))," function can be used to implement quartic, quintic, and other higher power functions."),(0,a.kt)("h3",u({},{id:"\u67e5\u770b\u8865\u5145\u51fd\u6570"}),"\u67e5\u770b\u8865\u5145\u51fd\u6570"),(0,a.kt)("p",null,"\u6b64\u5916\u8fd8\u901a\u8fc7\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5\u63d0\u4f9b\u4e86\u51e0\u79cd\u6570\u5b66\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#bezier"}),(0,a.kt)("inlineCode",{parentName:"a"},"bezier"))," provides a cubic bezier curve"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#circle"}),(0,a.kt)("inlineCode",{parentName:"a"},"circle"))," provides a circular function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#sin"}),(0,a.kt)("inlineCode",{parentName:"a"},"sin"))," provides a sinusoidal function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#exp"}),(0,a.kt)("inlineCode",{parentName:"a"},"exp"))," provides an exponential function")),(0,a.kt)("p",null,"The following helpers are used to modify other easing functions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#in"}),(0,a.kt)("inlineCode",{parentName:"a"},"in"))," runs an easing function forwards"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#inout"}),(0,a.kt)("inlineCode",{parentName:"a"},"inOut"))," makes any easing function symmetrical"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.71/easing#out"}),(0,a.kt)("inlineCode",{parentName:"a"},"out"))," runs an easing function backwards")),(0,a.kt)("h2",u({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("div",u({},{className:"snack-player","data-snack-name":"Easing Demo","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Animated%2C%20Easing%2C%20SectionList%2C%20StatusBar%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20let%20opacity%20%3D%20new%20Animated.Value(0)%3B%5Cn%20%20const%20animate%20%3D%20easing%20%3D%3E%20%7B%5Cn%20%20%20%20opacity.setValue(0)%3B%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%3A%201200%2C%5Cn%20%20%20%20%20%20easing%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D%3B%5Cn%20%20const%20size%20%3D%20opacity.interpolate(%7B%5Cn%20%20%20%20inputRange%3A%20%5B0%2C%201%5D%2C%5Cn%20%20%20%20outputRange%3A%20%5B0%2C%2080%5D%5Cn%20%20%7D)%3B%5Cn%20%20const%20animatedStyles%20%3D%20%5B%5Cn%20%20%20%20styles.box%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20opacity%2C%5Cn%20%20%20%20%20%20width%3A%20size%2C%5Cn%20%20%20%20%20%20height%3A%20size%5Cn%20%20%20%20%7D%5Cn%20%20%5D%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7Btrue%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20Press%20rows%20below%20to%20preview%20the%20Easing!%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%20style%3D%7BanimatedStyles%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSectionList%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%5Cn%20%20%20%20%20%20%20%20sections%3D%7BSECTIONS%7D%5Cn%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item)%20%3D%3E%20item.title%7D%5Cn%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20animate(item.easing)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.listRow%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7B%20section%3A%20%7B%20title%20%7D%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.listHeader%7D%3E%7Btitle%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cnconst%20SECTIONS%20%3D%20%5B%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20%5C%22Predefined%20animations%5C%22%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Bounce%5C%22%2C%20easing%3A%20Easing.bounce%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Ease%5C%22%2C%20easing%3A%20Easing.ease%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Elastic%5C%22%2C%20easing%3A%20Easing.elastic(4)%20%7D%5Cn%20%20%20%20%5D%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20%5C%22Standard%20functions%5C%22%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Linear%5C%22%2C%20easing%3A%20Easing.linear%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Quad%5C%22%2C%20easing%3A%20Easing.quad%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Cubic%5C%22%2C%20easing%3A%20Easing.cubic%20%7D%5Cn%20%20%20%20%5D%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20%5C%22Additional%20functions%5C%22%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22Bezier%5C%22%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.bezier(0%2C%202%2C%201%2C%20-1)%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Circle%5C%22%2C%20easing%3A%20Easing.circle%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Sin%5C%22%2C%20easing%3A%20Easing.sin%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20title%3A%20%5C%22Exp%5C%22%2C%20easing%3A%20Easing.exp%20%7D%5Cn%20%20%20%20%5D%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20%5C%22Combinations%5C%22%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22In%20%2B%20Bounce%5C%22%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.in(Easing.bounce)%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22Out%20%2B%20Exp%5C%22%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.out(Easing.exp)%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20%5C%22InOut%20%2B%20Elastic%5C%22%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.inOut(Easing.elastic(1))%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%5D%5Cn%20%20%7D%5Cn%5D%3B%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2320232a%5C%22%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2010%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22%2361dafb%5C%22%5Cn%20%20%7D%2C%5Cn%20%20boxContainer%3A%20%7B%5Cn%20%20%20%20height%3A%20160%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2032%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%5Cn%20%20%7D%2C%5Cn%20%20list%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%5Cn%20%20%7D%2C%5Cn%20%20listHeader%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23f4f4f4%5C%22%2C%5Cn%20%20%20%20color%3A%20%5C%22%23999%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20textTransform%3A%20%5C%22uppercase%5C%22%5Cn%20%20%7D%2C%5Cn%20%20listRow%3A%20%7B%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%5Cn%7D)%3B%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",u({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",u({},{id:"step0"}),(0,a.kt)("inlineCode",{parentName:"h3"},"step0()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static step0(n)\n")),(0,a.kt)("p",null,"A stepping function, returns 1 for any positive value of ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"step1"}),(0,a.kt)("inlineCode",{parentName:"h3"},"step1()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static step1(n)\n")),(0,a.kt)("p",null,"A stepping function, returns 1 if ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," is greater than or equal to 1."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"linear"}),(0,a.kt)("inlineCode",{parentName:"h3"},"linear()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static linear(t)\n")),(0,a.kt)("p",null,"A linear function, ",(0,a.kt)("inlineCode",{parentName:"p"},"f(t) = t"),". Position correlates to elapsed time one to one."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://cubic-bezier.com/#0,0,1,1"}),"http://cubic-bezier.com/#0,0,1,1")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"ease"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ease()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static ease(t)\n")),(0,a.kt)("p",null,"A simple inertial interaction, similar to an object slowly accelerating to speed."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://cubic-bezier.com/#.42,0,1,1"}),"http://cubic-bezier.com/#.42,0,1,1")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"quad"}),(0,a.kt)("inlineCode",{parentName:"h3"},"quad()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static quad(t)\n")),(0,a.kt)("p",null,"A quadratic function, ",(0,a.kt)("inlineCode",{parentName:"p"},"f(t) = t * t"),". Position equals the square of elapsed time."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInQuad"}),"http://easings.net/#easeInQuad")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"cubic"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cubic()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static cubic(t)\n")),(0,a.kt)("p",null,"A cubic function, ",(0,a.kt)("inlineCode",{parentName:"p"},"f(t) = t * t * t"),". Position equals the cube of elapsed time."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInCubic"}),"http://easings.net/#easeInCubic")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"poly"}),(0,a.kt)("inlineCode",{parentName:"h3"},"poly()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static poly(n)\n")),(0,a.kt)("p",null,"A power function. Position is equal to the Nth power of elapsed time."),(0,a.kt)("p",null,"n = 4: ",(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInQuart"}),"http://easings.net/#easeInQuart")," n = 5: ",(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInQuint"}),"http://easings.net/#easeInQuint")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"sin"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sin()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static sin(t)\n")),(0,a.kt)("p",null,"A sinusoidal function."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInSine"}),"http://easings.net/#easeInSine")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"circle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"circle()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static circle(t)\n")),(0,a.kt)("p",null,"A circular function."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInCirc"}),"http://easings.net/#easeInCirc")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"exp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"exp()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static exp(t)\n")),(0,a.kt)("p",null,"An exponential function."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInExpo"}),"http://easings.net/#easeInExpo")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"elastic"}),(0,a.kt)("inlineCode",{parentName:"h3"},"elastic()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static elastic(bounciness)\n")),(0,a.kt)("p",null,"A simple elastic interaction, similar to a spring oscillating back and forth."),(0,a.kt)("p",null,"Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInElastic"}),"http://easings.net/#easeInElastic")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"back"}),(0,a.kt)("inlineCode",{parentName:"h3"},"back()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static back(s)\n")),(0,a.kt)("p",null,"Use with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.parallel()")," to create a simple effect where the object animates back slightly as the animation starts."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"bounce"}),(0,a.kt)("inlineCode",{parentName:"h3"},"bounce()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static bounce(t)\n")),(0,a.kt)("p",null,"Provides a simple bouncing effect."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"http://easings.net/#easeInBounce"}),"http://easings.net/#easeInBounce")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"bezier"}),(0,a.kt)("inlineCode",{parentName:"h3"},"bezier()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static bezier(x1, y1, x2, y2)\n")),(0,a.kt)("p",null,"Provides a cubic bezier curve, equivalent to CSS Transitions' ",(0,a.kt)("inlineCode",{parentName:"p"},"transition-timing-function"),"."),(0,a.kt)("p",null,"A useful tool to visualize cubic bezier curves can be found at ",(0,a.kt)("a",u({parentName:"p"},{href:"http://cubic-bezier.com/"}),"http://cubic-bezier.com/")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"in"}),(0,a.kt)("inlineCode",{parentName:"h3"},"in()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static in(easing);\n")),(0,a.kt)("p",null,"Runs an easing function forwards."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"out"}),(0,a.kt)("inlineCode",{parentName:"h3"},"out()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static out(easing)\n")),(0,a.kt)("p",null,"Runs an easing function backwards."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"inout"}),(0,a.kt)("inlineCode",{parentName:"h3"},"inOut()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static inOut(easing)\n")),(0,a.kt)("p",null,"Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration."))}f.isMDXComponent=!0}}]);