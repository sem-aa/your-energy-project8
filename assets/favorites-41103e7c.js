import{a}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();a.defaults.baseURL="https://your-energy.b.goit.study/api/";const l=async({bodypart:s="",muscles:e="",equipment:n="",keyword:o="",page:t=1,limit:r=10}={})=>{try{return(await a.get(`exercises?bodypart=${s}&muscles=${e}&equipment=${n}&keyword=${o}&page=${t}&limit=${r}`)).data}catch(i){console.error("Error in getExercises:",i)}},v=async s=>{try{return(await a.get(`exercises/${s}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},d=s=>s?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',u=(s,e=!1)=>{const{name:n,burnedCalories:o,bodyPart:t,target:r,_id:i}=s;return`<li class="favorite-info-card" data-id=${i}>
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
          <p class="item-text">Target: <em>${r}</em></p>
        </li>
      </ul>
    </li>`},f=s=>{const e=getFromLocal(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const n=e.filter(({_id:o})=>o!==s);saveToLocal(KEY_STORAGE.favorites,n)},c=document.getElementById("favorite-cards-list");console.log(c);l().then(s=>{console.log(s.results[0]);const e=u(s.results[0]);c.insertAdjacentHTML("beforeend",e)});const g=({target:s})=>{if(!s.closest("#remove-favorite-btn"))return;const e=s.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),f(e)};c.addEventListener("click",g);export{v as g};
//# sourceMappingURL=favorites-41103e7c.js.map
