import{s as p,g as v}from"./assets/favorites-bcc21c42.js";import{i as r}from"./assets/vendor-6d0036ef.js";const o=document.querySelector(".footer-form");o.addEventListener("submit",x);function x(e){e.preventDefault();const t={email:e.target.elements.email.value};o.reset(),p(t).then(s=>{switch(s.status){case 201:r.success({message:s.data.message});break;case 409:r.info({message:s.data.message});break;default:r.warning({message:"Sorry, something went wrong"});break}})}const a={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function g(){a.openModalButton&&a.modalExercises?document.addEventListener("DOMContentLoaded",function(){a.openModalButton.addEventListener("click",e),a.modalExercises.addEventListener("click",t)}):console.error("One or more elements not found. Check your HTML and selectors.");function e(){a.modalExercises.classList.remove("visually-hidden")}function t(s){(s.target.closest(".modal-exercises__button-close")||s.target===a.modalExercises)&&a.modalExercises.classList.add("visually-hidden")}}function f(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const i=parseInt(s.dataset.value,10);let l=0;i<=e?l=100:i-e<1&&(l=(e-i+1)*100),s.style.background=`linear-gradient(to right, gold ${l}%, gray ${l}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}g();const b=document.querySelector(".modal-exercises");async function h(){try{const e=await v("64f389465ae26083f39b17a2");b.innerHTML=y(e),f(e.rating)}catch(e){console.error(e)}}function y(e){const{name:t,burnedCalories:s,bodyPart:i,description:l,target:c,equipment:d,gifUrl:n,popularity:m,rating:u,time:_,_id:E}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${n}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${u}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${c}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${i}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${d}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${m}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${_} min</p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${l}
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
  </div>`}h();
//# sourceMappingURL=commonHelpers2.js.map
