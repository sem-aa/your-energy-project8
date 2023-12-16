import{g as z,s as h,a as u,b as oe,c as se,d as Q,r as M,e as U,f as re,h as G,i as ae,j as ne}from"./assets/modal-rating-6cc11f5b.js";import{S as ie,i as q}from"./assets/vendor-916d32b4.js";const A=document.getElementById("to-top-btn"),j=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",ce);function ce(){document.body.scrollTop>30||document.documentElement.scrollTop>30?j.style.display="flex":j.style.display="none"}A==null||A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const J=new ie({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});function K({sortType:e,array:o}){let t;switch(e){case"default":t=o.toSorted((s,a)=>s.name.localeCompare(a.name));break;case"best":t=o.toSorted((s,a)=>a.rating-s.rating);break;case"calories-highest":t=o.toSorted((s,a)=>a.burnedCalories-s.burnedCalories);break;case"calories-lowest":t=o.toSorted((s,a)=>s.burnedCalories-a.burnedCalories);break;default:t=o.toSorted((s,a)=>s.name.localeCompare(a.name));break}return t}const le=12,P=document.querySelector(".search-box"),F=document.querySelector(".section-title_additional"),m=document.querySelector("button[data-muscles]"),p=document.querySelector("button[data-body]"),S=document.querySelector("button[data-equipment]"),v=document.querySelector("#category-list-container"),H=document.querySelector("#exercises-list-container"),O=document.querySelector(".exercises_pagination"),I=document.querySelector("#exercises"),de=document.querySelector("#sorted-select"),ue=z();let k;Object.keys(ue).length||(k="Muscles",h("filter","Muscles"));k=u("filter");function E(e){switch(e){case"Muscles":l(m);break;case"Body parts":l(p);break;case"Equipment":l(S);break;default:l(m);break}}E(k);k&&w(k);function w(e,o=1){oe({filter:e,page:o,limit:le}).then(t=>{var s,a,n,c;(s=v==null?void 0:v.classList)==null||s.remove("visually-hidden"),(a=H==null?void 0:H.classList)==null||a.add("visually-hidden"),(n=P==null?void 0:P.classList)==null||n.add("visually-hidden-ext"),(c=F==null?void 0:F.classList)==null||c.add("visually-hidden"),J.setSelected("default"),de.classList.add("visually-hidden-ext"),t.results.length?(v.innerHTML=se(t),t.totalPages>1?(O.innerHTML=Q(t,e),ge()):O.innerHTML=""):v.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const me=()=>{M(),h("filter","Muscles"),l(m),w("Muscles")},ye=()=>{M(),h("filter","Body parts"),l(p),w("Body parts")},fe=()=>{M(),h("filter","Equipment"),l(S),w("Equipment")};m==null||m.addEventListener("click",me);p==null||p.addEventListener("click",ye);S==null||S.addEventListener("click",fe);function l(e){document.querySelector(".active").classList.remove("active"),e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}function ge(){document.querySelectorAll("a.page-num").forEach(function(o){o==null||o.addEventListener("click",function(t){I==null||I.scrollIntoView({block:"start",behavior:"smooth"}),w(t.target.dataset.filter,t.target.dataset.page)})})}const L=document.querySelector(".search-box"),y=document.querySelector(".search-input"),he=document.querySelector(".section-title_additional"),ve=document.querySelector("#title-category"),X=document.querySelector("#category-list-container"),x=document.querySelector("#exercises-list-container"),$=document.querySelector(".exercises_pagination"),pe=document.querySelector("#exercises"),b=document.querySelector("#sorted-select"),R=10;let r={};const d=z();function Se(){if(d.equipment&&(L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),E("Equipment"),r.filter="Equipment",r.category=u("equipment")),d.muscles&&(L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),E("Muscles"),r.filter="Muscles",r.category=u("muscles")),d.bodyparts&&(L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),E("Body parts"),r.filter="Body parts",console.log(u("bodyparts")),r.category=u("bodyparts")),d.keyword){y.value=r.keyword=u("keyword"),console.log(d);const{keyword:e,modalOpen:o,...t}=d;r.category=Object.values(t)[0]}C({filter:r.filter,category:r.category,pageNum:1,keyword:y.value})}Se();L.addEventListener("submit",Le);function Le(e){e.preventDefault(),be()&&(h("keyword",y.value),C({filter:r.filter,category:r.category,pageNum:1,keywordsQuery:y.value}))}function be(){return y.value.trim()===""?(q.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}X.addEventListener("click",ke);async function ke(e){const o=e.target.closest(".exercises_category-item");o&&(!o.dataset.filter||!o.dataset.category||(X.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),L.classList.remove("visually-hidden-ext"),b.classList.remove("visually-hidden-ext"),he.classList.remove("visually-hidden"),y.value="",C({filter:o.dataset.filter,category:o.dataset.category}),M(),h(`${o.dataset.filter.toLowerCase().split(" ").join("")}`,`${o.dataset.category}`)))}async function C({sortType:e="default",filter:o,category:t,pageNum:s=1,keywordsQuery:a=""}){let n=a.trim().toLowerCase();switch(o){case"Muscles":r={muscles:t,category:t,filter:o,keyword:n,limit:R,page:s};break;case"Equipment":r={equipment:t,category:t,filter:o,keyword:n,limit:R,page:s};break;case"Body parts":r={bodypart:t,category:t,filter:o,keyword:n,limit:R,page:s};break}let c;b.addEventListener("change",i=>we(i,c)),ve.innerHTML=t;const ee=(U("favorites")||[]).map(i=>i._id);re(r).then(i=>{if(i.results.length){c=i.results;const te=K({sortType:J.getSelected()[0],array:i.results});x.innerHTML=te.map(_=>{let W=!1;return ee.includes(_._id)&&(W=!0),G(_,W)}).join("")}else x.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>';i.totalPages>1?($.innerHTML=Q(i,o),qe()):$.innerHTML=""})}function we(e,o){const t=e.target.value,s=K({sortType:t,array:o}),a=(U("favorites")||[]).map(n=>n._id);x.innerHTML=s.map(n=>{let c=!1;return a.includes(n._id)&&(c=!0),G(n,c)}).join("")}function qe(){document.querySelectorAll("a.page-num").forEach(function(o){o.addEventListener("click",function(t){pe.scrollIntoView({block:"start",behavior:"smooth"}),C({filter:t.target.dataset.filter,category:r.category,pageNum:t.target.dataset.page,keywordsQuery:r.keyword})})})}const Ee=document.querySelector(".share-button"),N=document.querySelector(".share-button-hint-modal");Ee.addEventListener("click",xe);function xe(e){const o=ae(),t=document.createElement("input");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),N.textContent="Link copy!",setTimeout(()=>{N.textContent="Share exercises"},1e3)}const Y=document.querySelector(".footer-form");Y.addEventListener("submit",Me);function Me(e){e.preventDefault();const o={email:e.target.elements.email.value};Y.reset(),ne(o).then(t=>{switch(t.status){case 201:q.success({message:t.data.message});break;case 409:q.info({message:t.data.message});break;default:q.warning({message:"Sorry, something went wrong"});break}})}let D=document.querySelector(".hero-text");function Z(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?D.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:D.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}Z();window.addEventListener("resize",function(){Z()});const f={openModalBtns:document.querySelectorAll("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},T=()=>{f.modal.classList.toggle("is-hidden"),f.body.style.overflow="auto"},Ce=e=>{e.code==="Escape"&&T()};f.openModalBtns.forEach(e=>e==null?void 0:e.addEventListener("click",o=>{T(),window.addEventListener("keydown",Ce),f.body.style.overflow="hidden"}));var V;(V=f.closeModalBtn)==null||V.addEventListener("click",T);f.modal.addEventListener("click",e=>{e.target===e.currentTarget&&T()});const g={openModalBtn:document.querySelectorAll("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},B=()=>{g.modal.classList.toggle("is-hidden"),g.body.style.overflow="auto"},Te=e=>{e.code==="Escape"&&B()};g.openModalBtn.forEach(e=>e.addEventListener("click",o=>{B(),window.addEventListener("keydown",Te),g.body.style.overflow="hidden"}));g.closeModalBtn.addEventListener("click",B);g.modal.addEventListener("click",e=>{e.target===e.currentTarget&&B()});
//# sourceMappingURL=commonHelpers2.js.map
