// Tu objetivo: Crear una función llamada filtrarHotelesAdecuados
//  que reciba un array de hoteles y un precioMaximo.
//  La función debe devolver un nuevo array
//  que contenga únicamente los nombres (solo el string con el nombre)
//  de los hoteles que cumplan con dos condiciones:
// Que acepten mascotas (mascotas: true).
// Que el precio por noche sea menor o igual al precioMaximo.
// >> REGLAS DE ORO:
// 1. Prohibido usar 'for' o 'forEach'. Usá métodos avanzados de arrays.
// 2. Respetá el nombre exacto de la función.
// 3. Devolve solo un array de strings (los nombres).

function filtrarHotelesAdecuados(hoteles, precioMaximo) {

  let hotelesAcordesAlPrecio = hoteles.filter(hotel=>hotel.precioNoche<=precioMaximo && hotel.mascotas)
  let hotelesDisponibles = hotelesAcordesAlPrecio.map(hotel=>hotel.nombre)
  return hotelesDisponibles

}

// --- DATOS DE PRUEBA ---
const listaHoteles = [
  { nombre: "Hotel Alvear", precioNoche: 450, mascotas: false },
  { nombre: "Hostel Plaza", precioNoche: 120, mascotas: true },
  { nombre: "Caballito Blanco", precioNoche: 250, mascotas: true },
  { nombre: "Sheraton", precioNoche: 500, mascotas: true },
  { nombre: "Complejo Sol", precioNoche: 180, mascotas: false },
];

console.log(filtrarHotelesAdecuados(listaHoteles, 300));
/* RESULTADO ESPERADO:
["Hostel Plaza", "Caballito Blanco"]
*/
