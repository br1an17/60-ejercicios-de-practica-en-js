// Queremos crear una clase llamada Hotel.
// El constructor debe recibir dos datos: nombre y precioPorNoche.
// Debe tener un método llamado calcularEstadia que reciba como parámetro la cantidad de noches (un número) y devuelva el precio total (multiplicando el precio por noche por la cantidad de noches).

class Hotel {
  constructor(nombre, precioPorNoche) {
    this.nombre = nombre;
    this.precioPorNoche = precioPorNoche;
  }
  calcularEstadia(numero) {
    let precioTotal = this.precioPorNoche * numero;

    return precioTotal;
  }
}

// --- DATOS DE PRUEBA (Para verificar en tu consola) ---
const miHotel = new Hotel("Hotel Mar del Plata", 5000);

console.log(miHotel.nombre);
console.log(miHotel.calcularEstadia(3));
export default Hotel;
