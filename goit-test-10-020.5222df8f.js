const e=document.querySelector(".list"),n=document.querySelector(".js-guard");let t=1;const o=new IntersectionObserver((function(o,c){o.forEach((o=>{o.isIntersecting&&(t+=1,r(t).then((t=>{e.insertAdjacentHTML("beforeend",t.docs.map((({name:e,race:n})=>`<li>\n    <h2>${e}</h2>\n    <span>${n}</span>\n    </li>`)).join("")),t.page===t.pages&&c.unobserve(n)})))})),console.log(o)}),{root:null,rootMargin:"300px",threshold:1});function r(e=1){return fetch(`https://the-one-api.dev/v2/character?limit=300&page=${e}`,{headers:{Authorization:"Bearer XJlq9OFMcHAy8pAQK7xj"}}).then((e=>{if(!e.ok)throw new Error;return e.json()}))}r().then((e=>{o.observe(n)})).catch((e=>console.log(e)));
//# sourceMappingURL=goit-test-10-020.5222df8f.js.map
