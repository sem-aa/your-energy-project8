(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const f=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.error("Error save localStorage:",r)}},g=t=>{try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},h=(t,e)=>t?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${e}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,y=(t,e=!1)=>{const{name:r,burnedCalories:o,bodyPart:s,target:a,_id:n,time:i,gifUrl:l,rating:p}=t;return`<li class="favorite-info-card" data-id=${n}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${h(e,p)}
        </div>
        <div>
          <button type="button" class="start-btn">
            <p>Start</p>
            <svg width="16" height="16">
              <use href="./oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-title-container">
         <svg width="24" height="24">
          <use href="./oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="card-title">${L(`${r}`)}</h3>
      </div>
<div class="gif-container"><img src='${l}' alt="${r} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${d(`${o}/${i}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${d(`${s}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${d(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},I=t=>t.results.map(({imgURL:e,name:r,filter:o})=>(e||(e="/images/no-image.png"),`            
        <li class="exercises_category-item" data-category="${r}" data-filter="${o}"
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
                <h3 class="exercises_category-title">${r}</h3>
                <p class="exercises_category-text">${o}</p>   
            </div>
      </li>`)).join(""),E=(t,e)=>{let r=[];for(let o=1;o<=t.totalPages;o++){let s=o.toString()===t.page.toString()?"current":"";r.push(` <li class="exercises_pagination-item ${s}">
        <a class="page-num" data-page="${o}" data-filter="${e}">${o}</a>
      </li>`)}return r.join("")},u={favorites:"favorites",phrase:"frase"},b=t=>{const e=g(u.favorites);if(!e){alert("Oops! Refresh page");return}const r=e.filter(({_id:o})=>o!==t);f(u.favorites,r)},C=({name:t,burnedCalories:e,bodyPart:r,target:o,_id:s,time:a,gifUrl:n})=>{const i=g(u.favorites)||[];console.log(i);const l=[...i,{name:t,burnedCalories:e,bodyPart:r,target:o,_id:s,time:a,gifUrl:n}];f("favorites",l)},c=document.getElementById("favorite-cards-list"),$=({target:t})=>{if(!t.closest("#remove-favorite-btn"))return;const e=t.closest("[data-id]").dataset.id;console.log(e),b(e)},k=t=>t.map(e=>y(e,!0)).join(""),d=(t="")=>t.length>4&&window.innerWidth<1440?`${t.slice(0,4)} ...`:t,L=(t="")=>{const e=t.split(" ");return t!==""&&e.length>3?e.splice(0,3).join(" ")+" ...":t},S=async t=>{const e=document.querySelector(".scrollbar-container"),r=document.querySelector(".text-nocard-container");try{const o=await g("favorites");if(!o){e==null||e.classList.add("hidden"),r==null||r.classList.remove("hidden");return}r==null||r.classList.add("hidden"),e==null||e.classList.remove("hidden");const s=document.getElementById("exercise-info-text");t.insertAdjacentHTML("beforeend",k(o))}catch(o){console.log(o.message)}};S(c);c==null||c.addEventListener("click",$);const m=document.getElementById("myModal"),x=document.getElementById("openModalBtn"),w=document.getElementById("closeModalBtn"),v=document.querySelector("body");x.addEventListener("click",function(){m.style.display="block",v.classList.add("modal-open")});w.addEventListener("click",function(){m.style.display="none",v.classList.remove("modal-open")});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname;document.querySelectorAll(".nav_list li").forEach(function(r){r.querySelector("a").getAttribute("href")===t&&r.classList.add("nav_item_active")})});export{E as a,y as b,I as c,C as d,g,b as r};
//# sourceMappingURL=header-8332b540.js.map
