(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,t){e.exports=t.p+"static/media/shrek-dab.761c33d2.gif"},function(e,n,t){e.exports=t.p+"static/media/shrek-no-dab.0be7510d.png"},function(e,n,t){e.exports=t(14)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(3),r=t.n(i),c=(t(12),t(1)),s=t(4),l=t.n(s),u=t(5),d=t.n(u),f=(t(13),function(){var e=Object(o.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1],r=window.localStorage.getItem("dabcounter"),s=0;null!==r&&(s=parseInt(r));var u=Object(o.useState)(s),f=Object(c.a)(u,2),p=f[0],h=f[1];function w(e){i(!0),function(){var e=p+1;h(e),window.localStorage.setItem("dabcounter",String(e))}(),e.preventDefault()}function g(e){i(!1)}return a.a.createElement("div",{className:"App",onTouchStart:w,onMouseDown:w,onTouchEnd:g,onMouseUp:g},a.a.createElement("div",{className:"App-image-container"},a.a.createElement("img",{className:"App-shrek-image",src:t?l.a:d.a,alt:"logo"})),a.a.createElement("div",{className:"App-counter-container"},a.a.createElement("h1",null,a.a.createElement("p",null,"Shrek has dabbed ",p," times"))))}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shrek",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/shrek","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(n,e)})}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.7bd4946f.chunk.js.map