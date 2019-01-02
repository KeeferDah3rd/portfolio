/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscolumns-cssgrid_cssgridlegacy-flexbox-sandbox-seamless-srcdoc-setclasses !*/
!function(e,n,t){function r(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?x.className.baseVal=n:x.className=n)}function s(e,n){return typeof e===n}function o(){var e,n,t,r,o,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=s(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),C.push((r?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],s(r,"function")?u(r,t||n):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,a,l,u,f="modernizr",d=i("div"),c=p();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=s?s[r]:f+(r+1),d.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+f,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),a=t(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!a}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(d(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+d(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,r,o){function u(){d&&(delete z.style,delete z.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var f=g(e,r);if(!s(f,"undefined"))return f}for(var d,c,p,m,y,h=["modernizr","tspan","samp"];!z.style&&h.length;)d=!0,z.modElem=i(h.shift()),z.style=z.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=z.style[m],a(m,"-")&&(m=l(m)),z.style[m]!==t){if(o||s(r,"undefined"))return u(),"pfx"==n?m:!0;try{z.style[m]=r}catch(v){}if(z.style[m]!=y)return u(),"pfx"==n?m:!0}return u(),!1}function h(e,n,t,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return s(n,"string")||s(n,"undefined")?y(a,n,r,o):(a=(e+" "+k.join(i+" ")+i).split(" "),f(a,n,t))}function v(e,n,r){return h(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var x=n.documentElement,b="svg"===x.nodeName.toLowerCase();Modernizr.addTest("sandbox","sandbox"in i("iframe")),Modernizr.addTest("seamless","seamless"in i("iframe")),Modernizr.addTest("srcdoc","srcdoc"in i("iframe"));var _="Moz O ms Webkit",T=S._config.usePrefixes?_.split(" "):[];S._cssomPrefixes=T;var k=S._config.usePrefixes?_.toLowerCase().split(" "):[];S._domPrefixes=k;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),S.testAllProps=h,S.testAllProps=v,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=v("columnCount");try{e=!!n,e&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=v("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||v(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("cssgridlegacy",v("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",v("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),o(),r(C),delete S.addTest,delete S.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);
