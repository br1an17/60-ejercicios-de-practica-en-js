// Clase Hotel:
// Debe tener un constructor que reciba nombre y precio. Guardalos con this.nombre y this.precio.
// Clase Agencia:
// Su constructor no recibe parámetros. Debe inicializar this.lista como un array vacío [].
// Debe tener un método agregar(unHotel) que meta ese hotel adentro del array this.lista usando .push().
// Debe tener un método llamado obtenerPresupuestoTotal() que use el .reduce() para sumar el precio de todos los hoteles que estén en la lista y retorne el resultado.

/*-------------------------------
CONSIGNA 2
Vamos a agregarle un nuevo método a tu clase Agencia llamado obtenerHotelesBaratos().
Este método debe usar el método .filter() para recorrer this.lista.
Debe devolver un nuevo array que contenga únicamente los hoteles cuyo precio sea menor a 5000.
*/

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

  obtenerValorTotalDeHotelesBaratos() {
    let hotelesBaratos = this.lista
      .filter((hotel) => hotel.precio < 5000)
      .reduce((acumulador, hotel) => acumulador + hotel.precio,0);
    return hotelesBaratos;
  }
}

// --- DATOS DE PRUEBA ACTUALIZADOS ---
const miAgencia = new Agencia();

miAgencia.agregar(new Hotel("Ibis Mendoza", 3000)); // Debería entrar en el filtro
miAgencia.agregar(new Hotel("Sheraton Salta", 7000)); // Debería quedar afuera
miAgencia.agregar(new Hotel("Hotel Centro", 1500)); // Debería entrar en el filtro

console.log("--- Verificación del Filtro ---");
console.log(miAgencia.obtenerValorTotalDeHotelesBaratos());
// Debería mostrar un array con DOS hoteles: Ibis Mendoza y Hotel Centro
