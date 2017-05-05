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
    this.
  }

}

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  //BMXBike: BMXBike,
  //RacingBike: RacingBike,
}
