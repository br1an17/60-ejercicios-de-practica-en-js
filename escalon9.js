// Crear una función llamada detectarVuelosConOverbooking que reciba dos parámetros: un array de vuelos (con su capacidad máxima) y un array de pasajerosConfirmados.
// La función debe devolver un nuevo array que contenga solo los idVuelo de aquellos vuelos que estén sobrevendidos (es decir, donde la cantidad de pasajeros anotados sea estrictamente mayor a la capacidad del avión).
function detectarVuelosConOverbooking(vuelos, pasajerosConfirmados) {
    let vuelosSobrevendidos =[];
 let pasajerosPorVuelo ={};

pasajerosConfirmados.forEach(pasajero => {
    const vuelo = pasajero.idVuelo
  pasajerosPorVuelo[vuelo] = (pasajerosPorVuelo[vuelo]||0)+1
});
for (let i = 0; i < vuelos.length; i++) {

    let cantidad = pasajerosPorVuelo[vuelos[i].idVuelo] || 0
  if (cantidad > vuelos[i].capacidadMax ){

    vuelosSobrevendidos.push(vuelos[i].idVuelo)
  }
    
}

  return vuelosSobrevendidos;
}
// --- DATOS DE PRUEBA ---
const vuelosDisponibles = [
  { idVuelo: "AR100", capacidadMax: 3 },
  { idVuelo: "AR200", capacidadMax: 2 },
  { idVuelo: "AR300", capacidadMax: 5 },
];

const pasajerosConfirmados = [
  { nombre: "Ana", idVuelo: "AR100" },
  { nombre: "Luis", idVuelo: "AR200" },
  { nombre: "Pedro", idVuelo: "AR100" },
  { nombre: "Sofía", idVuelo: "AR200" },
  { nombre: "Carlos", idVuelo: "AR100" },
  { nombre: "Marta", idVuelo: "AR200" }, // El vuelo AR200 ya tiene 3 pasajeros y su capacidad es 2
  { nombre: "Juan", idVuelo: "AR100" }, // El vuelo AR100 tiene 4 pasajeros y su capacidad es 3
];

console.log(
  detectarVuelosConOverbooking(vuelosDisponibles, pasajerosConfirmados),
);
/* RESULTADO ESPERADO:
["AR100", "AR200"]
*/
