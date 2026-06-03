// Crear una función llamada:
// generarReporteDestinos
// que reciba un array de reservas y devuelva un objeto
//Reglas
// totalFacturado
// Suma de los precios de las reservas confirmadas.
// cantidadReservas
// Cantidad de reservas confirmadas.
// destinoMasReservado
// Debe contener el nombre del destino que aparece más veces entre las reservas confirmadas.
const generarReportesDestino = (reservas) => {
  let valoresReserva = {
    totalFacturado: 0,
    cantidadReservas: 0,
    destinoMasReservado: "",
  };
  let contadorCoinsidencias = 0;

  for (let i = 0; i < reservas.length; i++) {
    if (reservas[i].confirmada) {
      valoresReserva.totalFacturado += reservas[i].precio;
      valoresReserva.cantidadReservas++;

      let destinoMasBuscado = reservas[i].destino;
      let contadorDestino = 0;
      for (let j = 0; j < reservas.length; j++) {
        if (destinoMasBuscado === reservas[j].destino) {
          contadorDestino++;
        }
      }
      if (contadorDestino > contadorCoinsidencias) {
        contadorCoinsidencias = contadorDestino;
        valoresReserva.destinoMasReservado = destinoMasBuscado;
      }
    }
  }
  return valoresReserva;
};

//Datos de prueba
const reservas = [
  { pasajero: "Ana", destino: "Madrid", precio: 800, confirmada: true },
  { pasajero: "Luis", destino: "Roma", precio: 600, confirmada: false },
  { pasajero: "Pedro", destino: "Madrid", precio: 700, confirmada: true },
  { pasajero: "Sofía", destino: "París", precio: 900, confirmada: true },
  { pasajero: "Juan", destino: "Madrid", precio: 500, confirmada: true },
];
//{
//   totalFacturado: 2900,
//   cantidadReservas: 4,
//   destinoMasReservado: "Madrid"
// }
console.log(generarReportesDestino(reservas))