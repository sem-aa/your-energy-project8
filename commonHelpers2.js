import{g as z,s as f,a as v,b as oe,c as se,d as Q,r as M,e as U,f as re,h as G,i as ae,j as ne}from"./assets/modal-rating-9ee7bb28.js";import{S as ie,i as q}from"./assets/vendor-916d32b4.js";const A=document.getElementById("to-top-btn"),j=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",ce);function ce(){document.body.scrollTop>30||document.documentElement.scrollTop>30?j.style.display="flex":j.style.display="none"}A==null||A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const J=new ie({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});function K({sortType:e,array:o}){let t;switch(e){case"default":t=o.toSorted((s,a)=>s.name.localeCompare(a.name));break;case"best":t=o.toSorted((s,a)=>a.rating-s.rating);break;case"calories-highest":t=o.toSorted((s,a)=>a.burnedCalories-s.burnedCalories);break;case"calories-lowest":t=o.toSorted((s,a)=>s.burnedCalories-a.burnedCalories);break;default:t=o.toSorted((s,a)=>s.name.localeCompare(a.name));break}return t}const le=12,P=document.querySelector(".search-box"),F=document.querySelector(".section-title_additional"),d=document.querySelector("button[data-muscles]"),p=document.querySelector("button[data-body]"),S=document.querySelector("button[data-equipment]"),g=document.querySelector("#category-list-container"),H=document.querySelector("#exercises-list-container"),O=document.querySelector(".exercises_pagination"),I=document.querySelector("#exercises"),de=document.querySelector("#sorted-select"),ue=z();let k;Object.keys(ue).length||(k="Muscles",f("filter","Muscles"));k=v("filter");function E(e){switch(e){case"Muscles":l(d);break;case"Body parts":l(p);break;case"Equipment":l(S);break;default:l(d);break}}E(k);k&&w(k);function w(e,o=1){oe({filter:e,page:o,limit:le}).then(t=>{var s,a,n,i;(s=g==null?void 0:g.classList)==null||s.remove("visually-hidden"),(a=H==null?void 0:H.classList)==null||a.add("visually-hidden"),(n=P==null?void 0:P.classList)==null||n.add("visually-hidden-ext"),(i=F==null?void 0:F.classList)==null||i.add("visually-hidden"),J.setSelected("default"),de.classList.add("visually-hidden-ext"),t.results.length?(g.innerHTML=se(t),t.totalPages>1?(O.innerHTML=Q(t,e),ge()):O.innerHTML=""):g.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const me=()=>{M(),f("filter","Muscles"),l(d),w("Muscles")},ye=()=>{M(),f("filter","Body parts"),l(p),w("Body parts")},fe=()=>{M(),f("filter","Equipment"),l(S),w("Equipment")};d==null||d.addEventListener("click",me);p==null||p.addEventListener("click",ye);S==null||S.addEventListener("click",fe);function l(e){document.querySelector(".active").classList.remove("active"),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}function ge(){document.querySelectorAll("a.page-num").forEach(function(o){o==null||o.addEventListener("click",function(t){I==null||I.scrollIntoView({block:"start",behavior:"smooth"}),w(t.target.dataset.filter,t.target.dataset.page)})})}const L=document.querySelector(".search-box"),u=document.querySelector(".search-input"),he=document.querySelector(".section-title_additional"),ve=document.querySelector("#title-category"),X=document.querySelector("#category-list-container"),x=document.querySelector("#exercises-list-container"),$=document.querySelector(".exercises_pagination"),pe=document.querySelector("#exercises"),b=document.querySelector("#sorted-select"),R=10;let r={};const h=z();function Se(){if(h.equipment&&(L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),E("Equipment"),r.filter="Equipment",r.category=v("equipment")),h.muscles&&(L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),E("Muscles"),r.filter="Muscles",r.category=v("muscles")),h.bodyparts&&(L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),E("Body parts"),r.filter="Body parts",r.category=v("bodyparts")),h.keyword){u.value=r.keyword=v("keyword");const{keyword:e,modalOpen:o,...t}=h;r.category=Object.values(t)[0]}C({filter:r.filter,category:r.category,pageNum:1,keyword:u.value})}Se();L.addEventListener("submit",Le);function Le(e){e.preventDefault(),be()&&(f("keyword",u.value),C({filter:r.filter,category:r.category,pageNum:1,keywordsQuery:u.value}))}function be(){return u.value.trim()===""?(q.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}X.addEventListener("click",ke);async function ke(e){const o=e.target.closest(".exercises_category-item");o&&(!o.dataset.filter||!o.dataset.category||(X.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),he.classList.remove("visually-hidden"),u.value="",C({filter:o.dataset.filter,category:o.dataset.category}),M(),f(`${o.dataset.filter.toLowerCase().split(" ").join("")}`,`${o.dataset.category}`)))}async function C({sortType:e="default",filter:o,category:t,pageNum:s=1,keywordsQuery:a=""}){let n=a.trim().toLowerCase();switch(o){case"Muscles":r={muscles:t,category:t,filter:o,keyword:n,limit:R,page:s};break;case"Equipment":r={equipment:t,category:t,filter:o,keyword:n,limit:R,page:s};break;case"Body parts":r={bodypart:t,category:t,filter:o,keyword:n,limit:R,page:s};break}let i;b.addEventListener("change",c=>{i&&we(c,i)}),ve.innerHTML=t;const ee=(U("favorites")||[]).map(c=>c._id);re(r).then(c=>{if(c.results.length){i=c.results;const te=K({sortType:J.getSelected()[0],array:c.results});x.innerHTML=te.map(_=>{let W=!1;return ee.includes(_._id)&&(W=!0),G(_,W)}).join("")}else x.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>';c.totalPages>1?($.innerHTML=Q(c,o),qe()):$.innerHTML=""})}function we(e,o){const t=e.target.value,s=K({sortType:t,array:o}),a=(U("favorites")||[]).map(n=>n._id);x.innerHTML=s.map(n=>{let i=!1;return a.includes(n._id)&&(i=!0),G(n,i)}).join("")}function qe(){document.querySelectorAll("a.page-num").forEach(function(o){o.addEventListener("click",function(t){pe.scrollIntoView({block:"start",behavior:"smooth"}),C({filter:t.target.dataset.filter,category:r.category,pageNum:t.target.dataset.page,keywordsQuery:r.keyword})})})}const Ee=document.querySelector(".share-button"),N=document.querySelector(".share-button-hint-modal");Ee.addEventListener("click",xe);function xe(e){const o=ae(),t=document.createElement("input");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),N.textContent="Link copy!",setTimeout(()=>{N.textContent="Share exercises"},1e3)}const Y=document.querySelector(".footer-form");Y.addEventListener("submit",Me);function Me(e){e.preventDefault();const o={email:e.target.elements.email.value};Y.reset(),ne(o).then(t=>{switch(t.status){case 201:q.success({message:t.data.message});break;case 409:q.info({message:t.data.message});break;default:q.warning({message:"Sorry, something went wrong"});break}})}let D=document.querySelector(".hero-text");function Z(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?D.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:D.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}Z();window.addEventListener("resize",function(){Z()});const m={openModalBtns:document.querySelectorAll("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},T=()=>{m.modal.classList.toggle("is-hidden"),m.body.style.overflow="auto"},Ce=e=>{e.code==="Escape"&&T()};m.openModalBtns.forEach(e=>e==null?void 0:e.addEventListener("click",o=>{T(),window.addEventListener("keydown",Ce),m.body.style.overflow="hidden"}));var V;(V=m.closeModalBtn)==null||V.addEventListener("click",T);m.modal.addEventListener("click",e=>{e.target===e.currentTarget&&T()});const y={openModalBtn:document.querySelectorAll("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},B=()=>{y.modal.classList.toggle("is-hidden"),y.body.style.overflow="auto"},Te=e=>{e.code==="Escape"&&B()};y.openModalBtn.forEach(e=>e.addEventListener("click",o=>{B(),window.addEventListener("keydown",Te),y.body.style.overflow="hidden"}));y.closeModalBtn.addEventListener("click",B);y.modal.addEventListener("click",e=>{e.target===e.currentTarget&&B()});
//# sourceMappingURL=commonHelpers2.js.map
