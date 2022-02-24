"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76651],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(d,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),r=a(14185),l=a(40488);var o=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(18870),d=a(38944),s="tabItem_c0e5",u=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&y(e,a,t[a]);if(m)for(var a of m(t))k.call(t,a)&&y(e,a,t[a]);return e};function f(e){var t,a,r;const{lazy:l,block:u,defaultValue:m,values:b,groupId:k,className:y}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,i.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const A=null===m?m:null!=(r=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=f[0])?void 0:a.props.value;if(null!==A&&!h.some((e=>e.value===A)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=o(),[D,C]=(0,n.useState)(A),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=k){const e=N[k];null!=e&&e!==D&&h.some((t=>t.value===e))&&C(e)}const B=e=>{const t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==D&&(x(t),C(n),null!=k&&w(k,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},y)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=v({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>O.push(e),onKeyDown:E,onFocus:B,onClick:B},a),l={className:(0,d.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":D===e})},c(r,p(l))),null!=t?t:e);var r,l}))),l?(0,n.cloneElement)(f.filter((e=>e.props.value===D))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function h(e){const t=(0,r.Z)();return n.createElement(f,v({key:String(t)},e))}},19416:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return y},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var n=a(35318),r=a(65941),l=a(37785),o=a(11674),i=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&m(e,a,t[a]);return e};const k={id:"keyboard",title:"Keyboard"},y=void 0,v={unversionedId:"keyboard",id:"version-0.67/keyboard",title:"Keyboard",description:"Keyboard\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-0.67/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/keyboard",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/keyboard.md",tags:[],version:"0.67",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"InteractionManager",permalink:"/docs/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/layoutanimation"}},f=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",children:[],level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addListener()</code>",id:"addlistener",children:[],level:3},{value:"<code>removeListener()</code>",id:"removelistener",children:[],level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[],level:3},{value:"<code>dismiss()</code>",id:"dismiss",children:[],level:3},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",children:[],level:3}],level:2}],h={toc:f};function g(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},h),m),d(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Keyboard"),"\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,n.kt)("h3",b({},{id:"\u7528\u6cd5\u793a\u4f8b"}),"\u7528\u6cd5\u793a\u4f8b"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Keyboard"),"\u6a21\u5757\u53ef\u4ee5\u76d1\u542c\u539f\u751f\u952e\u76d8\u4e8b\u4ef6\u4ee5\u505a\u51fa\u76f8\u5e94\u56de\u5e94\uff0c\u6bd4\u5982\u6536\u56de\u952e\u76d8\u3002"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Keyboard%2C%20TextInput%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Keyboard.addListener(%22keyboardDidShow%22%2C%20_keyboardDidShow)%3B%0A%20%20%20%20Keyboard.addListener(%22keyboardDidHide%22%2C%20_keyboardDidHide)%3B%0A%0A%20%20%20%20%2F%2F%20cleanup%20function%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Keyboard.removeListener(%22keyboardDidShow%22%2C%20_keyboardDidShow)%3B%0A%20%20%20%20%20%20Keyboard.removeListener(%22keyboardDidHide%22%2C%20_keyboardDidHide)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20_keyboardDidShow%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert(%22Keyboard%20Shown%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20_keyboardDidHide%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert(%22Keyboard%20Hidden%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%0A%7D%0A%0Aconst%20s%20%3D%20StyleSheet.create(%7B%0A%20%20%20input%3A%7B%0A%20%20%20%20margin%3A60%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%0A%20%20%20%7D%0A%7D)%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%0Aimport%20%7BKeyboard%2C%20TextInput%20%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aclass%20Example%20extends%20Component%20%7B%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.keyboardDidShowListener%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidShow'%2C%0A%20%20%20%20%20%20this._keyboardDidShow%2C%0A%20%20%20%20)%3B%0A%20%20%20%20this.keyboardDidHideListener%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidHide'%2C%0A%20%20%20%20%20%20this._keyboardDidHide%2C%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.keyboardDidShowListener.remove()%3B%0A%20%20%20%20this.keyboardDidHideListener.remove()%3B%0A%20%20%7D%0A%0A%20%20_keyboardDidShow()%20%7B%0A%20%20%20%20alert('Keyboard%20Shown')%3B%0A%20%20%7D%0A%0A%20%20_keyboardDidHide()%20%7B%0A%20%20%20%20alert('Keyboard%20Hidden')%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20s%20%3D%20StyleSheet.create(%7B%0A%20%20%20input%3A%7B%0A%20%20%20%20margin%3A60%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%0A%20%20%20%7D%0A%7D)%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",b({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",b({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",b({},{id:"addlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static addListener(eventName, callback)\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addListener"),"\u7528\u4e8e\u6ce8\u518c\u4e00\u4e2a JavaScript \u51fd\u6570\u6765\u76d1\u542c\u5904\u7406\u539f\u751f\u952e\u76d8\u901a\u77e5\u4e8b\u4ef6\u3002"),(0,n.kt)("p",null,"\u6b64\u65b9\u6cd5\u4f1a\u8fd4\u56de\u76d1\u542c\u51fd\u6570\u7684\u5f15\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"eventName"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"nativeEvent"),"\u53c2\u6570\u7528\u6765\u6307\u660e\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\uff0c\u5177\u4f53\u6709\u4ee5\u4e0b\u51e0\u79cd:")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u8c03\u7528\u7684 js \u51fd\u6570")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"nativeEvent")),(0,n.kt)("p",null,"This can be any of the following"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardWillShow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardDidShow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardWillHide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardDidHide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),(0,n.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u4f60\u628a",(0,n.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"adjustResize"),"\u6216\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"adjustPan"),"\uff0c\u5219\u5728 Android \u4e0a\u53ea\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardDidShow"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardDidHide"),"\u4e8b\u4ef6\u6709\u6548\u3002\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"adjustNothing"),"\uff0c\u5219\u6ca1\u6709\u4efb\u4f55\u4e8b\u4ef6\u6709\u6548\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event."),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"removelistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static removeListener(eventName, callback)\n")),(0,n.kt)("p",null,"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"eventName"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\u8981\u79fb\u9664\u76d1\u542c\u51fd\u6570\u7684\u539f\u751f\u4e8b\u4ef6\u7c7b\u578b\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\u8981\u79fb\u9664\u7684\u76d1\u542c\u51fd\u6570")))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"removealllisteners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static removeAllListeners(eventName)\n")),(0,n.kt)("p",null,"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"dismiss"}),(0,n.kt)("inlineCode",{parentName:"h3"},"dismiss()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static dismiss()\n")),(0,n.kt)("p",null,"\u628a\u5f39\u51fa\u7684\u952e\u76d8\u6536\u56de\u53bb\uff0c\u540c\u65f6\u4f7f\u5f53\u524d\u7684\u6587\u672c\u6846\u5931\u53bb\u7126\u70b9\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"schedulelayoutanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"scheduleLayoutAnimation")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static scheduleLayoutAnimation(event)\n")),(0,n.kt)("p",null,"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."))}g.isMDXComponent=!0}}]);