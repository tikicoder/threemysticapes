(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8k0H":function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var r=n("wx14"),a=(n("q1tI"),n("qhky")),o=n("TSYQ"),c=n.n(o),i=n("R/WZ"),s=n("Wbzz"),u=(n("B1U6"),n("7O5W")),p=n("8tEE"),l=n("UE0M"),f=n("zT3W"),b=n("+0Sx"),d=n("pwcP"),g=n("zeN1"),y=n("1Ot/"),O=n("q3s8"),j=n("NKQG"),m=n("6d1X"),h=n("VykS"),v=n("3/xS"),w=n("qKvR");u.library.add(p.a);var x=[],S=Object(i.a)(h.a),P=Object(i.a)(v.a);function k(t){var e=t.children,o=t.pageNode,i=t.props,u=Object(s.useStaticQuery)("2885845903").site,p=S(),h=P(),v=Object.assign({},i),k="undefined"!=typeof window&&localStorage.getItem("themeVariation")?localStorage.getItem("themeVariation"):"dark";"undefined"!=typeof window&&localStorage.setItem("themeVariation",k);var I=[h.page,k];return Object(w.a)(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"}},Object(w.a)(a.a,{htmlAttributes:{class:c()([h.htmlRoot,k])}},Object(w.a)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+u.siteMetadata.componentKeys.google.analytics}),Object(w.a)("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n        \n          gtag('config', '"+u.siteMetadata.componentKeys.google.analytics+"', { 'anonymize_ip': true });\n          "),Object(w.a)("script",{"data-ad-client":"ca-pub-7263102980773082",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),Object(w.a)("body",{className:c()(I)})),Object(w.a)(m.a,{pageNode:o}),Object(w.a)("section",{className:"header"},Object(w.a)(d.a,Object(r.a)({color:"transparent",routes:x,brand:"3 Mystic Apes LLC",rightLinks:Object(w.a)(g.a,{pageNode:o}),fixed:!0,changeColorOnScroll:{height:15,color:"dark"}},v)),Object(w.a)(O.a,{filter:!0,image:n("aD3C"),pageClass:h.parallaxPage})),Object(w.a)(b.a,{classes:p,classesPage:h,pageNode:o},Object(w.a)(l.a,{justify:"center"},Object(w.a)(f.a,{xs:12,sm:12,md:12},Object(w.a)("main",{className:c()(h.mainContent)},e)))),Object(w.a)("section",{className:"footer"},Object(w.a)(y.a,null)))}},"8vSg":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b})),n.d(e,"query",(function(){return d}));n("q1tI");var r=n("Wbzz"),a=n("7ljp"),o=n("A2+M"),c=n("8k0H"),i=n("Eg6Q"),s=n("iLSZ"),u=n("UE0M"),p=n("zT3W"),l=n("qKvR"),f={GridContainer:u.a,GridItem:p.a,Button:s.a,Link:r.Link,H1:i.a,H2:i.b,H3:i.c,H4:i.d,H5:i.e,H6:i.f};function b(t){var e=t.data,n=t.pageContext,r=e.node;return Object(l.a)(c.a,{pageNode:r},Object(l.a)(a.MDXProvider,{components:f},Object(l.a)(o.MDXRenderer,{pageNode:r},n.body)))}var d="3373310648"},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),c=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("q1tI"),p=n("7ljp"),l=p.useMDXComponents,f=p.mdx,b=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,i=c(t,["scope","components","children"]),p=l(n),d=b(e),g=u.useMemo((function(){if(!o)return null;var t=s({React:u,mdx:f},d),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return u.createElement(g,s({components:p},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),a=n("b48C");function o(e,n,c){return a()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o}}]);
//# sourceMappingURL=component---src-templates-page-page-js-5e9fcf600be08982f57f.js.map