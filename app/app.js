let card = document.getElementById("full-card")

function filter(){
	let searchFilter = document.getElementById("search")		
	let filter = searchFilter.value.toUpperCase()
	for (let i = 0; i < card.childElementCount; i++){
		var txtValue = document.getElementById(`text${i}`).textContent || document.getElementById(`text${i}`).innerText;
	
		if (txtValue.toUpperCase().indexOf(filter) > -1){
			document.getElementById(`text${i}`).parentNode.style.display = "grid";
		}
		else{
			document.getElementById(`text${i}`).parentNode.style.display = "none";
		}
	}
}	

fetch("https://api.rawg.io/api/games?key=79dd76a7ff054bbd8e582beb9eb76bbe")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {

    let listContentDiv; let listContentP; let listContentImg;
    let names = []; let img = []; let row = 0; 
    const games = data.results;
   

    

    for (let i in games){
      

      names.push(games[i].name) 
      img.push(games[i].background_image) 
      

      listContentDiv = document.createElement("section");
      listContentP = document.createElement("p"); 
      listContentImg = document.createElement("img"); 

      listContentDiv.setAttribute("class","card");
      listContentImg.setAttribute("class", "cardImg lazyload")
      listContentP.setAttribute("id", `text${row}`)
      listContentDiv.setAttribute("id", `main${row}`)

      card.appendChild(listContentDiv)
      listContentDiv.appendChild(listContentImg)
      listContentDiv.appendChild(listContentP)
    

      listContentP.textContent = names[i] 
      listContentImg.setAttribute("src", games[i].background_image)
      
      
      
      row ++
    }
    
    
    console.log(img) 
  })
  .catch((error) => console.error("FETCH ERROR:", error));

 


  
