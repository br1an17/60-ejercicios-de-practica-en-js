// Crear una función llamada generarReporteVentas
// que reciba un array de ventas.
// Cada venta tiene:
// - vendedor
// - monto
// - aprobada (boolean)
// La función debe devolver un objeto con:
// {
//   totalAprobadas: suma total de montos aprobados,
//   cantidadAprobadas: cantidad de ventas aprobadas,
//   vendedores: array con nombres de vendedores aprobados SIN repetir
// }

const ventas = [
  { vendedor: "Ana", monto: 500, aprobada: true },
  { vendedor: "Luis", monto: 300, aprobada: false },
  { vendedor: "Ana", monto: 200, aprobada: true },
  { vendedor: "Carlos", monto: 700, aprobada: true },
];

/*
RESULTADO ESPERADO:

{
  totalAprobadas: 1400,
  cantidadAprobadas: 3,
  vendedores: ["Ana", "Carlos"]
}
*/

function generarReporteVentas(ventas) {
  let objetoLista = {
    totalAprobadas: 0,
    cantidadAprobadas: 0,
    vendedores: [],
  };

  ventas.forEach((venta) => {
    if (venta.aprobada) {
      objetoLista.cantidadAprobadas++;
      objetoLista.totalAprobadas += venta.monto;
      if (!objetoLista.vendedores.includes(venta.vendedor)) {
        objetoLista.vendedores.push(venta.vendedor);
      }
    }
  });
  return objetoLista;
}
console.log(generarReporteVentas(ventas));
