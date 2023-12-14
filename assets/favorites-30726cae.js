import{a as l}from"./vendor-85278fa1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();l.defaults.baseURL="https://your-energy.b.goit.study/api/";const S=async({filter:r="",page:e=1,limit:o=12}={})=>{try{return console.log("filter",r),(await l.get(`filters?filter=${r}&page=${e}&limit=${o}`)).data}catch(s){console.error("Error in getFilters:",s)}},v=async({bodypart:r="",muscles:e="",equipment:o="",keyword:s="",page:t=1,limit:a=10}={})=>{try{return(await l.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${o}&keyword=${s}&page=${t}&limit=${a}`)).data}catch(i){console.error("Error in getExercises:",i)}},L=async r=>{try{return(await l.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},F=async r=>{try{return await l.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},h=r=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':'<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="/oleksii-symbol-defs.svg#icon-star"></use></svg></div>',y=(r,e=!1)=>{const{name:o,burnedCalories:s,bodyPart:t,target:a,_id:i,time:f,gifUrl:u}=r;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${h(e)}
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
        <h3 class="card-title">${E(`${o}`)}</h3>
      </div>
<div class="gif-container"><img src='${u}' alt="${o} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${g(`${s}/${f}`)}<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${g(`${t}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${g(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},C=r=>r.results.map(({imgURL:e,name:o,filter:s})=>`            
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
      </li>`)}return o.join("")},p=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(o){console.error("Error save localStorage:",o)}},m=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},b=r=>{const e=m(KEY_STORAGE.favorites);if(!e){alert("Oops! Refresh page");return}const o=e.filter(({_id:s})=>s!==r);p(KEY_STORAGE.favorites,o)},O=({name:r,burnedCalories:e,bodyPart:o,target:s,_id:t,time:a,gifUrl:i})=>{const u=[...m(KEY_STORAGE.favorites)||[],{name:r,burnedCalories:e,bodyPart:o,target:s,_id:t,time:a,gifUrl:i}];p("favorites",u)},d=document.getElementById("favorite-cards-list"),c=document.querySelector(".text-nocard-container"),n=document.querySelector(".scrollbar-container"),$=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;console.log(e),b(e)},x=r=>r.map(e=>y(e,!0)).join(""),g=(r="")=>r.length>4&&window.innerWidth<1440?`${r.slice(0,4)} ...`:r,E=(r="")=>{const e=r.split(" ");return r!==""&&e.length>3?e.splice(0,3).join(" ")+" ...":r},k=async r=>{try{const{results:e}=await v();if(console.log(e),e.length===0){n==null||n.classList.add("hidden"),c==null||c.classList.remove("hidden");return}c==null||c.classList.add("hidden"),n==null||n.classList.remove("hidden");const o=document.getElementById("exercise-info-text");r==null||r.insertAdjacentHTML("beforeend",x(e))}catch(e){console.log(e.message)}};k(d);d==null||d.addEventListener("click",$);export{I as a,L as b,C as c,m as d,O as e,S as g,b as r,F as s};
//# sourceMappingURL=favorites-30726cae.js.map
