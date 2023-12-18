import{a as Y,s as g,b as v,c as le,d as de,e as Z,F as s,I as x,r as A,g as ee,f as ue,h as te,i as me,j as ye}from"./assets/modal-rating-f2e9838d.js";import{S as fe,i as C,a as ge}from"./assets/vendor-eee4493b.js";const P=document.getElementById("to-top-btn"),O=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",pe);function pe(){document.body.scrollTop>30||document.documentElement.scrollTop>30?O.style.display="flex":O.style.display="none"}P==null||P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const oe=new fe({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});function re({sortType:o,array:t}){let e;switch(o){case"default":e=t.toSorted((a,n)=>a.name.localeCompare(n.name));break;case"best":e=t.toSorted((a,n)=>n.rating-a.rating);break;case"calories-highest":e=t.toSorted((a,n)=>n.burnedCalories-a.burnedCalories);break;case"calories-lowest":e=t.toSorted((a,n)=>a.burnedCalories-n.burnedCalories);break;default:e=t.toSorted((a,n)=>a.name.localeCompare(n.name));break}return e}const H=document.querySelector(".search-box"),R=document.querySelector(".section-title_additional"),m=document.querySelector("button[data-muscles]"),b=document.querySelector("button[data-body]"),S=document.querySelector("button[data-equipment]"),p=document.querySelector("#category-list-container"),_=document.querySelector("#exercises-list-container"),D=document.querySelector(".exercises_pagination"),W=document.querySelector("#exercises"),he=document.querySelector("#sorted-select"),j="visually-hidden",V="visually-hidden-ext",ve=Y();let k;Object.keys(ve).length||(k=s.muscles,g("filter",s.muscles));k=v("filter");function T(o){switch(o){case s.muscles:u(m);break;case s.body:u(b);break;case s.equipment:u(S);break;default:u(m);break}}T(k);k&&E(k);function E(o,t=1){le({filter:o,page:t,limit:x.equipmcategoriesent}).then(e=>{var a,n,c,i;(a=p==null?void 0:p.classList)==null||a.remove(j),(n=_==null?void 0:_.classList)==null||n.add(j),(c=H==null?void 0:H.classList)==null||c.add(V),(i=R==null?void 0:R.classList)==null||i.add(j),oe.setSelected("default"),he.classList.add(V),e.results.length?(p.innerHTML=de(e),e.totalPages>1?(D.innerHTML=Z(e,o),Le()):D.innerHTML=""):p.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const be=()=>{A(),g("filter",s.muscles),u(m),E(s.muscles)},Se=()=>{A(),g("filter",s.body),u(b),E(s.body)},we=()=>{A(),g("filter",s.equipment),u(S),E(s.equipment)};m==null||m.addEventListener("click",be);b==null||b.addEventListener("click",Se);S==null||S.addEventListener("click",we);function u(o){const t=document.querySelectorAll(".active");t.length&&t.forEach(e=>{e.classList.remove("active")}),o.classList.add("active")}function Le(){document.querySelectorAll("button.page-num").forEach(function(t){t==null||t.addEventListener("click",function(e){W==null||W.scrollIntoView({block:"start",behavior:"smooth"}),E(e.target.dataset.filter,e.target.dataset.page)})})}const w=document.querySelector(".search-box"),q=document.querySelector(".search-input"),ke=document.querySelector(".section-title_additional"),qe=document.querySelector("#title-category"),se=document.querySelector("#category-list-container"),M=document.querySelector("#exercises-list-container"),z=document.querySelector(".exercises_pagination"),Ee=document.querySelector("#exercises"),L=document.querySelector("#sorted-select"),$="visually-hidden",d="visually-hidden-ext";let r={};const h=Y();function xe(){if(h.equipment&&(w.classList.remove(d),L.classList.remove(d),T(s.equipment),r.filter=s.equipment,r.category=v("equipment")),h.muscles&&(w.classList.remove(d),L.classList.remove(d),T(s.muscles),r.filter=s.muscles,r.category=v("muscles")),h.bodyparts&&(w.classList.remove(d),L.classList.remove(d),T(s.body),r.filter=s.body,r.category=v("bodyparts")),h.keyword){q.value=r.keyword=v("keyword");const{keyword:o,modalOpen:t,...e}=h;r.category=Object.values(e)[0],r.keywordsQuery=o}F({filter:r.filter,category:r.category,pageNum:1,keywordsQuery:r.keywordsQuery})}xe();w.addEventListener("submit",Ce);function Ce(o){o.preventDefault(),Te()&&(g("keyword",q.value),F({filter:r.filter,category:r.category,pageNum:1,keywordsQuery:q.value}))}function Te(){return q.value.trim()===""?(C.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}se.addEventListener("click",Me);async function Me(o){const t=o.target.closest(".exercises_category-item");t&&(!t.dataset.filter||!t.dataset.category||(se.classList.add($),M.classList.remove($),w.classList.remove(d),L.classList.remove(d),ke.classList.remove($),q.value="",F({filter:t.dataset.filter,category:t.dataset.category}),A(),g(`${t.dataset.filter.toLowerCase().split(" ").join("")}`,`${t.dataset.category}`)))}async function F({sortType:o="default",filter:t,category:e,pageNum:a=1,keywordsQuery:n=""}){if(!t||!e)return;let c=n.trim().toLowerCase();switch(t){case s.muscles:r={muscles:e,category:e,filter:t,keyword:c,limit:x.exercises,page:a};break;case s.equipment:r={equipment:e,category:e,filter:t,keyword:c,limit:x.exercises,page:a};break;case s.body:r={bodypart:e,category:e,filter:t,keyword:c,limit:x.exercises,page:a};break}let i;L.addEventListener("change",l=>{i&&Ae(l,i)}),qe.innerHTML=e;const ce=(ee("favorites")||[]).map(l=>l._id);ue(r).then(l=>{if(l.results.length){i=l.results;const ie=re({sortType:oe.getSelected()[0],array:l.results});M.innerHTML=ie.map(Q=>{let N=!1;return ce.includes(Q._id)&&(N=!0),te(Q,N)}).join("")}else M.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>';l.totalPages>1?(z.innerHTML=Z(l,t),Fe()):z.innerHTML=""})}function Ae(o,t){const e=o.target.value,a=re({sortType:e,array:t}),n=(ee("favorites")||[]).map(c=>c._id);M.innerHTML=a.map(c=>{let i=!1;return n.includes(c._id)&&(i=!0),te(c,i)}).join("")}function Fe(){document.querySelectorAll("button.page-num").forEach(function(t){t.addEventListener("click",function(e){Ee.scrollIntoView({block:"start",behavior:"smooth"}),F({filter:e.target.dataset.filter,category:r.category,pageNum:e.target.dataset.page,keywordsQuery:r.keyword})})})}const Ie=document.querySelector(".share-button"),U=document.querySelector(".share-button-hint-modal");Ie.addEventListener("click",Be);function Be(o){const t=me(),e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),U.textContent="Link copy!",setTimeout(()=>{U.textContent="Share exercises"},1e3)}const ae=document.querySelector(".footer-form");ae.addEventListener("submit",Pe);function Pe(o){o.preventDefault();const t={email:o.target.elements.email.value};ae.reset(),ye(t).then(e=>{switch(e.status){case 201:C.success({message:e.data.message});break;case 409:C.info({message:e.data.message});break;default:C.warning({message:"Sorry, something went wrong"});break}})}let G=document.querySelector(".hero-text");function ne(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?G.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:G.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}ne();window.addEventListener("resize",function(){ne()});const y={openModalBtn:document.querySelector("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},I=()=>{y.modal.classList.toggle("is-hidden"),y.body.style.overflow="auto"},He=o=>{o.code==="Escape"&&I()};var X;(X=y.openModalBtn)==null||X.addEventListener("click",o=>{I(),window.addEventListener("keydown",He),y.body.style.overflow="hidden"});var J;(J=y.closeModalBtn)==null||J.addEventListener("click",I);y.modal.addEventListener("click",o=>{o.target===o.currentTarget&&I()});const f={openModalBtn:document.querySelector("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},B=()=>{f.modal.classList.toggle("is-hidden"),f.body.style.overflow="auto"},Re=o=>{o.code==="Escape"&&B()};var K;(K=f.openModalBtn)==null||K.addEventListener("click",o=>{B(),window.addEventListener("keydown",Re),f.body.style.overflow="hidden"});f.closeModalBtn.addEventListener("click",B);f.modal.addEventListener("click",o=>{o.target===o.currentTarget&&B()});new ge(".swiper",{centeredSlides:!0,simulateTouch:!1,allowTouchMove:!1,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},speed:1100,effect:"fade",fadeEffect:{crossFade:!0}});
//# sourceMappingURL=commonHelpers2.js.map
