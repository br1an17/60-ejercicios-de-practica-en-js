// Tu objetivo: Modificar la función para que no use ningún array auxiliar ([]).
//  Tenés que dar vuelta los elementos adentro del mismo array original
//  que entra por parámetro y retornarlo modificado.

// >> NUEVAS REGLAS DE ORO:
// 1. PROHIBIDO usar un array secundario (nada de let nuevo = []).
// 2. Tenés que ir intercambiando los elementos de las puntas hacia el centro.
// 3. Tip: Pensá que si das vuelta un array de 4 elementos, solo necesitas hacer 2 intercambios.

function invertirDestinosEnElMismo(lista) {
  let inicio = "";
  let final = "";

  for (let i = 0; i < lista.length / 2; i++) {
    inicio = lista[i];
    final = lista[lista.length - 1 - i];
    lista[i] = final;
    lista[lista.length - 1 - i] = inicio;
  }

  return lista;
}

// --- DATOS DE PRUEBA ---
const escalaIda = ["Buenos Aires", "Madrid", "Roma", "París"];

console.log(invertirDestinosEnElMismo(escalaIda));
// RESULTADO ESPERADO: ["París", "Roma", "Madrid", "Buenos Aires"]
