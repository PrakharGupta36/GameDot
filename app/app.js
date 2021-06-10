let counter = 1; 
if (localStorage.getItem("counteruser") !== null) {
  counter =  parseInt(localStorage.getItem('counteruser'))
  
}


let card=document.getElementById("full-card");function filter(){let e=document.getElementById("search").value.toUpperCase();for(let t=0;t<card.childElementCount;t++){(document.getElementById(`text${t}`).textContent||document.getElementById(`text${t}`).innerText).toUpperCase().indexOf(e)>-1?document.getElementById(`text${t}`).parentNode.style.display="grid":document.getElementById(`text${t}`).parentNode.style.display="none"}}

let button1 = document.getElementById("next")
let button2 = document.getElementById("prev")
let page = document.getElementById("page")



button1.addEventListener("click",function(){
  counter++;
  console.log(counter)
  localStorage.setItem('counteruser', `${counter}`);
  // localStorage.clear()
  location.reload();
  page.innerHTML = `Page ${parseInt(localStorage.getItem('counteruser'))}`
})

button2.addEventListener("click",function(){
  counter--;
  if (counter < 1){
    counter = 1
  }else { 
    localStorage.setItem('counteruser', `${counter}`);
    console.log(counter)
    location.reload();
    page.innerHTML = `Page ${parseInt(localStorage.getItem('counteruser'))}`
  }
})

fetch(`https://api.rawg.io/api/games?key=79dd76a7ff054bbd8e582beb9eb76bbe&page=${counter}`).then(e=>{if(e.ok)return e.json();throw new Error("NETWORK RESPONSE ERROR")}).then(e=>{let t,n,d,r=[],o=[],a=0;const l=e.results;for(let e in l)r.push(l[e].name),o.push(l[e].background_image),t=document.createElement("section"),n=document.createElement("p"),d=document.createElement("img"),t.setAttribute("class","card"),d.setAttribute("class","cardImg lazyload"),d.setAttribute("loading","lazy"),d.setAttribute("alt","img"),n.setAttribute("id",`text${a}`),card.appendChild(t),t.appendChild(d),t.appendChild(n),n.textContent=r[e],d.setAttribute("src",l[e].background_image),a++ } 

).catch(e=>console.error("FETCH ERROR:",e));





