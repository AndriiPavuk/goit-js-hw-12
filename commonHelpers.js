import{S as p,i as g}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const m="https://pixabay.com/api/";function d(t,i){const n=new URLSearchParams({key:KEY_API,q:i,page:t,per_page:40,image_type:"photo",orientation:"horizontal"}),r=`${m}?${n.toString()}`;return fetch(r).then(e=>e.json())}function h(t){return t.map(({largeImageURL:i,webformatURL:n,tags:r,likes:e,views:s,comments:o,downloads:f})=>`<li class="gallery-item">

              <a href="${i}"

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

                      <p class="list-info-value">${e}</p>

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

                      <p class="list-info-value">${o}</p>

                  </li>

                  <li class="list-info-item">

                      <svg class="info-icon">

                          <use href="./img/sprite.svg#icon-cloud-download"></use>

                      </svg>

                      <!-- <p class="list-info-name">Downloads:</p> -->

                      <p class="list-info-value">${f}</p>

                  </li>

              </ul>

          </li>`).join("")}const c=document.querySelector(".gallery"),a=document.querySelector(".form"),l=document.querySelector(".loader"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.addEventListener("submit",v);l.hidden=!0;a.dataset.page="1";function v(t){if(t.preventDefault(),t.currentTarget.elements.query.value.trim()===""){u("Enter anything in the search field!");return}b()}function b(){l.hidden=!1,c.innerHTML="",a.dataset.page="1",L()}function u(t){g.error({position:"topRight",messageColor:"brown",message:t,timeout:3e3})}function L(){const t=parseInt(a.dataset.page,10);d(t,a.elements.query.value.trim()).then(i=>{S(i)}).catch(i=>console.error(i)).finally(()=>{l.hidden=!0})}function S(t){if(t.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}c.insertAdjacentHTML("beforeend",h(t.hits)),y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
