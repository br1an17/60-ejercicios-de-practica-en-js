// Tu objetivo: Crear una función llamada invertirDestinos que reciba un array
//  y devuelva un nuevo array con los mismos elementos pero en el orden inverso.

// >> REGLAS DE ORO:
// 1. PROHIBIDO usar el método .reverse().
// 2. Tenés que crear un array nuevo vacío e ir rellenándolo.
// 3. Tip: Pensá desde dónde tendría que arrancar tu bucle 'for' tradicional
//    para empezar a mirar el array original desde el ÚLTIMO elemento.

function invertirDestinos(lista) {
  let nuevoArray = [];
  for (let i = (lista.length-1); i >= 0; i--) {
    nuevoArray.push(lista[i]);
  }
  return nuevoArray;
}

// --- DATOS DE PRUEBA ---
const escalaIda = ["Buenos Aires", "Madrid", "Roma", "París"];

console.log(invertirDestinos(escalaIda));
/* RESULTADO ESPERADO:
["París", "Roma", "Madrid", "Buenos Aires"]
*/
