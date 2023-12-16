import{g as V,c as G,a as $,r as g,s as p,b as J,d as K,e as Q,f as X,h as Y}from"./assets/modal-rating-a6950514.js";import{i as m,S as Z}from"./assets/vendor-916d32b4.js";const k=document.getElementById("to-top-btn"),H=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",N);function N(){document.body.scrollTop>30||document.documentElement.scrollTop>30?H.style.display="flex":H.style.display="none"}k==null||k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const ee=12,q=document.querySelector(".search-box"),w=document.querySelector(".section-title_additional"),y=document.querySelector("button[data-muscles]"),f=document.querySelector("button[data-body]"),h=document.querySelector("button[data-equipment]"),l=document.querySelector("#category-list-container"),E=document.querySelector("#exercises-list-container"),I=document.querySelector(".exercises_pagination"),C=document.querySelector("#exercises");d("Muscles");function d(e,t=1){V({filter:e,page:t,limit:ee}).then(o=>{var r,n,u,a;(r=l==null?void 0:l.classList)==null||r.remove("visually-hidden"),(n=E==null?void 0:E.classList)==null||n.add("visually-hidden"),(u=q==null?void 0:q.classList)==null||u.add("visually-hidden-ext"),(a=w==null?void 0:w.classList)==null||a.add("visually-hidden"),o.results.length?(l.innerHTML=G(o),o.totalPages>1?(I.innerHTML=$(o,e),re()):I.innerHTML=""):l.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const te=()=>{g(),p("filter","Muscles"),T(y),d("Muscles")},oe=()=>{g(),p("filter","Body parts"),T(f),d("Body parts")},ne=()=>{g(),p("filter","Equipment"),T(h),d("Equipment")};y==null||y.addEventListener("click",te);f==null||f.addEventListener("click",oe);h==null||h.addEventListener("click",ne);function T(e){document.querySelector(".active").classList.remove("active"),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}function re(){document.querySelectorAll("a.page-num").forEach(function(t){t==null||t.addEventListener("click",function(o){C==null||C.scrollIntoView({block:"start",behavior:"smooth"}),d(o.target.dataset.filter,o.target.dataset.page)})})}const j=document.querySelector(".search-box"),v=document.querySelector(".search-input"),se=document.querySelector("#search-button"),ae=document.querySelector(".section-title_additional"),ce=document.querySelector("#title-category"),z=document.querySelector("#category-list-container"),x=document.querySelector("#exercises-list-container"),P=document.querySelector(".exercises_pagination"),ie=document.querySelector("#exercises"),M=10;let s={};j.addEventListener("keydown",e=>{if(e.key==="Enter"){if(D()==!1)return;S(s.filter,s.category,1,v.value)}});se.addEventListener("click",()=>{D()!=!1&&S(s.filter,s.category,1,v.value)});function D(){return v.value.trim()===""?(m.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}z.addEventListener("click",le);async function le(e){const t=e.target.closest(".exercises_category-item");t&&(!t.dataset.filter||!t.dataset.category||(z.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),j.classList.remove("visually-hidden-ext"),ae.classList.remove("visually-hidden"),v.value="",S(t.dataset.filter,t.dataset.category),g(),p(`${t.dataset.filter.toLowerCase().split(" ").join("")}`,`${t.dataset.category}`)))}async function S(e,t,o=1,r=""){let n=r.trim().toLowerCase();switch(e){case"Muscles":s={muscles:t,category:t,filter:e,keyword:n,limit:M,page:o};break;case"Equipment":s={equipment:t,category:t,filter:e,keyword:n,limit:M,page:o};break;case"Body parts":s={bodypart:t,category:t,filter:e,keyword:n,limit:M,page:o};break}ce.innerHTML=t;const u=(J("favorites")||[]).map(a=>a._id);K(s).then(a=>{a.results.length?x.innerHTML=a.results.map(B=>{let A=!1;return u.includes(B._id)&&(A=!0),Q(B,A)}).join(""):x.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>',a.totalPages>1?(P.innerHTML=$(a,e),de()):P.innerHTML=""})}function de(){document.querySelectorAll("a.page-num").forEach(function(t){t.addEventListener("click",function(o){ie.scrollIntoView({block:"start",behavior:"smooth"}),S(o.target.dataset.filter,s.category,o.target.dataset.page,s.keyword)})})}const ue=document.querySelector("#sorted-select");new Z({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});const me=e=>{const t=e.map(createInfoCardMarkup).join("");favoritesList.innerHTML=t};ue.addEventListener("change",ye);function ye(e){const t=e.target.value,o=fe({sortType:t,array:arrayCardsForTest});me(o)}function fe({sortType:e,array:t}){let o;switch(e){case"default":o=t.toSorted((r,n)=>r.name.localeCompare(n.name));break;case"best":o=t.toSorted((r,n)=>n.rating-r.rating);break;case"calories-highest":o=t.toSorted((r,n)=>n.burnedCalories-r.burnedCalories);break;case"calories-lowest":o=t.toSorted((r,n)=>r.burnedCalories-n.burnedCalories);break;default:o=t.toSorted((r,n)=>r.name.localeCompare(n.name));break}return o}const he=document.querySelector(".share-button"),F=document.querySelector(".share-button-hint");he.addEventListener("click",ge);function ge(e){const t=X(),o=document.createElement("input");o.value=t,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),F.textContent="Link copy!",setTimeout(()=>{F.textContent="Share exercises"},1e3)}const O=document.querySelector(".footer-form");O.addEventListener("submit",pe);function pe(e){e.preventDefault();const t={email:e.target.elements.email.value};O.reset(),Y(t).then(o=>{switch(o.status){case 201:m.success({message:o.data.message});break;case 409:m.info({message:o.data.message});break;default:m.warning({message:"Sorry, something went wrong"});break}})}let W=document.querySelector(".hero-text");function U(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?W.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:W.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}U();window.addEventListener("resize",function(){U()});const c={openModalBtn:document.querySelector("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},b=()=>{c.modal.classList.toggle("is-hidden"),c.body.style.overflow="auto"},ve=e=>{e.code==="Escape"&&b()};var _;(_=c.openModalBtn)==null||_.addEventListener("click",e=>{b(),window.addEventListener("keydown",ve),c.body.style.overflow="hidden"});var R;(R=c.closeModalBtn)==null||R.addEventListener("click",b);c.modal.addEventListener("click",e=>{e.target===e.currentTarget&&b()});const i={openModalBtn:document.querySelectorAll("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},L=()=>{i.modal.classList.toggle("is-hidden"),i.body.style.overflow="auto"},Se=e=>{e.code==="Escape"&&L()};i.openModalBtn.forEach(e=>e.addEventListener("click",t=>{L(),window.addEventListener("keydown",Se),i.body.style.overflow="hidden"}));i.closeModalBtn.addEventListener("click",L);i.modal.addEventListener("click",e=>{e.target===e.currentTarget&&L()});
//# sourceMappingURL=commonHelpers2.js.map
