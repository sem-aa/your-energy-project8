import{g as O,c as J,a as R,b as $,d as Q,e as X,f as Y,s as Z,h as N,i as ee,r as te,u as se}from"./assets/loader-dc1585d8.js";import{i as g,S as ae}from"./assets/vendor-916d32b4.js";const k=document.getElementById("to-top-btn"),B=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",oe);function oe(){document.body.scrollTop>30||document.documentElement.scrollTop>30?B.style.display="flex":B.style.display="none"}k==null||k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const re=12,S=document.querySelector(".search-box"),E=document.querySelector(".section-title_additional"),y=document.querySelector("button[data-muscles]"),f=document.querySelector("button[data-body]"),h=document.querySelector("button[data-equipment]"),u=document.querySelector("#category-list-container"),q=document.querySelector("#exercises-list-container"),F=document.querySelector(".exercises_pagination"),w=document.querySelector("#exercises");m("Muscles");function m(e,t=1){O({filter:e,page:t,limit:re}).then(s=>{var o,a,c,r;(o=u==null?void 0:u.classList)==null||o.remove("visually-hidden"),(a=q==null?void 0:q.classList)==null||a.add("visually-hidden"),(c=S==null?void 0:S.classList)==null||c.add("visually-hidden-ext"),(r=E==null?void 0:E.classList)==null||r.add("visually-hidden"),s.results.length?(u.innerHTML=J(s),s.totalPages>1?(F.innerHTML=R(s,e),le()):F.innerHTML=""):u.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const ne=()=>{T(y),m("Muscles")},ie=()=>{T(f),m("Body parts")},ce=()=>{T(h),m("Equipment")};y==null||y.addEventListener("click",ne);f==null||f.addEventListener("click",ie);h==null||h.addEventListener("click",ce);function T(e){document.querySelector(".active").classList.remove("active"),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}function le(){document.querySelectorAll("a.page-num").forEach(function(t){t==null||t.addEventListener("click",function(s){w==null||w.scrollIntoView({block:"start",behavior:"smooth"}),m(s.target.dataset.filter,s.target.dataset.page)})})}const P=document.querySelector(".search-box"),x=document.querySelector(".search-input"),de=document.querySelector("#search-button"),ue=document.querySelector(".section-title_additional"),me=document.querySelector("#title-category"),W=document.querySelector("#category-list-container"),M=document.querySelector("#exercises-list-container"),H=document.querySelector(".exercises_pagination"),pe=document.querySelector("#exercises"),C=10;let n={};P.addEventListener("keydown",e=>{if(e.key==="Enter"){if(D()==!1)return;b(n.filter,n.category,1,x.value)}});de.addEventListener("click",()=>{D()!=!1&&b(n.filter,n.category,1,x.value)});function D(){return x.value.trim()===""?(g.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}W.addEventListener("click",ve);async function ve(e){const t=e.target.closest(".exercises_category-item");t&&(!t.dataset.filter||!t.dataset.category||(W.classList.add("visually-hidden"),M.classList.remove("visually-hidden"),P.classList.remove("visually-hidden-ext"),ue.classList.remove("visually-hidden"),x.value="",b(t.dataset.filter,t.dataset.category)))}async function b(e,t,s=1,o=""){let a=o.trim().toLowerCase();switch(e){case"Muscles":n={muscles:t,category:t,filter:e,keyword:a,limit:C,page:s};break;case"Equipment":n={equipment:t,category:t,filter:e,keyword:a,limit:C,page:s};break;case"Body parts":n={bodypart:t,category:t,filter:e,keyword:a,limit:C,page:s};break}me.innerHTML=t;const c=$("favorites").map(r=>r._id);Q(n).then(r=>{r.results.length?M.innerHTML=r.results.map(d=>{let p=!1;return c.includes(d._id)&&(p=!0),X(d,p)}).join(""):M.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',r.totalPages>1?(H.innerHTML=R(r,e),ge()):H.innerHTML=""})}function ge(){document.querySelectorAll("a.page-num").forEach(function(t){t.addEventListener("click",function(s){pe.scrollIntoView({block:"start",behavior:"smooth"}),b(s.target.dataset.filter,n.category,s.target.dataset.page,n.keyword)})})}const ye=document.querySelector("#sorted-select");new ae({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const fe=e=>{const t=e.map(createInfoCardMarkup).join("");favoritesList.innerHTML=t};ye.addEventListener("change",he);function he(e){const t=e.target.value,s=_e({sortType:t,array:arrayCardsForTest});fe(s)}function _e({sortType:e,array:t}){let s;switch(e){case"default":s=t.toSorted((o,a)=>o.name.localeCompare(a.name));break;case"best":s=t.toSorted((o,a)=>a.rating-o.rating);break;case"calories-highest":s=t.toSorted((o,a)=>a.burnedCalories-o.burnedCalories);break;case"calories-lowest":s=t.toSorted((o,a)=>o.burnedCalories-a.burnedCalories);break;default:s=t.toSorted((o,a)=>o.name.localeCompare(a.name));break}return s}const xe=document.querySelector(".share-button"),I=document.querySelector(".share-button-hint");xe.addEventListener("click",be);function be(e){const t=Y(),s=document.createElement("input");s.value=t,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),I.textContent="Link copy!",setTimeout(()=>{I.textContent="Share exercises"},1e3)}const U=document.querySelector(".footer-form");U.addEventListener("submit",Le);function Le(e){e.preventDefault();const t={email:e.target.elements.email.value};U.reset(),Z(t).then(s=>{switch(s.status){case 201:g.success({message:s.data.message});break;case 409:g.info({message:s.data.message});break;default:g.warning({message:"Sorry, something went wrong"});break}})}const i={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises")},ke=document.getElementById("exercises-list-container");ke.addEventListener("click",Se);function Se(e){if(!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;Me(t)}function Ee(){i.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){i.modalExercises.classList.remove("visually-hidden")}function t(a){(a.target.closest(".modal-exercises__button-close")||a.target===i.modalExercises)&&i.modalExercises.classList.add("visually-hidden")}function s(a){a.key==="Escape"&&i.modalExercises.classList.add("visually-hidden")}function o(){i.openModalButton.removeEventListener("click",e),i.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return o}function qe(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const o=parseInt(s.dataset.value,10);let a=0;o<=e?a=100:o-e<1&&(a=(e-o+1)*100),s.style.background=`linear-gradient(to right, gold ${a}%, gray ${a}%)`,s.style.webkitBackgroundClip="text",s.style.color="transparent"})}const we=document.querySelector(".modal-exercises");let v;const Ce=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(console.log(e),!($("favorites")||[]).find(a=>(a==null?void 0:a._id)===e._id)){ee(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href="./oleksii-symbol-defs.svg#icon-trash-dark"></use>
          </svg>`;return}te(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"

          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>`};async function Me(e){try{v=await N(e),we.innerHTML=Te(v),qe(v.rating),Ee(),console.log(123),document.querySelector(".modal-exercises__card").addEventListener("click",s=>{s.target.closest(".modal-exercises__button-favourites")&&(console.log("Button clicked!"),Ce(v))})}catch(t){console.error(t)}}function Te(e){const{name:t,burnedCalories:s,bodyPart:o,description:a,target:c,equipment:r,gifUrl:d,popularity:p,rating:G,time:K,_id:Ae}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${d!==null?d:"../images/no-image.png"}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${G}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${c}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${o}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${r}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${p}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${s}/${K} 
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
  </div>`}const j=document.querySelector("#ratingForm"),Be=document.querySelector(".close-rating"),_=document.querySelector(".modal-exercises__button-rating"),V=document.querySelector("#ratingModal");console.log(_);const Fe="64f389465ae26083f39b17a4";async function He(e){e.preventDefault();const t=new FormData(j),s={};t.forEach((o,a)=>{a==="rate"?s[a]=Number(o):s[a]=o});try{const o=await se(Fe,s);console.log(o),o||alert("Error")}catch(o){console.log("shpm"),console.log(o.message)}}j.addEventListener("submit",He);_==null||_.addEventListener("click",function(){V.style.display="block",body.classList.add("modal-open")});Be.addEventListener("click",()=>{V.style.display="none"});let A=document.querySelector(".hero-text");function z(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?A.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:A.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}z();window.addEventListener("resize",function(){z()});const l={openModalBtn:document.querySelector("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},L=()=>{l.modal.classList.toggle("is-hidden"),l.body.style.overflow="auto"},Ie=e=>{e.code==="Escape"&&L()};l.openModalBtn.addEventListener("click",e=>{L(),window.addEventListener("keydown",Ie),l.body.style.overflow="hidden"});l.closeModalBtn.addEventListener("click",L);l.modal.addEventListener("click",e=>{e.target===e.currentTarget&&L()});
//# sourceMappingURL=commonHelpers2.js.map
