import{g as O,c as V,a as T,b as W,d as z,s as G,e as K,f as J,h as Q,r as X,u as Y}from"./assets/favorites-dfaad2f8.js";import{i as m,S as Z}from"./assets/vendor-916d32b4.js";const _=document.getElementById("to-top-btn"),C=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",N);function N(){document.body.scrollTop>30||document.documentElement.scrollTop>30?C.style.display="flex":C.style.display="none"}_==null||_.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.querySelector(".js-loader");const ee=12,h=document.querySelector(".search-box"),x=document.querySelector(".section-title_additional"),v=document.querySelector("button[data-muscles]"),p=document.querySelector("button[data-body]"),g=document.querySelector("button[data-equipment]"),l=document.querySelector("#category-list-container"),b=document.querySelector("#exercises-list-container"),w=document.querySelector(".exercises_pagination"),L=document.querySelector("#exercises");d("Muscles");function d(t,e=1){O({filter:t,page:e,limit:ee}).then(s=>{var o,a,n,c;(o=l==null?void 0:l.classList)==null||o.remove("visually-hidden"),(a=b==null?void 0:b.classList)==null||a.add("visually-hidden"),(n=h==null?void 0:h.classList)==null||n.add("visually-hidden-ext"),(c=x==null?void 0:x.classList)==null||c.add("visually-hidden"),s.results.length?(l.innerHTML=V(s),s.totalPages>1?(w.innerHTML=T(s,t),oe()):w.innerHTML=""):l.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const te=()=>{E(v),d("Muscles")},se=()=>{E(p),d("Body parts")},ae=()=>{E(g),d("Equipment")};v==null||v.addEventListener("click",te);p==null||p.addEventListener("click",se);g==null||g.addEventListener("click",ae);function E(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function oe(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(s){L==null||L.scrollIntoView({block:"start",behavior:"smooth"}),d(s.target.dataset.filter,s.target.dataset.page)})})}const I=document.querySelector(".search-box"),y=document.querySelector(".search-input"),ne=document.querySelector("#search-button"),re=document.querySelector(".section-title_additional"),ie=document.querySelector("#title-category"),F=document.querySelector("#category-list-container"),S=document.querySelector("#exercises-list-container"),M=document.querySelector(".exercises_pagination"),ce=document.querySelector("#exercises"),k=10;let r={};I.addEventListener("keydown",t=>{if(t.key==="Enter"){if(A()==!1)return;f(r.filter,r.category,1,y.value)}});ne.addEventListener("click",()=>{A()!=!1&&f(r.filter,r.category,1,y.value)});function A(){return y.value.trim()===""?(m.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}F.addEventListener("click",le);async function le(t){const e=t.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(F.classList.add("visually-hidden"),S.classList.remove("visually-hidden"),I.classList.remove("visually-hidden-ext"),re.classList.remove("visually-hidden"),y.value="",f(e.dataset.filter,e.dataset.category)))}async function f(t,e,s=1,o=""){let a=o.trim().toLowerCase();switch(t){case"Muscles":r={muscles:e,category:e,filter:t,keyword:a,limit:k,page:s};break;case"Equipment":r={equipment:e,category:e,filter:t,keyword:a,limit:k,page:s};break;case"Body parts":r={bodypart:e,category:e,filter:t,keyword:a,limit:k,page:s};break}ie.innerHTML=e,W(r).then(n=>{n.results.length?S.innerHTML=n.results.map(c=>z(c)).join(""):S.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',n.totalPages>1?(M.innerHTML=T(n,t),de()):M.innerHTML=""})}function de(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(s){ce.scrollIntoView({block:"start",behavior:"smooth"}),f(s.target.dataset.filter,r.category,s.target.dataset.page,r.keyword)})})}const ue=document.querySelector("#sorted-select");new Z({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const me=t=>{const e=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};ue.addEventListener("change",ve);function ve(t){const e=t.target.value,s=pe({sortType:e,array:arrayCardsForTest});me(s)}function pe({sortType:t,array:e}){let s;switch(t){case"default":s=e.toSorted((o,a)=>o.name.localeCompare(a.name));break;case"best":s=e.toSorted((o,a)=>a.rating-o.rating);break;case"calories-highest":s=e.toSorted((o,a)=>a.burnedCalories-o.burnedCalories);break;case"calories-lowest":s=e.toSorted((o,a)=>o.burnedCalories-a.burnedCalories);break;default:s=e.toSorted((o,a)=>o.name.localeCompare(a.name));break}return s}function ge(){return window.location.href}const ye=document.querySelector(".share-button"),B=document.querySelector(".share-button-hint");ye.addEventListener("click",fe);function fe(t){const e=ge(),s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),B.textContent="Link copy!",setTimeout(()=>{B.textContent="Share exercises"},1e3)}const H=document.querySelector(".footer-form");H.addEventListener("submit",_e);function _e(t){t.preventDefault();const e={email:t.target.elements.email.value};H.reset(),G(e).then(s=>{switch(s.status){case 201:m.success({message:s.data.message});break;case 409:m.info({message:s.data.message});break;default:m.warning({message:"Sorry, something went wrong"});break}})}const i={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},he=document.getElementById("exercises-list-container");he.addEventListener("click",xe);function xe(t){if(!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id;Ee(e)}function be(){i.modalExercises.addEventListener("click",e),document.addEventListener("keydown",s),t();function t(){i.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===i.modalExercises)&&i.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&i.modalExercises.classList.add("visually-hidden")}function o(){i.openModalButton.removeEventListener("click",t),i.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",s)}return o}function Le(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const o=parseInt(s.dataset.value,10);let a=0;o<=t?a=100:o-t<1&&(a=(t-o+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const ke=document.querySelector(".modal-exercises");let u;const Se=t=>{const e=document.querySelector(".modal-exercises__button-favourites");if(console.log(t),!(J("favorites")||[]).find(a=>(a==null?void 0:a._id)===t._id)){Q(t),e.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`;return}X(t._id),e.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"

          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`};async function Ee(t){try{u=await K(t),ke.innerHTML=qe(u),Le(u.rating),be(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),Se(u))})}catch(e){console.error(e)}}function qe(t){const{name:e,burnedCalories:s,bodyPart:o,description:a,target:n,equipment:c,gifUrl:q,popularity:U,rating:D,time:j,_id:Fe}=t;return`<div class="modal-exercises__card">
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
        <div class="modal-exercises__rating-value">${D}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${n}</p>
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
          <p class="modal-exercises__partials-value">${U}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${j} 
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
  </div>`}const $=document.getElementById("myModal"),Ce=document.getElementById("openModalBtn"),we=document.getElementById("closeModalBtn"),R=document.querySelector("body");Ce.addEventListener("click",function(){$.style.display="block",R.classList.add("modal-open")});we.addEventListener("click",function(){$.style.display="none",R.classList.remove("modal-open")});document.addEventListener("DOMContentLoaded",function(){const t=window.location.pathname;document.querySelectorAll(".nav_list li").forEach(function(s){s.querySelector("a").getAttribute("href")===t&&s.classList.add("nav_item_active")})});const P=document.querySelector("#ratingForm"),Me=document.querySelector(".close-rating"),Be=document.querySelector("#ratingModal"),Te="64f389465ae26083f39b17a4";function Ie(t){t.preventDefault();const e=new FormData(P),s={};e.forEach((o,a)=>{s[a]=o}),console.log(s),Y(Te,s)}P.addEventListener("submit",Ie);Me.addEventListener("click",()=>{Be.style.display="none"});
//# sourceMappingURL=commonHelpers2.js.map
