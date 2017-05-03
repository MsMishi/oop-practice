
function Frame(color, size, style) {
  // your code here
  this.color = color;
  this.size = size;
  this.style = style;
};

//let frame = new Frame('black', 55, 'street');


function Tire(diameter, type) {
  // your code here
  this.diameter = diameter;
  this.type = type;
};

function Bike(name, price) {
  this.name = 'Speedster';
  this.price = 250.00;
  rings: [3, 7];
};


let myBike = new Bike('Speedster', 250.00);
/*let customFrame = new Frame('red', 58, 'racing');
let customTires = [new Tire(24, 'racing'), new Tire(24, 'racing')];
*/
module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
