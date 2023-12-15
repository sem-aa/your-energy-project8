import{a as u}from"./vendor-916d32b4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const k=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.error("Error save localStorage:",s)}},l=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},T=(e,t)=>e?'<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,L=(e,t=!1)=>{const{name:s,burnedCalories:a,bodyPart:r,target:o,_id:i,time:d,gifUrl:v,rating:_}=e;return`<li class="favorite-info-card" data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${T(t,_)}
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
        <h3 class="card-title">${Q(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${v}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${b(`${a}/${d}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${b(`${r}`)}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${b(`${o}`)}</em></p>
        </li>
      </ul>
    </li>`},de=e=>e.results.map(({imgURL:t,name:s,filter:a})=>(t||(t="/images/no-image.png"),`            
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
      </li>`)).join(""),ue=(e,t)=>{let s=[];for(let a=1;a<=e.totalPages;a++){let r=a.toString()===e.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${r}">
        <a class="page-num" data-page="${a}" data-filter="${t}">${a}</a>
      </li>`)}return s.join("")},p={favorites:"favorites",phrase:"phrase"},S=e=>{const t=l(p.favorites);if(!t){alert("Oops! Refresh page");return}const s=t.filter(({_id:a})=>a!==e);k(p.favorites,s)},O=({name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i})=>{const d=l(p.favorites)||[];console.log(d);const v=[...d,{name:e,burnedCalories:t,bodyPart:s,target:a,_id:r,time:o,gifUrl:i}];k("favorites",v)};u.defaults.baseURL="https://your-energy.b.goit.study/api/";const R=async()=>(await u.get("quote")).data,ge=async({filter:e="",page:t=1,limit:s=12}={})=>{try{return(await u.get(`filters?filter=${e}&page=${t}&limit=${s}`)).data}catch(a){console.error("Error in getFilters:",a)}},me=async({bodypart:e="",muscles:t="",equipment:s="",keyword:a="",page:r=1,limit:o=10}={})=>{try{return(await u.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${s}&keyword=${a}&page=${r}&limit=${o}`)).data}catch(i){console.error("Error in getExercises:",i)}},D=async e=>{try{return(await u.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},W=async(e,t)=>{try{return(await u.patch(`exercises/${e}/rating`,t)).data}catch(s){console.error("Error in updateRaring:",s)}},pe=async e=>{try{return await u.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}};function N(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const a=parseInt(s.dataset.value,10);let r=0;a<=e?r=100:a-e<1&&(r=(e-a+1)*100),s.style.background=`linear-gradient(to right, gold ${r}%, gray ${r}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const A=document.querySelector(".modal-exercises"),U=window.location.href.split("/").includes("favorites.html");let f;const M=(e=l("favorites")||[])=>e.find(t=>(t==null?void 0:t._id)===f._id),H=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(console.log(e),!M()){O(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`;return}S(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"

          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`};async function K(e){try{f=await D(e),A.innerHTML=Y(f),N(f.rating),z(),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),H(f))})}catch(t){console.error(t)}}function Y(e){const{name:t,burnedCalories:s,bodyPart:a,description:r,target:o,equipment:i,gifUrl:d,popularity:v,rating:_,time:j,_id:ce}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${d!==null?d:"../images/no-image.png"}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
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
          <p class="modal-exercises__partials-value">${v}</p>
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
      <div class="modal-exercises__buttons">${U||M()?`<button type="button" class="modal-exercises__button-favourites unfavorite-btn" style='background-color=#242424'>Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`:`<button type="button" class="modal-exercises__button-favourites add-to-favorites-btn">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`}
        
        </button>
        <button class="modal-exercises__button-rating">Give a rating</button>
      </div>
    </div>
  </div>`}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},q=document.getElementById("exercises-list-container");q&&q.addEventListener("click",B);function B(e){if(!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;K(t)}function z(){c.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){c.modalExercises.classList.remove("visually-hidden")}function t(r){(r.target.closest(".modal-exercises__button-close")||r.target===c.modalExercises)&&c.modalExercises.classList.add("visually-hidden")}function s(r){r.key==="Escape"&&c.modalExercises.classList.add("visually-hidden")}function a(){c.openModalButton.removeEventListener("click",e),c.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return a}const n=document.getElementById("favorite-cards-list"),y=document.getElementById("pagination-container");let $=1,w=window.innerWidth<768?8:10;const G=({target:e})=>{if(!e.closest("#remove-favorite-btn"))return;const t=e.closest("[data-id]").dataset.id;console.log(t),S(t),E(n)},J=(e,t=1)=>{if(window.innerWidth<1440){const s=(t-1)*w,a=s+w;return e.slice(s,a).map(r=>L(r,!0)).join("")}return e.map(s=>L(s,!0)).join("")},b=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,Q=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e};async function E(e){const t=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const a=await l("favorites");if(!a){t==null||t.classList.add("hidden"),s==null||s.classList.remove("hidden");return}s==null||s.classList.add("hidden"),t==null||t.classList.remove("hidden"),e&&(e.innerHTML=J(a,$)),window.innerWidth<1440&&V(a.length),n&&(n.scrollTop=0,n.scrollIntoView({block:"start",behavior:"smooth"}))}catch(a){console.log(a.message)}}const V=e=>{const t=Math.ceil(e/w);let s="";if(l("favorites").length>10||l("favorites").length>8&&window.innerWidth<768)for(let a=1;a<=t;a++)s+=`<li class="pagination-item ${a===$?"current":""}">
                      <a href="#" class="page-number" data-page="${a}">${a}</a>
                    </li>`;y&&(y.innerHTML=s)};y&&y.addEventListener("click",e=>{e.target.classList.contains("page-number")&&(e.preventDefault(),$=parseInt(e.target.dataset.page,10),E(n))});E(n);n==null||n.addEventListener("click",B);n==null||n.addEventListener("click",G);function X(){return window.location.href}const I=document.getElementById("myModal"),Z=document.getElementById("openModalBtn"),ee=document.getElementById("closeModalBtn"),C=document.querySelector("body"),g=document.querySelector(".nav_link_favorites"),m=document.querySelector(".nav_link_home");Z.addEventListener("click",function(){I.style.display="block",C.classList.add("modal-open")});ee.addEventListener("click",function(){I.style.display="none",C.classList.remove("modal-open")});X().includes("favorites")?(m==null||m.classList.remove("nav_item_active"),g==null||g.classList.add("nav_item_active")):(m==null||m.classList.add("nav_item_active"),g==null||g.classList.remove("nav_item_active"));const te=document.querySelector(".quote");function se(e){return`<div class="quote-container container">
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
  </div>`}const x=Date.now();function ae(e){return e?x.getDate()===e.getDate()&&x.getMonth()===e.getMonth()&&x.getFullYear()===e.getFullYear():!1}async function re(){const e=l(p.phrase);if(!e||!ae(e.date)){const s=await R();k(p.phrase,s)}const t=l(p.phrase);te.innerHTML=se(t)}re();document.querySelector(".js-loader");const F=document.querySelector("#ratingForm"),oe=document.querySelector(".close-rating"),h=document.querySelector(".modal-exercises__button-rating"),P=document.querySelector("#ratingModal");console.log(h);const ie="64f389465ae26083f39b17a4";async function ne(e){e.preventDefault();const t=new FormData(F),s={};t.forEach((a,r)=>{r==="rate"?s[r]=Number(a):s[r]=a});try{const a=await W(ie,s);console.log(a),a||alert("Error")}catch(a){console.log("shpm"),console.log(a.message)}}F.addEventListener("submit",ne);h==null||h.addEventListener("click",function(){P.style.display="block",body.classList.add("modal-open")});oe.addEventListener("click",()=>{P.style.display="none"});export{ue as a,l as b,de as c,me as d,L as e,X as f,ge as g,pe as s};
//# sourceMappingURL=modal-rating-3047d6f3.js.map
