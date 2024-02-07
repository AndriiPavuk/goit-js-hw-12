import{S as v,i as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b="25810966-6fb22a4db6c9a757ebd742847",L="https://pixabay.com/api/";function g(i,t){const r=new URLSearchParams({key:b,q:t,page:i,per_page:40,image_type:"photo",orientation:"horizontal"}),n=`${L}?${r.toString()}`;return fetch(n).then(e=>e.json())}function m(i){return i.map(({largeImageURL:t,webformatURL:r,tags:n,likes:e,views:s,comments:l,downloads:y})=>`<li class="gallery-item">

              <a href="${t}"

                  class="link-img">

                  <img

                      src="${r}"

                      alt="${n}">

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

          </li>`).join("")}const u=document.querySelector(".gallery"),o=document.querySelector(".more"),h=document.querySelector(".form"),c=document.querySelector(".loader");h.addEventListener("submit",w);o.addEventListener("click",S);c.hidden=!0;const p=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});let f="",a=0;function w(i){if(i.preventDefault(),i.currentTarget.elements.query.value.trim()===""){d.error({position:"topRight",messageColor:"brown",message:"Enter anything in the search field!",timeout:3e3});return}f=i.currentTarget.elements.query.value,a=1,o.hidden=!0,c.hidden=!1,u.innerHTML="",g(a,f).then(t=>{if(t.hits.length===0){d.error({position:"topRight",messageColor:"brown",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3});return}a+=1,u.insertAdjacentHTML("beforeend",m(t.hits)),p.refresh(),t.hits.length===40&&(o.hidden=!1)}).catch(t=>console.log(t)).finally(()=>{c.hidden=!0}),h.reset()}function S(i){i.preventDefault(),o.hidden=!0,c.hidden=!1,g(a,f).then(t=>{a+=1;const r=m(t.hits);u.insertAdjacentHTML("beforeend",r),p.refresh(),t.hits.length===40&&(o.hidden=!1),t.hits.length<40&&(o.hidden=!1,o.disabled=!0,o.textContent="Images are over");const n=u.lastElementChild.getBoundingClientRect().height,e=100;window.scrollBy({top:n*3+e,behavior:"smooth"})}).catch(t=>console.log(t)).finally(()=>{c.hidden=!0})}
//# sourceMappingURL=commonHelpers.js.map
