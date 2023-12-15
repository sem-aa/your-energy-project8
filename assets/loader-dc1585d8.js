import{a as n}from"./vendor-916d32b4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const v=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(r){console.error("Error save localStorage:",r)}},u=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},$=(e,t)=>e?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,x=(e,t=!1)=>{const{name:r,burnedCalories:s,bodyPart:o,target:a,_id:i,time:g,gifUrl:h,rating:w}=e;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${$(t,w)}
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
        <h3 class="card-title">${S(`${r}`)}</h3>
      </div>
<div class="gif-container"><img src='${h}' alt="${r} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${f(`${s}/${g}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${f(`${o}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${f(`${a}`)}</em></p>
        </li>
      </ul>
    </li>`},N=e=>e.results.map(({imgURL:t,name:r,filter:s})=>(t||(t="/images/no-image.png"),`            
        <li class="exercises_category-item" data-category="${r}" data-filter="${s}"
        style="
          background-image: linear-gradient(
              0deg,
              rgba(17, 17, 17, 0.5) 0%,
              rgba(17, 17, 17, 0.5) 100%
            ),
            url(${t});
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: cover;
        "
        >
            <div class="exercises_category-descr">
                <h3 class="exercises_category-title">${r}</h3>
                <p class="exercises_category-text">${s}</p>   
            </div>
      </li>`)).join(""),T=(e,t)=>{let r=[];for(let s=1;s<=e.totalPages;s++){let o=s.toString()===e.page.toString()?"current":"";r.push(` <li class="exercises_pagination-item ${o}">
        <a class="page-num" data-page="${s}" data-filter="${t}">${s}</a>
      </li>`)}return r.join("")},d={favorites:"favorites",phrase:"phrase"},k=e=>{const t=u(d.favorites);if(!t){alert("Oops! Refresh page");return}const r=t.filter(({_id:s})=>s!==e);v(d.favorites,r)},W=({name:e,burnedCalories:t,bodyPart:r,target:s,_id:o,time:a,gifUrl:i})=>{const g=u(d.favorites)||[];console.log(g);const h=[...g,{name:e,burnedCalories:t,bodyPart:r,target:s,_id:o,time:a,gifUrl:i}];v("favorites",h)},m=document.getElementById("favorite-cards-list"),L=({target:e})=>{if(!e.closest("#remove-favorite-btn"))return;const t=e.closest("[data-id]").dataset.id;console.log(t),k(t)},q=e=>e.map(t=>x(t,!0)).join(""),f=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,S=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e},E=async e=>{const t=document.querySelector(".scrollbar-container"),r=document.querySelector(".text-nocard-container");try{const s=await u("favorites");if(!s){t==null||t.classList.add("hidden"),r==null||r.classList.remove("hidden");return}r==null||r.classList.add("hidden"),t==null||t.classList.remove("hidden");const o=document.getElementById("exercise-info-text");e==null||e.insertAdjacentHTML("beforeend",q(s))}catch(s){console.log(s.message)}};E(m);m==null||m.addEventListener("click",L);function _(){return window.location.href}const y=document.getElementById("myModal"),I=document.getElementById("openModalBtn"),F=document.getElementById("closeModalBtn"),b=document.querySelector("body"),c=document.querySelector(".nav_link_favorites"),l=document.querySelector(".nav_link_home");I.addEventListener("click",function(){y.style.display="block",b.classList.add("modal-open")});F.addEventListener("click",function(){y.style.display="none",b.classList.remove("modal-open")});_().includes("favorites")?(l==null||l.classList.remove("nav_item_active"),c==null||c.classList.add("nav_item_active")):(l==null||l.classList.add("nav_item_active"),c==null||c.classList.remove("nav_item_active"));n.defaults.baseURL="https://your-energy.b.goit.study/api/";const M=async()=>(await n.get("quote")).data,A=async({filter:e="",page:t=1,limit:r=12}={})=>{try{return(await n.get(`filters?filter=${e}&page=${t}&limit=${r}`)).data}catch(s){console.error("Error in getFilters:",s)}},D=async({bodypart:e="",muscles:t="",equipment:r="",keyword:s="",page:o=1,limit:a=10}={})=>{try{return(await n.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${r}&keyword=${s}&page=${o}&limit=${a}`)).data}catch(i){console.error("Error in getExercises:",i)}},R=async e=>{try{return(await n.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},U=async(e,t)=>{try{return(await n.patch(`exercises/${e}/rating`,t)).data}catch(r){console.error("Error in updateRaring:",r)}},Y=async e=>{try{return await n.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}},C=document.querySelector(".quote");function B(e){return`<div class="quote-container container">
    <div class="quote-of-the-day">
      <svg class="quote-icon" width="34" height="32">
        <use href="../images/svg.icons/symbol-defs.svg#icon-runing-man"></use>
      </svg>
      <h3 class="quote-heading">Quote of the day</h3>
      <svg class="invert-coma-icon" width="20" height="20">
        <use
          href="../images/svg.icons/symbol-defs.svg#icon-inverted-commas"
        ></use>
      </svg>
      <p class="quote-text">${e.quote}</p>
      <p class="quote-author">${e.author}</p>
    </div>
    <div class="quote-image">
      <picture>
        <source
          srcset="../images/quote-home-desk@1x.jpg"
          media="(max-width: 767px)"
        />
        <source
          srcset="../images/quote-home-desk@2x.jpg"
          media="(min-width: 768px)"
        />

        <img
          class="hero-img cropped-image"
          src="../images/quote-home-desk@1x.jpg"
          alt="women-sportswear-taking-break-from-workout"
        />
      </picture>
    </div>
    <div class="recomendation-container">
      <svg class="recoendation-icon" width="34" height="32">
        <use href="../images/svg.icons/symbol-defs.svg#icon-dumb-bell"></use>
      </svg>
      <h3 class="recomendation-heading">110 min</h3>
      <h4 class="recomendation-subheading">Daily norm of sports</h4>
      <div class="recomendation-text-container">
        <p class="recomendation-text">
          The World Health Organization recommends at least 150 minutes of
          moderate-intensity aerobic physical activity throughout the week for
          adults aged 18-64. However, what happens if we adjust that number to
          110 minutes every day? While it might seem like a high number to hit,
          dedicating 110 minutes daily to sporting activities may offer
          unparalleled benefits to physical health, mental well-being, and
          overall quality of life.
        </p>
      </div>
    </div>
  </div>`}const p=Date.now();function O(e){return e?p.getDate()===e.getDate()&&p.getMonth()===e.getMonth()&&p.getFullYear()===e.getFullYear():!1}async function j(){const e=u(d.phrase);if(!e||!O(e.date)){const r=await M();v(d.phrase,r)}const t=u(d.phrase);C.innerHTML=B(t)}j();document.querySelector(".js-loader");export{T as a,u as b,N as c,D as d,x as e,_ as f,A as g,R as h,W as i,k as r,Y as s,U as u};
//# sourceMappingURL=loader-dc1585d8.js.map
