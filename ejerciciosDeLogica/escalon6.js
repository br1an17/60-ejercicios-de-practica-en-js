// Tu objetivo: Crear una función llamada calcularTotalPedidosConfirmados
// que reciba un array de pedidos.
//
// Cada pedido tiene:
// - cliente
// - monto
// - confirmado
//
// La función debe devolver el total de dinero generado
// SOLO por los pedidos confirmados.

const pedidos = [
  { cliente: "Ana", monto: 120, confirmado: true },
  { cliente: "Luis", monto: 80, confirmado: false },
  { cliente: "Pedro", monto: 200, confirmado: true },
  { cliente: "Sofía", monto: 150, confirmado: true },
  { cliente: "Juan", monto: 90, confirmado: false },
];

// RESULTADO ESPERADO:
// 470

function calcularTotalPedidosConfirmados(pedidos) {
  let montoTotal = 0;

  pedidos.forEach((pedido) => {
    if (pedido.confirmado) montoTotal += pedido.monto;
  });
  return montoTotal;
}

console.log(calcularTotalPedidosConfirmados(pedidos))