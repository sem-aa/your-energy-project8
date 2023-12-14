import{g as $,c as T,a as x,b as F,d as A,s as I,e as H,f as P,h as U,r as O}from"./assets/favorites-983ba4c9.js";import{S as D,i as l}from"./assets/vendor-85278fa1.js";const R=document.getElementById("to-top-btn"),g=document.querySelector(".btn-up");window.addEventListener("scroll",V);function V(){document.body.scrollTop>30||document.documentElement.scrollTop>30?g.style.display="flex":g.style.display="none"}R.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const j=12,h=document.querySelector("button[data-muscles]"),b=document.querySelector("button[data-body]"),L=document.querySelector("button[data-equipment]"),d=document.querySelector("#category-list-container"),z=document.querySelector("#exercises-list-container"),f=document.querySelector(".exercises_pagination"),G=document.querySelector("#exercises");c("Muscles");function c(s,t=1){$({filter:s,page:t,limit:j}).then(e=>{d.classList.remove("visually-hidden"),z.classList.add("visually-hidden"),e.results.length?(d.innerHTML=T(e),e.totalPages>1?(f.innerHTML=x(e,s),Q()):f.innerHTML=""):d.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const K=()=>{m(h),c("Muscles")},W=()=>{m(b),c("Body parts")},J=()=>{m(L),c("Equipment")};h.addEventListener("click",K);b.addEventListener("click",W);L.addEventListener("click",J);function m(s){document.querySelector(".active").classList.remove("active"),s.classList.contains("active")?s.classList.remove("active"):s.classList.add("active")}function Q(){document.querySelectorAll("a.page-num").forEach(function(t){t.addEventListener("click",function(e){G.scrollIntoView({block:"start",behavior:"smooth"}),c(e.target.dataset.filter,e.target.dataset.page)})})}const k=document.querySelector("#category-list-container"),E=document.querySelector("#exercises-list-container"),y=document.querySelector(".exercises_pagination"),X=document.querySelector("#exercises"),u=10;let i={};k.addEventListener("click",Y);async function Y(s){const t=s.target.closest(".exercises_category-item");t&&(!t.dataset.filter||!t.dataset.category||(k.classList.add("visually-hidden"),E.classList.remove("visually-hidden"),S(t.dataset.filter,t.dataset.category)))}async function S(s,t,e=1){switch(s){case"Muscles":i={muscles:t,category:t,limit:u,page:e};break;case"Equipment":i={equipment:t,category:t,limit:u,page:e};break;case"Body parts":i={bodypart:t,category:t,limit:u,page:e};break}F(i).then(o=>{E.innerHTML=o.results.map(a=>A(a)).join(""),o.totalPages>1?(y.innerHTML=x(o,s),Z()):y.innerHTML=""})}function Z(){document.querySelectorAll("a.page-num").forEach(function(t){t.addEventListener("click",function(e){X.scrollIntoView({block:"start",behavior:"smooth"}),S(e.target.dataset.filter,i.category,e.target.dataset.page)})})}const N=document.querySelector("#sorted-select");new D({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const ee=s=>{const t=s.map(createInfoCardMarkup).join("");favoritesList.innerHTML=t};N.addEventListener("change",te);function te(s){const t=s.target.value,e=se({sortType:t,array:arrayCardsForTest});ee(e)}function se({sortType:s,array:t}){let e;switch(s){case"default":e=t.toSorted((o,a)=>o.name.localeCompare(a.name));break;case"best":e=t.toSorted((o,a)=>a.rating-o.rating);break;case"calories-highest":e=t.toSorted((o,a)=>a.burnedCalories-o.burnedCalories);break;case"calories-lowest":e=t.toSorted((o,a)=>o.burnedCalories-a.burnedCalories);break;default:e=t.toSorted((o,a)=>o.name.localeCompare(a.name));break}return e}function ae(){return window.location.href}const oe=document.querySelector(".share-button"),_=document.querySelector(".share-button-hint");oe.addEventListener("click",re);function re(s){const t=ae(),e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),_.textContent="Link copy!",setTimeout(()=>{_.textContent="Share exercises"},1e3)}const C=document.querySelector(".footer-form");C.addEventListener("submit",ne);function ne(s){s.preventDefault();const t={email:s.target.elements.email.value};C.reset(),I(t).then(e=>{switch(e.status){case 201:l.success({message:e.data.message});break;case 409:l.info({message:e.data.message});break;default:l.warning({message:"Sorry, something went wrong"});break}})}const r={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function ie(){r.openModalButton&&r.modalExercises?document.addEventListener("DOMContentLoaded",function(){r.openModalButton.addEventListener("click",s),r.modalExercises.addEventListener("click",t),document.addEventListener("keydown",e)}):console.error("One or more elements not found. Check your HTML and selectors.");function s(){r.modalExercises.classList.remove("visually-hidden")}function t(a){(a.target.closest(".modal-exercises__button-close")||a.target===r.modalExercises)&&r.modalExercises.classList.add("visually-hidden")}function e(a){a.key==="Escape"&&r.modalExercises.classList.add("visually-hidden")}function o(){r.openModalButton.removeEventListener("click",s),r.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",e)}return o}function ce(s){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(e=>{const o=parseInt(e.dataset.value,10);let a=0;o<=s?a=100:o-s<1&&(a=(s-o+1)*100),e.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,e.style.webkitBackgroundClip="text",e.style.color="transparent"})}ie();const le=document.querySelector(".modal-exercises");let n;function de(){if(!P("favorites")){U(n);return}O(n._id)}async function ue(){try{n=await H("64f389465ae26083f39b17a2"),le.innerHTML=me(n),ce(n.rating),document.addEventListener("click",s=>{s.target.matches(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),de(n))})}catch(s){console.error(s)}}function me(s){const{name:t,burnedCalories:e,bodyPart:o,description:a,target:p,equipment:q,gifUrl:v,popularity:M,rating:w,time:B,_id:pe}=s;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${v!==null?v:"../images/no-image.png"}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${w}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${p}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${q}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${M}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${e}/${B} 
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
  </div>`}ue();
//# sourceMappingURL=commonHelpers2.js.map
