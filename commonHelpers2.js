import{c as K,a as A,g as H,b as O,d as J,e as Q,r as X}from"./assets/loader-d6a2c3ae.js";import{a as d,i as v,S as Y}from"./assets/vendor-916d32b4.js";const E=document.getElementById("to-top-btn"),T=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",Z);function Z(){document.body.scrollTop>30||document.documentElement.scrollTop>30?T.style.display="flex":T.style.display="none"}E==null||E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const l={openModalBtn:document.querySelector("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},b=()=>{l.modal.classList.toggle("is-hidden"),l.body.style.overflow="auto"},N=t=>{t.code==="Escape"&&b()};l.openModalBtn.addEventListener("click",t=>{b(),window.addEventListener("keydown",N),l.body.style.overflow="hidden"});l.closeModalBtn.addEventListener("click",b);l.modal.addEventListener("click",t=>{t.target===t.currentTarget&&b()});d.defaults.baseURL="https://your-energy.b.goit.study/api/";const ee=async({filter:t="",page:e=1,limit:s=12}={})=>{try{return(await d.get(`filters?filter=${t}&page=${e}&limit=${s}`)).data}catch(r){console.error("Error in getFilters:",r)}},te=async({bodypart:t="",muscles:e="",equipment:s="",keyword:r="",page:a=1,limit:i=10}={})=>{try{return(await d.get(`exercises?bodypart=${t}&muscles=${e}&equipment=${s}&keyword=${r}&page=${a}&limit=${i}`)).data}catch(o){console.error("Error in getExercises:",o)}},se=async t=>{try{return(await d.get(`exercises/${t}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},ae=async(t,e)=>{try{return(await d.patch(`exercises/${t}/rating`,e)).data}catch(s){console.error("Error in updateRaring:",s)}},re=async t=>{try{return await d.post("subscription",t)}catch(e){return console.error("Error in subscribe:",e),e.response}},oe=12,S=document.querySelector(".search-box"),q=document.querySelector(".section-title_additional"),f=document.querySelector("button[data-muscles]"),h=document.querySelector("button[data-body]"),_=document.querySelector("button[data-equipment]"),m=document.querySelector("#category-list-container"),w=document.querySelector("#exercises-list-container"),F=document.querySelector(".exercises_pagination"),C=document.querySelector("#exercises");g("Muscles");function g(t,e=1){ee({filter:t,page:e,limit:oe}).then(s=>{var r,a,i,o;(r=m==null?void 0:m.classList)==null||r.remove("visually-hidden"),(a=w==null?void 0:w.classList)==null||a.add("visually-hidden"),(i=S==null?void 0:S.classList)==null||i.add("visually-hidden-ext"),(o=q==null?void 0:q.classList)==null||o.add("visually-hidden"),s.results.length?(m.innerHTML=K(s),s.totalPages>1?(F.innerHTML=A(s,t),le()):F.innerHTML=""):m.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const ne=()=>{$(f),g("Muscles")},ie=()=>{$(h),g("Body parts")},ce=()=>{$(_),g("Equipment")};f==null||f.addEventListener("click",ne);h==null||h.addEventListener("click",ie);_==null||_.addEventListener("click",ce);function $(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function le(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(s){C==null||C.scrollIntoView({block:"start",behavior:"smooth"}),g(s.target.dataset.filter,s.target.dataset.page)})})}const P=document.querySelector(".search-box"),L=document.querySelector(".search-input"),de=document.querySelector("#search-button"),ue=document.querySelector(".section-title_additional"),me=document.querySelector("#title-category"),D=document.querySelector("#category-list-container"),B=document.querySelector("#exercises-list-container"),I=document.querySelector(".exercises_pagination"),ge=document.querySelector("#exercises"),M=10;let n={};P.addEventListener("keydown",t=>{if(t.key==="Enter"){if(U()==!1)return;k(n.filter,n.category,1,L.value)}});de.addEventListener("click",()=>{U()!=!1&&k(n.filter,n.category,1,L.value)});function U(){return L.value.trim()===""?(v.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}D.addEventListener("click",pe);async function pe(t){const e=t.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(D.classList.add("visually-hidden"),B.classList.remove("visually-hidden"),P.classList.remove("visually-hidden-ext"),ue.classList.remove("visually-hidden"),L.value="",k(e.dataset.filter,e.dataset.category)))}async function k(t,e,s=1,r=""){let a=r.trim().toLowerCase();switch(t){case"Muscles":n={muscles:e,category:e,filter:t,keyword:a,limit:M,page:s};break;case"Equipment":n={equipment:e,category:e,filter:t,keyword:a,limit:M,page:s};break;case"Body parts":n={bodypart:e,category:e,filter:t,keyword:a,limit:M,page:s};break}me.innerHTML=e;const i=H("favorites").map(o=>o._id);te(n).then(o=>{o.results.length?B.innerHTML=o.results.map(u=>{let p=!1;return i.includes(u._id)&&(p=!0),O(u,p)}).join(""):B.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',o.totalPages>1?(I.innerHTML=A(o,t),ye()):I.innerHTML=""})}function ye(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(s){ge.scrollIntoView({block:"start",behavior:"smooth"}),k(s.target.dataset.filter,n.category,s.target.dataset.page,n.keyword)})})}const ve=document.querySelector("#sorted-select");new Y({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const fe=t=>{const e=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};ve.addEventListener("change",he);function he(t){const e=t.target.value,s=_e({sortType:e,array:arrayCardsForTest});fe(s)}function _e({sortType:t,array:e}){let s;switch(t){case"default":s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break;case"best":s=e.toSorted((r,a)=>a.rating-r.rating);break;case"calories-highest":s=e.toSorted((r,a)=>a.burnedCalories-r.burnedCalories);break;case"calories-lowest":s=e.toSorted((r,a)=>r.burnedCalories-a.burnedCalories);break;default:s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break}return s}const xe=document.querySelector(".share-button"),R=document.querySelector(".share-button-hint");xe.addEventListener("click",be);function be(t){const e=J(),s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),R.textContent="Link copy!",setTimeout(()=>{R.textContent="Share exercises"},1e3)}const j=document.querySelector(".footer-form");j.addEventListener("submit",Le);function Le(t){t.preventDefault();const e={email:t.target.elements.email.value};j.reset(),re(e).then(s=>{switch(s.status){case 201:v.success({message:s.data.message});break;case 409:v.info({message:s.data.message});break;default:v.warning({message:"Sorry, something went wrong"});break}})}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},ke=document.getElementById("exercises-list-container");ke.addEventListener("click",Ee);function Ee(t){if(!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id;Me(e)}function Se(){c.modalExercises.addEventListener("click",e),document.addEventListener("keydown",s),t();function t(){c.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===c.modalExercises)&&c.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&c.modalExercises.classList.add("visually-hidden")}function r(){c.openModalButton.removeEventListener("click",t),c.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",s)}return r}function qe(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const r=parseInt(s.dataset.value,10);let a=0;r<=t?a=100:r-t<1&&(a=(t-r+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const we=document.querySelector(".modal-exercises");let y;const Ce=t=>{const e=document.querySelector(".modal-exercises__button-favourites");if(console.log(t),!(H("favorites")||[]).find(a=>(a==null?void 0:a._id)===t._id)){Q(t),e.innerHTML=`Unfavorite
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
          </svg>`};async function Me(t){try{y=await se(t),we.innerHTML=Be(y),qe(y.rating),Se(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),Ce(y))})}catch(e){console.error(e)}}function Be(t){const{name:e,burnedCalories:s,bodyPart:r,description:a,target:i,equipment:o,gifUrl:u,popularity:p,rating:z,time:G,_id:Ie}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${u!==null?u:"../images/no-image.png"}" alt="${e}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${e}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${z}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${i}</p>
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
          <p class="modal-exercises__partials-value">${p}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${G} 
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
  </div>`}const V=document.querySelector("#ratingForm"),$e=document.querySelector(".close-rating"),x=document.querySelector(".modal-exercises__button-rating"),W=document.querySelector("#ratingModal");console.log(x);const Te="64f389465ae26083f39b17a4";async function Fe(t){t.preventDefault();const e=new FormData(V),s={};e.forEach((r,a)=>{a==="rate"?s[a]=Number(r):s[a]=r});try{const r=await ae(Te,s);console.log(r),r||alert("Error")}catch(r){console.log("shpm"),console.log(r.message)}}V.addEventListener("submit",Fe);x==null||x.addEventListener("click",function(){W.style.display="block",body.classList.add("modal-open")});$e.addEventListener("click",()=>{W.style.display="none"});
//# sourceMappingURL=commonHelpers2.js.map
