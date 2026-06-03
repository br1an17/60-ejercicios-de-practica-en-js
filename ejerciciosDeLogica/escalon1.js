// Tu misión es crear una función llamada procesarInventario
//  que reciba ese array y devuelva un nuevo array que solo contenga
//  los nombres de los productos que cumplen dos condiciones:
// Su precio es mayor a $100.
// Tienen stock disponible (es decir, el stock es mayor a 0).


const procesarInventario = (array) => {
  let newArray = [];
  array.forEach((e) => {
    if (e.precio > 100 && e.stock != 0) {
      newArray.push(e.nombre);
    }
  });
  return newArray;
};

const inventario = [
  { nombre: "Teclado Mecánico", precio: 120, stock: 5 },
  { nombre: "Mouse Pad", precio: 15, stock: 10 },
  { nombre: "Monitor 4K", precio: 450, stock: 0 }, // No hay stock
  { nombre: "Auriculares Gamer", precio: 180, stock: 2 },
  { nombre: "Cable HDMI", precio: 90, stock: 20 }, // Precio bajo
];

const resultado = procesarInventario(inventario);
console.log("Productos aprobados:", resultado);

// EL RESULTADO ESPERADO TIENE QUE SER:

// ["Teclado Mecánico", "Auriculares Gamer"]
