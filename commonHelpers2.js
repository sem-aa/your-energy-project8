import{g as S,c as C,a as k,s as L,b as E}from"./assets/favorites-41177d7c.js";import{S as q,i as l}from"./assets/vendor-85278fa1.js";const M=12,m=document.querySelector("button[data-muscles]"),p=document.querySelector("button[data-body]"),g=document.querySelector("button[data-equipment]"),c=document.querySelector(".exercises_category-list"),d=document.querySelector(".exercises_pagination");i("Muscles");function i(t,s=1){S({filter:t,page:s,limit:M}).then(e=>{e.results.length?(c.innerHTML=C(e),e.totalPages>1?(d.innerHTML=k(e,t),F()):d.innerHTML=""):c.innerHTML='<li class="sorry-message"><p>Sorry, there is no exercises by your request.</p></li>'})}const B=()=>{n(m),i("Muscles")},w=()=>{n(p),i("Body parts")},$=()=>{n(g),i("Equipment")};m.addEventListener("click",B);p.addEventListener("click",w);g.addEventListener("click",$);function n(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function F(){document.querySelectorAll("a.page-num").forEach(function(s){s.addEventListener("click",function(e){i(e.target.dataset.filter,e.target.dataset.page)})})}const T=document.querySelector("#sorted-select");new q({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const A=t=>{const s=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=s};T.addEventListener("change",H);function H(t){const s=t.target.value,e=I({sortType:s,array:arrayCardsForTest});A(e)}function I({sortType:t,array:s}){let e;switch(t){case"default":e=s.toSorted((a,o)=>a.name.localeCompare(o.name));break;case"best":e=s.toSorted((a,o)=>o.rating-a.rating);break;case"calories-highest":e=s.toSorted((a,o)=>o.burnedCalories-a.burnedCalories);break;case"calories-lowest":e=s.toSorted((a,o)=>a.burnedCalories-o.burnedCalories);break;default:e=s.toSorted((a,o)=>a.name.localeCompare(o.name));break}return e}function P(){return window.location.href}const R=document.querySelector(".share-button"),u=document.querySelector(".share-button-hint");R.addEventListener("click",U);function U(t){const s=P(),e=document.createElement("input");e.value=s,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),u.textContent="Link copy!",setTimeout(()=>{u.textContent="Share exercises"},1e3)}const _=document.querySelector(".footer-form");_.addEventListener("submit",D);function D(t){t.preventDefault();const s={email:t.target.elements.email.value};_.reset(),L(s).then(e=>{switch(e.status){case 201:l.success({message:e.data.message});break;case 409:l.info({message:e.data.message});break;default:l.warning({message:"Sorry, something went wrong"});break}})}const r={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function O(){r.openModalButton&&r.modalExercises?document.addEventListener("DOMContentLoaded",function(){r.openModalButton.addEventListener("click",t),r.modalExercises.addEventListener("click",s)}):console.error("One or more elements not found. Check your HTML and selectors.");function t(){r.modalExercises.classList.remove("visually-hidden")}function s(e){(e.target.closest(".modal-exercises__button-close")||e.target===r.modalExercises)&&r.modalExercises.classList.add("visually-hidden")}}function j(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(e=>{const a=parseInt(e.dataset.value,10);let o=0;a<=t?o=100:a-t<1&&(o=(t-a+1)*100),e.style.background=`linear-gradient(to right, gold ${o}%, gray ${o}%)`,e.style.webkitBackgroundClip="text",e.style.color="transparent"})}O();const z=document.querySelector(".modal-exercises");async function G(){try{const t=await E("64f389465ae26083f39b17a2");z.innerHTML=V(t),j(t.rating)}catch(t){console.error(t)}}function V(t){const{name:s,burnedCalories:e,bodyPart:a,description:o,target:v,equipment:f,gifUrl:x,popularity:y,rating:b,time:h,_id:J}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${x}" alt="${s}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${s}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${b}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${v}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${a}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${f}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${y}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${e}/${h} min</p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${o}
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
  </div>`}G();
//# sourceMappingURL=commonHelpers2.js.map
