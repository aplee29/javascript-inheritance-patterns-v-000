function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  // call Shape constructor
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

//inherit from Shape prototype
Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

//extend Quadrilateral
Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}

function Rectangle(x, y, width, height) {
  //call Quadrilateral constructor
  Quadrilateral.call(this, x, y, width, height, width, height);
  //set rectangle values
  this.width = width;
  this.height = height;
}
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Quadrilateral.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(x, y, length) {
  //call Rectangle constructor
  Rectangle.call(this, x, y, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Shape.prototype.move = function(x,y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.position = function() {
  return(this.x + ", " + this.y);
}

var square = new Square(1,1,3);

console.log(square.length);
// 3 - defined on Square

console.log(square.width);
// 3 - inherited from Rectangle

console.log(square.sideOneLength);
// 3 - inherited from Quadrilateral through Rectangle

console.log(square.position());
// 1,1 - from Shape

square.move(2,3); // from Shape
console.log(square.position());
// 2,3

console.log(square.area());
// 9 - from Rectangle

console.log(square.perimeter());
// 12 - from Quadrilateral
