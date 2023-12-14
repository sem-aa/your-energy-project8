import{a}from"./vendor-6d0036ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();a.defaults.baseURL="https://your-energy.b.goit.study/api/";const f=async({bodypart:r="",muscles:e="",equipment:o="",keyword:i="",page:t=1,limit:s=10}={})=>{try{return(await a.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${o}&keyword=${i}&page=${t}&limit=${s}`)).data}catch(n){console.error("Error in getExercises:",n)}},E=async r=>{try{return(await a.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},w=async r=>{try{return await a.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},g=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',m=(r,e=!1)=>{const{name:o,burnedCalories:i,bodyPart:t,target:s,_id:n,time:u}=r;return`<li class="favorite-info-card" data-id=${n}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${g(e)}
        </div>
        <div>
          <button type="button" class="start-btn">
            <p>Start</p>
            <svg width="16" height="16">
              <use href="../public/oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-title-container">
         <svg width="24" height="24">
          <use href="../public/oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="card-title">${o}</h3>
      </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned calories: <em class="hidden-overflow-text">${i}/${u}<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${t}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em class="hidden-overflow-text">${s}</em></p>
        </li>
      </ul>
    </li>`},p=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(o){console.error("Error save localStorage:",o)}},v=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},h=r=>{const e=v(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const o=e.filter(({_id:i})=>i!==r);p(KEY_STORAGE.favorites,o)},d=document.getElementById("favorite-cards-list"),c=document.querySelector(".text-nocard-container"),l=document.querySelector(".scrollbar-container"),y=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),h(e)},b=r=>r.map(e=>m(e,!0)).join(""),L=async r=>{try{const{results:e}=await f();if(console.log(e),e.length===0){l.classList.add("hidden"),c.classList.remove("hidden");return}c.classList.add("hidden"),l.classList.remove("hidden"),r.insertAdjacentHTML("beforeend",b(e))}catch(e){console.log(e.message)}};L(d);d.addEventListener("click",y);export{E as g,w as s};
//# sourceMappingURL=favorites-e33c056c.js.map
