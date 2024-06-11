let listaDeTareas = [
  {
    nombreDeLaTarea: "Tomar agua",
    estaCompletada: false
  },
  {
    nombreDeLaTarea: "Tomar café",
    estaCompletada: true
  }
]

const elListaTareas = document.getElementById("lista-tareas")

function agregarTarea(nombre, completada) {
  elListaTareas.innerHTML += `
    <div class="tarea">
      <input type="checkbox" ${completada ? "checked" : ""}>
      <p>${nombre}</p>
    </div>
  `
}
