import{g as U,c as j,a as B,b as V,d as O,s as W,e as z,f as D,h as G,r as K}from"./assets/favorites-050e1dc4.js";import{i as m,S as J}from"./assets/vendor-916d32b4.js";const _=document.getElementById("to-top-btn"),C=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",Q);function Q(){document.body.scrollTop>30||document.documentElement.scrollTop>30?C.style.display="flex":C.style.display="none"}_==null||_.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.querySelector(".js-loader");const X=12,h=document.querySelector(".search-box"),x=document.querySelector(".section-title_additional"),v=document.querySelector("button[data-muscles]"),p=document.querySelector("button[data-body]"),g=document.querySelector("button[data-equipment]"),l=document.querySelector("#category-list-container"),b=document.querySelector("#exercises-list-container"),w=document.querySelector(".exercises_pagination"),k=document.querySelector("#exercises");d("Muscles");function d(t,e=1){U({filter:t,page:e,limit:X}).then(s=>{var o,a,r,c;(o=l==null?void 0:l.classList)==null||o.remove("visually-hidden"),(a=b==null?void 0:b.classList)==null||a.add("visually-hidden"),(r=h==null?void 0:h.classList)==null||r.add("visually-hidden-ext"),(c=x==null?void 0:x.classList)==null||c.add("visually-hidden"),s.results.length?(l.innerHTML=j(s),s.totalPages>1?(w.innerHTML=B(s,t),ee()):w.innerHTML=""):l.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const Y=()=>{E(v),d("Muscles")},Z=()=>{E(p),d("Body parts")},N=()=>{E(g),d("Equipment")};v==null||v.addEventListener("click",Y);p==null||p.addEventListener("click",Z);g==null||g.addEventListener("click",N);function E(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function ee(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(s){k==null||k.scrollIntoView({block:"start",behavior:"smooth"}),d(s.target.dataset.filter,s.target.dataset.page)})})}const I=document.querySelector(".search-box"),y=document.querySelector(".search-input"),te=document.querySelector("#search-button"),se=document.querySelector(".section-title_additional"),ae=document.querySelector("#title-category"),F=document.querySelector("#category-list-container"),S=document.querySelector("#exercises-list-container"),M=document.querySelector(".exercises_pagination"),oe=document.querySelector("#exercises"),L=10;let i={};I.addEventListener("keydown",t=>{if(t.key==="Enter"){if(H()==!1)return;f(i.filter,i.category,1,y.value)}});te.addEventListener("click",()=>{H()!=!1&&f(i.filter,i.category,1,y.value)});function H(){return y.value.trim()===""?(m.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}F.addEventListener("click",re);async function re(t){const e=t.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(F.classList.add("visually-hidden"),S.classList.remove("visually-hidden"),I.classList.remove("visually-hidden-ext"),se.classList.remove("visually-hidden"),y.value="",f(e.dataset.filter,e.dataset.category)))}async function f(t,e,s=1,o=""){let a=o.trim().toLowerCase();switch(t){case"Muscles":i={muscles:e,category:e,filter:t,keyword:a,limit:L,page:s};break;case"Equipment":i={equipment:e,category:e,filter:t,keyword:a,limit:L,page:s};break;case"Body parts":i={bodypart:e,category:e,filter:t,keyword:a,limit:L,page:s};break}ae.innerHTML=e,V(i).then(r=>{r.results.length?S.innerHTML=r.results.map(c=>O(c)).join(""):S.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',r.totalPages>1?(M.innerHTML=B(r,t),ie()):M.innerHTML=""})}function ie(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(s){oe.scrollIntoView({block:"start",behavior:"smooth"}),f(s.target.dataset.filter,i.category,s.target.dataset.page,i.keyword)})})}const ne=document.querySelector("#sorted-select");new J({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const ce=t=>{const e=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};ne.addEventListener("change",le);function le(t){const e=t.target.value,s=de({sortType:e,array:arrayCardsForTest});ce(s)}function de({sortType:t,array:e}){let s;switch(t){case"default":s=e.toSorted((o,a)=>o.name.localeCompare(a.name));break;case"best":s=e.toSorted((o,a)=>a.rating-o.rating);break;case"calories-highest":s=e.toSorted((o,a)=>a.burnedCalories-o.burnedCalories);break;case"calories-lowest":s=e.toSorted((o,a)=>o.burnedCalories-a.burnedCalories);break;default:s=e.toSorted((o,a)=>o.name.localeCompare(a.name));break}return s}function ue(){return window.location.href}const me=document.querySelector(".share-button"),T=document.querySelector(".share-button-hint");me.addEventListener("click",ve);function ve(t){const e=ue(),s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),T.textContent="Link copy!",setTimeout(()=>{T.textContent="Share exercises"},1e3)}const A=document.querySelector(".footer-form");A.addEventListener("submit",pe);function pe(t){t.preventDefault();const e={email:t.target.elements.email.value};A.reset(),W(e).then(s=>{switch(s.status){case 201:m.success({message:s.data.message});break;case 409:m.info({message:s.data.message});break;default:m.warning({message:"Sorry, something went wrong"});break}})}const n={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},ge=document.getElementById("exercises-list-container");ge.addEventListener("click",ye);function ye(t){if(!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id;be(e)}function fe(){n.modalExercises.addEventListener("click",e),document.addEventListener("keydown",s),t();function t(){n.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===n.modalExercises)&&n.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&n.modalExercises.classList.add("visually-hidden")}function o(){n.openModalButton.removeEventListener("click",t),n.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",s)}return o}function _e(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const o=parseInt(s.dataset.value,10);let a=0;o<=t?a=100:o-t<1&&(a=(t-o+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const he=document.querySelector(".modal-exercises");let u;const xe=t=>{const e=document.querySelector(".modal-exercises__button-favourites");if(console.log(t),!(D("favorites")||[]).find(a=>(a==null?void 0:a._id)===t._id)){G(t),e.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`;return}K(t._id),e.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"

          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`};async function be(t){try{u=await z(t),he.innerHTML=ke(u),_e(u.rating),fe(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),xe(u))})}catch(e){console.error(e)}}function ke(t){const{name:e,burnedCalories:s,bodyPart:o,description:a,target:r,equipment:c,gifUrl:q,popularity:$,rating:P,time:R,_id:Le}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${q!==null?q:"../images/no-image.png"}" alt="${e}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${e}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${P}</div>
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
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${c}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${$}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${R} 
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
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="modal-exercises__button-rating">Give a rating</button>
      </div>
    </div>
  </div>`}
//# sourceMappingURL=commonHelpers2.js.map
