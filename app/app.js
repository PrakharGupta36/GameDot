// authentication 

const auth = firebase.auth();


const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const main = document.getElementById('main') 


const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => {
  auth.signInWithPopup(provider);
} 

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        main.style.display = 'grid'
        whenSignedOut.style.display = "none"
        signOutBtn.style.display = "block"
    } else {
        // not signed in
        main.style.display = "none"
        whenSignedOut.style.display = "grid"
        signOutBtn.style.display = "none"
    }
});

// auth done



let counter = 1; 
let n;

  


let card=document.getElementById("full-card");function filter(){let e=document.getElementById("search").value.toUpperCase();for(let t=0;t<card.childElementCount;t++){(document.getElementById(`text${t}`).textContent||document.getElementById(`text${t}`).innerText).toUpperCase().indexOf(e)>-1?document.getElementById(`text${t}`).parentNode.style.display="grid":document.getElementById(`text${t}`).parentNode.style.display="none"}}

let button1 = document.getElementById("next")
let button2 = document.getElementById("prev")
let page = document.getElementById("page")

if (parseInt(localStorage.getItem('counteruser')) === NaN){ 
  page.innerHTML = `Page 1`
} else {
  page.innerHTML = `Page ${parseInt(localStorage.getItem('counteruser'))}`
}




let buttonFlex1 =  document.getElementById("button1")
let buttonFlex2 =  document.getElementById("button2")
let buttonFlex3 =  document.getElementById("button3")

button1.addEventListener("click",function(){
  counter++;
 
  if (counter > parseInt(buttonFlex3.textContent)){ 
    document.getElementById("button3").click()
  }
  console.log(counter)
  localStorage.setItem('counteruser', `${counter}`);
  // localStorage.clear()
  location.reload();
})

button2.addEventListener("click",function(){
  counter--;
  if (counter < parseInt(buttonFlex1.textContent)){ 
    document.getElementById("button1").click()
  }
  if (counter < 1){
    counter = 1
  }else { 
    localStorage.setItem('counteruser', `${counter}`);
    console.log(counter)
    location.reload();
  }
})


if (localStorage.getItem("counteruser") !== null) {
  counter =  parseInt(localStorage.getItem('counteruser'))
  
}



for (let i = 1; i < 2; i++){
  if (localStorage.getItem("buttonflex3") === null){
    buttonFlex1.textContent = i  
    i++     
    buttonFlex2.textContent = i 
    i++      
    buttonFlex3.textContent = i    
    
  }
  else {
      buttonFlex1.textContent = localStorage.getItem("buttonflex1")
      buttonFlex2.textContent = localStorage.getItem("buttonflex2")
      buttonFlex3.textContent = localStorage.getItem("buttonflex3")
  }
  buttonFlex1.addEventListener("click",function(){
    console.log("flex")
    if (buttonFlex1.textContent !== "1" && buttonFlex1.textContent !== "0"){
      console.log("fuck")
      buttonFlex3.textContent = buttonFlex1.textContent

      buttonFlex2.textContent = parseInt(buttonFlex1.textContent) - 1     
    
      buttonFlex1.textContent = parseInt(buttonFlex1.textContent) - 2   
      counter = buttonFlex1.textContent
      localStorage.setItem('counteruser', `${counter}`);
      
      

      location.reload();
    } 
    
    else if (buttonFlex1.textContent === "1"){
      counter = 1
      localStorage.setItem('counteruser', `${counter}`);
      location.reload();
    }
    else {
      console.log("you")
    }
    localStorage.setItem("buttonflex1",`${buttonFlex1.textContent}`)
      localStorage.setItem("buttonflex2",`${buttonFlex2.textContent}`)
      localStorage.setItem("buttonflex3",`${buttonFlex3.textContent}`)
  })
  
  buttonFlex2.addEventListener("click",function(){
    console.log("flex")
    counter = buttonFlex2.textContent
    localStorage.setItem('counteruser', `${counter}`);
    location.reload();
  })
  
  buttonFlex3.addEventListener("click",function(){
    
    counter = buttonFlex3.textContent
    localStorage.setItem('counteruser', `${counter}`);
    console.log("flex")
    buttonFlex1.textContent = buttonFlex3.textContent
    
    buttonFlex2.textContent = parseInt(buttonFlex3.textContent) + 1   
     
    buttonFlex3.textContent = parseInt(buttonFlex3.textContent) + 2 
     
    localStorage.setItem("buttonflex1",`${buttonFlex1.textContent}`)
    localStorage.setItem("buttonflex2",`${buttonFlex2.textContent}`)
    localStorage.setItem("buttonflex3",`${buttonFlex3.textContent}`)
    
    
    location.reload();
    

    
        
    
  })
}







fetch(`https://api.rawg.io/api/games?key=79dd76a7ff054bbd8e582beb9eb76bbe&page=${counter}`).then(e=>{if(e.ok)return e.json();throw new Error("NETWORK RESPONSE ERROR")}).then(e=>{let z,t,d,r=[],o=[],a=0;const l=e.results;for(let e in l)r.push(l[e].name),o.push(l[e].background_image),t=document.createElement("section"),n=document.createElement("p"),d=document.createElement("img"),z = document.createElement("a"),z.setAttribute("href","javascript:void(0);"),z.setAttribute("onclick","cardinfo()"),t.setAttribute("class","card"),d.setAttribute("class","cardImg lazyload"),d.setAttribute("loading","lazy"),d.setAttribute("alt","img"),n.setAttribute("id",`text${a}`),card.appendChild(t),t.appendChild(z),z.appendChild(d),z.appendChild(n),n.textContent=r[e],d.setAttribute("src",l[e].background_image),a++; 


} 






).catch(e=>console.error("FETCH ERROR:",e));

function cardinfo(){
  document.title = n.textContent
}

// localStorage.clear()  



