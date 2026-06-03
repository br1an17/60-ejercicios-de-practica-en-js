// EJERCICIO 7 POO
// Creá una clase llamada Empleado.
// Su constructor recibe:- nombre- salarioBase
// Guardá todo usando this.
// --------------------------------------------------
// Creá un método llamado obtenerSalario()
// Debe devolver salarioBase.
// -------------------------------------------------
// Creá una clase llamada EmpleadoComision
// que herede de Empleado.
// Además recibe:- ventasRealizadas- comisionPorVenta
// --------------------------------------------------
// Sobrescribí el método obtenerSalario()
// Debe devolver:
// salarioBase +
// (ventasRealizadas * comisionPorVenta)
// --------------------------------------------------
// Creá una clase llamada Empresa.
// Su constructor debe inicializar:
// this.empleados = []
// --------------------------------------------------
// Creá un método agregarEmpleado(empleado)
// que agregue el empleado al array.
// --------------------------------------------------
// Creá un método llamado obtenerNominaTotal()
// Debe usar reduce()
// Debe sumar:
// empleado.obtenerSalario()
// de TODOS los empleados.
// --------------------------------------------------
// Creá un método llamado obtenerEmpleadoMejorPago()
// Debe devolver SOLAMENTE
// el nombre del empleado que más dinero gana.

class Empleado {
  constructor(nombre, salarioBase) {
    this.nombre = nombre;
    this.salarioBase = salarioBase;
  }
  obtenerSalario() {
    return this.salarioBase;
  }
}

class EmpleadoComision extends Empleado {
  constructor(nombre, salarioBase, ventasRealizadas, comisionPorVenta) {
    super(nombre, salarioBase);
    this.ventasRealizadas = ventasRealizadas;
    this.comisionPorVenta = comisionPorVenta;
  }
  obtenerSalario() {
    return this.salarioBase + this.ventasRealizadas * this.comisionPorVenta;
  }
}
class Empresa {
  constructor() {
    this.empleados = [];
  }
  agregarEmpleado(empleado) {
    this.empleados.push(empleado);
  }
  obtenerNominaTotal() {
    let nomina = this.empleados.reduce(
      (acumulador, empleado) => acumulador + empleado.obtenerSalario(),
      0,
    );
    return nomina;
  }
  // obtenerEmpleadoMejorPago() {
  //   let EmpleadoMejorPago = this.empleados.sort().reverse();
  //   return EmpleadoMejorPago[0].nombre;
  // }
  obtenerEmpleadoMejorPago() {
    let empleadoMejorPago = this.empleados[0]
    this.empleados.forEach((empleado) => {
      if (empleado.obtenerSalario() > empleadoMejorPago.obtenerSalario()) {
        empleadoMejorPago = empleado

      }
    });
    return empleadoMejorPago.nombre
  }
}

const empresa = new Empresa();

empresa.agregarEmpleado(new Empleado("Ana", 1000));

empresa.agregarEmpleado(new EmpleadoComision("Luis", 900, 10, 50));

empresa.agregarEmpleado(new EmpleadoComision("Pedro", 1200, 5, 100));

empresa.agregarEmpleado(new Empleado("Marta", 1500));


console.log(empresa.obtenerNominaTotal());

// Resultado esperado:
// 5600

console.log(empresa.obtenerEmpleadoMejorPago());
