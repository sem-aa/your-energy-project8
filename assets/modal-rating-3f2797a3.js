import{b as m,i as W}from"./vendor-eee4493b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const k=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.error("Error save localStorage:",s)}},d=e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error get localStorage:",t),null}},O=window.location.href.split("/").includes("favorites.html"),z=e=>e?"favorite-info-card width-for-fav-card":"favorite-info-card",D=(e,t)=>e?'<button type="button" class="remove-btn" data-remove aria-label="Remove"><svg class="changeble-icon" width="16" height="16"><use href="./oleksii-symbol-defs.svg#icon-trash" class="changable-icon-use"></use></svg></button>':`<div class="icon-rating-container"><p class="rating-info-card">${t}</p><svg class="changeble-icon" width="18" height="18"><use href="./oleksii-symbol-defs.svg#icon-star"></use></svg></div>`,P=(e,t=!1)=>{const{name:s,burnedCalories:r,bodyPart:a,target:o,_id:i,time:c,gifUrl:f,rating:_}=e;return`<li class='${z(O)}' data-id=${i}>
  
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${D(t,_)}
        </div>
        <div>
          <button type="button" class="start-btn" aria-label="Start">
            <span aria-label="Start">Start</span>
            <svg width="16" height="16">
              <use href="./oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-title-container">
         <svg width="24" height="24">
          <use href="./oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="card-title">${ve(`${s}`)}</h3>
      </div>
<div class="gif-container"><img src='${f}' alt="${s} gif"/>
  </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned kcal: <em class="hidden-overflow-text">${L(`${r}/${c}`)}<strong>&nbspmin</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${L(`${a}`)}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em class="hidden-overflow-text">${L(`${o}`)}</em></p>
        </li>
      </ul>
    </li>`},We=e=>e.results.map(({imgURL:t,name:s,filter:r})=>(t||(t="/images/no-image.png"),`            
        <li class="exercises_category-item" data-category="${s}" data-filter="${r}"
        style="
          background-image: linear-gradient(
              0deg,
              rgba(17, 17, 17, 0.5) 0%,
              rgba(17, 17, 17, 0.5) 100%
            ),
            url(${t});
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: cover;
        "
        >
            <div class="exercises_category-descr">
                <h3 class="exercises_category-title">${s}</h3>
                <p class="exercises_category-text">${r}</p>   
            </div>
      </li>`)).join(""),Pe=(e,t)=>{let s=[];for(let r=1;r<=e.totalPages;r++){let a=r.toString()===e.page.toString()?"current":"";s.push(` <li class="exercises_pagination-item ${a}">
        <button type="button" class="page-num" data-page="${r}" data-filter="${t}">${r}</button>
      </li>`)}return s.join("")},v={favorites:"favorites",phrase:"phrase"},Ue={muscles:"Muscles",body:"Body parts",equipment:"Equipment"},Be={categories:12,exercises:10},I=e=>{const t=d(v.favorites);if(!t){alert("Oops! Refresh page");return}const s=t.filter(({_id:r})=>r!==e);k(v.favorites,s)},Q=({name:e,burnedCalories:t,bodyPart:s,target:r,_id:a,time:o,gifUrl:i})=>{const f=[...d(v.favorites)||[],{name:e,burnedCalories:t,bodyPart:s,target:r,_id:a,time:o,gifUrl:i}];k("favorites",f)};m.defaults.baseURL="https://your-energy.b.goit.study/api/";const J=async()=>(await m.get("quote")).data,Me=async({filter:e="",page:t=1,limit:s=12}={})=>{try{return(await m.get(`filters?filter=${e}&page=${t}&limit=${s}`)).data}catch(r){console.error("Error in getFilters:",r)}},Xe=async({bodypart:e="",muscles:t="",equipment:s="",keyword:r="",page:a=1,limit:o=10}={})=>{try{return(await m.get(`exercises?bodypart=${e}&muscles=${t}&equipment=${s}&keyword=${r}&page=${a}&limit=${o}`)).data}catch(i){console.error("Error in getExercises:",i)}},T=async e=>{try{return(await m.get(`exercises/${e}`)).data}catch(t){console.error("Error in getExerciseId:",t)}},G=async(e,t)=>{try{return(await m.patch(`exercises/${e}/rating`,t)).data}catch(s){console.error("Error in updateRaring:",s)}},Ie=async e=>{try{return await m.post("subscription",e)}catch(t){return console.error("Error in subscribe:",t),t.response}};function Z(e){document.querySelectorAll("#rating .modal-exercises__rating-star").forEach(s=>{const r=parseInt(s.dataset.value,10);let a=0;r<=e?a=100:r-1<e&&(console.log(e,r),a=(e-r+1)*100),console.log(a),console.log(s),s.style.setProperty("--percent-filled",`${a}%`)})}function C(){return window.location.href}function ee(){const e=window.location.search,t=new URLSearchParams(e),s={};return t.forEach(function(r,a){s[a]=r}),s}function te(e){const t=window.location.search;return new URLSearchParams(t).get(e)}function se(e,t){const s=new URL(location.href);s.searchParams.set(e,t),history.pushState({},"",s)}function h(e){const t=new URL(location),s=new URLSearchParams(t.search);s.delete(e),t.search=s.toString(),history.pushState(null,"",t)}function Ce(){Object.keys(ee()).forEach(h)}const y="/your-energy-project8/assets/icons-71caf5e8.svg",re="data:image/webp;base64,UklGRsIMAABXRUJQVlA4ILYMAABQ2ACdASruAu4CPpFIokulpKOho7XYGLASCWlu4XdDRmNwoH9M/yvpu+g99fMx/i/w/X45/jvH3Mdl+1B63MEFwFhl4lf6/ph9NPHXPVdsB/9QjGupW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+unw7cWY8WOnx+uNXbOek6unAYQ9NWsYuatYxc1axi5q1jDhgZzemFHWkuUijkHmKTtDDDyN4PdxL2GIpmP8kfP14sNatRfdPNrqVvfXUre+upW9rvfHNsc3H0RMmyTD8C/KpXVtUD601YsFajMzHNTz4zC+TugAkcLozYoViSK5QqoLmrWMXNWsYuatYxc0H2Uybgrgzs4S+Q6g+C1auxsOtPeB2M9a9QztIwEjlAbdB0ukf6VvfXUre+upW99csfzH+tUZ9hVOygDun8qbF29KYKSSkThici4v/zV7JMQZs0sM3o8xi5q1jFzVrGLmrWMWffXqMVdPmkm5GQfmUmy03E/z40zW+CenDi+rzlhgAl8Loy/cFhyd6GQMnAbe+upW99dSt766lb3wYugub5QwM/ZAviyocBJpwWATc0taKj5PCw7ZMc8Y5XmrWMXNWsYuatYxcmgI+LUy91GY6G5wAJxLRjsZ616hnaR1eEivu+pREcBt766lb311K3vrqVvfBi6CbE8N1MV3fdyS5xo7Gx3a7SDk71jop6ancm4FJwG3vrqVvfXUre+upW98GLoJtFivawDHviytUcBbQekrgtEIlHSIsZqhotN4xyvNWsYuatYxc1axi5NAR8WnGA+T1+qhAA7j6BBG144rQ/PSssmELrsyOunnAbe+upW99dSt766lb3wYuguc3UAASWF0ZsQ/iTk7uKDUieZEfbFGujFSRqB3HAbe+upW99dSt766lb3wYuguYo3IOVzuCyKKklcuiMOtajUqrk2/HkPPHNs/XGAjnjHK81axi5q1jFzVrGLk0BHuC1UcBbQekrgpW1NX36ah31NNGPiS/OzGNcvzgNvfXUre+upW99dSt739KYs029dB3Vogw+Bw7RfjuHayzbpaieWjAcc8ywRCaYtPAi5q1jFzVrGLmrWMXJWdCIHZozUNa4RnPdSpBY1HJF0kPvOIIIjxY6fb9h5Hd6k6zv2bqrqVvfXUre+upW99dPStUcBbIPzKDbU9J9wQRHix0+4IIjxY55P8p9NWsYuatYxc1axi5oPr+kz9eLDk7sOjFzVrGLmrWMXNWsYuatYxc1axhvLP1aDbjef6VvfXUre+upW99dSt766lb311J8ASQjqjq4fkg5BupW99dSt766lb311K3vrqVvbYaTL7v8dK6I/M5V1PdyQ8W3TO4uIfLh7B1YR0SS0JG9YmjVrr0v+ScNKVvHokAyYt/urC/b0omZmgmgK+BHUWdFMQusSt766lb311K3vrqVvfCnZmgYLUoL6HwProQGX1UYk09uJBVa+ToVNSmqbo1KJY+1riNWRYSagiQ/jdHaDM36wgKYfIczmmtaCKtdfJaL2vG00CLNJxG/Z8SMIMRI5XmrWMXNWsYuatYxc0QA+c79k5MCIigtjWofxgj/4nbCYmWEnwn9SNaI+zptKyTAECWTtdgijQvXAC5TRJwj6fNjyqa8OYhyF1QLmp8iZnDs5bOUYuatYxc1axi5q1jFzVrGenlrFT8kwuYmhK3vrqVvfXUre+upW99dSt766lb4Vqlb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb311K3vrqVvfXUre+upW99dSt766lb31ygAD+/3PgAAAAAAAAAAAAAAAAAAAAAACkN0SSUgLtniN9LhXauwZ4xTLoUC8rMmimLNSIjaVEesiRdvYVin6Wz79FExNTMoJBnZe4CY9dNU1u/rgvnijtHn/cIMNJjhFjoye254gaEXd+hJhaazIkxiCyKiGudcyU38Eme9RDP/gq5FfVW3fdoiwD9orccO17vwJeICHQtxFL87yqrllxDnpxhy0R/miXL75wKPYovuUa2sTFTWp5o5h0184j+szUw3f0t8GrySvOt/UwkfxNyFrhvPxhlvNDri6Pp69nHdK7PXW82b0Bp0eJM4JWclTTlhL7jT20lxBhtazhePLNlNi8R7DJrXS23qmJZ3IJfASZsyOmxUOXZHm4GMU8mrlC4hB7X23pcaHRjsL955zRpx+psmkhUrRYCU9uEJkrdJzHSaAzsfpAP5/8PCRIyMk4bEb3lSg1JAHc4mIyn8EcJdhUiqwzV8YIfSHlkveN9lL65khpCZrMKubOHJ1sb5KLk/NvxkXfJzkM4tT9BvP+2ZShEuAVuXgmJ50avXfW0rQKOtlaugQuHclltlcZgcDZLIVUz4ElNlowaeHVGPtZX1IIBDeXpXiIuX95C0h89Vm1yQ2OhQTlP0V4BGJjYgjxpNtuGFtdrfAFggQYC84E6IRIHdy0Bp0eJM4JWdWUCzBeNmdAPGVPQym21qagHW8sNue/bSO28ndcIJ5/3CDDSY4RY6Y3kiOt74kGlMtacyLe4vxsyZTYn7LflybyRtaIDeQQz5ADwJbE3Ll2EfqWMygmtI48rEbHQoMjQQTkBgBfW0G4T7ZtAvuKGu9zBEc9oPEL9jnA1YUfh4+SL7xdk+xf4ZcdLGZQTWkceViNjoUGRoIJyKcwsI9w4sqNzXJrU9R90IBZFsP1TPjLiK4ItuHSx2WsFfBqLABF2xyT7yrugZFX1tBuCUfFJaCAEAfsDny7iS+AkQlRN0qtFLKQLWO6WKWxXdq+7TK7S56P9H6YfZLCo+B4oPt3hBPmEOAgVyY6aFdK3wSopW5i9iCWx1XaXEUXxOPf2Tho0FarSO4taV/Osoya9mQBP+pYzKCa0jjysRsdCgyNBBOcSDRvBNlIZj2Oc8dq6vYn7rQM8IsKbBk2RC7gnnu8qvs3TAwAqm/MftNQsAcBU5Rrdcv70Na1ey5Bp0eJM4JWpAYAX1tBuBwhboNw0rg3RACVlktNSBJymaZvMP8N6uLuxhVwDEBy7oDa4aSwEgpCsyYmvw9NoiIvz7HjuUAqNbrkzt71irkhPOjV6762mOEOjPpw9tk09NmosPa8EBz4HGh0XiJepBELNKDYngmJ50aux3CE9QP4SLu+HQAtgG+Bs7yXxkASTqhAxJBWhtT9taeZtLccZYnQDxRFsSmk9LNHkJjWwkijO4iH3uJoM28Uv0X/YVFIVD5RMTeYz4Z8rScznmMqydved9gv4r7Do20wrnkUqsYiEht4W8sQsjJPiIGZSg4yYPeexa2fESZbfP8pwS1h7QRF39tiz54fYyHR7nRxjcodr4zJwSQJF1Q7U5hUB6YGPhfUSLv7aJVwM6ObSAa/qk/FjmzlyJYO9OBoeesOhevtduUT1HH382yiaLiZEf5HvJcMxkApgu9zDNpGbquAOfjOTJBrI4EBHBs+m9sl6Agn6/M2t6+gr5fNr2/p3D3dedgXHHewRCD8uTE1ctvR3rE7QF4U18DVKgb2rc/iHWZEPtBwe9UpqPXVF+B1YBWHPOsQIgiCDL+IQxyG7qX9aTqXozBEV33VG8odXNmaQiO5TzjCD7CG34Du1vtcFPlrPxgQ9de6IUOsXqDSC58JH3y/gqlgtgTivdHmly9dZUiMBB8x9h4hkmHnmiG8s2Ei2XOXGmNG5RRtRNxq6P6qBtvC2f5lo5S3Ag3c69yRj8kXOMgAy4a+wbEonD9jZnX2otWXlfm9NENk+2Yykt8slRXl1PqX1jrnXx4r84DymI2As3zQUxXzpCYGxQ4AAAAAAAAAAAAAAAAAAA==",ae="/your-energy-project8/assets/valkoSprite-28e86a63.svg",U=document.querySelector(".modal-exercises"),B=document.getElementById("favorite-cards-list"),oe=window.location.href.split("/").includes("favorites.html");let u;const N=(e=d("favorites")||[])=>e.find(t=>(t==null?void 0:t._id)===u._id),ie=e=>{const t=document.querySelector(".modal-exercises__button-favourites");if(!N()){Q(e),t.innerHTML=`Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-trash></use>
          </svg>`,b(B);return}I(e._id),t.innerHTML=`Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-heart></use>
          </svg>`,b(B)};async function Y(e){try{let a=function(o){const i=C(),c=document.createElement("input");c.value=i,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),r.textContent="Link copy!",setTimeout(()=>{r.textContent="Share exercises"},1e3)};u=await T(e),console.log(Number(u.rating).toFixed(1)),U.innerHTML=ne({...u,rating:Number(u.rating).toFixed(1)}),Z(u.rating),ce(),document.querySelector(".modal-exercises__card").addEventListener("click",o=>{if(o.target.closest(".modal-exercises__button-favourites")&&ie(u),o.target.closest(".modal-exercises__button-rating")){const i=document.querySelector("#ratingModal");i.style.display="block",U.classList.add("visually-hidden")}});const s=document.querySelector(".share-button-modal"),r=document.querySelector(".share-button-hint-modal");s.addEventListener("click",a)}catch(t){console.error(t)}}function ne(e){const{name:t,burnedCalories:s,bodyPart:r,description:a,target:o,equipment:i,gifUrl:c,popularity:f,rating:_,time:K,_id:H}=e;return`<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href=${y}#icon-button-close></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${c!==null?c:re}" alt="${t}" />
    </div>
    <div class="modal-exercises__description">
      <button class="share-button-modal" type="button">
        <svg class="share-icon">
          <use href=${ae}#icon-share-light></use>
        </svg>
        <span class="share-button-hint-modal">Share exercises</span>
      </button>
      <p class="modal-exercises__name">${t}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${_}</div>
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
          <p class="modal-exercises__partials-value">${i}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${f}</p>
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
      ${oe||N()?`<button 
          type="button"
          class="modal-exercises__button-favourites unfavorite-btn"
          >
          Unfavorite
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-trash></use>
          </svg>`:`<button 
          type="button"
          class="modal-exercises__button-favourites
          add-to-favorites-btn">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${y}#icon-heart></use>
          </svg>`}
        </button>
        <button class="modal-exercises__button-rating" data-value="${H}">Give a rating</button>
      </div>
    </div>
  </div>`}const n={openModalButton:document.querySelector(".open-modal"),modalExercises:document.querySelector(".modal-exercises"),body:document.body},M=document.getElementById("exercises-list-container");M&&M.addEventListener("click",V);function V(e){if(e.target.closest("[data-remove]")||!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id;se("modalOpen",t),Y(t)}function ce(){n.modalExercises.addEventListener("click",t),document.addEventListener("keydown",s),e();function e(){n.modalExercises.classList.remove("visually-hidden"),n.body.classList.add("modal-open")}function t(a){a.target.closest(".modal-exercises__button-close")||a.target===n.modalExercises?(n.modalExercises.classList.add("visually-hidden"),n.body.classList.remove("modal-open"),h("modalOpen")):a.target===n.modalExercises&&(n.modalExercises.classList.add("visually-hidden"),h("modalOpen"))}function s(a){a.key==="Escape"&&(n.modalExercises.classList.add("visually-hidden"),n.body.classList.remove("modal-open"),h("modalOpen"))}function r(){n.openModalButton.removeEventListener("click",e),n.modalExercises.removeEventListener("click",t),document.removeEventListener("keydown",s)}return r}function le(){const e=te("modalOpen");e&&Y(e)}le();const l=document.getElementById("favorite-cards-list"),S=document.getElementById("pagination-container"),de=document.querySelector(".quote-container");let E=1,A=window.innerWidth<768?8:10;const ue=window.location.href.split("/").includes("favorites.html"),me=({target:e})=>{if(!e.closest("[data-remove]"))return;const t=e.closest("[data-id]").dataset.id;I(t),b(l)};function pe(){let e=window.innerWidth;function t(){let s=window.innerWidth;s!==e&&(window.location.reload(),e=s)}window.addEventListener("resize",t)}const ge=(e,t=1)=>{if(window.innerWidth<1440){const s=(t-1)*A,r=s+A;return e.slice(s,r).map(a=>P(a,!0)).join("")}return e.map(s=>P(s,!0)).join("")},L=(e="")=>e.length>4&&window.innerWidth<1440?`${e.slice(0,4)} ...`:e,ve=(e="")=>{const t=e.split(" ");return e!==""&&t.length>3?t.splice(0,3).join(" ")+" ...":e};function b(e){const t=document.querySelector(".scrollbar-container"),s=document.querySelector(".text-nocard-container");try{const r=d("favorites");if(!r||r.length===0){t==null||t.classList.add("hidden"),s==null||s.classList.remove("hidden");return}s==null||s.classList.add("hidden"),t==null||t.classList.remove("hidden"),e&&(e.innerHTML=ge(r,E)),window.innerWidth<1440&&fe(r.length),ue&&window.innerWidth>=1440&&(de.style.maxWidth="494px")}catch(r){console.log(r.message)}}const fe=e=>{const t=Math.ceil(e/A);let s="";if(d("favorites").length>10||d("favorites").length>8&&window.innerWidth<768)for(let r=1;r<=t;r++)s+=`<li class="pagination-item ${r===E?"current":""}">
                      <a href="#" class="page-number" data-page="${r}">${r}</a>
                    </li>`;S&&(S.innerHTML=s)},he=e=>{e.target.classList.contains("page-number")&&(e.preventDefault(),E=parseInt(e.target.dataset.page,10),b(l)),l&&(l.scrollTop=0,l.scrollIntoView({block:"start",behavior:"smooth"}))};S&&S.addEventListener("click",he);b(l);l&&(l.addEventListener("click",V),l.addEventListener("click",me));pe();const j=document.getElementById("myModal"),ye=document.getElementById("openModalBtn"),be=document.getElementById("closeModalBtn"),$=document.querySelector("body"),p=document.querySelector(".nav_link_favorites"),g=document.querySelector(".nav_link_home");ye.addEventListener("click",function(){j.style.display="block",$.classList.add("modal-open")});be.addEventListener("click",function(){j.style.display="none",$.classList.remove("modal-open")});C().includes("favorites")?(g==null||g.classList.remove("nav_item_active"),p==null||p.classList.add("nav_item_active")):(g==null||g.classList.add("nav_item_active"),p==null||p.classList.remove("nav_item_active"));const q="/your-energy-project8/assets/symbol-defs-c6bad215.svg",X="/your-energy-project8/assets/quote-home-desk@1x-4dcdc55b.webp",xe="/your-energy-project8/assets/quote-home-desk@2x-a10fc0a2.webp",w=document.querySelector(".quote"),Se=()=>{window.innerWidth<768&&(w.style.paddingBottom="40px"),window.innerWidth>768&&window.innerWidth<1440&&(w.style.paddingBottom="0")};function we(e){return`<div class="quote-container container">
    <div class="quote-of-the-day">
      <svg class="quote-icon" width="34" height="32">
        <use href=${q}#icon-runing-man></use>
      </svg>
      <h2 class="quote-heading">Quote of the day</h2>
      <svg class="invert-coma-icon" width="20" height="20">
        <use
          href=${q}#icon-inverted-commas
        ></use>
      </svg>
      <p class="quote-text">${e.quote}</p>
      <p class="quote-author">${e.author}</p>
    </div>
    <div class="quote-image">
      <picture>
        <source
          srcset=${X}
          media="(max-width: 767px)"
        />
        <source
          srcset=${xe}
          media="(min-width: 768px)"
        />

        <img
          class="hero-img cropped-image"
          src=${X}
          alt="women-sportswear-taking-break-from-workout"
        />
      </picture>
    </div>
    <div class="recomendation-container">
      <svg class="recoendation-icon" width="34" height="32">
        <use href=${q}#icon-dumb-bell></use>
      </svg>
      <h3 class="recomendation-heading">110 min</h3>
      <h4 class="recomendation-subheading">Daily norm of sports</h4>
      <div class="recomendation-text-container">
        <p class="recomendation-text">
          The World Health Organization recommends at least 150 minutes of
          moderate-intensity aerobic physical activity throughout the week for
          adults aged 18-64. However, what happens if we adjust that number to
          110 minutes every day? While it might seem like a high number to hit,
          dedicating 110 minutes daily to sporting activities may offer
          unparalleled benefits to physical health, mental well-being, and
          overall quality of life.
        </p>
      </div>
    </div>
  </div>`}const x=new Date;function _e(e){return e?x.getDate()===e.getDate()&&x.getMonth()===e.getMonth()&&x.getFullYear()===e.getFullYear():!1}async function Le(){const e=d(v.phrase);if(!e||!_e(new Date(e.date))){const s=await J();k(v.phrase,{...s,date:x})}const t=d(v.phrase);w&&(w.innerHTML=we(t),Se())}Le();document.querySelector(".loader");const R=document.querySelector("#ratingForm"),qe=document.querySelector(".close-rating"),Ae=document.querySelector("#ratingModal");async function ke(e){e.preventDefault();const s=document.querySelector(".modal-exercises__button-rating").getAttribute("data-value"),r=new FormData(R),a={};r.forEach((o,i)=>{i==="rate"?a[i]=Number(o):a[i]=o});try{await G(s,a)?(W.success({title:"OK",message:"Successfully sent rating!"}),F()):W.error({title:"Error",message:"There was an error"}),e.target.reset()}catch{}}R.addEventListener("submit",ke);qe.addEventListener("click",F);function F(){document.querySelector(".modal-exercises").classList.remove("visually-hidden"),Ae.style.display="none"}export{Ue as F,Be as I,v as K,ee as a,te as b,Me as c,We as d,Pe as e,Xe as f,d as g,P as h,C as i,Ie as j,Ce as r,se as s};
//# sourceMappingURL=modal-rating-3f2797a3.js.map