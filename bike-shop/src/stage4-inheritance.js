class Frame {
  constructor(style){
    this.style = style
  }
}

class Tire {
constructor(diameter, type){
  this.diameter = diameter
  this.type = type
}
}

class Bike {
  constructor() {
    this.frame = new Frame()
    this.tires = [new Tire(), new Tire()]
  }
}
class MountainBike extends Bike {
  constructor() {
  super();
  this.frame.style = "mountain"
  this.tires[0].type = "dirt"
  this.tires[1].type = "dirt"
  this.shocks = 20
}
  adjustShocks(newSagSetting){
    this.shocks = newSagSetting
  }
}

class BMXBike extends Bike {
  constructor() {
    super();
    this.brakes = {
      front: false,
      back: true
    }
    this.tires[0].diameter = 20
    this.tires[1].diameter = 20
  }
}

class RacingBike extends Bike {
  constructor() {
    super();
    this.frame.style = "racing"
    this.tires[0].type = "road"
    this.tires[1].type = "road"
    this.rings = [3, 10]
  }
  gearSpeeds(){
    return this.rings[0] * this.rings[1]
  }
}

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike,
}
