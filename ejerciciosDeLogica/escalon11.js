// Crear una función llamada obtenerSucursalMasEficiente
// Recibe un array de ventas.
// Cada venta tiene:
// - sucursal
// - monto
// - completada
// Debes considerar SOLAMENTE las ventas completadas.
// La sucursal más eficiente será aquella que tenga:
// montoTotalFacturado / cantidadVentas
// más alto.
// La función debe devolver únicamente el nombre
// de la sucursal ganadora.

let obtenerSucursalMasEficiente = (ventas) => {
  let sucursales = {};
  ventas.forEach((venta) => {
    if (venta.completada) {
      if (!sucursales[venta.sucursal]) {
        sucursales[venta.sucursal] = { total: venta.monto, cantidad: 1 };
      } else {
        sucursales[venta.sucursal].total =
          sucursales[venta.sucursal].total + venta.monto;
        sucursales[venta.sucursal].cantidad =
          sucursales[venta.sucursal].cantidad + 1;
      }
    }
  });

  let valorFinal = 0;
  let sucursalGanadora = "";
  for (const sucursal in sucursales) {
    const valor = sucursales[sucursal].total;
    const cantidad = sucursales[sucursal].cantidad;
    const valorMaximo = valor / cantidad;

    if (valorMaximo > valorFinal) {
      valorFinal = valorMaximo;
      sucursalGanadora = sucursal;
    }
  }
  return sucursalGanadora;
};

const ventas = [
  { sucursal: "Palermo", monto: 1000, completada: true },
  { sucursal: "Belgrano", monto: 500, completada: true },
  { sucursal: "Palermo", monto: 500, completada: true },
  { sucursal: "Caballito", monto: 1200, completada: true },
  { sucursal: "Belgrano", monto: 1500, completada: true },
  { sucursal: "Caballito", monto: 800, completada: false },
];

console.log(obtenerSucursalMasEficiente(ventas));
