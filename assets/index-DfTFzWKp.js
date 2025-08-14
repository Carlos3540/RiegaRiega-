(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",g="/RiegaRiega-/vite.svg";function f(a){let e=0;const t=o=>{e=o,a.innerHTML=`count is ${e}`};a.addEventListener("click",()=>t(e+1)),t(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${g}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${p}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

`;f(document.querySelector("#counter"));let i=JSON.parse(localStorage.getItem("plants")||"[]");const c={suculenta:["¡Tu suculenta está pidiendo un traguito! 💧","Tiempo de hidratar a tu pequeña guerrera del desierto 🌵","Tu suculenta dice: 'Un poquito de agua, por favor' 💚"],cactus:["¡Tu cactus tiene sed! (¡Increíble pero cierto!) 🌵","Incluso los cactus necesitan amor... y agua 💧","Tu cactus espinoso quiere un mimo acuático 🌵💧"],flor:["¡Tus flores quieren brillar! Dales agua ✨🌸","Hora del spa para tus hermosas flores 💅🌺","Tus flores susurran: '¡Agua, por favor!' 🌸💧"],helecho:["Tu helecho está sediento como vampiro 🧛‍♂️🌿","¡Tu helecho verdecito necesita su dosis diaria! 💚","Tiempo de regar tu frondoso amigo 🌿💧"],arbol:["Tu arbolito quiere crecer grande y fuerte 🌳💪","¡Dale agua a tu futuro gigante verde! 🌳","Tu árbol dice: 'Help me grow!' 🌳✨"],hierba:["¡Tus hierbas aromáticas piden agua! 🌱👃","Tiempo de regar para tener sabores increíbles 🌱✨","Tus hierbas quieren estar frescas y fragantes 🌱💚"],otro:["¡Tu planta especial necesita atención! 🪴","Hora de mimar a tu verde compañera 🪴💚","Tu planta única pide agua con cariño 🪴💧"]};function h(){l(),d(),m()}window.showTab=function(a){document.querySelectorAll(".tab").forEach(o=>{o.classList.remove("active")}),document.querySelectorAll(".tab-content").forEach(o=>{o.classList.remove("active")});const e=document.querySelector(`.tab[onclick="showTab('${a}')"]`);e&&e.classList.add("active");const t=document.getElementById(a);t&&t.classList.add("active")};document.getElementById("plantForm").addEventListener("submit",function(a){a.preventDefault();const e={id:Date.now(),name:document.getElementById("plantName").value,type:document.getElementById("plantType").value,waterFreq:parseInt(document.getElementById("waterFreq").value),lastWatered:new Date().toISOString(),nextWater:new Date(Date.now()+parseInt(document.getElementById("waterFreq").value)*24*60*60*1e3).toISOString()};i.push(e),localStorage.setItem("plants",JSON.stringify(i)),this.reset(),r("🌱 ¡Planta agregada exitosamente!"),l(),d(),showTab("plants"),document.querySelector(".tab").click()});function l(){const a=document.getElementById("plantsList");if(i.length===0){a.innerHTML=`
                    <div class="empty-state">
                        <div class="emoji">🌿</div>
                        <h3>¡Comienza tu jardín digital!</h3>
                        <p>Agrega tu primera planta para comenzar</p>
                    </div>
                `;return}a.innerHTML=i.map(e=>{const t=Math.ceil((new Date(e.nextWater)-new Date)/864e5),o=t<=0?"urgent":t<=1?"soon":"ok",n=t<=0?"¡Necesita riego!":t<=1?`${t} día`:`${t} días`;return`
                    <div class="plant-card">
                        <h3>${{suculenta:"🌵",cactus:"🌵",flor:"🌸",helecho:"🌿",arbol:"🌳",hierba:"🌱",otro:"🪴"}[e.type]||"🪴"} ${e.name}</h3>
                        <div class="plant-info">
                            <span class="plant-type">${e.type}</span>
                            <span class="days-left ${o}">${n}</span>
                        </div>
                        <p style="color: #666; margin: 10px 0;">
                            Último riego: ${new Date(e.lastWatered).toLocaleDateString("es-ES")}
                        </p>
                        <div class="plant-actions">
                            <button class="btn-small btn-water" onclick="waterPlant(${e.id})">
                                💧 Regar ahora
                            </button>
                            <button class="btn-small btn-delete" onclick="deletePlant(${e.id})">
                                🗑️ Eliminar
                            </button>
                        </div>
                    </div>
                `}).join("")}function v(a){const e=i.findIndex(t=>t.id===a);if(e!==-1){const t=i[e];t.lastWatered=new Date().toISOString(),t.nextWater=new Date(Date.now()+t.waterFreq*24*60*60*1e3).toISOString(),localStorage.setItem("plants",JSON.stringify(i)),l(),d();const o=c[t.type]||c.otro,n=o[Math.floor(Math.random()*o.length)];r(`💧 ¡${t.name} está feliz! ${n.split("!")[1]||"¡Bien hecho!"}`)}}window.waterPlant=v;function y(a){confirm("¿Estás seguro de que quieres eliminar esta planta?")&&(i=i.filter(e=>e.id!==a),localStorage.setItem("plants",JSON.stringify(i)),l(),d(),r("🗑️ Planta eliminada"))}window.deletePlant=y;function d(){const a=i.length,e=i.filter(t=>Math.ceil((new Date(t.nextWater)-new Date)/864e5)<=0).length;document.getElementById("totalPlants").textContent=a,document.getElementById("plantsNeedWater").textContent=e}function r(a){const e=document.getElementById("notification");e.textContent=a,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3e3)}window.testNotification=function(){const a=["🌱 ¡Esta es una notificación de prueba!","💧 ¡Tu jardín virtual funciona perfectamente!","🌸 ¡Las notificaciones están activas!","🌿 ¡Todo listo para cuidar tus plantas!"],e=a[Math.floor(Math.random()*a.length)];r(e)};function m(){const a=i.filter(e=>Math.ceil((new Date(e.nextWater)-new Date)/864e5)<=0);if(a.length>0){const e=a[0],t=c[e.type]||c.otro,o=t[Math.floor(Math.random()*t.length)],n=localStorage.getItem("lastNotification"),s=Date.now();(!n||s-parseInt(n)>300*1e3)&&setTimeout(()=>{r(`${e.name}: ${o}`),localStorage.setItem("lastNotification",s.toString())},2e3)}}document.addEventListener("DOMContentLoaded",h);setInterval(m,3e4);
