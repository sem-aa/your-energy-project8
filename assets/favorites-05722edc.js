import{a}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();a.defaults.baseURL="https://your-energy.b.goit.study/api/";const l=async({bodypart:r="",muscles:t="",equipment:n="",keyword:o="",page:e=1,limit:s=10}={})=>{try{return(await a.get(`exercises?bodypart=${r}&muscles=${t}&equipment=${n}&keyword=${o}&page=${e}&limit=${s}`)).data}catch(i){console.error("Error in getExercises:",i)}},d=r=>r?'<svg class="ChangebleIcon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg>':'<div class="IconRatingContainer"><p class="RatingInfoCard">4.0</p><svg class="ChangebleIcon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',u=(r,t=!1)=>{const{name:n,burnedCalories:o,bodyPart:e,target:s}=r;return`<li class="favorite-info-card">
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${d(t)}
        </div>
        <div class="card-title-container">
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
        <li class="InfoListItem">
          <p class="item-text">
            Burned calories: <em class="InfoData">${o}/3<strong>min</strong></em>
          </p>
        </li>
        <li class="InfoListItem">
          <p class="item-text">Body part: <em class="InfoData">${e}</em></p>
        </li>
        <li class="InfoListItem">
          <p class="item-text">Target: <em class="InfoData">${s}</em></p>
        </li>
      </ul>
    </li>`},c=document.querySelector(".favorite-cards-thumb");console.log(c);l().then(r=>{console.log(r.results[0]);const t=u(r.results[0]);c.insertAdjacentHTML("beforebegin",t)});
//# sourceMappingURL=favorites-05722edc.js.map
