//EJERCICIO1
// //Creá una clase llamada Vuelo.
// Su constructor debe recibir: - destino - precio- disponible
// Guardá esos valores utilizando this.
// Creá una clase llamada Aerolinea.
// Su constructor no recibe parámetros.
// Debe inicializar:
// this.listaVuelos = []
// Creá un método llamado agregarVuelo(vuelo)
// que agregue el vuelo recibido al array.
// Creá un método llamado obtenerDestinosDisponibles
// Tiene que devolver un array con los destinos
// de los vuelos que estén disponibles.
// Ejemplo: ["Madrid", "París", "Londres"]
// Creá un método llamado calcularFacturacionDisponible
// Tiene que devolver la suma total de los precios
// de los vuelos que estén disponibles.

//EJERCICIO2
//Agrega los siguientes Metodos y simplifica el codigo
// Método buscarVuelosPorPresupuesto(precioMaximo):
// Debe recibir un número (precioMaximo).
// Debe usar .filter() para devolver un array con todos los objetos Vuelo cuyo precio sea menor o igual al presupuesto ingresado.
// Método obtenerOfertasDeTemporada():
// Debe buscar los vuelos que están disponibles (pista: podés reusar el filtro de disponible === true).
// A esos vuelos disponibles, les debe aplicar un 20% de descuento en su precio usando .map().

class Vuelo {
  constructor(destino, precio, disponible) {
    this.destino = destino;
    this.precio = precio;
    this.disponible = disponible;
  }
}
class Aerolinea {
  constructor() {
    this.listaVuelos = [];
  }
  agregarVuelo(vuelo) {
    this.listaVuelos.push(vuelo);
  }
  filtrarVuelosDisponibles() {
    let vuelosDisponibles = this.listaVuelos.filter(
      (vuelo) => vuelo.disponible === true,
    );
    return vuelosDisponibles;
  }

  obtenerDestinosDisponibles() {
    let destinosDisponibles = this.filtrarVuelosDisponibles();
    return destinosDisponibles.map((vuelo) => vuelo.destino);
  }
  calcularFacturacionDisponible() {
    let vuelosParaFacturar = this.filtrarVuelosDisponibles();
    return vuelosParaFacturar.reduce(
      (acumulador, vuelo) => acumulador + vuelo.precio,
      0,
    );
  }
  buscarVuelosPorPresupuesto(precioMaximo) {
    let vuelosLostCost = this.listaVuelos.filter(
      (vuelo) => vuelo.precio <= precioMaximo,
    );
    return vuelosLostCost;
  }
  obtenerOfertasDeTemporada() {
 let vuelosOfertaTemporada = this.filtrarVuelosDisponibles();
return vuelosOfertaTemporada.map(vuelo => {
    return {
        destino: vuelo.destino,
        precioConDescuento: vuelo.precio * 0.8 
    };
});
  }
}

// --- DATOS DE PRUEBA AMPLIADOS ---
const miAerolinea = new Aerolinea();
miAerolinea.agregarVuelo(new Vuelo("Madrid", 1200, true));
miAerolinea.agregarVuelo(new Vuelo("Roma", 900, false));
miAerolinea.agregarVuelo(new Vuelo("París", 1100, true));
miAerolinea.agregarVuelo(new Vuelo("Bariloche", 400, true));

console.log("--- Verificación Presupuesto (Máximo 1000) ---");
console.log(miAerolinea.buscarVuelosPorPresupuesto(1000));
// Debería mostrar un array con: Roma y Bariloche

console.log("--- Verificación Ofertas (20% OFF a los disponibles) ---");
console.log(miAerolinea.obtenerOfertasDeTemporada());
// Debería mostrar Madrid a 960, París a 880 y Bariloche a 320
