// Contexto: Estás ordenando el ranking de usuarios que más interactuaron
// con la plataforma de Despegar para darles un premio.
// Tu objetivo: Crear una función llamada obtenerTopVendedor
// que reciba un array de objetos (vendedores).
//  Cada objeto tiene un nombre (string) y un totalPuntos (número entero).
//  La función debe devolver el nombre del vendedor que tenga el puntaje más alto.

// >> REGLA DE ORO: Respetá el nombre exacto de la función y usá nombres de variables limpios.
function obtenerTopVendedor(vendedores) {
  let mejorVendedor = vendedores[0];

  for (let i = 1; i < vendedores.length; i++) {
    if (vendedores[i].totalPuntos > mejorVendedor.totalPuntos) {
     mejorVendedor = vendedores[i];
    }
   
  }
    return "El vendedor con el puntaje mas alto fue "+ mejorVendedor.nombre ;
}

// --- DATOS DE PRUEBA ---
const ranking = [
  { nombre: "Mariana", totalPuntos: 450 },
  { nombre: "Pedro", totalPuntos: 1200 },
  { nombre: "Sol", totalPuntos: 890 },
  { nombre: "Roberto", totalPuntos: 1500 },
  { nombre: "Julieta", totalPuntos: 300 },
];

console.log(obtenerTopVendedor(ranking));
// RESULTADO ESPERADO:
// "Roberto"
