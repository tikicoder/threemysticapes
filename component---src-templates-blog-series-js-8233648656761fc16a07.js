(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8k0H":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("wx14"),o=n("zLVn"),a=(n("q1tI"),n("R/WZ")),c=(n("B1U6"),n("7O5W")),i=n("8tEE"),u=n("UE0M"),l=n("zT3W"),p=n("VUCf"),s=n("Hq5D"),f=n("VykS"),d=n("3/xS"),b=n("qKvR");c.library.add(i.a);var y=Object(a.a)(f.a),O=Object(a.a)(d.a);function g(t){var e=t.children,n=t.pageNode,a=t.location,c=t.pageContext,i=Object(o.a)(t,["children","pageNode","location","pageContext"]),f=y(),d=O(),g="undefined"!=typeof window&&localStorage.getItem("themeVariation")?localStorage.getItem("themeVariation"):"dark";return"undefined"!=typeof window&&localStorage.setItem("themeVariation",g),Object(b.a)(p.a,Object(r.a)({pageNode:n,classes:f,classesPage:d,location:a,pageContext:c},i),Object(b.a)(u.a,{justify:"center"},Object(b.a)(l.a,{xs:12,sm:12,md:12},Object(b.a)(s.a,{pageNode:n,classes:f,classesPage:d,location:a,pageContext:c},e))))}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),p=n("7ljp").mdx,s=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,a=c(t,["scope","children"]),i=s(e),f=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:p},i),e=Object.keys(t),a=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,e]);return l.createElement(f,u({},a))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function a(e,n,c){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}t.exports=a},xeWY:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j})),n.d(e,"query",(function(){return v}));var r=n("wx14"),o=n("zLVn"),a=(n("q1tI"),n("Wbzz")),c=n("7ljp"),i=n("A2+M"),u=n("8k0H"),l=n("Eg6Q"),p=n("iLSZ"),s=n("UE0M"),f=n("zT3W"),d=n("RHQs"),b=n("kKik"),y=n("ldJd"),O=n("qKvR"),g={GridList:d.a,GridListTile:b.a,GridListTileBar:y.a,GridContainer:s.a,GridItem:f.a,Button:p.a,Link:a.Link,H1:l.a,H2:l.b,H3:l.c,H4:l.d,H5:l.e,H6:l.f};function j(t){var e=t.data,n=t.pageContext,a=t.location,l=Object(o.a)(t,["data","pageContext","location"]),p=e.node,s=e.posts;return n.data=null===n.data||void 0===e?"":n.data,null!==n.dynamicTitle&&void 0!==n.dynamicTitle&&n.dynamicTitle.length>0&&(null!==p.context.title&&void 0!==p.context.title||(p.context.title=""),p.context.title+=" - "+n.dynamicTitle),Object(O.a)(u.a,Object(r.a)({pageNode:p,location:a,pageContext:n},l),Object(O.a)(c.MDXProvider,{components:g},Object(O.a)(i.MDXRenderer,{pageNode:p,posts:s,pageContext:n,location:a},n.body)))}var v="3652657209"}}]);
//# sourceMappingURL=component---src-templates-blog-series-js-8233648656761fc16a07.js.map