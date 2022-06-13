const divs = document.getElementsByTagName("div");
const p = document.getElementById("count");

p.textContent = "Vous avez selectionner 0 cartes";

for(const div of divs){
    div.addEventListener("click", ()=>{
        div.classList.toggle("selected");
        p.textContent = "Vous avez selectionner " 
            + document.getElementsByClassName("selected").length + " cartes";
    });
}