import{c as e,o as r,F as o,a as t,b as i}from"./vendor.c28dc2d7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const n={},s=t("div",{id:"header"},[t("div",null,"LOW GLOSS"),t("div",{id:"vnum"},"emitter v0.0.0")],-1),c=t("video",{playsinline:"",autoplay:"",muted:"",loop:"",id:"bgstatic"},[t("source",{src:"/assets/static1.89f52430.mp4",type:"video/mp4"})],-1);n.render=function(t,i){return r(),e(o,null,[s,c],64)},i(n).mount("#app");
