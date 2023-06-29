fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",body:JSON.stringify({author:"Poly"})}).then((o=>o.json())).then((o=>console.log(o))),fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE"}).then((o=>o.json())).then((o=>console.log(o)));
//# sourceMappingURL=goit-test-11-021.e7ace5ca.js.map
