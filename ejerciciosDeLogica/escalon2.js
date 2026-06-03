// Crear una función llamada calcularTotalVentas
// que reciba un array de ventas.
// Cada venta tiene:
// - producto
// - precio
// - cantidad
// La función debe devolver:
// el total de dinero generado SOLO por las ventas
// cuya cantidad sea mayor a 2.
const ventas = [
  { producto: "Notebook", precio: 800, cantidad: 1 },
  { producto: "Mouse", precio: 25, cantidad: 4 },
  { producto: "Teclado", precio: 50, cantidad: 3 },
  { producto: "Monitor", precio: 300, cantidad: 1 },
];

const calcularTotalVentas = (ventas) => {
  let valorVentasTotal = 0;
 
  ventas.forEach((e) => {
    if (e.cantidad > 2) {
       valorVentasTotal += e.cantidad * e.precio
    }
  })
  return valorVentasTotal;
};


console.log(calcularTotalVentas(ventas))
// Resultado esperado:
// 250
