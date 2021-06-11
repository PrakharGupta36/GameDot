let navImg = document.getElementById("nav-img")
let hamburger = document.getElementById("hamburger")
let navSearch = document.getElementById("nav-search")
let navBtn = document.getElementById("nav-btn")

navImg.onclick = function(){ nav()  }

function nav(){
    if (navSearch.style.display === "none" && navBtn.style.display === "none"){
        navSearch.style.display = "grid"
        navBtn.style.display = "grid"
        hamburger.src = "assets/close.svg"
    } else {
        navSearch.style.display = "none"
        navBtn.style.display = "none"
        hamburger.src = "assets/menu.svg"
    }
}