const rectangle = {

    name: 'Rectangle-1',
    width: 10,
    height: 5,
    area: function () {

        return this.width * this.height 
     }
};

console.log(rectangle.name);
console.log(rectangle.area());
console.log(rectangle.area);

// console.log(this)// Note this object only works within thw function scope and wont work outside the function scope. i.e global scope