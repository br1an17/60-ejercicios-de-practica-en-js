// Crear una función llamada obtenerDestinoFavorito.
// Recibe un array de reservas.
// Cada reserva tiene:
// - pasajero
// - destino
// - completada
// Debes considerar SOLAMENTE las reservas completadas.
// La función debe devolver el nombre del destino
// que haya sido reservado por más pasajeros.
// Si Madrid aparece 5 veces y Roma 3,
// debes devolver "Madrid".
// REGLAS:
// 1. Debes usar al menos un método avanzado de arrays.
// 2. No usar for.
// 3. No usar forEach.
// 4. Devolver solamente el nombre del destino ganador.

function obtenerDestinoFavorito(reservas) {
    let destino =""
  let reservadas = reservas.filter((reserva) => reserva.completada);
  let destinos = reservadas.map((reserva) => reserva.destino);
  const contador = destinos.reduce(
    (acumulador, destino) => {
      acumulador[destino] = (acumulador[destino] || 0) + 1;

      return acumulador;
    },

    {},
  );
  let destinoGanador = 0;
  for (const valor in contador) {
    if (contador[valor] > destinoGanador) {
      destinoGanador = contador[valor];
      destino = valor
    }
  }
  return destino
}
//Datos de prueba
const reservas = [
  { pasajero: "Ana", destino: "Madrid", completada: true },
  { pasajero: "Luis", destino: "Roma", completada: true },
  { pasajero: "Pedro", destino: "Madrid", completada: true },
  { pasajero: "Carlos", destino: "París", completada: false },
  { pasajero: "Marta", destino: "Roma", completada: true },
  { pasajero: "Juan", destino: "Madrid", completada: true },
];
console.log(obtenerDestinoFavorito(reservas));
