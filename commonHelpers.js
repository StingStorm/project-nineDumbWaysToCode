(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();AOS.init();(()=>{const c=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const e=c.querySelectorAll('a[href*="#"]'),t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),c.classList.toggle("is-open");const s=t?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[s](document.body),e.length!==0){if(!t){e.forEach(i=>{i.addEventListener("click",n)});return}e.forEach(i=>{i.removeEventListener("click",n)})}};o.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 1279px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.addEventListener("DOMContentLoaded",function(){var c=new IntersectionObserver(function(o){o.forEach(function(r){r.isIntersecting?r.target.classList.add("visible"):r.target.classList.remove("visible")})});document.querySelectorAll(".animate-on-scroll").forEach(function(o){c.observe(o)})});
//# sourceMappingURL=commonHelpers.js.map