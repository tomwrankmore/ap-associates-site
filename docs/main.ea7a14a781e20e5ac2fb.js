!function(e){function n(n){for(var o,a,l=n[0],s=n[1],c=n[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(n);f.length;)f.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,l=1;l<t.length;l++){var s=t[l];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={0:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var u=s;i.push([4,1]),t()}([,function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);t(1),t(2);function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var n,t,r;return n=e,(t=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&o(n.prototype,t),r&&o(n,r),e}();function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.openModalButtons=document.querySelectorAll(".open-modal"),this.events()}var n,t,o;return n=e,(t=[{key:"events",value:function(){var e=this;this.openModalButtons.forEach((function(n){return n.addEventListener("click",(function(n){return e.openTheModal(n)}))})),this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),this.modal.addEventListener("click",(function(){return e.closeTheModal()}))}},{key:"openTheModal",value:function(e){e.preventDefault(),this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n          <section class="modal">\n              <div class="modal__inner">\n              <h3 class="modal__title">Contact</h3><p class="border-bottom modal__description">If you would like to find out more about the\n          services we provide, please email us: <br> <a href="mailto:AP@AP.ASSOCIATES" class="btn">ap@ap.associates</a></p>\n              </div>\n              <div class="modal__close">X</div></section>\n        ')}}])&&i(n.prototype,t),o&&i(n,o),e}(),l=t(0),s=t.n(l);t(3);new r,new a,s.a.init({easing:"ease-in-out",duration:700,delay:0,once:!0,mirror:!1,disable:"mobile",anchorPlacement:"top-center"})}]);