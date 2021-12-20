(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87625],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(d,".").concat(m)]||s[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49821:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(29603),r=n(50120),l=(n(27378),n(35318)),o={id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS"},i=void 0,d={unversionedId:"segmentedcontrolios",id:"version-0.66/segmentedcontrolios",isDocsHomePage:!1,title:"\ud83d\udea7 SegmentedControlIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/segmented-control instead.",source:"@site/versioned_docs/version-0.66/segmentedcontrolios.md",sourceDirName:".",slug:"/segmentedcontrolios",permalink:"/docs/segmentedcontrolios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/segmentedcontrolios.md",tags:[],version:"0.66",frontMatter:{id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>momentary</code>",id:"momentary",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>selectedIndex</code>",id:"selectedindex",children:[]},{value:"<code>tintColor</code>",id:"tintcolor",children:[]},{value:"<code>values</code>",id:"values",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/segmented-control"},"@react-native-community/segmented-control")," instead.")),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"SegmentedControlIOS"),"\u6765\u5728 iOS \u8bbe\u5907\u4e0a\u6e32\u67d3\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"UISegmentedControl"),"\u7ec4\u4ef6\u3002\u8fd9\u662f\u4e00\u4e2a\u5206\u6bb5\u663e\u793a\u591a\u4e2a\u9009\u9879\u7684\u7ec4\u4ef6\u3002"),(0,l.kt)("h4",{id:"programmatically-changing-selected-index"},"Programmatically changing selected index"),(0,l.kt)("p",null,"The selected index can be changed on the fly by assigning the selectedIndex prop to a state variable, then changing that variable. Note that the state variable would need to be updated as the user selects a value and changes the index, as shown in the example below."),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<SegmentedControlIOS\n  values={['One', 'Two']}\n  selectedIndex={this.state.selectedIndex}\n  onChange={(event) => {\n    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});\n  }}\n/>\n")),(0,l.kt)("center",null,(0,l.kt)("img",{src:"assets/SegmentedControlIOS/example.gif",width:"360"})),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"enabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,l.kt)("p",null,"If false the user won't be able to interact with the control. Default value is true."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("center",null,(0,l.kt)("img",{src:"assets/SegmentedControlIOS/enabled.png",width:"360"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"momentary"},(0,l.kt)("inlineCode",{parentName:"h3"},"momentary")),(0,l.kt)("p",null,"If true, then selecting a segment won't persist visually. The ",(0,l.kt)("inlineCode",{parentName:"p"},"onValueChange")," callback will still work as expected."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("center",null,(0,l.kt)("img",{src:"assets/SegmentedControlIOS/momentary.gif",width:"360"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onchange"},(0,l.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,l.kt)("p",null,"Callback that is called when the user taps a segment; passes the event as an argument"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onvaluechange"},(0,l.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,l.kt)("p",null,"Callback that is called when the user taps a segment; passes the segment's value as an argument"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectedindex"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedIndex")),(0,l.kt)("p",null,"The index in ",(0,l.kt)("inlineCode",{parentName:"p"},"props.values")," of the segment to be (pre)selected."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"tintColor")),(0,l.kt)("p",null,"Accent color of the control."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("center",null,(0,l.kt)("img",{src:"assets/SegmentedControlIOS/tintColor.png",width:"360"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"values"},(0,l.kt)("inlineCode",{parentName:"h3"},"values")),(0,l.kt)("p",null,"The labels for the control's segment buttons, in order."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))))}p.isMDXComponent=!0}}]);