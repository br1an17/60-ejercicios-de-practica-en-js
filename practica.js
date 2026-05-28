class CuentaBancaria {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  depositar(monto) {
    this.saldo = this.saldo + monto;
    console.log(
      `Se ha depositado ${monto} en la cuenta de ${this.nombre}. El nuevo saldo es ${this.saldo}.`,
    );
  }

  retirar(monto) {
    if (monto > this.saldo) {
      console.log(
        `No se puede retirar ${monto} de la cuenta de ${this.nombre}. Saldo insuficiente.`,
      );
    } else {
      this.saldo = this.saldo - monto;
      console.log(
        `Se ha retirado ${monto} de la cuenta de ${this.nombre}. El nuevo saldo es ${this.saldo}.`,
      );
    }
  }
mostrarSaldo() {
    console.log(`El saldo actual de la cuenta de ${this.nombre} es ${this.saldo}.`);
  }

}
