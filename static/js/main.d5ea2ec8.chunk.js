(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(2),i=n.n(c),r=(n(14),n(3)),s=n(4),l=n(6),u=n(5),h=n(7),p=(n(15),n(16),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(){fetch("https://entropysector.com/hwrng/api/v1/public/numbers/1").then(function(t){return t.json()}).then(function(t){console.log(t),n.setState({result:t.data[0]})})},n.state={result:""},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("p",{className:"Result"},this.state.result),a.a.createElement("button",{onClick:this.handleClick,className:"FlipCoinButton"},"Flip Coin"))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.d5ea2ec8.chunk.js.map