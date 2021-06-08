fetch("https://api.rawg.io/api/games?key=79dd76a7ff054bbd8e582beb9eb76bbe")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {

    let card = document.getElementById("full-card")
    const games = data.results;
    let listContentDiv; let listContentP; let listContentImg;
    let names = []; let img = []; 



    for (let i in games){
      names.push(games[i].name) 
      img.push(games[i].background_image) 
      
      listContentDiv = document.createElement("div");
      listContentP = document.createElement("p"); 
      listContentImg = document.createElement("img"); 

      listContentDiv.setAttribute("class","card");
      listContentImg.setAttribute("class", "cardImg")

      card.appendChild(listContentDiv)
      listContentDiv.appendChild(listContentImg)
      listContentDiv.appendChild(listContentP)
      

      listContentP.textContent = names[i] 
      listContentImg.setAttribute("src", games[i].background_image)

        
    }
    console.log(img)
    
    

    

    
    
    
  })
  .catch((error) => console.error("FETCH ERROR:", error));

 


