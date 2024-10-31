
// parent cLass
class shape {
  constructor(name) {
    this.name = name;
  }

  area(){
    return `${this.width}px * ${this.height}`;            
  }

  logName(){
    console.log(`This Shape is a ${this.name}`);
  }
}



// Sub cLASS
class rectangle extends shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}

const rect = new rectangle("Rectangle", 29, 28);


class Circle extends shape{
    constructor(name, radius, arc){
     super(name),
     this.radius = radius,
     this.arc = arc
    }

    logName(){
        console.log(`This Shape is a ${this.name}`);
    }
}

console.log(rect); // Output: rectangle
rect.logName()

const circle = new Circle("Circle", 10, 3.14);

console.log(circle)
circle.logName()


console.log(rect instanceof rectangle )
console.log(circle instanceof shape )