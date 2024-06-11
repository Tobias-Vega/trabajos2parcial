// DOM (document - object - model)
// obtenemos los elementos desde el dom

// el div con el id "modo"
const modo = document.getElementById("modo")

// el botón con el id "btn-toggle"
const btn = document.getElementById("btn-toggle")

// Creando un escuchador de eventos
// que en este caso escucha el evento "click"
// le pasamos un callback
btn.addEventListener("click", () => {
  if (modo.className == "darkMode") {
    modo.className = "lightMode"
    btn.innerText = "Cambiar a dark"
  } else {
    modo.className = "darkMode"
    btn.innerText = "Cambiar a light"
  }
})