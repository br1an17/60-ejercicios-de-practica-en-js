// Crear una función llamada obtenerConductorEstrella que reciba un array de viajes.
//  La función debe devolver únicamente el nombre del conductor
//  que más dinero acumuló en propinas con sus viajes completados.

// >> REGLA DE ORO: Respetá el nombre exacto de la función y usá variables descriptivas.
function obtenerConductorEstrella(viajes) {
  let mejorConductor = {};

  viajes.forEach((viaje) => {
    // if (viaje.estado ==="completado") {
    //     mejorConductor[viaje.conductor] =
    //     (mejorConductor[viaje.conductor] || 0 ) + viaje.propina
    // }
    if (viaje.estado === "completado") {
      if (mejorConductor[viaje.conductor]) {
        mejorConductor[viaje.conductor] =
          mejorConductor[viaje.conductor] + viaje.propina;
      } else {
        mejorConductor[viaje.conductor] = viaje.propina;
      }
    }
  });

  let valorMaximo = 0;
  let conductorGanador = "";

  for (const conductor in mejorConductor) {
    let mayorGanancia = mejorConductor[conductor];
    if (mayorGanancia > valorMaximo) {
      valorMaximo = mayorGanancia;
      conductorGanador = conductor
    }
  }
  return conductorGanador
}

// --- DATOS DE PRUEBA ---
const historialViajes = [
  { conductor: "Carlos", propina: 500, estado: "completado" },
  { conductor: "Brian", propina: 800, estado: "completado" },
  { conductor: "Carlos", propina: 400, estado: "completado" }, // Carlos lleva 500 + 400 = 900
  { conductor: "Gabriela", propina: 1200, estado: "cancelado" }, // No cuenta por estar cancelado
  { conductor: "Brian", propina: 200, estado: "completado" }, // Brian lleva 800 + 200 = 1000
  { conductor: "Gabriela", propina: 600, estado: "completado" }, // Gabriela solo suma 600
];

console.log(obtenerConductorEstrella(historialViajes));
/* RESULTADO ESPERADO:
"Brian" 
(Porque Brian sumó $1000 en total, ganándole a Carlos que sumó $900 y a Gabriela con $600)
*/
