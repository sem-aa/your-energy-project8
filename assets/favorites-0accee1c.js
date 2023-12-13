import{a}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();a.defaults.baseURL="https://your-energy.b.goit.study/api/";const l=async({bodypart:r="",muscles:e="",equipment:n="",keyword:o="",page:t=1,limit:s=10}={})=>{try{return(await a.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${n}&keyword=${o}&page=${t}&limit=${s}`)).data}catch(i){console.error("Error in getExercises:",i)}},v=async r=>{try{return(await a.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},m=async r=>{try{return await a.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},d=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',u=(r,e=!1)=>{const{name:n,burnedCalories:o,bodyPart:t,target:s,_id:i}=r;return`<li class="favorite-info-card" data-id=${i}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${d(e)}
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
        <h3 class="card-title">${n}</h3>
      </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned calories: <em class="hidden-overflow-text">${o}/3<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em>${t}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em>${s}</em></p>
        </li>
      </ul>
    </li>`},f=r=>{const e=getFromLocal(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const n=e.filter(({_id:o})=>o!==r);saveToLocal(KEY_STORAGE.favorites,n)},c=document.getElementById("favorite-cards-list");console.log(c);l().then(r=>{console.log(r.results[0]);const e=u(r.results[0]);c.insertAdjacentHTML("beforeend",e)});const g=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),f(e)};c.addEventListener("click",g);export{v as g,m as s};
//# sourceMappingURL=favorites-0accee1c.js.map
