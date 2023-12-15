import{c as V,a as B,b as O,g as W,d as z,r as G}from"./assets/header-cd637621.js";import{a as l,i as g,S as K}from"./assets/vendor-916d32b4.js";const _=document.getElementById("to-top-btn"),C=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",J);function J(){document.body.scrollTop>30||document.documentElement.scrollTop>30?C.style.display="flex":C.style.display="none"}_==null||_.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.querySelector(".js-loader");l.defaults.baseURL="https://your-energy.b.goit.study/api/";const Q=async({filter:t="",page:e=1,limit:s=12}={})=>{try{return(await l.get(`filters?filter=${t}&page=${e}&limit=${s}`)).data}catch(r){console.error("Error in getFilters:",r)}},X=async({bodypart:t="",muscles:e="",equipment:s="",keyword:r="",page:a=1,limit:o=10}={})=>{try{return(await l.get(`exercises?bodypart=${t}&muscles=${e}&equipment=${s}&keyword=${r}&page=${a}&limit=${o}`)).data}catch(n){console.error("Error in getExercises:",n)}},Y=async t=>{try{return(await l.get(`exercises/${t}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},F=async(t,e)=>{try{return(await l.patch(`exercises/${t}/rating`,e)).data}catch(s){console.error("Error in getExerciseId:",s)}},Z=async t=>{try{return await l.post("subscription",t)}catch(e){return console.error("Error in subscribe:",e),e.response}},N=12,x=document.querySelector(".search-box"),b=document.querySelector(".section-title_additional"),p=document.querySelector("button[data-muscles]"),v=document.querySelector("button[data-body]"),y=document.querySelector("button[data-equipment]"),d=document.querySelector("#category-list-container"),L=document.querySelector("#exercises-list-container"),M=document.querySelector(".exercises_pagination"),k=document.querySelector("#exercises");u("Muscles");function u(t,e=1){Q({filter:t,page:e,limit:N}).then(s=>{var r,a,o,n;(r=d==null?void 0:d.classList)==null||r.remove("visually-hidden"),(a=L==null?void 0:L.classList)==null||a.add("visually-hidden"),(o=x==null?void 0:x.classList)==null||o.add("visually-hidden-ext"),(n=b==null?void 0:b.classList)==null||n.add("visually-hidden"),s.results.length?(d.innerHTML=V(s),s.totalPages>1?(M.innerHTML=B(s,t),ae()):M.innerHTML=""):d.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const ee=()=>{q(p),u("Muscles")},te=()=>{q(v),u("Body parts")},se=()=>{q(y),u("Equipment")};p==null||p.addEventListener("click",ee);v==null||v.addEventListener("click",te);y==null||y.addEventListener("click",se);function q(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function ae(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(s){k==null||k.scrollIntoView({block:"start",behavior:"smooth"}),u(s.target.dataset.filter,s.target.dataset.page)})})}const I=document.querySelector(".search-box"),f=document.querySelector(".search-input"),re=document.querySelector("#search-button"),oe=document.querySelector(".section-title_additional"),ie=document.querySelector("#title-category"),H=document.querySelector("#category-list-container"),S=document.querySelector("#exercises-list-container"),$=document.querySelector(".exercises_pagination"),ne=document.querySelector("#exercises"),E=10;let i={};I.addEventListener("keydown",t=>{if(t.key==="Enter"){if(R()==!1)return;h(i.filter,i.category,1,f.value)}});re.addEventListener("click",()=>{R()!=!1&&h(i.filter,i.category,1,f.value)});function R(){return f.value.trim()===""?(g.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}H.addEventListener("click",ce);async function ce(t){const e=t.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(H.classList.add("visually-hidden"),S.classList.remove("visually-hidden"),I.classList.remove("visually-hidden-ext"),oe.classList.remove("visually-hidden"),f.value="",h(e.dataset.filter,e.dataset.category)))}async function h(t,e,s=1,r=""){let a=r.trim().toLowerCase();switch(t){case"Muscles":i={muscles:e,category:e,filter:t,keyword:a,limit:E,page:s};break;case"Equipment":i={equipment:e,category:e,filter:t,keyword:a,limit:E,page:s};break;case"Body parts":i={bodypart:e,category:e,filter:t,keyword:a,limit:E,page:s};break}ie.innerHTML=e,X(i).then(o=>{o.results.length?S.innerHTML=o.results.map(n=>O(n)).join(""):S.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',o.totalPages>1?($.innerHTML=B(o,t),le()):$.innerHTML=""})}function le(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(s){ne.scrollIntoView({block:"start",behavior:"smooth"}),h(s.target.dataset.filter,i.category,s.target.dataset.page,i.keyword)})})}const de=document.querySelector("#sorted-select");new K({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const ue=t=>{const e=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};de.addEventListener("change",me);function me(t){const e=t.target.value,s=ge({sortType:e,array:arrayCardsForTest});ue(s)}function ge({sortType:t,array:e}){let s;switch(t){case"default":s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break;case"best":s=e.toSorted((r,a)=>a.rating-r.rating);break;case"calories-highest":s=e.toSorted((r,a)=>a.burnedCalories-r.burnedCalories);break;case"calories-lowest":s=e.toSorted((r,a)=>r.burnedCalories-a.burnedCalories);break;default:s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break}return s}function pe(){return window.location.href}const ve=document.querySelector(".share-button"),T=document.querySelector(".share-button-hint");ve.addEventListener("click",ye);function ye(t){const e=pe(),s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),T.textContent="Link copy!",setTimeout(()=>{T.textContent="Share exercises"},1e3)}const A=document.querySelector(".footer-form");A.addEventListener("submit",fe);function fe(t){t.preventDefault();const e={email:t.target.elements.email.value};A.reset(),Z(e).then(s=>{switch(s.status){case 201:g.success({message:s.data.message});break;case 409:g.info({message:s.data.message});break;default:g.warning({message:"Sorry, something went wrong"});break}})}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},he=document.getElementById("exercises-list-container");he.addEventListener("click",_e);function _e(t){if(!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id;Ee(e)}function xe(){c.modalExercises.addEventListener("click",e),document.addEventListener("keydown",s),t();function t(){c.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===c.modalExercises)&&c.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&c.modalExercises.classList.add("visually-hidden")}function r(){c.openModalButton.removeEventListener("click",t),c.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",s)}return r}function be(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const r=parseInt(s.dataset.value,10);let a=0;r<=t?a=100:r-t<1&&(a=(t-r+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const Le=document.querySelector(".modal-exercises");let m;const ke=t=>{const e=document.querySelector(".modal-exercises__button-favourites");if(console.log(t),!(W("favorites")||[]).find(a=>(a==null?void 0:a._id)===t._id)){z(t),e.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`;return}G(t._id),e.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"

          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`};async function Ee(t){try{m=await Y(t),Le.innerHTML=Se(m),be(m.rating),xe(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),ke(m))})}catch(e){console.error(e)}}function Se(t){const{name:e,burnedCalories:s,bodyPart:r,description:a,target:o,equipment:n,gifUrl:w,popularity:U,rating:D,time:j,_id:$e}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${w!==null?w:"../images/no-image.png"}" alt="${e}" />
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
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${r}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${n}</p>
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
  </div>`}const P=document.querySelector("#ratingForm"),qe=document.querySelector(".close-rating"),we=document.querySelector("#ratingModal"),Ce="64f389465ae26083f39b17a4";function Me(t){t.preventDefault();const e=new FormData(P),s={};e.forEach((r,a)=>{s[a]=r}),console.log(s),F(Ce,s)}P.addEventListener("submit",Me);qe.addEventListener("click",()=>{we.style.display="none"});F("64f389465ae26083f39b17a4",{rate:5,email:"test156324@gmail.com",review:"My best exercise"}).then(t=>console.log(t));
//# sourceMappingURL=commonHelpers2.js.map
