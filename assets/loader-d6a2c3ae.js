(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const v=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.error("Error save localStorage:",r)}},m=t=>{try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},b=(t,e)=>t?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${e}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,$=(t,e=!1)=>{const{name:r,burnedCalories:s,bodyPart:o,target:a,_id:n,time:l,gifUrl:u,rating:y}=t;return`<li class="favorite-info-card" data-id=${n}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${b(e,y)}
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
        <h3 class="card-title">${_(`${r}`)}</h3>
      </div>
<div class="gif-container"><img src='${u}' alt="${r} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${g(`${s}/${l}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${g(`${o}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${g(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},C=t=>t.results.map(({imgURL:e,name:r,filter:s})=>(e||(e="/images/no-image.png"),`            
        <li class="exercises_category-item" data-category="${r}" data-filter="${s}"
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
                <p class="exercises_category-text">${s}</p>   
            </div>
      </li>`)).join(""),B=(t,e)=>{let r=[];for(let s=1;s<=t.totalPages;s++){let o=s.toString()===t.page.toString()?"current":"";r.push(` <li class="exercises_pagination-item ${o}">
        <a class="page-num" data-page="${s}" data-filter="${e}">${s}</a>
      </li>`)}return r.join("")},f={favorites:"favorites",phrase:"frase"},k=t=>{const e=m(f.favorites);if(!e){alert("Oops! Refresh page");return}const r=e.filter(({_id:s})=>s!==t);v(f.favorites,r)},M=({name:t,burnedCalories:e,bodyPart:r,target:s,_id:o,time:a,gifUrl:n})=>{const l=m(f.favorites)||[];console.log(l);const u=[...l,{name:t,burnedCalories:e,bodyPart:r,target:s,_id:o,time:a,gifUrl:n}];v("favorites",u)},d=document.getElementById("favorite-cards-list"),L=({target:t})=>{if(!t.closest("#remove-favorite-btn"))return;const e=t.closest("[data-id]").dataset.id;console.log(e),k(e)},S=t=>t.map(e=>$(e,!0)).join(""),g=(t="")=>t.length>4&&window.innerWidth<1440?`${t.slice(0,4)} ...`:t,_=(t="")=>{const e=t.split(" ");return t!==""&&e.length>3?e.splice(0,3).join(" ")+" ...":t},x=async t=>{const e=document.querySelector(".scrollbar-container"),r=document.querySelector(".text-nocard-container");try{const s=await m("favorites");if(!s){e==null||e.classList.add("hidden"),r==null||r.classList.remove("hidden");return}r==null||r.classList.add("hidden"),e==null||e.classList.remove("hidden");const o=document.getElementById("exercise-info-text");t==null||t.insertAdjacentHTML("beforeend",S(s))}catch(s){console.log(s.message)}};x(d);d==null||d.addEventListener("click",L);function w(){return window.location.href}const p=document.getElementById("myModal"),I=document.getElementById("openModalBtn"),E=document.getElementById("closeModalBtn"),h=document.querySelector("body"),i=document.querySelector(".nav_link_favorites"),c=document.querySelector(".nav_link_home");I.addEventListener("click",function(){p.style.display="block",h.classList.add("modal-open")});E.addEventListener("click",function(){p.style.display="none",h.classList.remove("modal-open")});w().includes("favorites")?(c==null||c.classList.remove("nav_item_active"),i==null||i.classList.add("nav_item_active")):(c==null||c.classList.add("nav_item_active"),i==null||i.classList.remove("nav_item_active"));document.querySelector(".js-loader");export{B as a,$ as b,C as c,w as d,M as e,m as g,k as r};
//# sourceMappingURL=loader-d6a2c3ae.js.map
