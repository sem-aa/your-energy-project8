import{g as h,c as L,a as E,s as k,b as q}from"./assets/favorites-f2b42373.js";import{i as c}from"./assets/vendor-6d0036ef.js";const M=12,u=document.querySelector("button[data-muscles]"),m=document.querySelector("button[data-body]"),p=document.querySelector("button[data-equipment]"),n=document.querySelector(".exercises_category-list"),d=document.querySelector(".exercises_pagination");l("Muscles");function l(e,t=1){h({filter:e,page:t,limit:M}).then(s=>{s.results.length?(n.innerHTML=L(s),s.totalPages>1?(d.innerHTML=E(s,e),$()):d.innerHTML=""):n.innerHTML='<li class="sorry-message"><p>Sorry, there is no exercises by your request.</p></li>'})}const S=()=>{o(u),l("Muscles")},B=()=>{o(m),l("Body parts")},C=()=>{o(p),l("Equipment")};u.addEventListener("click",S);m.addEventListener("click",B);p.addEventListener("click",C);function o(e){document.querySelector(".active").classList.remove("active"),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}function $(){document.querySelectorAll("a.page-num").forEach(function(t){t.addEventListener("click",function(s){l(s.target.dataset.filter,s.target.dataset.page)})})}const _=document.querySelector(".footer-form");_.addEventListener("submit",F);function F(e){e.preventDefault();const t={email:e.target.elements.email.value};_.reset(),k(t).then(s=>{switch(s.status){case 201:c.success({message:s.data.message});break;case 409:c.info({message:s.data.message});break;default:c.warning({message:"Sorry, something went wrong"});break}})}const a={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function w(){a.openModalButton&&a.modalExercises?document.addEventListener("DOMContentLoaded",function(){a.openModalButton.addEventListener("click",e),a.modalExercises.addEventListener("click",t)}):console.error("One or more elements not found. Check your HTML and selectors.");function e(){a.modalExercises.classList.remove("visually-hidden")}function t(s){(s.target.closest(".modal-exercises__button-close")||s.target===a.modalExercises)&&a.modalExercises.classList.add("visually-hidden")}}function T(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const i=parseInt(s.dataset.value,10);let r=0;i<=e?r=100:i-e<1&&(r=(e-i+1)*100),s.style.background=`linear-gradient(to right, gold ${r}%, gray ${r}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}w();const P=document.querySelector(".modal-exercises");async function A(){try{const e=await q("64f389465ae26083f39b17a2");P.innerHTML=H(e),T(e.rating)}catch(e){console.error(e)}}function H(e){const{name:t,burnedCalories:s,bodyPart:i,description:r,target:g,equipment:v,gifUrl:x,popularity:y,rating:f,time:b,_id:D}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${x}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${f}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${g}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${i}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${v}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${y}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${b} min</p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${r}
      </p>
      <div class="modal-exercises__buttons">
        <button type="submit" class="modal-exercises__button-favourites">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            width="20"
            height="20"
          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="modal-exercises__button-rating">Give a rating</button>
      </div>
    </div>
  </div>`}A();
//# sourceMappingURL=commonHelpers2.js.map
