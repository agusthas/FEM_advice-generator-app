const l=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};l();const d="https://api.adviceslip.com/advice",s=document.getElementById("content"),u=document.getElementById("btn-random");function p(){s.innerHTML=`
  <div
    style="border-top-color: transparent"
    class="border-primary-400 h-8 w-8 animate-spin rounded-full border-2"
  ></div>
  `}async function f(){return(await fetch(d)).json()}function m(n){const r=`
  <h2 class="text-primary-400 text-sm tracking-[0.35em]">
    ADVICE #<span id="slip-id">${n.id}</span>
  </h2>
  <p
    id="quote"
    class="text-primary-100 mt-6 text-2xl leading-snug sm:text-[1.75rem]"
  >
    "${n.advice}"
  </p>
  `;s.innerHTML=r}async function c(){p();try{const n=await f();m(n.slip)}catch{console.error("Something wrong!")}}u.addEventListener("click",async()=>{await c()});c();
