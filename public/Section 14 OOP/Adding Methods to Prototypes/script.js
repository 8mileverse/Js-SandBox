function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;

  this.height = height;
}


Rectangle.prototype.area = function () {
    return this.width * this.height;
  };

  Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
  };

  Rectangle.prototype.isSquared = function () {
    return this.width === this.height;
  };

  Rectangle.prototype.changeName = function (newName) {
    return this.name = newName;
  };
  const rect1 = new Rectangle("rect1", 10, 20);
console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquared()); 
console.log(rect1.changeName('testing rect1'));
