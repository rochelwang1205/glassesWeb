(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const c="product-",r=[],i=[];for(let e=1;e<=6;e++)r.push(`${c}${e}.png?raw=true`);const n=[];for(let e=0;e<12;e++){const l={id:e,name:"BJ41600S",imgUrl:r[e%r.length],salePrice:"NTD3,490"};n.push(l)}const s=document.querySelector(".optical-product-list");let t="";n.forEach(function(e){t+=`<li class="product-card">
                    <img src="/assets/image/series-products/${e.imgUrl}" alt="${e.name}">
                    <div class="info"><h4>${e.name}</h4><span>${e.salePrice}</span></div>
                    <div class="pattern">
                      <div class="color-brown"></div>
                      <div class="color-orange"></div>
                    </div>
                  </li>`}),s&&(s.innerHTML=t);for(let e=1;e<=6;e++)i.push(`${c}sunglasses-${e}.png?raw=true`);const o=[];for(let e=0;e<6;e++){const l={id:e,name:"BJ41600S",imgUrl:i[e%i.length],salePrice:"NTD3,490"};o.push(l)}const a=document.querySelector(".sunglasses-product-list");let d="";o.forEach(function(e){d+=`<li class="product-card">
                    <img src="/assets/image/series-products/${e.imgUrl}" alt="${e.name}">
                    <div class="info"><h4>${e.name}</h4><span>${e.salePrice}</span></div>
                    <div class="pattern">
                      <div class="color-brown"></div>
                      <div class="color-orange"></div>
                    </div>
                  </li>`}),a&&(a.innerHTML=d)});
