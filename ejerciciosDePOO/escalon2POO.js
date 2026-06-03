// Queremos crear una clase llamada HotelVip que herede de la clase Hotel.
// Su constructor debe recibir tres datos: nombre, precioPorNoche y servicioLimpieza
// (un booleano true o false).
// Adentro del constructor, debés usar super() para pasarle el nombre y precioPorNoche
// a la clase padre Hotel, y luego guardar la propiedad propia (this.servicioLimpieza).
// Debe tener un método propio llamado mostrarServicio que verifique si servicioLimpieza es true.
// Si es verdadero, debe devolver el string "Tiene limpieza incluida". Si es falso, debe devolver "No tiene limpieza incluida".
import Hotel from "./escalon1POO.js";

class HotelVip extends Hotel {
  constructor(nombre, precioPorNoche, servicioDeLimpieza) {
    super(nombre, precioPorNoche);
    this.servicioDeLimpieza = servicioDeLimpieza;
  }
  mostrarServicio() {
    if (this.servicioDeLimpieza) {
      return "Tiene limpieza incluida";
    } else {
      return "No tiene limpieza incluida";
    }
  }
}

let hotelVip = new HotelVip("pepe", 500, true);

console.log(hotelVip);
export default HotelVip;
