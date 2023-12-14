import{g as C,a as k,c as L,b as E,s as q}from"./assets/favorites-b79cc47c.js";import{S as M,i as n}from"./assets/vendor-85278fa1.js";const r={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function w(){r.openModalButton&&r.modalExercises?document.addEventListener("DOMContentLoaded",function(){r.openModalButton.addEventListener("click",t),r.modalExercises.addEventListener("click",s)}):console.error("One or more elements not found. Check your HTML and selectors.");function t(){r.modalExercises.classList.remove("visually-hidden")}function s(e){(e.target.closest(".modal-exercises__button-close")||e.target===r.modalExercises)&&r.modalExercises.classList.add("visually-hidden")}}function B(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(e=>{const a=parseInt(e.dataset.value,10);let o=0;a<=t?o=100:a-t<1&&(o=(t-a+1)*100),e.style.background=`linear-gradient(to right, gold ${o}%, gray ${o}%)`,e.style.webkitBackgroundClip="text",e.style.color="transparent"})}w();const T=document.querySelector(".modal-exercises");async function F(){try{const t=await C("64f389465ae26083f39b17a2");T.innerHTML=$(t),B(t.rating)}catch(t){console.error(t)}}function $(t){const{name:s,burnedCalories:e,bodyPart:a,description:o,target:f,equipment:x,gifUrl:y,popularity:b,rating:h,time:S,_id:N}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${y}" alt="${s}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${s}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${h}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${f}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${a}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${x}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${b}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${e}/${S} min</p>
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
  </div>`}const A=document.getElementById("to-top-btn"),c=document.querySelector(".btn-up");window.addEventListener("scroll",H);function H(){document.body.scrollTop>30||document.documentElement.scrollTop>30?c.style.display="flex":c.style.display="none"}A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const I=12,p=document.querySelector("button[data-muscles]"),g=document.querySelector("button[data-body]"),v=document.querySelector("button[data-equipment]"),d=document.querySelector(".exercises_category-list"),u=document.querySelector(".exercises_pagination");i("Muscles");function i(t,s=1){k({filter:t,page:s,limit:I}).then(e=>{e.results.length?(d.innerHTML=L(e),e.totalPages>1?(u.innerHTML=E(e,t),D()):u.innerHTML=""):d.innerHTML='<li class="sorry-message"><p>Sorry, there is no exercises by your request.</p></li>'})}const P=()=>{l(p),i("Muscles")},U=()=>{l(g),i("Body parts")},R=()=>{l(v),i("Equipment")};p.addEventListener("click",P);g.addEventListener("click",U);v.addEventListener("click",R);function l(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function D(){document.querySelectorAll("a.page-num").forEach(function(s){s.addEventListener("click",function(e){i(e.target.dataset.filter,e.target.dataset.page)})})}const O=document.querySelector("#sorted-select");new M({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const j=t=>{const s=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=s};O.addEventListener("change",z);function z(t){const s=t.target.value,e=G({sortType:s,array:arrayCardsForTest});j(e)}function G({sortType:t,array:s}){let e;switch(t){case"default":e=s.toSorted((a,o)=>a.name.localeCompare(o.name));break;case"best":e=s.toSorted((a,o)=>o.rating-a.rating);break;case"calories-highest":e=s.toSorted((a,o)=>o.burnedCalories-a.burnedCalories);break;case"calories-lowest":e=s.toSorted((a,o)=>a.burnedCalories-o.burnedCalories);break;default:e=s.toSorted((a,o)=>a.name.localeCompare(o.name));break}return e}function V(){return window.location.href}const W=document.querySelector(".share-button"),m=document.querySelector(".share-button-hint");W.addEventListener("click",J);function J(t){const s=V(),e=document.createElement("input");e.value=s,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),m.textContent="Link copy!",setTimeout(()=>{m.textContent="Share exercises"},1e3)}const _=document.querySelector(".footer-form");_.addEventListener("submit",K);function K(t){t.preventDefault();const s={email:t.target.elements.email.value};_.reset(),q(s).then(e=>{switch(e.status){case 201:n.success({message:e.data.message});break;case 409:n.info({message:e.data.message});break;default:n.warning({message:"Sorry, something went wrong"});break}})}F();
//# sourceMappingURL=commonHelpers2.js.map
