
function Frame(color ='black', size = 55, style = 'street') {
  this.color = color;
  this.size = size;
  this.style = style
};

function Tire(diameter = 22, type = 'street') {
  this.diameter = diameter;
  this.type = type;
};

function Bike(name = 'Speedster', price = 250.00) {
  this.name = name;
  this.price = price;
  this.frame = new Frame();
  this.tires = [new Tire(), new Tire()];
  this.rings = [3, 7];
  this.brakes =  {
    front: true,
    back: true,
  };
};


/* let customFrame = new Frame('red', 58, 'racing');
let customTires = [new Tire(24, 'racing'), new Tire(24, 'racing')];
*/
module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
