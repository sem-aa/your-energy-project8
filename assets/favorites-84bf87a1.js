import{a as l}from"./vendor-85278fa1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();l.defaults.baseURL="https://your-energy.b.goit.study/api/";const w=async({filter:r="",page:e=1,limit:o=12}={})=>{try{return console.log("filter",r),(await l.get(`filters?filter=${r}&page=${e}&limit=${o}`)).data}catch(s){console.error("Error in getFilters:",s)}},f=async({bodypart:r="",muscles:e="",equipment:o="",keyword:s="",page:t=1,limit:a=10}={})=>{try{return(await l.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${o}&keyword=${s}&page=${t}&limit=${a}`)).data}catch(c){console.error("Error in getExercises:",c)}},E=async r=>{try{return(await l.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},S=async r=>{try{return await l.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},p=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',m=(r,e=!1)=>{const{name:o,burnedCalories:s,bodyPart:t,target:a,_id:c,time:g}=r;return`<li class="favorite-info-card" data-id=${c}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${p(e)}
        </div>
        <div>
          <button type="button" class="start-btn">
            <p>Start</p>
            <svg width="16" height="16">
              <use href="/oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-title-container">
         <svg width="24" height="24">
          <use href="/oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="card-title">${o}</h3>
      </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${u(`${s}/${g}`)}<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${u(`${t}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${u(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},L=r=>r.results.map(({imgURL:e,name:o,filter:s})=>`            
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
      </li>`).join(""),I=(r,e)=>{let o=[];for(let s=1;s<=r.totalPages;s++){let t=s.toString()===r.page?"current":"";o.push(` <li class="exercises_pagination-item ${t}">
        <a class="page-num" data-page="${s}" data-filter="${e}">${s}</a>
      </li>`)}return o.join("")},h=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(o){console.error("Error save localStorage:",o)}},v=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},y=r=>{const e=v(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const o=e.filter(({_id:s})=>s!==r);h(KEY_STORAGE.favorites,o)},d=document.getElementById("favorite-cards-list"),i=document.querySelector(".text-nocard-container"),n=document.querySelector(".scrollbar-container"),b=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),y(e)},$=r=>r.map(e=>m(e,!0)).join(""),u=(r="")=>r.length>5&&window.innerWidth<1440?`${r.slice(0,4)}...`:r,x=async r=>{try{const{results:e}=await f();if(console.log(e),e.length===0){n==null||n.classList.add("hidden"),i==null||i.classList.remove("hidden");return}i==null||i.classList.add("hidden"),n==null||n.classList.remove("hidden");const o=document.getElementById("exercise-info-text");r==null||r.insertAdjacentHTML("beforeend",$(e))}catch(e){console.log(e.message)}};x(d);d==null||d.addEventListener("click",b);export{w as a,I as b,L as c,E as g,S as s};
//# sourceMappingURL=favorites-84bf87a1.js.map