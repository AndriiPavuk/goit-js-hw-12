import{S as v,i as u}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const b="25810966-6fb22a4db6c9a757ebd742847",L="https://pixabay.com/api/";function m(i,e){const n=new URLSearchParams({key:b,q:e,page:i,per_page:40,image_type:"photo",orientation:"horizontal"}),r=`${L}?${n.toString()}`;return fetch(r).then(t=>t.json())}function g(i){return i.map(({largeImageURL:e,webformatURL:n,tags:r,likes:t,views:s,comments:l,downloads:y})=>`<li class="gallery-item">

              <a href="${e}"

                  class="link-img">

                  <img

                      src="${n}"

                      alt="${r}">

              </a>

              <ul class="list-info">

                  <li class="list-info-item">

                      <svg class="info-icon">

                          <use href="./img/sprite.svg#icon-like-svgrepo-com"></use>

                      </svg>

                      <!-- <p class="list-info-name">Likes:</p> -->

                      <p class="list-info-value">${t}</p>

                  </li>

                  <li class="list-info-item">

                      <svg class="info-icon">

                          <use href="./img/sprite.svg#icon-eye"></use>

                      </svg>

                      <!-- <p class="list-info-name">Views:</p> -->

                      <p class="list-info-value">${s}</p>

                  </li>

                  <li class="list-info-item">

                      <svg class="info-icon">

                          <use href="./img/sprite.svg#icon-bubble2"></use>

                      </svg>

                      <!-- <p class="list-info-name">Comments:</p> -->

                      <p class="list-info-value">${l}</p>

                  </li>

                  <li class="list-info-item">

                      <svg class="info-icon">

                          <use href="./img/sprite.svg#icon-cloud-download"></use>

                      </svg>

                      <!-- <p class="list-info-name">Downloads:</p> -->

                      <p class="list-info-value">${y}</p>

                  </li>

              </ul>

          </li>`).join("")}const a=document.querySelector(".gallery"),o=document.querySelector(".more"),h=document.querySelector(".form"),d=document.querySelector(".loader");h.addEventListener("submit",S);o.addEventListener("click",w);d.hidden=!0;const p=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});let f="",c=0;function S(i){if(i.preventDefault(),i.currentTarget.elements.query.value.trim()===""){u.error({position:"topRight",messageColor:"brown",message:"Enter anything in the search field!",timeout:3e3});return}f=i.currentTarget.elements.query.value,c=1,o.textContent="More",o.hidden=!0,d.hidden=!1,a.innerHTML="",m(c,f).then(e=>{if(e.hits.length===0){u.error({position:"topRight",messageColor:"brown",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3});return}c+=1,a.insertAdjacentHTML("beforeend",g(e.hits)),p.refresh(),e.hits.length===40&&(o.hidden=!1),a.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"})}).catch(e=>console.log(e)).finally(()=>{d.hidden=!0}),h.reset()}function w(i){i.preventDefault(),o.hidden=!0,d.hidden=!1,m(c,f).then(e=>{c+=1,a.insertAdjacentHTML("beforeend",g(e.hits)),p.refresh(),e.hits.length===40&&(o.hidden=!1),e.hits.length<40&&(o.hidden=!1,o.disabled=!0,o.textContent="Images are over"),a.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"})}).catch(e=>console.log(e)).finally(()=>{d.hidden=!0})}
//# sourceMappingURL=commonHelpers.js.map
