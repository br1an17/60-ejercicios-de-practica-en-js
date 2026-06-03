// Tu objetivo: Crear una función llamada agruparPasajerosPorCategoria que reciba un array de objetos (pasajeros). Cada pasajero tiene un nombre y una categoria. La función debe devolver un único objeto donde las propiedades sean las categorías y los valores sean un array con los nombres de los pasajeros que pertenecen a esa categor
function agruparPasajerosPorCategoria(pasajeros) {
  let categorias = {
    gold: [],
    classic: [],
    diamond: [],
  };
  pasajeros.forEach((pasajero) => {
    let categoriaFinal = pasajero.categoria
    categoriaFinal = categoriaFinal.toLowerCase()
  

    switch (categoriaFinal) {
      case "gold":
        categorias.gold.push(pasajero.nombre);
        break;
      case "classic":
        categorias.classic.push(pasajero.nombre);
        break;
      case "diamond":
        categorias.diamond.push(pasajero.nombre);
        break;
      default:
        return "no existe esa categoria";
        break;
    }
     
});
return categorias;
}

// --- DATOS DE PRUEBA ---
const listaPasajeros = [
  { nombre: "Ana", categoria: "Gold" },
  { nombre: "Luis", categoria: "Classic" },
  { nombre: "Pedro", categoria: "Gold" },
  { nombre: "Sofía", categoria: "Diamond" },
  { nombre: "Carlos", categoria: "Classic" },
];

console.log(agruparPasajerosPorCategoria(listaPasajeros));
/* RESULTADO ESPERADO:
{
    Gold: ["Ana", "Pedro"],
    Classic: ["Luis", "Carlos"],
    Diamond: ["Sofía"]
}
*/
