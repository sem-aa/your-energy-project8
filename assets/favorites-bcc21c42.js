import{a as n}from"./vendor-6d0036ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();n.defaults.baseURL="https://your-energy.b.goit.study/api/";const d=async({bodypart:r="",muscles:e="",equipment:o="",keyword:i="",page:t=1,limit:s=10}={})=>{try{return(await n.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${o}&keyword=${i}&page=${t}&limit=${s}`)).data}catch(a){console.error("Error in getExercises:",a)}},E=async r=>{try{return(await n.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},w=async r=>{try{return await n.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},u=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',f=(r,e=!1)=>{const{name:o,burnedCalories:i,bodyPart:t,target:s,_id:a,time:l}=r;return`<li class="favorite-info-card" data-id=${a}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${u(e)}
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
            Burned calories: <em class="hidden-overflow-text">${i}/${l}<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${t}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em class="hidden-overflow-text">${s}</em></p>
        </li>
      </ul>
    </li>`},g=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(o){console.error("Error save localStorage:",o)}},p=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},m=r=>{const e=p(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const o=e.filter(({_id:i})=>i!==r);g(KEY_STORAGE.favorites,o)},c=document.getElementById("favorite-cards-list"),v=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),m(e)},h=r=>r.map(e=>f(e,!0)).join(""),y=async r=>{try{const{results:e}=await d();console.log(e),r.insertAdjacentHTML("beforeend",h(e))}catch(e){console.log(e.message)}};y(c);c.addEventListener("click",v);export{E as g,w as s};
//# sourceMappingURL=favorites-bcc21c42.js.map
