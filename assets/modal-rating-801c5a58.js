import{a as u,i as q}from"./vendor-916d32b4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const k=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.error("Error save localStorage:",s)}},d=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},H=(e,t)=>e?'<button type="button" class="remove-btn" data-remove id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash" class="changable-icon-use"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,M=(e,t=!1)=>{const{name:s,burnedCalories:a,bodyPart:r,target:o,_id:i,time:l,gifUrl:h,rating:x}=e;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${H(t,x)}
        </div>
        <div>
          <button type="button" class="start-btn">
            <span aria-label='Start'>Start</span>
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
        <h3 class="card-title">${ce(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${h}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${w(`${a}/${l}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${w(`${r}`)}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em class="hidden-overflow-text">${w(`${o}`)}</em></p>
        </li>
      </ul>
    </li>`},xe=e=>e.results.map(({imgURL:t,name:s,filter:a})=>(t||(t="/images/no-image.png"),`            
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
      </li>`)).join(""),we=(e,t)=>{let s=[];for(let a=1;a<=e.totalPages;a++){let r=a.toString()===e.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${r}">
        <a class="page-num" data-page="${a}" data-filter="${t}">${a}</a>
      </li>`)}return s.join("")},p={favorites:"favorites",phrase:"phrase"},I=e=>{const t=d(p.favorites);if(!t){alert("Oops! Refresh page");return}const s=t.filter(({_id:a})=>a!==e);k(p.favorites,s)},K=({name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i})=>{const h=[...d(p.favorites)||[],{name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i}];k("favorites",h)};u.defaults.baseURL="https://your-energy.b.goit.study/api/";const z=async()=>(await u.get("quote")).data,$e=async({filter:e="",page:t=1,limit:s=12}={})=>{try{return(await u.get(`filters?filter=${e}&page=${t}&limit=${s}`)).data}catch(a){console.error("Error in getFilters:",a)}},Le=async({bodypart:e="",muscles:t="",equipment:s="",keyword:a="",page:r=1,limit:o=10}={})=>{try{return(await u.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${s}&keyword=${a}&page=${r}&limit=${o}`)).data}catch(i){console.error("Error in getExercises:",i)}},V=async e=>{try{return(await u.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},Y=async(e,t)=>{try{return(await u.patch(`exercises/${e}/rating`,t)).data}catch(s){console.error("Error in updateRaring:",s)}},ke=async e=>{try{return await u.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}};function G(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const a=parseInt(s.dataset.value,10);let r=0;a<=e?r=100:a-e<1&&(r=(e-a+1)*100),s.style.background=`linear-gradient(to right, gold ${r}%, gray ${r}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}function F(){return window.location.href}function J(){const e=window.location.search,t=new URLSearchParams(e),s={};return t.forEach(function(a,r){s[r]=a}),s}function Q(e){const t=window.location.search;return new URLSearchParams(t).get(e)}function X(e,t){const s=new URL(location.href);s.searchParams.set(e,t),history.pushState({},"",s)}function v(e){const t=new URL(location),s=new URLSearchParams(t.search);s.delete(e),t.search=s.toString(),history.pushState(null,"",t)}function Ee(){Object.keys(J()).forEach(v)}const y="/your-energy-project8/assets/icons-71caf5e8.svg",Z="/your-energy-project8/assets/no-image-7be81c97.png",ee="/your-energy-project8/assets/valkoSprite-28e86a63.svg",P=document.querySelector(".modal-exercises"),te=window.location.href.split("/").includes("favorites.html");let f;const U=(e=d("favorites")||[])=>e.find(t=>(t==null?void 0:t._id)===f._id),se=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(!U()){K(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-trash></use>
          </svg>`;return}I(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-heart></use>
          </svg>`};async function O(e){try{let r=function(o){const i=F(),l=document.createElement("input");l.value=i,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l),a.textContent="Link copy!",setTimeout(()=>{a.textContent="Share exercises"},1e3)};f=await V(e),P.innerHTML=ae(f),G(f.rating),re(),document.querySelector(".modal-exercises__card").addEventListener("click",o=>{if(o.target.closest(".modal-exercises__button-favourites")&&se(f),o.target.closest(".modal-exercises__button-rating")){const i=document.querySelector("#ratingModal");i.style.display="block",P.classList.add("visually-hidden")}});const s=document.querySelector(".share-button-modal"),a=document.querySelector(".share-button-hint-modal");s.addEventListener("click",r)}catch(t){console.error(t)}}function ae(e){const{name:t,burnedCalories:s,bodyPart:a,description:r,target:o,equipment:i,gifUrl:l,popularity:h,rating:x,time:A,_id:N}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href=${y}#icon-button-close></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${l!==null?l:Z}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <button class="share-button-modal" type="button">
        <svg class="share-icon">
          <use href=${ee}#icon-share-light></use>
        </svg>
        <span class="share-button-hint-modal">Share exercises</span>
      </button>
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${x}</div>
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
          <p class="modal-exercises__partials-value">${s}/${A} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${r}
      </p>
      <div class="modal-exercises__buttons">
      ${te||U()?`<button 
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
        <button class="modal-exercises__button-rating" data-value="${N}">Give a rating</button>
      </div>
    </div>
  </div>`}const n={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises"),body:document.body},B=document.getElementById("exercises-list-container");B&&B.addEventListener("click",R);function R(e){if(e.target.matches(".changable-icon-use")||!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;X("modalOpen",t),O(t)}function re(){n.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){n.modalExercises.classList.remove("visually-hidden"),n.body.classList.add("modal-open")}function t(r){r.target.closest(".modal-exercises__button-close")||r.target===n.modalExercises?(n.modalExercises.classList.add("visually-hidden"),n.body.classList.remove("modal-open"),v("modalOpen")):r.target===n.modalExercises&&(n.modalExercises.classList.add("visually-hidden"),v("modalOpen"))}function s(r){r.key==="Escape"&&(n.modalExercises.classList.add("visually-hidden"),n.body.classList.remove("modal-open"),v("modalOpen"))}function a(){n.openModalButton.removeEventListener("click",e),n.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return a}function oe(){const e=Q("modalOpen");e&&O(e)}oe();const c=document.getElementById("favorite-cards-list"),_=document.getElementById("pagination-container");let E=1,L=window.innerWidth<768?8:10;const ie=({target:e})=>{if(!e.closest("[data-remove]"))return;const t=e.closest("[data-id]").dataset.id;I(t),S(c)},ne=(e,t=1)=>{if(window.innerWidth<1440){const s=(t-1)*L,a=s+L;return e.slice(s,a).map(r=>M(r,!0)).join("")}return e.map(s=>M(s,!0)).join("")},w=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,ce=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e};function S(e){const t=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const a=d("favorites");if(!a){t==null||t.classList.add("hidden"),s==null||s.classList.remove("hidden");return}s==null||s.classList.add("hidden"),t==null||t.classList.remove("hidden"),e&&(e.innerHTML=ne(a,E)),window.innerWidth<1440&&le(a.length)}catch(a){console.log(a.message)}}const le=e=>{const t=Math.ceil(e/L);let s="";if(d("favorites").length>10||d("favorites").length>8&&window.innerWidth<768)for(let a=1;a<=t;a++)s+=`<li class="pagination-item ${a===E?"current":""}">
                      <a href="#" class="page-number" data-page="${a}">${a}</a>
                    </li>`;_&&(_.innerHTML=s)};_&&_.addEventListener("click",e=>{e.target.classList.contains("page-number")&&(e.preventDefault(),E=parseInt(e.target.dataset.page,10),S(c)),c&&(c.scrollTop=0,c.scrollIntoView({block:"start",behavior:"smooth"}))});S(c);c==null||c.addEventListener("click",R);c==null||c.addEventListener("click",ie);const j=document.getElementById("myModal"),de=document.getElementById("openModalBtn"),ue=document.getElementById("closeModalBtn"),T=document.querySelector("body"),m=document.querySelector(".nav_link_favorites"),g=document.querySelector(".nav_link_home");de.addEventListener("click",function(){j.style.display="block",T.classList.add("modal-open")});ue.addEventListener("click",function(){j.style.display="none",T.classList.remove("modal-open")});F().includes("favorites")?(g==null||g.classList.remove("nav_item_active"),m==null||m.classList.add("nav_item_active")):(g==null||g.classList.add("nav_item_active"),m==null||m.classList.remove("nav_item_active"));const $="/your-energy-project8/assets/symbol-defs-c6bad215.svg",C="/your-energy-project8/assets/quote-home-desk@1x-acbacd51.jpg",me="/your-energy-project8/assets/quote-home-desk@2x-d70947ab.jpg",ge=document.querySelector(".quote");function pe(e){return`<div class="quote-container container">
    <div class="quote-of-the-day">
      <svg class="quote-icon" width="34" height="32">
        <use href=${$}#icon-runing-man></use>
      </svg>
      <h3 class="quote-heading">Quote of the day</h3>
      <svg class="invert-coma-icon" width="20" height="20">
        <use
          href=${$}#icon-inverted-commas
        ></use>
      </svg>
      <p class="quote-text">${e.quote}</p>
      <p class="quote-author">${e.author}</p>
    </div>
    <div class="quote-image">
      <picture>
        <source
          srcset=${C}
          media="(max-width: 767px)"
        />
        <source
          srcset=${me}
          media="(min-width: 768px)"
        />

        <img
          class="hero-img cropped-image"
          src=${C}
          alt="women-sportswear-taking-break-from-workout"
        />
      </picture>
    </div>
    <div class="recomendation-container">
      <svg class="recoendation-icon" width="34" height="32">
        <use href=${$}#icon-dumb-bell></use>
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
  </div>`}const b=new Date;function he(e){return e?b.getDate()===e.getDate()&&b.getMonth()===e.getMonth()&&b.getFullYear()===e.getFullYear():!1}async function ve(){const e=d(p.phrase);if(!e||!he(new Date(e.date))){const s=await z();k(p.phrase,{...s,date:b})}const t=d(p.phrase);ge.innerHTML=pe(t)}ve();document.querySelector(".js-loader");const D=document.querySelector("#ratingForm"),fe=document.querySelector(".close-rating"),ye=document.querySelector("#ratingModal");async function be(e){e.preventDefault();const s=document.querySelector(".modal-exercises__button-rating").getAttribute("data-value"),a=new FormData(D),r={};a.forEach((o,i)=>{i==="rate"?r[i]=Number(o):r[i]=o});try{await Y(s,r)?(q.success({title:"OK",message:"Successfully sent rating!"}),W()):q.error({title:"Error",message:"There was an error"}),e.target.reset()}catch{}}D.addEventListener("submit",be);fe.addEventListener("click",W);function W(){document.querySelector(".modal-exercises").classList.remove("visually-hidden"),ye.style.display="none"}export{Q as a,$e as b,xe as c,we as d,d as e,Le as f,J as g,M as h,F as i,ke as j,Ee as r,X as s};
//# sourceMappingURL=modal-rating-801c5a58.js.map
