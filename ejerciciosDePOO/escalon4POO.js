// Clase Hotel:
// Debe tener un constructor que reciba nombre y precio. Guardalos con this.nombre y this.precio.
// Clase Agencia:
// Su constructor no recibe parámetros. Debe inicializar this.lista como un array vacío [].
// Debe tener un método agregar(unHotel) que meta ese hotel adentro del array this.lista usando .push().
// Debe tener un método llamado obtenerPresupuestoTotal() que use el .reduce() para sumar el precio de todos los hoteles que estén en la lista y retorne el resultado.

class Hotel {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
class Agencia {
  constructor() {
    this.lista = [];
  }
  agregar(unHotel) {
    this.lista.push(unHotel);
  }
  obtenerPresupuestoTotal() {
    return this.lista.reduce(
      (acumulador, hotel) => acumulador + hotel.precio,
      0,
    );
  }
}
const miAgencia = new Agencia();

const hotel1 = new Hotel("Ibis Mendoza", 3000);
const hotel2 = new Hotel("Sheraton Salta", 7000);

miAgencia.agregar(hotel1);
miAgencia.agregar(hotel2);

console.log("--- Verificación ---");
console.log("Total esperado: 10000");
console.log("Tu resultado: ", miAgencia.obtenerPresupuestoTotal());
