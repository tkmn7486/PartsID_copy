(function(e){function t(t){for(var r,u,a=t[0],l=t[1],i=t[2],d=0,p=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);b&&b(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c5a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b0c0"),Object(r["d"])("div",{class:"title"},[Object(r["d"])("h1",null,"Parts ID Copy"),Object(r["d"])("p",null,"copyを押すと管理番号をコピーできます。")],-1)),o={class:"contents"},u={id:"table",border:"1"},a=Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",{class:"partsNumber"},"No."),Object(r["d"])("th",{class:"partsName"},"Parts Name"),Object(r["d"])("th",{class:"ID"},"Parts ID")])],-1),l={class:"copyButton"},i=["onClick"];function b(e,t,n,b,d,p){return Object(r["e"])(),Object(r["c"])(r["a"],null,[c,Object(r["d"])("div",o,[Object(r["d"])("table",u,[a,Object(r["d"])("tbody",null,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(b.parts_name,(function(t){return Object(r["e"])(),Object(r["c"])("tr",{key:t.id},[Object(r["d"])("th",null,Object(r["g"])(t.number),1),Object(r["d"])("th",null,Object(r["g"])(t.name),1),Object(r["d"])("th",null,Object(r["g"])(t.id),1),Object(r["d"])("td",l,[(Object(r["e"])(),Object(r["c"])("button",{onClick:function(e){return b.copyID(t.id)},key:e.button},"COPY ID",8,i))])])})),128))])])])],64)}var d={name:"App",setup:function(){function e(e){navigator.clipboard.writeText(e),console.log("文字列をコピーしました")}return{parts_name:[{number:"01",name:"iPhone 11",id:"SSI-FT-000001"},{number:"02",name:"iPhone X",id:"SSI-FT-000002"},{number:"03",name:"iPhone XR",id:"SSI-FT-000003"}],copyID:e}}},p=(n("944d"),n("6b0d")),s=n.n(p);const f=s()(d,[["render",b]]);var O=f;Object(r["b"])(O).mount("#app")},"944d":function(e,t,n){"use strict";n("0c5a")}});
//# sourceMappingURL=app.f0664ee6.js.map