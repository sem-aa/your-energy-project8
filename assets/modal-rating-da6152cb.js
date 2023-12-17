import{a as u,i as M}from"./vendor-916d32b4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const k=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.error("Error save localStorage:",s)}},d=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},z=(e,t)=>e?'<button type="button" class="remove-btn" data-remove aria-label="Remove"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash" class="changable-icon-use"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,P=(e,t=!1)=>{const{name:s,burnedCalories:a,bodyPart:r,target:o,_id:i,time:c,gifUrl:h,rating:w}=e;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${z(t,w)}
        </div>
        <div>
          <button type="button" class="start-btn" aria-label="Start">
            <span aria-label="Start">Start</span>
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
        <h3 class="card-title">${de(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${h}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${$(`${a}/${c}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${$(`${r}`)}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em class="hidden-overflow-text">${$(`${o}`)}</em></p>
        </li>
      </ul>
    </li>`},Le=e=>e.results.map(({imgURL:t,name:s,filter:a})=>(t||(t="/images/no-image.png"),`            
        <li class="exercises_category-item" data-category="${s}" data-filter="${a}"
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
                <h3 class="exercises_category-title">${s}</h3>
                <p class="exercises_category-text">${a}</p>   
            </div>
      </li>`)).join(""),Ee=(e,t)=>{let s=[];for(let a=1;a<=e.totalPages;a++){let r=a.toString()===e.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${r}">
        <a class="page-num" data-page="${a}" data-filter="${t}">${a}</a>
      </li>`)}return s.join("")},p={favorites:"favorites",phrase:"phrase"},R=e=>{const t=d(p.favorites);if(!t){alert("Oops! Refresh page");return}const s=t.filter(({_id:a})=>a!==e);k(p.favorites,s)},Q=({name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i})=>{const h=[...d(p.favorites)||[],{name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i}];k("favorites",h)};u.defaults.baseURL="https://your-energy.b.goit.study/api/";const V=async()=>(await u.get("quote")).data,Se=async({filter:e="",page:t=1,limit:s=12}={})=>{try{return(await u.get(`filters?filter=${e}&page=${t}&limit=${s}`)).data}catch(a){console.error("Error in getFilters:",a)}},ke=async({bodypart:e="",muscles:t="",equipment:s="",keyword:a="",page:r=1,limit:o=10}={})=>{try{return(await u.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${s}&keyword=${a}&page=${r}&limit=${o}`)).data}catch(i){console.error("Error in getExercises:",i)}},Y=async e=>{try{return(await u.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},G=async(e,t)=>{try{return(await u.patch(`exercises/${e}/rating`,t)).data}catch(s){console.error("Error in updateRaring:",s)}},qe=async e=>{try{return await u.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}};function J(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const a=parseInt(s.dataset.value,10);let r=0;a<=e?r=100:a-e<1&&(r=(e-a+1)*100),s.style.background=`linear-gradient(to right, gold ${r}%, gray ${r}%)`,s.style.backgroundClip="text",s.style.color="transparent"})}function U(){return window.location.href}function X(){const e=window.location.search,t=new URLSearchParams(e),s={};return t.forEach(function(a,r){s[r]=a}),s}function Z(e){const t=window.location.search;return new URLSearchParams(t).get(e)}function ee(e,t){const s=new URL(location.href);s.searchParams.set(e,t),history.pushState({},"",s)}function f(e){const t=new URL(location),s=new URLSearchParams(t.search);s.delete(e),t.search=s.toString(),history.pushState(null,"",t)}function Me(){Object.keys(X()).forEach(f)}const y="/your-energy-project8/assets/icons-71caf5e8.svg",te="/your-energy-project8/assets/no-image-7be81c97.png",se="/your-energy-project8/assets/valkoSprite-28e86a63.svg",B=document.querySelector(".modal-exercises"),C=document.getElementById("favorite-cards-list"),ae=window.location.href.split("/").includes("favorites.html");let v;const O=(e=d("favorites")||[])=>e.find(t=>(t==null?void 0:t._id)===v._id),re=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(!O()){Q(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-trash></use>
          </svg>`,b(C);return}R(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-heart></use>
          </svg>`,b(C)};async function j(e){try{let r=function(o){const i=U(),c=document.createElement("input");c.value=i,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),a.textContent="Link copy!",setTimeout(()=>{a.textContent="Share exercises"},1e3)};v=await Y(e),B.innerHTML=oe(v),J(v.rating),ie(),document.querySelector(".modal-exercises__card").addEventListener("click",o=>{if(o.target.closest(".modal-exercises__button-favourites")&&re(v),o.target.closest(".modal-exercises__button-rating")){const i=document.querySelector("#ratingModal");i.style.display="block",B.classList.add("visually-hidden")}});const s=document.querySelector(".share-button-modal"),a=document.querySelector(".share-button-hint-modal");s.addEventListener("click",r)}catch(t){console.error(t)}}function oe(e){const{name:t,burnedCalories:s,bodyPart:a,description:r,target:o,equipment:i,gifUrl:c,popularity:h,rating:w,time:H,_id:K}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href=${y}#icon-button-close></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${c!==null?c:te}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <button class="share-button-modal" type="button">
        <svg class="share-icon">
          <use href=${se}#icon-share-light></use>
        </svg>
        <span class="share-button-hint-modal">Share exercises</span>
      </button>
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${w}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${a}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${i}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${h}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${H} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${r}
      </p>
      <div class="modal-exercises__buttons">
      ${ae||O()?`<button 
          type="button"
          class="modal-exercises__button-favourites unfavorite-btn"
          >
          Unfavorite
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-trash></use>
          </svg>`:`<button 
          type="button"
          class="modal-exercises__button-favourites
          add-to-favorites-btn">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-heart></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${K}">Give a rating</button>
      </div>
    </div>
  </div>`}const n={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises"),body:document.body},I=document.getElementById("exercises-list-container");I&&I.addEventListener("click",T);function T(e){if(e.target.matches(".changable-icon-use")||!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;ee("modalOpen",t),j(t)}function ie(){n.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){n.modalExercises.classList.remove("visually-hidden"),n.body.classList.add("modal-open")}function t(r){r.target.closest(".modal-exercises__button-close")||r.target===n.modalExercises?(n.modalExercises.classList.add("visually-hidden"),n.body.classList.remove("modal-open"),f("modalOpen")):r.target===n.modalExercises&&(n.modalExercises.classList.add("visually-hidden"),f("modalOpen"))}function s(r){r.key==="Escape"&&(n.modalExercises.classList.add("visually-hidden"),n.body.classList.remove("modal-open"),f("modalOpen"))}function a(){n.openModalButton.removeEventListener("click",e),n.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return a}function ne(){const e=Z("modalOpen");e&&j(e)}ne();const l=document.getElementById("favorite-cards-list"),x=document.getElementById("pagination-container");let q=1,E=window.innerWidth<768?8:10;const ce=({target:e})=>{if(!e.closest("[data-remove]"))return;const t=e.closest("[data-id]").dataset.id;R(t),b(l)},le=(e,t=1)=>{if(window.innerWidth<1440){const s=(t-1)*E,a=s+E;return e.slice(s,a).map(r=>P(r,!0)).join("")}return e.map(s=>P(s,!0)).join("")},$=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,de=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e};function b(e){const t=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const a=d("favorites");if(!a){t==null||t.classList.add("hidden"),s==null||s.classList.remove("hidden");return}s==null||s.classList.add("hidden"),t==null||t.classList.remove("hidden"),e&&(e.innerHTML=le(a,q)),window.innerWidth<1440&&ue(a.length)}catch(a){console.log(a.message)}}const ue=e=>{const t=Math.ceil(e/E);let s="";if(d("favorites").length>10||d("favorites").length>8&&window.innerWidth<768)for(let a=1;a<=t;a++)s+=`<li class="pagination-item ${a===q?"current":""}">
                      <a href="#" class="page-number" data-page="${a}">${a}</a>
                    </li>`;x&&(x.innerHTML=s)},me=e=>{e.target.classList.contains("page-number")&&(e.preventDefault(),q=parseInt(e.target.dataset.page,10),b(l)),l&&(l.scrollTop=0,l.scrollIntoView({block:"start",behavior:"smooth"}))};x&&x.addEventListener("click",me);b(l);l&&(l.addEventListener("click",T),l.addEventListener("click",ce));const W=document.getElementById("myModal"),ge=document.getElementById("openModalBtn"),pe=document.getElementById("closeModalBtn"),D=document.querySelector("body"),m=document.querySelector(".nav_link_favorites"),g=document.querySelector(".nav_link_home");ge.addEventListener("click",function(){W.style.display="block",D.classList.add("modal-open")});pe.addEventListener("click",function(){W.style.display="none",D.classList.remove("modal-open")});U().includes("favorites")?(g==null||g.classList.remove("nav_item_active"),m==null||m.classList.add("nav_item_active")):(g==null||g.classList.add("nav_item_active"),m==null||m.classList.remove("nav_item_active"));const L="/your-energy-project8/assets/symbol-defs-c6bad215.svg",F="/your-energy-project8/assets/quote-home-desk@1x-acbacd51.jpg",he="/your-energy-project8/assets/quote-home-desk@2x-d70947ab.jpg",S=document.querySelector(".quote");window.location.href.split("/").includes("favorites.html");const fe=()=>{window.innerWidth<768&&(S.style.paddingBottom="40px"),window.innerWidth>768&&window.innerWidth<1440&&(S.style.paddingBottom="0")};function ve(e){return`<div class="quote-container container">
    <div class="quote-of-the-day">
      <svg class="quote-icon" width="34" height="32">
        <use href=${L}#icon-runing-man></use>
      </svg>
      <h2 class="quote-heading">Quote of the day</h2>
      <svg class="invert-coma-icon" width="20" height="20">
        <use
          href=${L}#icon-inverted-commas
        ></use>
      </svg>
      <p class="quote-text">${e.quote}</p>
      <p class="quote-author">${e.author}</p>
    </div>
    <div class="quote-image">
      <picture>
        <source
          srcset=${F}
          media="(max-width: 767px)"
        />
        <source
          srcset=${he}
          media="(min-width: 768px)"
        />

        <img
          class="hero-img cropped-image"
          src=${F}
          alt="women-sportswear-taking-break-from-workout"
        />
      </picture>
    </div>
    <div class="recomendation-container">
      <svg class="recoendation-icon" width="34" height="32">
        <use href=${L}#icon-dumb-bell></use>
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
  </div>`}const _=new Date;function ye(e){return e?_.getDate()===e.getDate()&&_.getMonth()===e.getMonth()&&_.getFullYear()===e.getFullYear():!1}async function be(){const e=d(p.phrase);if(!e||!ye(new Date(e.date))){const s=await V();k(p.phrase,{...s,date:_})}const t=d(p.phrase);S.innerHTML=ve(t)}be();fe();document.querySelector(".js-loader");const A=document.querySelector("#ratingForm"),_e=document.querySelector(".close-rating"),xe=document.querySelector("#ratingModal");async function we(e){e.preventDefault();const s=document.querySelector(".modal-exercises__button-rating").getAttribute("data-value"),a=new FormData(A),r={};a.forEach((o,i)=>{i==="rate"?r[i]=Number(o):r[i]=o});try{await G(s,r)?(M.success({title:"OK",message:"Successfully sent rating!"}),N()):M.error({title:"Error",message:"There was an error"}),e.target.reset()}catch{}}A.addEventListener("submit",we);_e.addEventListener("click",N);function N(){document.querySelector(".modal-exercises").classList.remove("visually-hidden"),xe.style.display="none"}export{Z as a,Se as b,Le as c,Ee as d,d as e,ke as f,X as g,P as h,U as i,qe as j,Me as r,ee as s};
//# sourceMappingURL=modal-rating-da6152cb.js.map
