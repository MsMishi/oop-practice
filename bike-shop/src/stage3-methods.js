function Bike(name = 'Speedster', price = 250.00) {
  this.name = name
  this.price = price
  this.frame = new Frame()
  this.tires = [new Tire(), new Tire()]
  this.rings = [3, 7]
  this.brakes =  {
    front: true,
    back: true,
  }
  this._isMoving = false
}

Bike.prototype.isMoving = function() {
  return this._isMoving
}

/*Bike.protoype.gearSpeeds = function() {
 return this.rings[0] * this.rings[1]
} */

Bike.prototype.pedal = function() {
  if (this.pedal = false) {
  return this._isMoving = false
} else if (this.pedal = true) {
  return this._isMoving = true
}
}

Bike.prototype.brake = function() {
  this._isMoving = false
}
  function Frame(color ='black', size = 55, style = 'street') {
    this.color = color
    this.size = size
    this.style = style
  }


function Tire(diameter = 22, type = 'street') {
  this.diameter = diameter
  this.type = type
  this._isFlat = false
}

Tire.prototype.isFlat = function(){
  return this._isFlat
}

Tire.prototype.puncture = function(){
  return this._isFlat = true
  }
Tire.prototype.repair = function() {
  return this._isFlat = false
}
module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire,
}
