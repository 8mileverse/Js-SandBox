function Rectangele(name, width, height) {
  this.name = name;
  this.width = width;

  this.height = height;

  this.calculateArea = () =>{
    return this.width * this.height;
  };
}

const rect1 = new Rectangele("rect1", 10, 20);
const rect2 = new Rectangele("rect2", 10, 20);

console.log(rect1.calculateArea()); // Output: 200
console.log(rect1.name, rect1.width, rect1.height);

console.log(rect2['width'])

rect2.color = '#FFFFFF';
rect2.perimeter = () => 2 * (rect2.width + rect2.height);

console.log(rect2.perimeter()) // Output: 60
// delete property 
delete rect2.perimeter;



// check own Property
console.log(rect2.hasOwnProperty('color'))
console.log(rect1.hasOwnProperty('color'))



// Getting Keys
console.log(Object.keys(rect2))
console.log(Object.values(rect2))

for(let [keys, value] of Object.entries(rect2)){

    if(typeof value !== 'function'){
        console.log(`${keys} = ${value}`)

    }
}



// console.log(rect2)