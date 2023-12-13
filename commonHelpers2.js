import{g as _}from"./assets/favorites-41103e7c.js";import"./assets/vendor-a61d8330.js";const a={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function p(){a.openModalButton&&a.modalExercises?document.addEventListener("DOMContentLoaded",function(){a.openModalButton.addEventListener("click",e),a.modalExercises.addEventListener("click",l)}):console.error("One or more elements not found. Check your HTML and selectors.");function e(){a.modalExercises.classList.remove("visually-hidden")}function l(s){(s.target.closest(".modal-exercises__button-close")||s.target===a.modalExercises)&&a.modalExercises.classList.add("visually-hidden")}}function u(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const t=parseInt(s.dataset.value,10);let i=0;t<=e?i=100:t-e<1&&(i=(e-t+1)*100),s.style.background=`linear-gradient(to right, gold ${i}%, gray ${i}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}p();const x=document.querySelector(".modal-exercises");async function v(){try{const e=await _("64f389465ae26083f39b17a2");x.innerHTML=g(e),u(e.rating)}catch(e){console.error(e)}}function g(e){const{name:l,burnedCalories:s,bodyPart:t,description:i,target:r,equipment:o,gifUrl:c,popularity:d,rating:n,time:m,_id:f}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${c}" alt="${l}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${l}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${n}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${r}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${t}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${d}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${m} min</p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${i}
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
  </div>`}v();
//# sourceMappingURL=commonHelpers2.js.map
