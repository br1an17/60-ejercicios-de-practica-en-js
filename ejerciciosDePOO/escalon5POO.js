//Creá una clase llamada Vuelo.
// Su constructor debe recibir:
// - destino
// - precio
// - disponible
// Guardá esos valores utilizando this.
// --------------------------------------------------
// Creá una clase llamada Aerolinea.
// Su constructor no recibe parámetros.
// Debe inicializar:
// this.listaVuelos = []
// --------------------------------------------------
// Creá un método llamado agregarVuelo(vuelo)
// que agregue el vuelo recibido al array usando push().
// --------------------------------------------------
// Creá un método llamado obtenerDestinosDisponibles()
// Debe usar:
// - filter()
// - map()
// Tiene que devolver un array con los destinos
// de los vuelos que estén disponibles.
// Ejemplo: ["Madrid", "París", "Londres"]
// --------------------------------------------------
// Creá un método llamado calcularFacturacionDisponible()
// Debe usar:
// - filter()
// - reduce()
// Tiene que devolver la suma total de los precios
// de los vuelos que estén disponibles.

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
  obtenerDestinosDisponibles() {
    let vuelosDisponibles = this.listaVuelos.filter(
      (vuelo) => vuelo.disponible === true,
    );
    return vuelosDisponibles.map((vuelo) => vuelo.destino);
  }
  calcularFacturacionDisponible() {
    let vuelosDisponibles = this.listaVuelos.filter(
      (vuelo) => vuelo.disponible === true,
    );
    return vuelosDisponibles.reduce((acumulador, vuelo) => acumulador + vuelo.precio,
      0)
  }
}

const miAerolinea = new Aerolinea();

miAerolinea.agregarVuelo(new Vuelo("Madrid", 1200, true));

miAerolinea.agregarVuelo(new Vuelo("Roma", 900, false));

miAerolinea.agregarVuelo(new Vuelo("París", 1100, true));
console.log(miAerolinea.obtenerDestinosDisponibles());
console.log(miAerolinea.calcularFacturacionDisponible());
