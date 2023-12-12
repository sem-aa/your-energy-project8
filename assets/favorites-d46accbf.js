import{a as c}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();c.defaults.baseURL="https://your-energy.b.goit.study/api/";const l=async({bodypart:r="",muscles:t="",equipment:n="",keyword:o="",page:e=1,limit:s=10}={})=>{try{return(await c.get(`exercises?bodypart=${r}&muscles=${t}&equipment=${n}&keyword=${o}&page=${e}&limit=${s}`)).data}catch(i){console.error("Error in getExercises:",i)}},d=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',u=(r,t=!1)=>{const{name:n,burnedCalories:o,bodyPart:e,target:s,_id:i}=r;return`<li class="favorite-info-card" data-id=${i}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${d(t)}
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
          <p class="item-text">Body part: <em>${e}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em>${s}</em></p>
        </li>
      </ul>
    </li>`},f=r=>{const t=getFromLocal(KEY_STORAGE.favorites);if(!t){alert("Oops! Refresh page");return}const n=t.filter(({_id:o})=>o!==r);saveToLocal(KEY_STORAGE.favorites,n)},a=document.getElementById("favorite-cards-list");console.log(a);l().then(r=>{console.log(r.results[0]);const t=u(r.results[0]);a.insertAdjacentHTML("beforeend",t)});const g=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const t=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(t),f(t)};a.addEventListener("click",g);
//# sourceMappingURL=favorites-d46accbf.js.map
