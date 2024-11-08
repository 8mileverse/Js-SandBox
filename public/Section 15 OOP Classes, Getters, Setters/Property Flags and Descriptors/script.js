Math.pi = 2;
console.log(Math.PI);

let des = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(des)

const rectObj = {
  name: "Rectangle",
  height: 23,
  width: 15,
};

// let obj = Object.getOwnPropertyDescriptors(rectObj, 'height', 'width', 'name')
// console.log(obj)

Object.defineProperty(
  rectObj,
  "name", 

  {
    value: "Rectangle",
    writable: false,
    enumerable: true,
    configurable: false,
  }
);

let obj = Object.getOwnPropertyDescriptor(rectObj, "name");
console.log(obj);

rectObj.name = 'New Name' ;

delete rectObj.name
// delete rectObj.width
console.log(rectObj)


for(let [key, value] of Object.entries(rectObj)){

  console.log(`${key}: ${value}`)
}


console.log(Object.getOwnPropertyDescriptors(rectObj))


// Note: Property Descripors are always set to true by default