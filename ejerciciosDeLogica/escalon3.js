// Tu objetivo: Crear una función llamada filtrarTareasUrgentes
// que reciba un array de objetos (tareas). 
// Cada tarea tiene un id, una descripcion (string) y un estado completada (booleano).
// La función debe devolver un nuevo array de objetos que contenga únicamente las tareas que cumplan dos condiciones:
// La tarea NO debe estar completada.
// La descripción de la tarea debe incluir la palabra "URGENTE" (en mayúsculas).
// --- DATOS DE PRUEBA ---
const backlog = [
    { id: 1, descripcion: "Corregir bug URGENTE en login", completada: false },
    { id: 2, descripcion: "Revisar estilos del footer", completada: false },
    { id: 3, descripcion: "URGENTE optimizar base de datos", completada: true }, // Ya está completada
    { id: 4, descripcion: "Subir documentación a Drive", completada: false },
    { id: 5, descripcion: "Reunión URGENTE con cliente", completada: false }
];


// RESULTADO ESPERADO:
// [
//   { id: 1, descripcion: "Corregir bug URGENTE en login", completada: false },
//   { id: 5, descripcion: "Reunión URGENTE con cliente", completada: false }
// ]


const filtrarTareasUrgentes = (tareas) =>{
    let tareasUrgentes = [];
    tareas.forEach(tarea => {
        if(tarea.descripcion.includes("URGENTE") && !tarea.completada){        
      tareasUrgentes.push(tarea)
    }
});
return tareasUrgentes;
}


console.log(filtrarTareasUrgentes(backlog));