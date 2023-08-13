let div = document.querySelector("div");
let saludarBtn = document.querySelector("button");

div.addEventListener("click", function() {
  alert("Hola! Soy el div");
});

saludarBtn.addEventListener("click", function() {
    saludarBtn.removeEventListener("click", alert("Hola! Soy el div"));
  alert("Hola!");
  });