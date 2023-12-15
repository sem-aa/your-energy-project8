import{c as W,a as F,b as z,g as G,d as K,e as O,r as J}from"./assets/header-df7dded5.js";import{a as l,i as g,S as Q}from"./assets/vendor-916d32b4.js";const x=document.getElementById("to-top-btn"),M=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",X);function X(){document.body.scrollTop>30||document.documentElement.scrollTop>30?M.style.display="flex":M.style.display="none"}x==null||x.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.querySelector(".js-loader");l.defaults.baseURL="https://your-energy.b.goit.study/api/";const Y=async({filter:t="",page:e=1,limit:s=12}={})=>{try{return(await l.get(`filters?filter=${t}&page=${e}&limit=${s}`)).data}catch(r){console.error("Error in getFilters:",r)}},Z=async({bodypart:t="",muscles:e="",equipment:s="",keyword:r="",page:a=1,limit:o=10}={})=>{try{return(await l.get(`exercises?bodypart=${t}&muscles=${e}&equipment=${s}&keyword=${r}&page=${a}&limit=${o}`)).data}catch(n){console.error("Error in getExercises:",n)}},N=async t=>{try{return(await l.get(`exercises/${t}`)).data}catch(e){console.error("Error in getExerciseId:",e)}},ee=async(t,e)=>{try{return(await l.patch(`exercises/${t}/rating`,e)).data}catch(s){console.error("Error in updateRaring:",s)}},te=async t=>{try{return await l.post("subscription",t)}catch(e){return console.error("Error in subscribe:",e),e.response}},se=12,b=document.querySelector(".search-box"),L=document.querySelector(".section-title_additional"),p=document.querySelector("button[data-muscles]"),y=document.querySelector("button[data-body]"),v=document.querySelector("button[data-equipment]"),d=document.querySelector("#category-list-container"),k=document.querySelector("#exercises-list-container"),$=document.querySelector(".exercises_pagination"),E=document.querySelector("#exercises");u("Muscles");function u(t,e=1){Y({filter:t,page:e,limit:se}).then(s=>{var r,a,o,n;(r=d==null?void 0:d.classList)==null||r.remove("visually-hidden"),(a=k==null?void 0:k.classList)==null||a.add("visually-hidden"),(o=b==null?void 0:b.classList)==null||o.add("visually-hidden-ext"),(n=L==null?void 0:L.classList)==null||n.add("visually-hidden"),s.results.length?(d.innerHTML=W(s),s.totalPages>1?($.innerHTML=F(s,t),ie()):$.innerHTML=""):d.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const ae=()=>{w(p),u("Muscles")},re=()=>{w(y),u("Body parts")},oe=()=>{w(v),u("Equipment")};p==null||p.addEventListener("click",ae);y==null||y.addEventListener("click",re);v==null||v.addEventListener("click",oe);function w(t){document.querySelector(".active").classList.remove("active"),t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}function ie(){document.querySelectorAll("a.page-num").forEach(function(e){e==null||e.addEventListener("click",function(s){E==null||E.scrollIntoView({block:"start",behavior:"smooth"}),u(s.target.dataset.filter,s.target.dataset.page)})})}const I=document.querySelector(".search-box"),h=document.querySelector(".search-input"),ne=document.querySelector("#search-button"),ce=document.querySelector(".section-title_additional"),le=document.querySelector("#title-category"),R=document.querySelector("#category-list-container"),q=document.querySelector("#exercises-list-container"),T=document.querySelector(".exercises_pagination"),de=document.querySelector("#exercises"),S=10;let i={};I.addEventListener("keydown",t=>{if(t.key==="Enter"){if(H()==!1)return;_(i.filter,i.category,1,h.value)}});ne.addEventListener("click",()=>{H()!=!1&&_(i.filter,i.category,1,h.value)});function H(){return h.value.trim()===""?(g.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}R.addEventListener("click",ue);async function ue(t){const e=t.target.closest(".exercises_category-item");e&&(!e.dataset.filter||!e.dataset.category||(R.classList.add("visually-hidden"),q.classList.remove("visually-hidden"),I.classList.remove("visually-hidden-ext"),ce.classList.remove("visually-hidden"),h.value="",_(e.dataset.filter,e.dataset.category)))}async function _(t,e,s=1,r=""){let a=r.trim().toLowerCase();switch(t){case"Muscles":i={muscles:e,category:e,filter:t,keyword:a,limit:S,page:s};break;case"Equipment":i={equipment:e,category:e,filter:t,keyword:a,limit:S,page:s};break;case"Body parts":i={bodypart:e,category:e,filter:t,keyword:a,limit:S,page:s};break}le.innerHTML=e,Z(i).then(o=>{o.results.length?q.innerHTML=o.results.map(n=>z(n)).join(""):q.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',o.totalPages>1?(T.innerHTML=F(o,t),me()):T.innerHTML=""})}function me(){document.querySelectorAll("a.page-num").forEach(function(e){e.addEventListener("click",function(s){de.scrollIntoView({block:"start",behavior:"smooth"}),_(s.target.dataset.filter,i.category,s.target.dataset.page,i.keyword)})})}const ge=document.querySelector("#sorted-select");new Q({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const pe=t=>{const e=t.map(createInfoCardMarkup).join("");favoritesList.innerHTML=e};ge.addEventListener("change",ye);function ye(t){const e=t.target.value,s=ve({sortType:e,array:arrayCardsForTest});pe(s)}function ve({sortType:t,array:e}){let s;switch(t){case"default":s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break;case"best":s=e.toSorted((r,a)=>a.rating-r.rating);break;case"calories-highest":s=e.toSorted((r,a)=>a.burnedCalories-r.burnedCalories);break;case"calories-lowest":s=e.toSorted((r,a)=>r.burnedCalories-a.burnedCalories);break;default:s=e.toSorted((r,a)=>r.name.localeCompare(a.name));break}return s}const fe=document.querySelector(".share-button"),B=document.querySelector(".share-button-hint");fe.addEventListener("click",he);function he(t){const e=G(),s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),B.textContent="Link copy!",setTimeout(()=>{B.textContent="Share exercises"},1e3)}const A=document.querySelector(".footer-form");A.addEventListener("submit",_e);function _e(t){t.preventDefault();const e={email:t.target.elements.email.value};A.reset(),te(e).then(s=>{switch(s.status){case 201:g.success({message:s.data.message});break;case 409:g.info({message:s.data.message});break;default:g.warning({message:"Sorry, something went wrong"});break}})}const c={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},xe=document.getElementById("exercises-list-container");xe.addEventListener("click",be);function be(t){if(!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id;qe(e)}function Le(){c.modalExercises.addEventListener("click",e),document.addEventListener("keydown",s),t();function t(){c.modalExercises.classList.remove("visually-hidden")}function e(a){(a.target.closest(".modal-exercises__button-close")||a.target===c.modalExercises)&&c.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&c.modalExercises.classList.add("visually-hidden")}function r(){c.openModalButton.removeEventListener("click",t),c.modalExercises.removeEventListener("click",e),document.removeEventListener("keydown",s)}return r}function ke(t){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const r=parseInt(s.dataset.value,10);let a=0;r<=t?a=100:r-t<1&&(a=(t-r+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const Ee=document.querySelector(".modal-exercises");let m;const Se=t=>{const e=document.querySelector(".modal-exercises__button-favourites");if(console.log(t),!(K("favorites")||[]).find(a=>(a==null?void 0:a._id)===t._id)){O(t),e.innerHTML=`Unfavorite
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
          </svg>`};async function qe(t){try{m=await N(t),Ee.innerHTML=we(m),ke(m.rating),Le(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),Se(m))})}catch(e){console.error(e)}}function we(t){const{name:e,burnedCalories:s,bodyPart:r,description:a,target:o,equipment:n,gifUrl:C,popularity:U,rating:j,time:V,_id:Te}=t;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${C!==null?C:"../images/no-image.png"}" alt="${e}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${e}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${j}</div>
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
          <p class="modal-exercises__partials-value">${s}/${V} 
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
  </div>`}const P=document.querySelector("#ratingForm"),Ce=document.querySelector(".close-rating"),f=document.querySelector(".modal-exercises__button-rating"),D=document.querySelector("#ratingModal");console.log(f);const Me="64f389465ae26083f39b17a4";async function $e(t){t.preventDefault();const e=new FormData(P),s={};e.forEach((r,a)=>{a==="rate"?s[a]=Number(r):s[a]=r});try{const r=await ee(Me,s);console.log(r),r||alert("Error")}catch(r){console.log("shpm"),console.log(r.message)}}P.addEventListener("submit",$e);f==null||f.addEventListener("click",function(){D.style.display="block",body.classList.add("modal-open")});Ce.addEventListener("click",()=>{D.style.display="none"});
//# sourceMappingURL=commonHelpers2.js.map
