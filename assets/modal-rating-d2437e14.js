import{a as u,i as $}from"./vendor-916d32b4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const w=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.error("Error save localStorage:",s)}},d=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},U=(e,t)=>e?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash" class="changable-icon-use"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,S=(e,t=!1)=>{const{name:s,burnedCalories:a,bodyPart:r,target:o,_id:i,time:n,gifUrl:h,rating:_}=e;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${U(t,_)}
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
        <h3 class="card-title">${te(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${h}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${b(`${a}/${n}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${b(`${r}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${b(`${o}`)}</em></p>
        </li>
      </ul>
    </li>`},ge=e=>e.results.map(({imgURL:t,name:s,filter:a})=>(t||(t="/images/no-image.png"),`            
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
      </li>`)).join(""),pe=(e,t)=>{let s=[];for(let a=1;a<=e.totalPages;a++){let r=a.toString()===e.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${r}">
        <a class="page-num" data-page="${a}" data-filter="${t}">${a}</a>
      </li>`)}return s.join("")},p={favorites:"favorites",phrase:"phrase"},M=e=>{const t=d(p.favorites);if(!t){alert("Oops! Refresh page");return}const s=t.filter(({_id:a})=>a!==e);w(p.favorites,s)},j=({name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i})=>{const n=d(p.favorites)||[];console.log(n);const h=[...n,{name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i}];w("favorites",h)};u.defaults.baseURL="https://your-energy.b.goit.study/api/";const D=async()=>(await u.get("quote")).data,he=async({filter:e="",page:t=1,limit:s=12}={})=>{try{return(await u.get(`filters?filter=${e}&page=${t}&limit=${s}`)).data}catch(a){console.error("Error in getFilters:",a)}},ve=async({bodypart:e="",muscles:t="",equipment:s="",keyword:a="",page:r=1,limit:o=10}={})=>{try{return(await u.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${s}&keyword=${a}&page=${r}&limit=${o}`)).data}catch(i){console.error("Error in getExercises:",i)}},A=async e=>{try{return(await u.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},N=async(e,t)=>{try{return(await u.patch(`exercises/${e}/rating`,t)).data}catch(s){console.error("Error in updateRaring:",s)}},fe=async e=>{try{return await u.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}};function W(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const a=parseInt(s.dataset.value,10);let r=0;a<=e?r=100:a-e<1&&(r=(e-a+1)*100),s.style.background=`linear-gradient(to right, gold ${r}%, gray ${r}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}function P(){return window.location.href}function H(){const e=window.location.search,t=new URLSearchParams(e),s={};return t.forEach(function(a,r){s[r]=a}),s}function K(e){const t=window.location.search;return new URLSearchParams(t).get(e)}function z(e,t){const s=new URL(location.href);s.searchParams.set(e,t),history.pushState({},"",s)}function V(e){const t=new URL(location),s=new URLSearchParams(t.search);s.delete(e),t.search=s.toString(),history.pushState(null,"",t)}function ye(){Object.keys(H()).forEach(V)}const E=document.querySelector(".modal-exercises"),Y=window.location.href.split("/").includes("favorites.html");let v;const B=(e=d("favorites")||[])=>e.find(t=>(t==null?void 0:t._id)===v._id),G=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(!B()){j(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/svg.icons/icons.svg#icon-trash"></use>
          </svg>`;return}M(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/svg.icons/icons.svg#icon-heart"></use>
          </svg>`};async function C(e){try{let r=function(o){const i=P(),n=document.createElement("input");n.value=i,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),a.textContent="Link copy!",setTimeout(()=>{a.textContent="Share exercises"},1e3)};v=await A(e),E.innerHTML=J(v),W(v.rating),Q(),document.querySelector(".modal-exercises__card").addEventListener("click",o=>{if(o.target.closest(".modal-exercises__button-favourites")&&G(v),o.target.closest(".modal-exercises__button-rating")){console.log("Button cliced!",e);const i=document.querySelector("#ratingModal");i.style.display="block",E.classList.add("visually-hidden")}});const s=document.querySelector(".share-button-modal"),a=document.querySelector(".share-button-hint-modal");s.addEventListener("click",r)}catch(t){console.error(t)}}function J(e){const{name:t,burnedCalories:s,bodyPart:a,description:r,target:o,equipment:i,gifUrl:n,popularity:h,rating:_,time:T}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/svg.icons/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${n!==null?n:"../images/no-image.png"}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <button class="share-button-modal" type="button">
        <svg class="share-icon">
          <use href="../images/valkoSprite.svg#icon-share-light"></use>
        </svg>
        <span class="share-button-hint-modal">Share exercises</span>
      </button>
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${_}</div>
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
          <p class="modal-exercises__partials-value">${s}/${T} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${r}
      </p>
      <div class="modal-exercises__buttons">
      ${Y||B()?`<button 
          type="button"
          class="modal-exercises__button-favourites unfavorite-btn"
          style='background-color=#242424'>
          Unfavorite
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/svg.icons/icons.svg#icon-trash"></use>
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
            <use href="./images/svg.icons/icons.svg#icon-heart"></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${_id}">Give a rating</button>
      </div>
    </div>
  </div>`}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises"),body:document.body},q=document.getElementById("exercises-list-container");q&&q.addEventListener("click",I);function I(e){if(e.target.matches(".changable-icon-use")||!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;z("modalOpen",t),C(t)}function Q(){c.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){c.modalExercises.classList.remove("visually-hidden"),c.body.classList.add("modal-open")}function t(r){(r.target.closest(".modal-exercises__button-close")||r.target===c.modalExercises)&&(c.modalExercises.classList.add("visually-hidden"),c.body.classList.remove("modal-open"))}function s(r){r.key==="Escape"&&(c.modalExercises.classList.add("visually-hidden"),c.body.classList.remove("modal-open"))}function a(){c.openModalButton.removeEventListener("click",e),c.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return a}function X(){const e=K("modalOpen");e&&C(e)}X();const l=document.getElementById("favorite-cards-list"),y=document.getElementById("pagination-container");let L=1,x=window.innerWidth<768?8:10;const Z=({target:e})=>{if(!e.closest("#remove-favorite-btn"))return;const t=e.closest("[data-id]").dataset.id;console.log(t),M(t),k(l)},ee=(e,t=1)=>{if(window.innerWidth<1440){const s=(t-1)*x,a=s+x;return e.slice(s,a).map(r=>S(r,!0)).join("")}return e.map(s=>S(s,!0)).join("")},b=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,te=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e};function k(e){const t=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const a=d("favorites");if(!a){t==null||t.classList.add("hidden"),s==null||s.classList.remove("hidden");return}s==null||s.classList.add("hidden"),t==null||t.classList.remove("hidden"),e&&(e.innerHTML=ee(a,L)),window.innerWidth<1440&&se(a.length),l&&(l.scrollTop=0,l.scrollIntoView({block:"start",behavior:"smooth"}))}catch(a){console.log(a.message)}}const se=e=>{const t=Math.ceil(e/x);let s="";if(d("favorites").length>10||d("favorites").length>8&&window.innerWidth<768)for(let a=1;a<=t;a++)s+=`<li class="pagination-item ${a===L?"current":""}">
                      <a href="#" class="page-number" data-page="${a}">${a}</a>
                    </li>`;y&&(y.innerHTML=s)};y&&y.addEventListener("click",e=>{e.target.classList.contains("page-number")&&(e.preventDefault(),L=parseInt(e.target.dataset.page,10),k(l))});k(l);l==null||l.addEventListener("click",I);l==null||l.addEventListener("click",Z);const F=document.getElementById("myModal"),ae=document.getElementById("openModalBtn"),re=document.getElementById("closeModalBtn"),R=document.querySelector("body"),m=document.querySelector(".nav_link_favorites"),g=document.querySelector(".nav_link_home");ae.addEventListener("click",function(){F.style.display="block",R.classList.add("modal-open")});re.addEventListener("click",function(){F.style.display="none",R.classList.remove("modal-open")});P().includes("favorites")?(g==null||g.classList.remove("nav_item_active"),m==null||m.classList.add("nav_item_active")):(g==null||g.classList.add("nav_item_active"),m==null||m.classList.remove("nav_item_active"));const oe=document.querySelector(".quote");function ie(e){return`<div class="quote-container container">
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
  </div>`}const f=new Date;function ne(e){return e?f.getDate()===e.getDate()&&f.getMonth()===e.getMonth()&&f.getFullYear()===e.getFullYear():!1}async function ce(){const e=d(p.phrase);if(!e||!ne(new Date(e.date))){const s=await D();w(p.phrase,{...s,date:f})}const t=d(p.phrase);oe.innerHTML=ie(t)}ce();document.querySelector(".js-loader");const O=document.querySelector("#ratingForm"),le=document.querySelector(".close-rating"),de=document.querySelector("#ratingModal");async function ue(e){e.preventDefault();const s=document.querySelector(".modal-exercises__button-rating").getAttribute("data-value"),a=new FormData(O),r={};a.forEach((o,i)=>{i==="rate"?r[i]=Number(o):r[i]=o});try{await N(s,r)?$.success({title:"OK",message:"Successfully sent rating!"}):$.error({title:"Error",message:"There was an error"})}catch{}}O.addEventListener("submit",ue);le.addEventListener("click",()=>{const e=document.querySelector(".modal-exercises");document.querySelector(".modal-exercises__card"),e.classList.remove("visually-hidden"),de.style.display="none"});export{K as a,he as b,ge as c,pe as d,d as e,ve as f,H as g,S as h,P as i,fe as j,ye as r,z as s};
//# sourceMappingURL=modal-rating-d2437e14.js.map
