// const now = new Date();

function Rectangle(name, width, height) {

    this.name = name;
    this.width = width;
    this.height = height;
    this.area = () => {
        return this.width * this.height  // `this` refers to the current object
 
    }
}

const rect1 = new Rectangle('RectInfoPrime', 20, 30) // if new was absent in the constructor, it wol=uld make it a reg functino and the result would be undefined

console.log(rect1.area())

const rect2 = new Rectangle('RectInfoPrime2', 40, 30) // if new was absent in the
console.log(rect2.area())

console.log(rect1.area()*rect1.area() + 'cm')
// console.log(Rectangle.name , Rectangle.width)


// when we used the new constructor 4 things occured


// 1. A new empty object / constructor is created
// 2. The construction function is called with the argument that we passed in
// 3. the `this` keyword is set to the new constructor
// 4. ffff