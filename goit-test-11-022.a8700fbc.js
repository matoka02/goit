const e=document.querySelector(".list");(async function(){const e=await fetch("https://swapi.dev/api/people/1/");if(!e.ok)throw new Error("RESP NOT OK!");return await e.json()})().then((n=>{console.log(n),e.insertAdjacentHTML("beforeend",`<li>\n    <h1>${n.name}</h1>\n    <h2>${n.gender}</h2>\n    </li>`)})).catch((e=>console.log(e)));
//# sourceMappingURL=goit-test-11-022.a8700fbc.js.map
