// Crear una función llamada obtenerDestinoMasRentable
// que reciba un array de reservas.
// Cada reserva tiene:
// - pasajero
// - destino
// - precio
// - confirmada
// La función debe devolver el nombre del destino
// que haya generado MÁS dinero considerando
// SOLO las reservas confirmadas.
// Si un destino tiene varias reservas, debe sumarse todo lo facturado por ese destino.

const obtenerDestinoMasRentable = (reservas) => {
  let lugaresPrecios = {};

  
  reservas.forEach((reserva) => {
    if (reserva.confirmada) {
      lugaresPrecios[reserva.destino] =
        (lugaresPrecios[reserva.destino] || 0) + reserva.precio;
    }
  });

  let valorMaximo = 0;
  let destinoGanador = "";


  for (const destino in lugaresPrecios) {
    const precioTotal = lugaresPrecios[destino];

    if (precioTotal > valorMaximo) {
      valorMaximo = precioTotal;
      destinoGanador = destino;
    }
  }

  return destinoGanador;
};

const reservas = [
  { pasajero: "Ana", destino: "Madrid", precio: 800, confirmada: true },
  { pasajero: "Luis", destino: "Roma", precio: 500, confirmada: true },
  { pasajero: "Pedro", destino: "Madrid", precio: 700, confirmada: true },
  { pasajero: "Sofía", destino: "París", precio: 900, confirmada: true },
  { pasajero: "Carlos", destino: "Roma", precio: 400, confirmada: false },
  { pasajero: "Juan", destino: "París", precio: 300, confirmada: true },
];

console.log(obtenerDestinoMasRentable(reservas));
