import{a as ee,s as g,b as p,c as fe,d as ge,e as te,F as s,I as T,r as F,g as oe,f as he,h as re,i as ve,j as pe}from"./assets/modal-rating-99bbafa1.js";import{S as we,i as M,a as be}from"./assets/vendor-eee4493b.js";const _=document.getElementById("to-top-btn"),V=document.querySelector(".btn-up");window==null||window.addEventListener("scroll",Le);function Le(){document.body.scrollTop>30||document.documentElement.scrollTop>30?V.style.display="flex":V.style.display="none"}_==null||_.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const se=new we({select:"#sorted-select",settings:{showSearch:!1},data:[{text:"Default sort",value:"default",class:"sorted-option"},{text:"Best Match",value:"best",class:"sorted-option"},{text:"Calories: lowest first",value:"calories-lowest",class:"sorted-option"},{text:"Calories: highest first",value:"calories-highest",class:"sorted-option"}]});function ne({sortType:t,array:o}){let e;switch(t){case"default":e=o.toSorted((n,a)=>n.name.localeCompare(a.name));break;case"best":e=o.toSorted((n,a)=>a.rating-n.rating);break;case"calories-highest":e=o.toSorted((n,a)=>a.burnedCalories-n.burnedCalories);break;case"calories-lowest":e=o.toSorted((n,a)=>n.burnedCalories-a.burnedCalories);break;default:e=o.toSorted((n,a)=>n.name.localeCompare(a.name));break}return e}const W=document.querySelector(".search-box"),j=document.querySelector(".section-title_additional"),f=document.querySelector("button[data-muscles]"),w=document.querySelector("button[data-body]"),b=document.querySelector("button[data-equipment]"),h=document.querySelector("#category-list-container"),O=document.querySelector("#exercises-list-container"),z=document.querySelector(".exercises_pagination"),$=document.querySelector("#exercises"),ke=document.querySelector("#sorted-select"),Q="visually-hidden",U="visually-hidden-ext",Se=ee();let S;Object.keys(Se).length||(S=s.muscles,g("filter",s.muscles));S=p("filter");function A(t){switch(t){case s.muscles:y(f);break;case s.body:y(w);break;case s.equipment:y(b);break;default:y(f);break}}A(S);S&&C(S);function C(t,o=1){fe({filter:t,page:o,limit:T.equipmcategoriesent}).then(e=>{var n,a,i,c;(n=h==null?void 0:h.classList)==null||n.remove(Q),(a=O==null?void 0:O.classList)==null||a.add(Q),(i=W==null?void 0:W.classList)==null||i.add(U),(c=j==null?void 0:j.classList)==null||c.add(Q),se.setSelected("default"),ke.classList.add(U),e.results.length?(h.innerHTML=ge(e),e.totalPages>1?(z.innerHTML=te(e,t),Ce()):z.innerHTML=""):h.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>'})}const Ee=()=>{F(),g("filter",s.muscles),y(f),C(s.muscles)},qe=()=>{F(),g("filter",s.body),y(w),C(s.body)},xe=()=>{F(),g("filter",s.equipment),y(b),C(s.equipment)};f==null||f.addEventListener("click",Ee);w==null||w.addEventListener("click",qe);b==null||b.addEventListener("click",xe);function y(t){const o=document.querySelectorAll(".active");o.length&&o.forEach(e=>{e.classList.remove("active")}),t.classList.add("active")}function Ce(){document.querySelectorAll("button.page-num").forEach(function(o){o==null||o.addEventListener("click",function(e){$==null||$.scrollIntoView({block:"start",behavior:"smooth"}),C(e.target.dataset.filter,e.target.dataset.page)})})}const L=document.querySelector(".search-box"),E=document.querySelector(".search-input"),ae=document.querySelector(".section-title_additional"),Te=document.querySelector("#title-category"),ie=document.querySelector("#category-list-container"),P=document.querySelector("#exercises-list-container"),G=document.querySelector(".exercises_pagination"),Me=document.querySelector("#exercises"),k=document.querySelector("#sorted-select"),B="visually-hidden",m="visually-hidden-ext";let r={};const v=ee();function Ae(){if(v.equipment&&(L.classList.remove(m),k.classList.remove(m),A(s.equipment),r.filter=s.equipment,r.category=p("equipment")),v.muscles&&(L.classList.remove(m),k.classList.remove(m),A(s.muscles),r.filter=s.muscles,r.category=p("muscles")),v.bodyparts&&(L.classList.remove(m),k.classList.remove(m),A(s.body),r.filter=s.body,r.category=p("bodyparts")),v.keyword){E.value=r.keyword=p("keyword");const{keyword:t,modalOpen:o,...e}=v;r.category=Object.values(e)[0],r.keywordsQuery=t}I({filter:r.filter,category:r.category,pageNum:1,keywordsQuery:r.keywordsQuery})}Ae();L.addEventListener("submit",Be);function Be(t){t.preventDefault(),Pe()&&(g("keyword",E.value),I({filter:r.filter,category:r.category,pageNum:1,keywordsQuery:E.value}))}function Pe(){return E.value.trim()===""?(M.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"}),!1):!0}ie.addEventListener("click",Fe);async function Fe(t){const o=t.target.closest(".exercises_category-item");o&&(!o.dataset.filter||!o.dataset.category||(ie.classList.add(B),P.classList.remove(B),L.classList.remove(m),k.classList.remove(m),ae.classList.remove(B),E.value="",I({filter:o.dataset.filter,category:o.dataset.category}),F(),g(`${o.dataset.filter.toLowerCase().split(" ").join("")}`,`${o.dataset.category}`)))}async function I({sortType:t="default",filter:o,category:e,pageNum:n=1,keywordsQuery:a=""}){if(!o||!e)return;let i=a.trim().toLowerCase();switch(o){case s.muscles:r={muscles:e,category:e,filter:o,keyword:i,limit:T.exercises,page:n};break;case s.equipment:r={equipment:e,category:e,filter:o,keyword:i,limit:T.exercises,page:n};break;case s.body:r={bodypart:e,category:e,filter:o,keyword:i,limit:T.exercises,page:n};break}ae.classList.remove(B);let c;k.addEventListener("change",l=>{c&&Ie(l,c)}),Te.innerHTML=e;const me=(oe("favorites")||[]).map(l=>l._id);he(r).then(l=>{if(l.results.length){c=l.results;const ye=ne({sortType:se.getSelected()[0],array:l.results});P.innerHTML=ye.map(N=>{let D=!1;return me.includes(N._id)&&(D=!0),re(N,D)}).join("")}else P.innerHTML='<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>';l.totalPages>1?(G.innerHTML=te(l,o),He()):G.innerHTML=""})}function Ie(t,o){const e=t.target.value,n=ne({sortType:e,array:o}),a=(oe("favorites")||[]).map(i=>i._id);P.innerHTML=n.map(i=>{let c=!1;return a.includes(i._id)&&(c=!0),re(i,c)}).join("")}function He(){document.querySelectorAll("button.page-num").forEach(function(o){o.addEventListener("click",function(e){Me.scrollIntoView({block:"start",behavior:"smooth"}),I({filter:e.target.dataset.filter,category:r.category,pageNum:e.target.dataset.page,keywordsQuery:r.keyword})})})}const Re=document.querySelector(".share-button"),X=document.querySelector(".share-button-hint");Re.addEventListener("click",_e);function _e(t){const o=ve(),e=document.createElement("input");e.value=o,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),X.textContent="Link copy!",setTimeout(()=>{X.textContent="Share exercises"},1e3)}const ce=document.querySelector(".footer-form");ce.addEventListener("submit",We);function We(t){t.preventDefault();const o={email:t.target.elements.email.value};ce.reset(),pe(o).then(e=>{switch(e.status){case 201:M.success({message:e.data.message});break;case 409:M.info({message:e.data.message});break;default:M.warning({message:"Sorry, something went wrong"});break}})}let J=document.querySelector(".hero-text");function le(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768?J.innerText=`Transform your physique and embrace a healthier lifestyle with 
 our comprehensive fitness and nutrition support.`:J.innerText=`Transform your physique and embrace a healthier 
 lifestyle with our comprehensive fitness and nutrition 
 support.`}le();window.addEventListener("resize",function(){le()});const d={openModalBtn:document.querySelector("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},H=()=>{d.modal.classList.toggle("is-hidden"),d.modal.classList.contains("is-hidden")?(window.removeEventListener("keydown",q),d.body.style.overflow="auto"):(window.addEventListener("keydown",q),d.body.style.overflow="hidden")},q=t=>{t.code==="Escape"&&(H(),window.removeEventListener("keydown",q))},je=t=>{t.target===t.currentTarget&&(H(),window.addEventListener("keydown",q),d.modal.addEventListener("click",de),d.body.style.overflow="hidden")},de=t=>{t.target===t.currentTarget&&(H(),window.removeEventListener("keydown",q))};var K;(K=d.openModalBtn)==null||K.addEventListener("click",je);var Y;(Y=d.closeModalBtn)==null||Y.addEventListener("click",H);d.modal.addEventListener("click",de);const u={openModalBtn:document.querySelector("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},R=()=>{u.modal.classList.toggle("is-hidden"),u.modal.classList.contains("is-hidden")?(window.removeEventListener("keydown",x),u.body.style.overflow="auto"):(window.addEventListener("keydown",x),u.body.style.overflow="hidden")},x=t=>{t.code==="Escape"&&(R(),window.removeEventListener("keydown",x))},Oe=t=>{t.target===t.currentTarget&&(R(),window.addEventListener("keydown",x),u.modal.addEventListener("click",ue),u.body.style.overflow="hidden")},ue=t=>{t.target===t.currentTarget&&(R(),window.removeEventListener("keydown",x))};var Z;(Z=u.openModalBtn)==null||Z.addEventListener("click",Oe);u.closeModalBtn.addEventListener("click",R);u.modal.addEventListener("click",ue);new be(".swiper",{centeredSlides:!0,simulateTouch:!1,allowTouchMove:!1,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},speed:1100,effect:"fade",fadeEffect:{crossFade:!0}});
//# sourceMappingURL=commonHelpers2.js.map
