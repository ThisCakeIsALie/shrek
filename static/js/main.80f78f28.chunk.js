(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t.p+"static/media/shrek-dab.761c33d2.gif"},function(e,n,t){e.exports=t.p+"static/media/shrek-no-dab.0be7510d.png"},function(e,n,t){e.exports=t(17)},,,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(5),c=t.n(a),i=(t(14),t(1)),s=t.n(i),u=t(2),l=t(3),f=t(6),p=t.n(f),d=t(7),h=t.n(d),w=(t(16),function(){var e=Object(o.useState)(!1),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(o.useRef)(!1),i=window.localStorage.getItem("dabcounter"),f=0;null!==i&&(f=parseInt(i));var d=Object(o.useState)(f),w=Object(l.a)(d,2),v=w[0],g=w[1];function m(){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=v+1,e.next=3,g(n);case 3:return e.next=5,window.localStorage.setItem("dabcounter",String(n));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(!0);case 2:return e.next=4,m();case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e){a(!1)}var j={onTouchStart:function(e){e.preventDefault(),c.current=!0,k(e)},onTouchEnd:function(e){e.preventDefault(),E()},onMouseDown:function(e){e.preventDefault(),c.current||k(e)},onMouseUp:function(e){e.preventDefault(),c.current=!1,E()}};return r.a.createElement("div",Object.assign({className:"App"},j),r.a.createElement("div",{className:"App-image-container"},r.a.createElement("img",{className:"App-shrek-image",src:t?p.a:h.a,alt:"logo"})),r.a.createElement("div",{className:"App-counter-container"},r.a.createElement("h1",null,r.a.createElement("p",null,"Shrek has dabbed ",v," times"))))}),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.80f78f28.chunk.js.map