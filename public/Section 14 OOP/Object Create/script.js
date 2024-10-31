const rectPrototype = {

    area: function() {
        return this.width * this.height;
    },
    perimeter: function() {

        return 2 * (this.width + this.height);
    },

    isSquare: function() {
        return this.width === this.height;
    }
}

function Rectangle( width, height) {

    return Object.create(rectPrototype,{
        width: {value: width},
        height: {value: height}
    })
}


const rect = Rectangle(10,30)

console.log(rect.area()) // 300
console.log(rect.perimeter()) //
console.log(rect.isSquare()) //
console.log(rect)