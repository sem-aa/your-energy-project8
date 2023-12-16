import{a as u}from"./vendor-67ad3d10.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const k=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.error("Error save localStorage:",s)}},d=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},O=(e,t)=>e?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash" class="changable-icon-use"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,E=(e,t=!1)=>{const{name:s,burnedCalories:a,bodyPart:r,target:o,_id:i,time:n,gifUrl:h,rating:_}=e;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${O(t,_)}
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
        <h3 class="card-title">${se(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${h}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${x(`${a}/${n}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${x(`${r}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${x(`${o}`)}</em></p>
        </li>
      </ul>
    </li>`},pe=e=>e.results.map(({imgURL:t,name:s,filter:a})=>(t||(t="/images/no-image.png"),`            
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
      </li>`)).join(""),he=(e,t)=>{let s=[];for(let a=1;a<=e.totalPages;a++){let r=a.toString()===e.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${r}">
        <a class="page-num" data-page="${a}" data-filter="${t}">${a}</a>
      </li>`)}return s.join("")},p={favorites:"favorites",phrase:"phrase"},q=e=>{const t=d(p.favorites);if(!t){alert("Oops! Refresh page");return}const s=t.filter(({_id:a})=>a!==e);k(p.favorites,s)},T=({name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i})=>{const n=d(p.favorites)||[];console.log(n);const h=[...n,{name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i}];k("favorites",h)};u.defaults.baseURL="https://your-energy.b.goit.study/api/";const D=async()=>(await u.get("quote")).data,ve=async({filter:e="",page:t=1,limit:s=12}={})=>{try{return(await u.get(`filters?filter=${e}&page=${t}&limit=${s}`)).data}catch(a){console.error("Error in getFilters:",a)}},fe=async({bodypart:e="",muscles:t="",equipment:s="",keyword:a="",page:r=1,limit:o=10}={})=>{try{return(await u.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${s}&keyword=${a}&page=${r}&limit=${o}`)).data}catch(i){console.error("Error in getExercises:",i)}},N=async e=>{try{return(await u.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},W=async(e,t)=>{try{return(await u.patch(`exercises/${e}/rating`,t)).data}catch(s){console.error("Error in updateRaring:",s)}},ye=async e=>{try{return await u.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}};function A(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const a=parseInt(s.dataset.value,10);let r=0;a<=e?r=100:a-e<1&&(r=(e-a+1)*100),s.style.background=`linear-gradient(to right, gold ${r}%, gray ${r}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}function M(){return window.location.href}function H(){const e=window.location.search,t=new URLSearchParams(e),s={};return t.forEach(function(a,r){s[r]=a}),s}function K(e){const t=window.location.search;return new URLSearchParams(t).get(e)}function V(e,t){const s=new URL(location.href);s.searchParams.set(e,t),history.pushState({},"",s)}function Y(e){const t=new URL(location),s=new URLSearchParams(t.search);s.delete(e),t.search=s.toString(),history.pushState(null,"",t)}function be(){Object.keys(H()).forEach(Y)}const z=document.querySelector(".modal-exercises"),G=window.location.href.split("/").includes("favorites.html");let v;const P=(e=d("favorites")||[])=>e.find(t=>(t==null?void 0:t._id)===v._id),J=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(!P()){T(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/svg.icons/icons.svg#icon-trash"></use>
          </svg>`;return}q(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/svg.icons/icons.svg#icon-heart"></use>
          </svg>`};async function B(e){try{let r=function(o){const i=M(),n=document.createElement("input");n.value=i,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),a.textContent="Link copy!",setTimeout(()=>{a.textContent="Share exercises"},1e3)};v=await N(e),z.innerHTML=Q(v),A(v.rating),X(),document.querySelector(".modal-exercises__card").addEventListener("click",o=>{o.target.closest(".modal-exercises__button-favourites")&&J(v)});const s=document.querySelector(".share-button-modal"),a=document.querySelector(".share-button-hint-modal");s.addEventListener("click",r)}catch(t){console.error(t)}}function Q(e){const{name:t,burnedCalories:s,bodyPart:a,description:r,target:o,equipment:i,gifUrl:n,popularity:h,rating:_,time:j}=e;return`<div class="modal-exercises__card">
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
          <p class="modal-exercises__partials-value">${s}/${j} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${r}
      </p>
      <div class="modal-exercises__buttons">
      ${G||P()?`<button 
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
        <button class="modal-exercises__button-rating">Give a rating</button>
      </div>
    </div>
  </div>`}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises"),body:document.body},S=document.getElementById("exercises-list-container");S&&S.addEventListener("click",C);function C(e){if(e.target.matches(".changable-icon-use")||!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;V("modalOpen",t),B(t)}function X(){c.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){c.modalExercises.classList.remove("visually-hidden"),c.body.classList.add("modal-open")}function t(r){(r.target.closest(".modal-exercises__button-close")||r.target===c.modalExercises)&&(c.modalExercises.classList.add("visually-hidden"),c.body.classList.remove("modal-open"))}function s(r){r.key==="Escape"&&(c.modalExercises.classList.add("visually-hidden"),c.body.classList.remove("modal-open"))}function a(){c.openModalButton.removeEventListener("click",e),c.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return a}function Z(){const e=K("modalOpen");e&&B(e)}Z();const l=document.getElementById("favorite-cards-list"),b=document.getElementById("pagination-container");let L=1,w=window.innerWidth<768?8:10;const ee=({target:e})=>{if(!e.closest("#remove-favorite-btn"))return;const t=e.closest("[data-id]").dataset.id;console.log(t),q(t),$(l)},te=(e,t=1)=>{if(window.innerWidth<1440){const s=(t-1)*w,a=s+w;return e.slice(s,a).map(r=>E(r,!0)).join("")}return e.map(s=>E(s,!0)).join("")},x=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,se=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e};function $(e){const t=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const a=d("favorites");if(!a){t==null||t.classList.add("hidden"),s==null||s.classList.remove("hidden");return}s==null||s.classList.add("hidden"),t==null||t.classList.remove("hidden"),e&&(e.innerHTML=te(a,L)),window.innerWidth<1440&&ae(a.length),l&&(l.scrollTop=0,l.scrollIntoView({block:"start",behavior:"smooth"}))}catch(a){console.log(a.message)}}const ae=e=>{const t=Math.ceil(e/w);let s="";if(d("favorites").length>10||d("favorites").length>8&&window.innerWidth<768)for(let a=1;a<=t;a++)s+=`<li class="pagination-item ${a===L?"current":""}">
                      <a href="#" class="page-number" data-page="${a}">${a}</a>
                    </li>`;b&&(b.innerHTML=s)};b&&b.addEventListener("click",e=>{e.target.classList.contains("page-number")&&(e.preventDefault(),L=parseInt(e.target.dataset.page,10),$(l))});$(l);l==null||l.addEventListener("click",C);l==null||l.addEventListener("click",ee);const I=document.getElementById("myModal"),re=document.getElementById("openModalBtn"),oe=document.getElementById("closeModalBtn"),F=document.querySelector("body"),m=document.querySelector(".nav_link_favorites"),g=document.querySelector(".nav_link_home");re.addEventListener("click",function(){I.style.display="block",F.classList.add("modal-open")});oe.addEventListener("click",function(){I.style.display="none",F.classList.remove("modal-open")});M().includes("favorites")?(g==null||g.classList.remove("nav_item_active"),m==null||m.classList.add("nav_item_active")):(g==null||g.classList.add("nav_item_active"),m==null||m.classList.remove("nav_item_active"));const ie=document.querySelector(".quote");function ne(e){return`<div class="quote-container container">
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
  </div>`}const f=new Date;function ce(e){return e?f.getDate()===e.getDate()&&f.getMonth()===e.getMonth()&&f.getFullYear()===e.getFullYear():!1}async function le(){const e=d(p.phrase);if(!e||!ce(new Date(e.date))){const s=await D();k(p.phrase,{...s,date:f})}const t=d(p.phrase);ie.innerHTML=ne(t)}le();document.querySelector(".js-loader");const R=document.querySelector("#ratingForm"),de=document.querySelector(".close-rating"),y=document.querySelector(".modal-exercises__button-rating"),U=document.querySelector("#ratingModal");console.log(y);const ue="64f389465ae26083f39b17a4";async function me(e){e.preventDefault();const t=new FormData(R),s={};t.forEach((a,r)=>{r==="rate"?s[r]=Number(a):s[r]=a});try{const a=await W(ue,s);console.log(a),a||alert("Error")}catch(a){console.log("shpm"),console.log(a.message)}}R.addEventListener("submit",me);y==null||y.addEventListener("click",function(){U.style.display="block",body.classList.add("modal-open")});de.addEventListener("click",()=>{U.style.display="none"});export{K as a,ve as b,pe as c,he as d,d as e,fe as f,H as g,E as h,M as i,ye as j,be as r,V as s};
//# sourceMappingURL=modal-rating-51c28930.js.map
