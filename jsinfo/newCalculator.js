function calculator() {
  sum() {
   return this.a + this.b;
  },
  mul() {
  return this.a * this.b;
  },
  read() {
   this.a = +prompt('a?', 0);
   this.b = +prompt('b?', 0);
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
