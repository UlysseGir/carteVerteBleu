const divs = document.getElementsByTagName("div");
const p = document.getElementById("count")
const selected = document.getElementsByClassName("selected");

p.textContent = "Vous avez selectionner " + selected.length + " cartes";


for(const div of divs){
    div.addEventListener("click", ()=>{
        div.classList.toggle("selected")
        p.textContent = "Vous avez selectionner " + selected.length + " cartes";
    })
}