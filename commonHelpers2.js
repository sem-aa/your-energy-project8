import{g as E,c as C,a as S,s as q,b as w,d as B,e as M,r as F}from"./assets/favorites-30726cae.js";import{S as T,i as l}from"./assets/vendor-85278fa1.js";const $=document.getElementById("to-top-btn"),m=document.querySelector(".btn-up");window.addEventListener("scroll",A);function A(){document.body.scrollTop>30||document.documentElement.scrollTop>30?m.style.display="flex":m.style.display="none"}$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const H=12,_=document.querySelector("button[data-muscles]"),f=document.querySelector("button[data-body]"),x=document.querySelector("button[data-equipment]"),p=document.querySelector(".exercises_category-list"),v=document.querySelector(".exercises_pagination");n("Muscles");function n(t,s=1){E({filter:t,page:s,limit:H}).then(e=>{e.results.length?(p.innerHTML=C(e),e.totalPages>1?(v.innerHTML=S(e,t),D()):v.innerHTML=""):p.innerHTML='<li class="sorry-message"><p>Sorry, there is no exercises by your request.</p></li>'})}const I=()=>{c(_),n("Muscles")},P=()=>{c(f),n("Body parts")},U=()=>{c(x),n("Equipment")};_.addEventListener("click",I);f.addEventListener("click",P);x.addEventListener("click",U);function c(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function D(){document.querySelectorAll("a.page-num").forEach(function(s){s.addEventListener("click",function(e){n(e.target.dataset.filter,e.target.dataset.page)})})}const R=document.querySelector("#sorted-select");new T({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const O=t=>{const s=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=s};R.addEventListener("change",j);function j(t){const s=t.target.value,e=z({sortType:s,array:arrayCardsForTest});O(e)}function z({sortType:t,array:s}){let e;switch(t){case"default":e=s.toSorted((o,a)=>o.name.localeCompare(a.name));break;case"best":e=s.toSorted((o,a)=>a.rating-o.rating);break;case"calories-highest":e=s.toSorted((o,a)=>a.burnedCalories-o.burnedCalories);break;case"calories-lowest":e=s.toSorted((o,a)=>o.burnedCalories-a.burnedCalories);break;default:e=s.toSorted((o,a)=>o.name.localeCompare(a.name));break}return e}function G(){return window.location.href}const K=document.querySelector(".share-button"),g=document.querySelector(".share-button-hint");K.addEventListener("click",V);function V(t){const s=G(),e=document.createElement("input");e.value=s,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),g.textContent="Link copy!",setTimeout(()=>{g.textContent="Share exercises"},1e3)}const y=document.querySelector(".footer-form");y.addEventListener("submit",W);function W(t){t.preventDefault();const s={email:t.target.elements.email.value};y.reset(),q(s).then(e=>{switch(e.status){case 201:l.success({message:e.data.message});break;case 409:l.info({message:e.data.message});break;default:l.warning({message:"Sorry, something went wrong"});break}})}const r={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function J(){r.openModalButton&&r.modalExercises?document.addEventListener("DOMContentLoaded",function(){r.openModalButton.addEventListener("click",t),r.modalExercises.addEventListener("click",s),document.addEventListener("keydown",e)}):console.error("One or more elements not found. Check your HTML and selectors.");function t(){r.modalExercises.classList.remove("visually-hidden")}function s(a){(a.target.closest(".modal-exercises__button-close")||a.target===r.modalExercises)&&r.modalExercises.classList.add("visually-hidden")}function e(a){a.key==="Escape"&&r.modalExercises.classList.add("visually-hidden")}function o(){r.openModalButton.removeEventListener("click",t),r.modalExercises.removeEventListener("click",s),document.removeEventListener("keydown",e)}return o}function N(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(e=>{const o=parseInt(e.dataset.value,10);let a=0;o<=t?a=100:o-t<1&&(a=(t-o+1)*100),e.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,e.style.webkitBackgroundClip="text",e.style.color="transparent"})}J();const Q=document.querySelector(".modal-exercises");let i;function X(){if(!B("favorites")){M(i);return}F(i._id)}async function Y(){try{i=await w("64f389465ae26083f39b17a2"),Q.innerHTML=Z(i),N(i.rating),document.addEventListener("click",t=>{t.target.matches(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),X(i))})}catch(t){console.error(t)}}function Z(t){const{name:s,burnedCalories:e,bodyPart:o,description:a,target:d,equipment:b,gifUrl:u,popularity:h,rating:L,time:k,_id:ee}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${u!==null?u:"../images/no-image.png"}" alt="${s}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${s}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${L}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${d}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${b}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${h}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${e}/${k} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${a}
      </p>
      <div class="modal-exercises__buttons">
        <button type="button" class="modal-exercises__button-favourites">
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
  </div>`}Y();
//# sourceMappingURL=commonHelpers2.js.map
