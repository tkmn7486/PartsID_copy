(function(e){function t(t){for(var c,u,l=t[0],b=t[1],a=t[2],d=0,s=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&s.push(r[u][0]),r[u]=0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);i&&i(t);while(s.length)s.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var b=n[l];0!==r[b]&&(c=!1)}c&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},o=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],b=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var i=b;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=(n("b0c0"),n("cf05")),o=n.n(r),u=Object(c["d"])("div",{class:"title"},[Object(c["d"])("img",{alt:"Vue logo",src:o.a,class:"logo"}),Object(c["d"])("h1",null,"Parts ID Copy"),Object(c["d"])("p",null,"copyを押すと管理番号をコピーできます。")],-1),l={class:"water_proof"},b=Object(c["d"])("h3",null,"防水テープ",-1),a={id:"table",border:"1"},i=Object(c["d"])("thead",null,[Object(c["d"])("tr",null,[Object(c["d"])("th",{class:"partsNumber"},"No."),Object(c["d"])("th",{class:"partsName"},"Parts Name"),Object(c["d"])("th",{class:"ID"},"Parts ID")])],-1),d={class:"copyButton"},s=["onClick"],O={class:"glass_film"},j=Object(c["d"])("h3",null,"保護フィルム",-1),p={id:"table",border:"1"},f=Object(c["d"])("thead",null,[Object(c["d"])("tr",null,[Object(c["d"])("th",{class:"partsNumber"},"No."),Object(c["d"])("th",{class:"partsName"},"Parts Name"),Object(c["d"])("th",{class:"ID"},"Parts ID")])],-1),m={class:"copyButton"},h=["onClick"];function S(e,t,n,r,o,S){return Object(c["e"])(),Object(c["c"])(c["a"],null,[u,Object(c["d"])("div",l,[b,Object(c["d"])("table",a,[i,Object(c["d"])("tbody",null,[(Object(c["e"])(!0),Object(c["c"])(c["a"],null,Object(c["f"])(r.WP_list,(function(t){return Object(c["e"])(),Object(c["c"])("tr",{key:t.id},[Object(c["d"])("th",null,Object(c["g"])(t.number),1),Object(c["d"])("th",null,Object(c["g"])(t.name),1),Object(c["d"])("th",null,Object(c["g"])(t.id),1),Object(c["d"])("td",d,[(Object(c["e"])(),Object(c["c"])("button",{onClick:function(e){return r.copyID(t.id)},key:e.button},"COPY ID",8,s))])])})),128))])])]),Object(c["d"])("div",O,[j,Object(c["d"])("table",p,[f,Object(c["d"])("tbody",null,[(Object(c["e"])(!0),Object(c["c"])(c["a"],null,Object(c["f"])(r.GF_list,(function(t){return Object(c["e"])(),Object(c["c"])("tr",{key:t.id},[Object(c["d"])("th",null,Object(c["g"])(t.number),1),Object(c["d"])("th",null,Object(c["g"])(t.name),1),Object(c["d"])("th",null,Object(c["g"])(t.id),1),Object(c["d"])("td",m,[(Object(c["e"])(),Object(c["c"])("button",{onClick:function(e){return r.copyID(t.id)},key:e.button},"COPY ID",8,h))])])})),128))])])])],64)}var P={name:"App",setup:function(){function e(e){navigator.clipboard.writeText(e),console.log("文字列をコピーしました")}return{WP_list:[{number:"01",name:"iPhone 11",id:"SSI-FT-000001"},{number:"02",name:"iPhone X",id:"SSI-FT-000002"},{number:"03",name:"iPhone XR",id:"SSI-FT-000003"},{number:"04",name:"iPhone XS",id:"SSI-FT-000004"},{number:"05",name:"iPhone XS Max",id:"SSI-FT-000005"},{number:"06",name:"iPhone 7,8,SE2",id:"SSI-FT-000006"},{number:"07",name:"iPhone 8 Plus",id:"SSI-FT-000007"}],GF_list:[{number:"01",name:"iPhone 11",id:"SSI-FT-000001"},{number:"02",name:"iPhone X",id:"SSI-FT-000002"},{number:"03",name:"iPhone XR",id:"SSI-FT-000003"},{number:"04",name:"iPhone XS",id:"SSI-FT-000004"},{number:"05",name:"iPhone XS Max",id:"SSI-FT-000005"},{number:"06",name:"iPhone 7,8,SE2",id:"SSI-FT-000006"},{number:"07",name:"iPhone 8 Plus",id:"SSI-FT-000007"}],copyID:e}}},y=(n("67ed"),n("6b0d")),g=n.n(y);const I=g()(P,[["render",S]]);var v=I;Object(c["b"])(v).mount("#app")},"67ed":function(e,t,n){"use strict";n("c9a4")},c9a4:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.107510be.png"}});
//# sourceMappingURL=app.1ec5ca0e.js.map