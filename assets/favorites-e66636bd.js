import{a as c}from"./vendor-85278fa1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();c.defaults.baseURL="https://your-energy.b.goit.study/api/";const L=async({filter:r="",page:e=1,limit:o=12}={})=>{try{return console.log("filter",r),(await c.get(`filters?filter=${r}&page=${e}&limit=${o}`)).data}catch(s){console.error("Error in getFilters:",s)}},g=async({bodypart:r="",muscles:e="",equipment:o="",keyword:s="",page:t=1,limit:a=10}={})=>{try{return(await c.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${o}&keyword=${s}&page=${t}&limit=${a}`)).data}catch(i){console.error("Error in getExercises:",i)}},k=async r=>{try{return(await c.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},E=async r=>{try{return await c.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},p=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',f=(r,e=!1)=>{const{name:o,burnedCalories:s,bodyPart:t,target:a,_id:i,time:u}=r;return`<li class="favorite-info-card" data-id=${i}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${p(e)}
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
            Burned calories: <em class="hidden-overflow-text">${s}/${u}<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${t}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em class="hidden-overflow-text">${a}</em></p>
        </li>
      </ul>
    </li>`},w=r=>r.results.map(({imgURL:e,name:o,filter:s})=>`            
        <li class="exercises_category-item"
        style="
          background-image: linear-gradient(
              0deg,
              rgba(17, 17, 17, 0.5) 0%,
              rgba(17, 17, 17, 0.5) 100%
            ),
            url(${e});
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: cover;
        "
        >
            <div class="exercises_category-descr">
                <h3 class="exercises_category-title">${o}</h3>
                <p class="exercises_category-text">${s}</p>   
            </div>
      </li>`).join(""),F=(r,e)=>{let o=[];for(let s=1;s<=r.totalPages;s++){let t=s.toString()===r.page?"current":"";o.push(` <li class="exercises_pagination-item ${t}">
        <a class="page-num" data-page="${s}" data-filter="${e}">${s}</a>
      </li>`)}return o.join("")},m=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(o){console.error("Error save localStorage:",o)}},v=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},h=r=>{const e=v(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const o=e.filter(({_id:s})=>s!==r);m(KEY_STORAGE.favorites,o)},d=document.getElementById("favorite-cards-list"),n=document.querySelector(".text-nocard-container"),l=document.querySelector(".scrollbar-container"),y=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),h(e)},b=r=>r.map(e=>f(e,!0)).join(""),$=async r=>{try{const{results:e}=await g();if(console.log(e),e.length===0){l.classList.add("hidden"),n.classList.remove("hidden");return}n.classList.add("hidden"),l.classList.remove("hidden"),r.insertAdjacentHTML("beforeend",b(e))}catch(e){console.log(e.message)}};$(d);d.addEventListener("click",y);export{F as a,k as b,w as c,L as g,E as s};
//# sourceMappingURL=favorites-e66636bd.js.map
