function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
  alert(this.name + " bounces!");
};

/* By assigning Animal.prototype to Rabbit.prototype we will end up overriding the Rabbit function when calling animals. To counter this we have to use: */
Rabbit.prototype.__proto__= Animal.prototype;
//or
Rabbit.prototype = Object.create(Animal.prototype);
