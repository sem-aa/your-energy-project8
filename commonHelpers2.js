import{g as V,s as y,a as h,b as oe,c as se,d as z,r as M,e as U,f as re,h as G,i as ae,j as ne}from"./assets/modal-rating-09d285c8.js";import{S as ie,i as q}from"./assets/vendor-916d32b4.js";const A=document.getElementById("to-top-btn"),j=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",ce);function ce(){document.body.scrollTop>30||document.documentElement.scrollTop>30?j.style.display="flex":j.style.display="none"}A==null||A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const J=new ie({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});function K({sortType:e,array:o}){let t;switch(e){case"default":t=o.toSorted((r,a)=>r.name.localeCompare(a.name));break;case"best":t=o.toSorted((r,a)=>a.rating-r.rating);break;case"calories-highest":t=o.toSorted((r,a)=>a.burnedCalories-r.burnedCalories);break;case"calories-lowest":t=o.toSorted((r,a)=>r.burnedCalories-a.burnedCalories);break;default:t=o.toSorted((r,a)=>r.name.localeCompare(a.name));break}return t}const le=12,P=document.querySelector(".search-box"),F=document.querySelector(".section-title_additional"),d=document.querySelector("button[data-muscles]"),v=document.querySelector("button[data-body]"),p=document.querySelector("button[data-equipment]"),f=document.querySelector("#category-list-container"),H=document.querySelector("#exercises-list-container"),O=document.querySelector(".exercises_pagination"),I=document.querySelector("#exercises"),de=document.querySelector("#sorted-select"),ue=V();let b;Object.keys(ue).length||(b="Muscles",y("filter","Muscles"));b=h("filter");function E(e){switch(e){case"Muscles":l(d);break;case"Body parts":l(v);break;case"Equipment":l(p);break;default:l(d);break}}E(b);b&&w(b);function w(e,o=1){oe({filter:e,page:o,limit:le}).then(t=>{var r,a,n,i;(r=f==null?void 0:f.classList)==null||r.remove("visually-hidden"),(a=H==null?void 0:H.classList)==null||a.add("visually-hidden"),(n=P==null?void 0:P.classList)==null||n.add("visually-hidden-ext"),(i=F==null?void 0:F.classList)==null||i.add("visually-hidden"),J.setSelected("default"),de.classList.add("visually-hidden-ext"),t.results.length?(f.innerHTML=se(t),t.totalPages>1?(O.innerHTML=z(t,e),ge()):O.innerHTML=""):f.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const me=()=>{M(),y("filter","Muscles"),l(d),w("Muscles")},ye=()=>{M(),y("filter","Body parts"),l(v),w("Body parts")},fe=()=>{M(),y("filter","Equipment"),l(p),w("Equipment")};d==null||d.addEventListener("click",me);v==null||v.addEventListener("click",ye);p==null||p.addEventListener("click",fe);function l(e){document.querySelector(".active").classList.remove("active"),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}function ge(){document.querySelectorAll("a.page-num").forEach(function(o){o==null||o.addEventListener("click",function(t){I==null||I.scrollIntoView({block:"start",behavior:"smooth"}),w(t.target.dataset.filter,t.target.dataset.page)})})}const S=document.querySelector(".search-box"),k=document.querySelector(".search-input"),he=document.querySelector(".section-title_additional"),ve=document.querySelector("#title-category"),X=document.querySelector("#category-list-container"),x=document.querySelector("#exercises-list-container"),Q=document.querySelector(".exercises_pagination"),pe=document.querySelector("#exercises"),L=document.querySelector("#sorted-select"),R=10;let s={};const g=V();function Se(){if(g.equipment&&(S.classList.remove("visually-hidden-ext"),L.classList.remove("visually-hidden-ext"),E("Equipment"),s.filter="Equipment",s.category=h("equipment")),g.muscles&&(S.classList.remove("visually-hidden-ext"),L.classList.remove("visually-hidden-ext"),E("Muscles"),s.filter="Muscles",s.category=h("muscles")),g.bodyparts&&(S.classList.remove("visually-hidden-ext"),L.classList.remove("visually-hidden-ext"),E("Body parts"),s.filter="Body parts",s.category=h("bodyparts")),g.keyword){k.value=s.keyword=h("keyword");const{keyword:e,modalOpen:o,...t}=g;s.category=Object.values(t)[0],s.keywordsQuery=e}C({filter:s.filter,category:s.category,pageNum:1,keywordsQuery:s.keywordsQuery})}Se();S.addEventListener("submit",Le);function Le(e){e.preventDefault(),be()&&(y("keyword",k.value),C({filter:s.filter,category:s.category,pageNum:1,keywordsQuery:k.value}))}function be(){return k.value.trim()===""?(q.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}X.addEventListener("click",ke);async function ke(e){const o=e.target.closest(".exercises_category-item");o&&(!o.dataset.filter||!o.dataset.category||(X.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),S.classList.remove("visually-hidden-ext"),L.classList.remove("visually-hidden-ext"),he.classList.remove("visually-hidden"),k.value="",C({filter:o.dataset.filter,category:o.dataset.category}),M(),y(`${o.dataset.filter.toLowerCase().split(" ").join("")}`,`${o.dataset.category}`)))}async function C({sortType:e="default",filter:o,category:t,pageNum:r=1,keywordsQuery:a=""}){if(!o||!t)return;let n=a.trim().toLowerCase();switch(o){case"Muscles":s={muscles:t,category:t,filter:o,keyword:n,limit:R,page:r};break;case"Equipment":s={equipment:t,category:t,filter:o,keyword:n,limit:R,page:r};break;case"Body parts":s={bodypart:t,category:t,filter:o,keyword:n,limit:R,page:r};break}let i;L.addEventListener("change",c=>{i&&we(c,i)}),ve.innerHTML=t;const ee=(U("favorites")||[]).map(c=>c._id);re(s).then(c=>{if(c.results.length){i=c.results;const te=K({sortType:J.getSelected()[0],array:c.results});x.innerHTML=te.map(_=>{let W=!1;return ee.includes(_._id)&&(W=!0),G(_,W)}).join("")}else x.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>';c.totalPages>1?(Q.innerHTML=z(c,o),qe()):Q.innerHTML=""})}function we(e,o){const t=e.target.value,r=K({sortType:t,array:o}),a=(U("favorites")||[]).map(n=>n._id);x.innerHTML=r.map(n=>{let i=!1;return a.includes(n._id)&&(i=!0),G(n,i)}).join("")}function qe(){document.querySelectorAll("a.page-num").forEach(function(o){o.addEventListener("click",function(t){pe.scrollIntoView({block:"start",behavior:"smooth"}),C({filter:t.target.dataset.filter,category:s.category,pageNum:t.target.dataset.page,keywordsQuery:s.keyword})})})}const Ee=document.querySelector(".share-button"),$=document.querySelector(".share-button-hint-modal");Ee.addEventListener("click",xe);function xe(e){const o=ae(),t=document.createElement("input");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),$.textContent="Link copy!",setTimeout(()=>{$.textContent="Share exercises"},1e3)}const Y=document.querySelector(".footer-form");Y.addEventListener("submit",Me);function Me(e){e.preventDefault();const o={email:e.target.elements.email.value};Y.reset(),ne(o).then(t=>{switch(t.status){case 201:q.success({message:t.data.message});break;case 409:q.info({message:t.data.message});break;default:q.warning({message:"Sorry, something went wrong"});break}})}let N=document.querySelector(".hero-text");function Z(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?N.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:N.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}Z();window.addEventListener("resize",function(){Z()});const u={openModalBtns:document.querySelectorAll("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},T=()=>{u.modal.classList.toggle("is-hidden"),u.body.style.overflow="auto"},Ce=e=>{e.code==="Escape"&&T()};u.openModalBtns.forEach(e=>e==null?void 0:e.addEventListener("click",o=>{T(),window.addEventListener("keydown",Ce),u.body.style.overflow="hidden"}));var D;(D=u.closeModalBtn)==null||D.addEventListener("click",T);u.modal.addEventListener("click",e=>{e.target===e.currentTarget&&T()});const m={openModalBtn:document.querySelectorAll("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},B=()=>{m.modal.classList.toggle("is-hidden"),m.body.style.overflow="auto"},Te=e=>{e.code==="Escape"&&B()};m.openModalBtn.forEach(e=>e.addEventListener("click",o=>{B(),window.addEventListener("keydown",Te),m.body.style.overflow="hidden"}));m.closeModalBtn.addEventListener("click",B);m.modal.addEventListener("click",e=>{e.target===e.currentTarget&&B()});
//# sourceMappingURL=commonHelpers2.js.map
