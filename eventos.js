let div = document.querySelector("div");
let saludarBtn = document.querySelector("button");

div.addEventListener("click", function conte() {
  alert("Hola! Soy el div");
});

function Problema() {
    alert("Hola!");
    div.removeEventListener("click", conte);
  }
  
  saludarBtn.addEventListener("click", Problema);