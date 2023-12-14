import{g as F,c as I,a as S,b as H,d as P,s as D,e as R,f as U,h as O,r as V}from"./assets/favorites-edd0b5fe.js";import{S as j,i as p}from"./assets/vendor-85278fa1.js";const v=document.getElementById("to-top-btn"),b=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",z);function z(){document.body.scrollTop>30||document.documentElement.scrollTop>30?b.style.display="flex":b.style.display="none"}v==null||v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const G=12,d=document.querySelector("button[data-muscles]"),u=document.querySelector("button[data-body]"),m=document.querySelector("button[data-equipment]"),n=document.querySelector("#category-list-container"),g=document.querySelector("#exercises-list-container"),L=document.querySelector(".exercises_pagination"),f=document.querySelector("#exercises");l("Muscles");function l(s,e=1){F({filter:s,page:e,limit:G}).then(t=>{var o,a;(o=n==null?void 0:n.classList)==null||o.remove("visually-hidden"),(a=g==null?void 0:g.classList)==null||a.add("visually-hidden"),t.results.length?(n.innerHTML=I(t),t.totalPages>1?(L.innerHTML=S(t,s),Q()):L.innerHTML=""):n.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const K=()=>{y(d),l("Muscles")},W=()=>{y(u),l("Body parts")},J=()=>{y(m),l("Equipment")};d==null||d.addEventListener("click",K);u==null||u.addEventListener("click",W);m==null||m.addEventListener("click",J);function y(s){document.querySelector(".active").classList.remove("active"),s.classList.contains("active")?s.classList.remove("active"):s.classList.add("active")}function Q(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(t){f==null||f.scrollIntoView({block:"start",behavior:"smooth"}),l(t.target.dataset.filter,t.target.dataset.page)})})}const C=document.querySelector("#category-list-container"),q=document.querySelector("#exercises-list-container"),k=document.querySelector(".exercises_pagination"),X=document.querySelector("#exercises"),_=10;let c={};C.addEventListener("click",Y);async function Y(s){const e=s.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(C.classList.add("visually-hidden"),q.classList.remove("visually-hidden"),M(e.dataset.filter,e.dataset.category)))}async function M(s,e,t=1){switch(s){case"Muscles":c={muscles:e,category:e,limit:_,page:t};break;case"Equipment":c={equipment:e,category:e,limit:_,page:t};break;case"Body parts":c={bodypart:e,category:e,limit:_,page:t};break}H(c).then(o=>{q.innerHTML=o.results.map(a=>P(a)).join(""),o.totalPages>1?(k.innerHTML=S(o,s),Z()):k.innerHTML=""})}function Z(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(t){X.scrollIntoView({block:"start",behavior:"smooth"}),M(t.target.dataset.filter,c.category,t.target.dataset.page)})})}const N=document.querySelector("#sorted-select");new j({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const ee=s=>{const e=s.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};N.addEventListener("change",te);function te(s){const e=s.target.value,t=se({sortType:e,array:arrayCardsForTest});ee(t)}function se({sortType:s,array:e}){let t;switch(s){case"default":t=e.toSorted((o,a)=>o.name.localeCompare(a.name));break;case"best":t=e.toSorted((o,a)=>a.rating-o.rating);break;case"calories-highest":t=e.toSorted((o,a)=>a.burnedCalories-o.burnedCalories);break;case"calories-lowest":t=e.toSorted((o,a)=>o.burnedCalories-a.burnedCalories);break;default:t=e.toSorted((o,a)=>o.name.localeCompare(a.name));break}return t}function ae(){return window.location.href}const oe=document.querySelector(".share-button"),E=document.querySelector(".share-button-hint");oe.addEventListener("click",re);function re(s){const e=ae(),t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),E.textContent="Link copy!",setTimeout(()=>{E.textContent="Share exercises"},1e3)}const w=document.querySelector(".footer-form");w.addEventListener("submit",ie);function ie(s){s.preventDefault();const e={email:s.target.elements.email.value};w.reset(),D(e).then(t=>{switch(t.status){case 201:p.success({message:t.data.message});break;case 409:p.info({message:t.data.message});break;default:p.warning({message:"Sorry, something went wrong"});break}})}const r={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")};function ne(){r.openModalButton&&r.modalExercises?document.addEventListener("DOMContentLoaded",function(){r.openModalButton.addEventListener("click",s),r.modalExercises.addEventListener("click",e),document.addEventListener("keydown",t)}):console.error("One or more elements not found. Check your HTML and selectors.");function s(){r.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===r.modalExercises)&&r.modalExercises.classList.add("visually-hidden")}function t(a){a.key==="Escape"&&r.modalExercises.classList.add("visually-hidden")}function o(){r.openModalButton.removeEventListener("click",s),r.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",t)}return o}function ce(s){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(t=>{const o=parseInt(t.dataset.value,10);let a=0;o<=s?a=100:o-s<1&&(a=(s-o+1)*100),t.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,t.style.webkitBackgroundClip="text",t.style.color="transparent"})}ne();const le=document.querySelector(".modal-exercises");let i;function de(){if(!U("favorites")){O(i);return}V(i._id)}async function ue(){try{i=await R("64f389465ae26083f39b17a2"),le.innerHTML=me(i),ce(i.rating),document.addEventListener("click",s=>{s.target.matches(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),de(i))})}catch(s){console.error(s)}}function me(s){const{name:e,burnedCalories:t,bodyPart:o,description:a,target:x,equipment:T,gifUrl:h,popularity:B,rating:$,time:A,_id:pe}=s;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${h!==null?h:"../images/no-image.png"}" alt="${e}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${e}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${$}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${x}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${T}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${B}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${t}/${A} 
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
