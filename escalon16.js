// Crear una función llamada ordenarPreciosBurbuja que reciba
//  un array de números (precios) y devuelva el mismo array ordenado
//  de menor a mayor utilizando el algoritmo de Ordenamiento Burbuja.

function ordenarPreciosBurbuja(lista) {
  let contenedor = "";
  let contenedorInicial = "";
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length - 1; j++) {
      contenedorInicial =lista[j] 
        contenedor = lista[j+1];
      if (contenedor < contenedorInicial) {
 lista[j] = contenedor
 lista[j+1] = contenedorInicial
       
      }
    }
  }
  return lista;
}

// --- DATOS DE PRUEBA ---
const preciosVuelos = [1200, 450, 850, 300, 950];

console.log(ordenarPreciosBurbuja(preciosVuelos));
// RESULTADO ESPERADO: [300, 450, 850, 950, 1200]
