import{c as z,a as I,g as R,b as G,d as K,e as O,r as J}from"./assets/header-593973d9.js";import{a as l,i as y,S as Q}from"./assets/vendor-916d32b4.js";const L=document.getElementById("to-top-btn"),$=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",X);function X(){document.body.scrollTop>30||document.documentElement.scrollTop>30?$.style.display="flex":$.style.display="none"}L==null||L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.querySelector(".js-loader");l.defaults.baseURL="https://your-energy.b.goit.study/api/";const Y=async({filter:t="",page:e=1,limit:s=12}={})=>{try{return(await l.get(`filters?filter=${t}&page=${e}&limit=${s}`)).data}catch(r){console.error("Error in getFilters:",r)}},Z=async({bodypart:t="",muscles:e="",equipment:s="",keyword:r="",page:a=1,limit:n=10}={})=>{try{return(await l.get(`exercises?bodypart=${t}&muscles=${e}&equipment=${s}&keyword=${r}&page=${a}&limit=${n}`)).data}catch(o){console.error("Error in getExercises:",o)}},N=async t=>{try{return(await l.get(`exercises/${t}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},ee=async(t,e)=>{try{return(await l.patch(`exercises/${t}/rating`,e)).data}catch(s){console.error("Error in updateRaring:",s)}},te=async t=>{try{return await l.post("subscription",t)}catch(e){return console.error("Error in subscribe:",e),e.response}},se=12,k=document.querySelector(".search-box"),E=document.querySelector(".section-title_additional"),v=document.querySelector("button[data-muscles]"),f=document.querySelector("button[data-body]"),h=document.querySelector("button[data-equipment]"),u=document.querySelector("#category-list-container"),S=document.querySelector("#exercises-list-container"),T=document.querySelector(".exercises_pagination"),q=document.querySelector("#exercises");m("Muscles");function m(t,e=1){Y({filter:t,page:e,limit:se}).then(s=>{var r,a,n,o;(r=u==null?void 0:u.classList)==null||r.remove("visually-hidden"),(a=S==null?void 0:S.classList)==null||a.add("visually-hidden"),(n=k==null?void 0:k.classList)==null||n.add("visually-hidden-ext"),(o=E==null?void 0:E.classList)==null||o.add("visually-hidden"),s.results.length?(u.innerHTML=z(s),s.totalPages>1?(T.innerHTML=I(s,t),ie()):T.innerHTML=""):u.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const ae=()=>{M(v),m("Muscles")},re=()=>{M(f),m("Body parts")},oe=()=>{M(h),m("Equipment")};v==null||v.addEventListener("click",ae);f==null||f.addEventListener("click",re);h==null||h.addEventListener("click",oe);function M(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function ie(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(s){q==null||q.scrollIntoView({block:"start",behavior:"smooth"}),m(s.target.dataset.filter,s.target.dataset.page)})})}const A=document.querySelector(".search-box"),x=document.querySelector(".search-input"),ne=document.querySelector("#search-button"),ce=document.querySelector(".section-title_additional"),le=document.querySelector("#title-category"),H=document.querySelector("#category-list-container"),C=document.querySelector("#exercises-list-container"),B=document.querySelector(".exercises_pagination"),de=document.querySelector("#exercises"),w=10;let i={};A.addEventListener("keydown",t=>{if(t.key==="Enter"){if(P()==!1)return;b(i.filter,i.category,1,x.value)}});ne.addEventListener("click",()=>{P()!=!1&&b(i.filter,i.category,1,x.value)});function P(){return x.value.trim()===""?(y.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}H.addEventListener("click",ue);async function ue(t){const e=t.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(H.classList.add("visually-hidden"),C.classList.remove("visually-hidden"),A.classList.remove("visually-hidden-ext"),ce.classList.remove("visually-hidden"),x.value="",b(e.dataset.filter,e.dataset.category)))}async function b(t,e,s=1,r=""){let a=r.trim().toLowerCase();switch(t){case"Muscles":i={muscles:e,category:e,filter:t,keyword:a,limit:w,page:s};break;case"Equipment":i={equipment:e,category:e,filter:t,keyword:a,limit:w,page:s};break;case"Body parts":i={bodypart:e,category:e,filter:t,keyword:a,limit:w,page:s};break}le.innerHTML=e;const n=R("favorites").map(o=>o._id);Z(i).then(o=>{o.results.length?C.innerHTML=o.results.map(d=>{let g=!1;return n.includes(d._id)&&(g=!0),G(d,g)}).join(""):C.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',o.totalPages>1?(B.innerHTML=I(o,t),me()):B.innerHTML=""})}function me(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(s){de.scrollIntoView({block:"start",behavior:"smooth"}),b(s.target.dataset.filter,i.category,s.target.dataset.page,i.keyword)})})}const ge=document.querySelector("#sorted-select");new Q({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const pe=t=>{const e=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};ge.addEventListener("change",ye);function ye(t){const e=t.target.value,s=ve({sortType:e,array:arrayCardsForTest});pe(s)}function ve({sortType:t,array:e}){let s;switch(t){case"default":s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break;case"best":s=e.toSorted((r,a)=>a.rating-r.rating);break;case"calories-highest":s=e.toSorted((r,a)=>a.burnedCalories-r.burnedCalories);break;case"calories-lowest":s=e.toSorted((r,a)=>r.burnedCalories-a.burnedCalories);break;default:s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break}return s}const fe=document.querySelector(".share-button"),F=document.querySelector(".share-button-hint");fe.addEventListener("click",he);function he(t){const e=K(),s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),F.textContent="Link copy!",setTimeout(()=>{F.textContent="Share exercises"},1e3)}const D=document.querySelector(".footer-form");D.addEventListener("submit",_e);function _e(t){t.preventDefault();const e={email:t.target.elements.email.value};D.reset(),te(e).then(s=>{switch(s.status){case 201:y.success({message:s.data.message});break;case 409:y.info({message:s.data.message});break;default:y.warning({message:"Sorry, something went wrong"});break}})}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},xe=document.getElementById("exercises-list-container");xe.addEventListener("click",be);function be(t){if(!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id;qe(e)}function Le(){c.modalExercises.addEventListener("click",e),document.addEventListener("keydown",s),t();function t(){c.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===c.modalExercises)&&c.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&c.modalExercises.classList.add("visually-hidden")}function r(){c.openModalButton.removeEventListener("click",t),c.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",s)}return r}function ke(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const r=parseInt(s.dataset.value,10);let a=0;r<=t?a=100:r-t<1&&(a=(t-r+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const Ee=document.querySelector(".modal-exercises");let p;const Se=t=>{const e=document.querySelector(".modal-exercises__button-favourites");if(console.log(t),!(R("favorites")||[]).find(a=>(a==null?void 0:a._id)===t._id)){O(t),e.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`;return}J(t._id),e.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"

          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`};async function qe(t){try{p=await N(t),Ee.innerHTML=we(p),ke(p.rating),Le(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),Se(p))})}catch(e){console.error(e)}}function we(t){const{name:e,burnedCalories:s,bodyPart:r,description:a,target:n,equipment:o,gifUrl:d,popularity:g,rating:V,time:W,_id:Te}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${d!==null?d:"../images/no-image.png"}" alt="${e}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${e}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${V}</div>
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
          <p class="modal-exercises__partials-value">${r}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${g}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${W} 
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
  </div>`}const U=document.querySelector("#ratingForm"),Ce=document.querySelector(".close-rating"),_=document.querySelector(".modal-exercises__button-rating"),j=document.querySelector("#ratingModal");console.log(_);const Me="64f389465ae26083f39b17a4";async function $e(t){t.preventDefault();const e=new FormData(U),s={};e.forEach((r,a)=>{a==="rate"?s[a]=Number(r):s[a]=r});try{const r=await ee(Me,s);console.log(r),r||alert("Error")}catch(r){console.log("shpm"),console.log(r.message)}}U.addEventListener("submit",$e);_==null||_.addEventListener("click",function(){j.style.display="block",body.classList.add("modal-open")});Ce.addEventListener("click",()=>{j.style.display="none"});
//# sourceMappingURL=commonHelpers2.js.map
