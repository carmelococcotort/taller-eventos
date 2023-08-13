
let div = document.querySelector("div");
let saludarBtn = document.querySelector("button");

div.addEventListener("click", function() {
  alert("Hola! Soy el div");
});

saludarBtn.addEventListener("click", function(event) {
  event.stopPropagation(); // Detener la propagación del evento
  alert("Hola!");
});