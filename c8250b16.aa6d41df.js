(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{339:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),o=(a(0),a(413)),c=a(417),l=a(418),i=a(419),s={id:"getting-started",title:"\u7b80\u4ecb"},u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"\u6b22\u8fce\u5f00\u542f React Native \u7684\u65c5\u7a0b\uff01\u5982\u679c\u4f60\u5728\u627e\u5982\u4f55\u642d\u5efa\u73af\u5883\u7684\u6587\u6863\uff0c\u8bf7\u79fb\u6b65\u642d\u5efa\u5f00\u53d1\u73af\u5883\u3002 \u7ee7\u7eed\u5f80\u4e0b\u9605\u8bfb\u53ef\u4e86\u89e3\u5173\u4e8e\u6587\u6863\u7ed3\u6784\u3001\u539f\u751f\u7ec4\u4ef6\u3001React\u7b49\u76f8\u5173\u7684\u4e00\u4e9b\u4ecb\u7ecd\u3002",source:"@site/../cndocs/introduction.md",slug:"/getting-started",permalink:"/docs/next/getting-started",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/introduction.md",version:"current",lastUpdatedAt:1610508568,sidebar:"docs",next:{title:"\u6838\u5fc3\u7ec4\u4ef6\u4e0e\u539f\u751f\u7ec4\u4ef6",permalink:"/docs/next/intro-react-native-components"}},d=[{value:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",id:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",children:[]},{value:"\u9884\u5907\u77e5\u8bc6",id:"\u9884\u5907\u77e5\u8bc6",children:[]},{value:"\u4ea4\u4e92\u793a\u4f8b",id:"\u4ea4\u4e92\u793a\u4f8b",children:[]},{value:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e Class \u7ec4\u4ef6",id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6",children:[]},{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",children:[]},{value:"\u7279\u6b8a\u683c\u5f0f",id:"\u7279\u6b8a\u683c\u5f0f",children:[]}],b={toc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"content-banner"},Object(o.b)("p",null,"\u6b22\u8fce\u5f00\u542f React Native \u7684\u65c5\u7a0b\uff01\u5982\u679c\u4f60\u5728\u627e\u5982\u4f55\u642d\u5efa\u73af\u5883\u7684\u6587\u6863\uff0c\u8bf7\u79fb\u6b65",Object(o.b)("a",{href:"environment-setup"},"\u642d\u5efa\u5f00\u53d1\u73af\u5883"),"\u3002 \u7ee7\u7eed\u5f80\u4e0b\u9605\u8bfb\u53ef\u4e86\u89e3\u5173\u4e8e\u6587\u6863\u7ed3\u6784\u3001\u539f\u751f\u7ec4\u4ef6\u3001React\u7b49\u76f8\u5173\u7684\u4e00\u4e9b\u4ecb\u7ecd\u3002"),Object(o.b)("img",{className:"content-banner-img",src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/p_android-ios-devices.svg",alt:" "})),Object(o.b)("p",null,"\u8bb8\u591a\u4e0d\u540c\u7c7b\u578b\u7684\u4eba\u90fd\u5728\u4f7f\u7528 React Native\uff1a\u4ece\u9ad8\u7ea7 iOS \u5f00\u53d1\u4eba\u5458\u5230 React \u521d\u5b66\u8005\uff0c\u518d\u5230\u804c\u4e1a\u751f\u6daf\u4e2d\u7b2c\u4e00\u6b21\u5f00\u59cb\u7f16\u7a0b\u7684\u4eba\u3002\u8fd9\u4e9b\u6587\u6863\u662f\u4e3a\u6240\u6709\u5b66\u4e60\u8005\u7f16\u5199\u7684\uff0c\u65e0\u8bba\u4ed6\u4eec\u7684\u7ecf\u9a8c\u6c34\u5e73\u6216\u80cc\u666f\u5982\u4f55\u3002"),Object(o.b)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863"},"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\uff0c\u50cf\u770b\u4e66\u4e00\u6837\u7ebf\u6027\u9605\u8bfb\u8fd9\u4e9b\u6587\u6863\uff1b\u4e5f\u53ef\u4ee5\u9605\u8bfb\u4f60\u9700\u8981\u7684\u7279\u5b9a\u90e8\u5206\u3002\u5df2\u7ecf\u719f\u6089 React \u4e86\u5417\uff1f\u4f60\u53ef\u4ee5\u8df3\u8fc7",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"intro-react"}),"\u8be5\u90e8\u5206"),"--\u6216\u8005\u9605\u8bfb\u5b83\u6765\u8fdb\u884c\u7b80\u5355\u7684\u590d\u4e60\u3002"),Object(o.b)("h2",{id:"\u9884\u5907\u77e5\u8bc6"},"\u9884\u5907\u77e5\u8bc6"),Object(o.b)("p",null,"\u8981\u4f7f\u7528 React Native\uff0c\u4f60\u9700\u8981\u5bf9 JavaScript \u57fa\u7840\u77e5\u8bc6\u6709\u6240\u4e86\u89e3\u3002\u5982\u679c\u4f60\u662f JavaScript \u65b0\u624b\u6216\u9700\u8981\u590d\u4e60\uff0c\u4f60\u53ef\u4ee5\u5728 MDN \u4e0a",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}),"\u6df1\u5165\u5b66\u4e60"),"\u6216",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"}),"\u590d\u4e60\u4e00\u4e0b"),"\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u867d\u7136\u6211\u4eec\u5c3d\u6700\u5927\u52aa\u529b\u5047\u8bbe\u8bfb\u8005\u5728\u8fd9\u4e4b\u524d\u6ca1\u6709\u592a\u591a React\u3001Android \u6216 iOS \u5f00\u53d1\u7684\u77e5\u8bc6\uff0c\u4f46\u5bf9\u4e8e\u6709\u62b1\u8d1f\u7684 React Native \u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u8fd9\u4e9b\u90fd\u662f\u6709\u4ef7\u503c\u7684\u5b66\u4e60\u4e3b\u9898\u3002\u6211\u4eec\u4f1a\u5c3d\u53ef\u80fd\u5730\u63d0\u4f9b\u6df1\u5165\u4e86\u89e3\u7684\u76f8\u5173\u6587\u7ae0\u94fe\u63a5\u3002")),Object(o.b)("h2",{id:"\u4ea4\u4e92\u793a\u4f8b"},"\u4ea4\u4e92\u793a\u4f8b"),Object(o.b)("p",null,"\u6587\u6863\u4e2d\u65f6\u5e38\u4f1a\u9644\u6709\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u4ea4\u4e92\u793a\u4f8b\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20YourApp%20%3D%20()%20%3D%3E%20%7B%0A%20%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20Try%20editing%20me!%20%F0%9F%8E%89%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20YourApp%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u4e86\u4e00\u4e2a\u53eb\u505a Snack Player \u7684\u5de5\u5177\uff08\u6211\u4eec\u4e5f\u4f1a\u7528\u201c\u6c99\u76d2\u73af\u5883\u201d\u4ee3\u6307\uff09\u3002\u8fd9\u662f\u7531 Expo \u516c\u53f8\u63d0\u4f9b\u7684\u4e13\u95e8\u7528\u4e8e\u6f14\u793a\u3001\u5b66\u4e60 React Native \u7684\u4ea4\u4e92\u5de5\u5177\u3002\u5b83\u96c6\u6210\u4e86 react-native-web \u517c\u5bb9\u5c42\uff0c\u4f1a\u5c3d\u53ef\u80fd\u628a React Native \u7684\u4ee3\u7801\u8f6c\u5316\u4e3a\u517c\u5bb9\u7684\u7f51\u9875\u6765\u8fd0\u884c\uff08\u5f53\u7136\u4f1a\u6709\u65e0\u6cd5\u8f6c\u5316\u7684\u60c5\u51b5\uff0c\u90a3\u79cd\u60c5\u51b5\u4e0b\u5219\u5fc5\u987b\u4f7f\u7528\u6a21\u62df\u5668\u6216\u8005\u624b\u673a\u6765\u8fd0\u884c\uff09\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u548c\u8fd0\u884c\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5728\u91cc\u9762\u76f4\u63a5\u7ec3\u4e60\u3002\u8bd5\u7740\u6539\u4e0b\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\u6587\u5b57\u770b\u770b\u6548\u679c\u5427\uff01"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6c99\u76d2\u73af\u5883\u901a\u5e38\u53ea\u7528\u4e8e\u7b80\u5355\u7684\u6f14\u793a\u3001\u5b66\u4e60\u9879\u76ee\uff0c\u5b83\u65e0\u6cd5\u6dfb\u52a0\u65b0\u7684\u539f\u751f\u6a21\u5757\u3002\u6240\u4ee5\u5bf9\u4e8e\u6b63\u5f0f\u7684\u9879\u76ee\uff0c\u6211\u4eec\u5efa\u8bae",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"environment-setup"}),"\u642d\u5efa\u5b8c\u6574\u7684\u539f\u751f\u73af\u5883")," \u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u5230\u5b8c\u6574\u9879\u76ee\u7684",Object(o.b)("inlineCode",{parentName:"p"},"App.js"),"\u6587\u4ef6\u4e2d\u6765\u8fd0\u884c\u3002")),Object(o.b)("h2",{id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6"},"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e Class \u7ec4\u4ef6"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u5728 React \u4e2d\u4f7f\u7528\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216 Class \u7ec4\u4ef6\u3002\u6700\u5f00\u59cb\u53ea\u6709 Class \u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528 state \uff0c\u4f46\u81ea\u4ece\u6709\u4e86 React Hooks API, \u4f60\u53ef\u4ee5\u4e3a\u51fd\u6570\u7ec4\u4ef6\u6dfb\u52a0 state \u548c\u5f88\u591a\u5176\u5b83\u7684\u529f\u80fd\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html"}),"Hooks API \u662f React Native 0.59 \u63d0\u4f9b\u7684\u65b0\u7279\u6027"),", Hooks \u662f\u4e00\u79cd\u9762\u5411\u672a\u6765\u7684\u7f16\u5199 React \u7ec4\u4ef6\u7684\u65b9\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u5728\u672c\u6587\u6863\u4e2d\u4f18\u5148\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u70b9\u51fb\u201cClass \u7ec4\u4ef6\u201d\u5207\u6362\u5230 Class \u7ec4\u4ef6\u4ee3\u7801\uff1a"),Object(o.b)(c.a,{groupId:"syntax",defaultValue:i.a.defaultSyntax,values:i.a.syntax,mdxType:"Tabs"},Object(o.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Hello World Function Component","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20HelloWorldApp%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20HelloWorldApp%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Hello World Class Component","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aclass%20HelloWorldApp%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20HelloWorldApp%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("h2",{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"},"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),Object(o.b)("p",null,"\u5b66\u4e60 React Native \u7684\u5f00\u53d1\u8005\u62e5\u6709\u4e0d\u540c\u7684\u5f00\u53d1\u80cc\u666f\uff0c\u4f60\u6216\u8bb8\u6709\u5f88\u591a\u6280\u672f\u7ecf\u9a8c\uff0c\u5305\u62ec Android\u3001iOS \u7b49\u7b49\uff0c\u6211\u4eec\u5728\u7f16\u5199\u6587\u6863\u7684\u65f6\u5019\u52aa\u529b\u7167\u987e\u5230\u5177\u6709\u4e0d\u540c\u77e5\u8bc6\u80cc\u666f\u7684\u5f00\u53d1\u8005\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4f1a\u4e13\u95e8\u9488\u5bf9\u7279\u5b9a\u7684\u5e73\u53f0\u63d0\u4f9b\u7279\u5b9a\u7684\u8bb2\u89e3:"),Object(o.b)(c.a,{groupId:"guide",defaultValue:"web",values:i.a.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},Object(o.b)(l.a,{value:"web",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Web \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"))),Object(o.b)(l.a,{value:"android",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Android \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"))),Object(o.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"iOS \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002")))),Object(o.b)("h2",{id:"\u7279\u6b8a\u683c\u5f0f"},"\u7279\u6b8a\u683c\u5f0f"),Object(o.b)("p",null,"\u6211\u4eec\u4f7f\u7528\u7c97\u4f53\u5b57\u6765\u63cf\u8ff0\u83dc\u5355\u8def\u5f84\uff0c\u4f7f\u7528\u201c>\u201d\u7b26\u53f7\u8fde\u63a5\u5b50\u83dc\u5355\uff0c\u6bd4\u5982\uff1a ",Object(o.b)("strong",{parentName:"p"},"Android Studio > Preferences")),Object(o.b)("hr",null),Object(o.b)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u5f00\u59cb\u5b66\u4e60 React Native \u7684\u57fa\u7840\u77e5\u8bc6 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/intro-react-native-components"}),"\u6838\u5fc3\u7ec4\u4ef6\u4e0e\u539f\u751f\u7ec4\u4ef6"),"."))}p.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},414:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},415:function(e,t,a){"use strict";var n=a(0),r=a(416);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},417:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(415),c=a(414),l=a(62),i=a.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(o.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(n.useState)(l),j=O[0],g=O[1],y=n.Children.toArray(e.children);if(null!=b){var A=f[b];null!=A&&A!==j&&d.some((function(e){return e.value===A}))&&g(A)}var h=function(e){g(e),null!=b&&v(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},418:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},419:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),c=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.a={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:c,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);