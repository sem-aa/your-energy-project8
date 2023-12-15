import{a as n}from"./vendor-916d32b4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();n.defaults.baseURL="https://your-energy.b.goit.study/api/";const E=async({filter:r="",page:e=1,limit:t=12}={})=>{try{return(await n.get(`filters?filter=${r}&page=${e}&limit=${t}`)).data}catch(s){console.error("Error in getFilters:",s)}},F=async({bodypart:r="",muscles:e="",equipment:t="",keyword:s="",page:o=1,limit:a=10}={})=>{try{return(await n.get(`exercises?bodypart=${r}&muscles=${e}&equipment=${t}&keyword=${s}&page=${o}&limit=${a}`)).data}catch(i){console.error("Error in getExercises:",i)}},L=async r=>{try{return(await n.get(`exercises/${r}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},C=async(r,e)=>{try{return(await n.patch(`exercises/${r}/rating`,e)).data}catch(t){console.error("Error in getExerciseId:",t)}},S=async r=>{try{return await n.post("subscription",r)}catch(e){return console.error("Error in subscribe:",e),e.response}},p=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch(t){console.error("Error save localStorage:",t)}},f=r=>{try{const e=localStorage.getItem(r);return e?JSON.parse(e):null}catch(e){return console.error("Error get localStorage:",e),null}},m=(r,e)=>r?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${e}</p><svg class="changeble-icon" width="18" height="18"><use href="/oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,h=(r,e=!1)=>{const{name:t,burnedCalories:s,bodyPart:o,target:a,_id:i,time:c,gifUrl:d,rating:v}=r;return`<li class="favorite-info-card" data-id=${i}>
  
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
        <h3 class="card-title">${x(`${t}`)}</h3>
      </div>
<div class="gif-container"><img src='${d}' alt="${t} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${u(`${s}/${c}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${u(`${o}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${u(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},I=r=>r.results.map(({imgURL:e,name:t,filter:s})=>(e||(e="/images/no-image.png"),`            
        <li class="exercises_category-item" data-category="${t}" data-filter="${s}"
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
                <h3 class="exercises_category-title">${t}</h3>
                <p class="exercises_category-text">${s}</p>   
            </div>
      </li>`)).join(""),O=(r,e)=>{let t=[];for(let s=1;s<=r.totalPages;s++){let o=s.toString()===r.page.toString()?"current":"";t.push(` <li class="exercises_pagination-item ${o}">
        <a class="page-num" data-page="${s}" data-filter="${e}">${s}</a>
      </li>`)}return t.join("")},g={favorites:"favorites",phrase:"frase"},y=r=>{const e=f(g.favorites);if(!e){alert("Oops! Refresh page");return}const t=e.filter(({_id:s})=>s!==r);p(g.favorites,t)},T=({name:r,burnedCalories:e,bodyPart:t,target:s,_id:o,time:a,gifUrl:i})=>{const c=f(g.favorites)||[];console.log(c);const d=[...c,{name:r,burnedCalories:e,bodyPart:t,target:s,_id:o,time:a,gifUrl:i}];p("favorites",d)},l=document.getElementById("favorite-cards-list"),b=({target:r})=>{if(!r.closest("#remove-favorite-btn"))return;const e=r.closest("[data-id]").dataset.id;console.log(e),y(e)},$=r=>r.map(e=>h(e,!0)).join(""),u=(r="")=>r.length>4&&window.innerWidth<1440?`${r.slice(0,4)} ...`:r,x=(r="")=>{const e=r.split(" ");return r!==""&&e.length>3?e.splice(0,3).join(" ")+" ...":r},w=async r=>{const e=document.querySelector(".scrollbar-container"),t=document.querySelector(".text-nocard-container");try{const s=await f("favorites");if(!s){e.classList.add("hidden"),t.classList.remove("hidden");return}t.classList.add("hidden"),e.classList.remove("hidden");const o=document.getElementById("exercise-info-text");r.insertAdjacentHTML("beforeend",$(s))}catch(s){console.log(s.message)}};w(l);l==null||l.addEventListener("click",b);export{O as a,F as b,I as c,h as d,L as e,f,E as g,T as h,y as r,S as s,C as u};
//# sourceMappingURL=favorites-dfaad2f8.js.map
