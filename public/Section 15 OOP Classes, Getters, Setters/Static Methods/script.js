class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
  perimeter() {
    return 2 * (this.height + this.width);
  }
  static getClass(){
    return 'Rectangle'
  }
}

const rect = new Rectangle('Rectangle', 30, 70);
// console.log(rect.getClass());



console.log(Rectangle.getClass());
console.log(rect.area())