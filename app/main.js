import swURL from"./service-worker.js";"serviceWorker"in navigator&&window.addEventListener("load",async()=>{try{const e=await navigator.serviceWorker.register(swURL);console.log("Service worker registered! 😎",e)}catch(e){console.log("😥 Service worker registration failed: ",e)}});