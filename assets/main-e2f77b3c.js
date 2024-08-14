(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const a=(c,r)=>{const o=c[r];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+r)))})};document.addEventListener("DOMContentLoaded",async function(){const c=[],r=[];for(let e=1;e<=6;e++)c.push(await a(Object.assign({}),`../assets/image/series-products/product-${e}.png`)),r.push(await a(Object.assign({}),`../assets/image/series-products/product-sunglasses-${e}.png`));const o=document.querySelector(".optical-product-list");let i="";optical_data.forEach(function(e){i+=`<li class="product-card">
                    <img src="../assets/image/series-products/${e.imgUrl}" alt="${e.name}">
                    <div class="info"><h4>${e.name}</h4><span>${e.salePrice}</span></div>
                    <div class="pattern">
                      <div class="color-brown"></div>
                      <div class="color-orange"></div>
                    </div>
                  </li>`}),o&&(o.innerHTML=i);for(let e=1;e<=6;e++)r.push(`${baseFileName}sunglasses-${e}.png?raw=true`);const s=[];for(let e=0;e<6;e++){const l={id:e,name:"BJ41600S",imgUrl:r[e%r.length],salePrice:"NTD3,490"};s.push(l)}const t=document.querySelector(".sunglasses-product-list");let n="";s.forEach(function(e){n+=`<li class="product-card">
                    <img src="../assets/image/series-products/${e.imgUrl}" alt="${e.name}">
                    <div class="info"><h4>${e.name}</h4><span>${e.salePrice}</span></div>
                    <div class="pattern">
                      <div class="color-brown"></div>
                      <div class="color-orange"></div>
                    </div>
                  </li>`}),t&&(t.innerHTML=n)});
