const S=document.querySelector(".js-submit-btn"),w=document.querySelector(".js-txt-search"),m=document.querySelector(".js-list-shows");let i=[];const p=o=>{m.innerHTML="";for(const e of o){const t=document.createElement("li"),n=document.createElement("img"),l=document.createElement("h3");t.appendChild(n),t.appendChild(l),m.appendChild(t),t.id=e.mal_id,t.classList.add("js-show"),e.images.jpg.image_url==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"?(n.setAttribute("src","https://placehold.co/225x310?text=Image%20not%20found"),n.setAttribute("alt","Portada no encontrada")):(n.setAttribute("src",e.images.jpg.image_url),n.setAttribute("alt",`Portada de ${e.title}`));const c=document.createTextNode(e.title);l.appendChild(c);const d=document.querySelectorAll(".js-show");for(const r of d)r.addEventListener("click",j)}},L=o=>{o.preventDefault();const e=w.value;fetch(`https://api.jikan.moe/v4/anime?q=${e}`).then(t=>t.json()).then(t=>{i=t.data,p(i)})};S.addEventListener("click",L);const u=document.querySelector(".js-list-favs");let s=[];const h=JSON.parse(localStorage.getItem("shows")),v=document.querySelector(".js-delete-all"),a=o=>{u.innerHTML="";for(const e of o){const t=document.createElement("li"),n=document.createElement("img"),l=document.createElement("h3"),c=document.createElement("button");t.appendChild(n),t.appendChild(l),t.appendChild(c),u.appendChild(t),t.id=e.mal_id,e.images.jpg.image_url==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"?(n.setAttribute("src","https://placehold.co/225x310?text=Image%20not%20found"),n.setAttribute("alt","Portada no encontrada")):(n.setAttribute("src",e.images.jpg.image_url),n.setAttribute("alt",`Portada de ${e.title}`));const d=document.createTextNode(e.title);l.appendChild(d);const r=document.createTextNode("X");c.appendChild(r),c.classList.add("js-delete-btn"),c.id=e.mal_id;const g=document.querySelectorAll(".js-delete-btn");for(const f of g)f.addEventListener("click",b)}},j=o=>{const e=parseInt(o.currentTarget.id);o.currentTarget.classList.add("favorite");const t=i.find(n=>n.mal_id===e);s.includes(t)||(s.push(t),localStorage.setItem("shows",JSON.stringify(s))),a(s)},b=o=>{const e=parseInt(o.currentTarget.id),t=document.querySelectorAll(".js-show");for(const l of t)parseInt(l.id)===e&&l.classList.remove("favorite");const n=s.findIndex(l=>l.mal_id===e);s.splice(n,1),localStorage.setItem("shows",JSON.stringify(s)),a(s)},y=()=>{const o=document.querySelectorAll(".js-show");for(const e of o)e.classList.remove("favorite");s=[],a(s),localStorage.removeItem("shows")};if(h!==null)for(const o of h)s.push(o);a(s);v.addEventListener("click",y);const A=document.querySelector(".js-reset-btn"),C=()=>{i=[],p(i),s=[],a(s),localStorage.removeItem("shows")};A.addEventListener("click",C);
//# sourceMappingURL=main.js.map
