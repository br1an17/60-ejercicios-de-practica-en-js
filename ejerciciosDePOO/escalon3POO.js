// Creá una clase llamada Agencia (podés meterla en un archivo
//  nuevo escalon3POO.js o ahí mismo abajo para no renegar).
// Su constructor no recibe parámetros,
//  pero inicializa this.listaHoteles = [] (un array vacío).
// Tiene el método agregarHotel(hotel) que mete el objeto adentro del array usando .push().
// Tiene el método calcularTotalHoteles()
//  que usa .reduce() para sumar y devolver la propiedad precioPorNoche
//  de todos los hoteles de la lista.

import Hotel from "./escalon1POO.js";

class Agencia {
  constructor() {
    this.listaHoteles = [];
  }
  agregarHotel(hotel) {
    this.listaHoteles.push(hotel);
  }
  calcularTotalHoteles() {
 return this.listaHoteles.reduce(
      (acumulador, hotel) => acumulador + hotel.precioPorNoche, 0
    );
    
  }
}
export default Agencia;

// --- DATOS DE PRUEBA (Asegurate de tener importado HotelVip si estás en otro archivo) ---
const miAgencia = new Agencia();

// Usamos objetos literales simples para probar rápido que la cuenta funcione:
const h1 = { nombre: "Hotel Económico", precioPorNoche: 2000 };
const h2 = { nombre: "Hotel Premium", precioPorNoche: 8000 };

miAgencia.agregarHotel(h1);
miAgencia.agregarHotel(h2);

console.log("El total esperado es 10000:");
console.log(miAgencia.calcularTotalHoteles());
