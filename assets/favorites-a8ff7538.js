import{a as n}from"./vendor-85278fa1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();n.defaults.baseURL="https://your-energy.b.goit.study/api/";const L=async({filter:r="",page:e=1,limit:s=12}={})=>{try{return(await n.get(`filters?filter=${r}&page=${e}&limit=${s}`)).data}catch(t){console.error("Error in getFilters:",t)}},F=async({bodypart:r="",muscles:e="",equipment:s="",keyword:t="",page:o=1,limit:a=10}={})=>{try{return(await n.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${s}&keyword=${t}&page=${o}&limit=${a}`)).data}catch(i){console.error("Error in getExercises:",i)}},C=async r=>{try{return(await n.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},E=async r=>{try{return await n.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},p=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(s){console.error("Error save localStorage:",s)}},f=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},m=(r,e)=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${e}</p><svg class="changeble-icon" width="18" height="18"><use href="/oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,h=(r,e=!1)=>{const{name:s,burnedCalories:t,bodyPart:o,target:a,_id:i,time:c,gifUrl:d,rating:v}=r;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${m(e,v)}
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
        <h3 class="card-title">${x(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${d}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${u(`${t}/${c}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${u(`${o}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${u(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},S=r=>r.results.map(({imgURL:e,name:s,filter:t})=>`            
        <li class="exercises_category-item" data-category="${s}" data-filter="${t}"
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
                <h3 class="exercises_category-title">${s}</h3>
                <p class="exercises_category-text">${t}</p>   
            </div>
      </li>`).join(""),I=(r,e)=>{let s=[];for(let t=1;t<=r.totalPages;t++){let o=t.toString()===r.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${o}">
        <a class="page-num" data-page="${t}" data-filter="${e}">${t}</a>
      </li>`)}return s.join("")},g={favorites:"favorites",phrase:"frase"},y=r=>{const e=f(g.favorites);if(!e){alert("Oops! Refresh page");return}const s=e.filter(({_id:t})=>t!==r);p(g.favorites,s)},O=({name:r,burnedCalories:e,bodyPart:s,target:t,_id:o,time:a,gifUrl:i})=>{const c=f(g.favorites)||[];console.log(c);const d=[...c,{name:r,burnedCalories:e,bodyPart:s,target:t,_id:o,time:a,gifUrl:i}];p("favorites",d)},l=document.getElementById("favorite-cards-list"),b=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest("[data-id]").dataset.id;console.log(e),y(e)},$=r=>r.map(e=>h(e,!0)).join(""),u=(r="")=>r.length>4&&window.innerWidth<1440?`${r.slice(0,4)} ...`:r,x=(r="")=>{const e=r.split(" ");return r!==""&&e.length>3?e.splice(0,3).join(" ")+" ...":r},k=async r=>{const e=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const t=await f("favorites");if(!t){e.classList.add("hidden"),s.classList.remove("hidden");return}s.classList.add("hidden"),e.classList.remove("hidden");const o=document.getElementById("exercise-info-text");r.insertAdjacentHTML("beforeend",$(t))}catch(t){console.log(t.message)}};k(l);l==null||l.addEventListener("click",b);export{I as a,F as b,S as c,h as d,C as e,f,L as g,O as h,y as r,E as s};
//# sourceMappingURL=favorites-a8ff7538.js.map
