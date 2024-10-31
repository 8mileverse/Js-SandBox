class Rectangle {
    constructor (name, width, height) {
        this.name = name
        this.width = width
        this.height = height
    }

    area () {
        return this.width * this.height
    }
    perimeter () {
        return 2 * (this.width + this.height)
    }

    isSquare () {
        return this.width === this.height
    }

    logArea(){
        console.log(`The area of the rectangle is: ${this.area()}`)
    }
}

const square = new Rectangle('Square', 20, 80)
console.log(square.area())

console.log(square.perimeter())
console.log(square)

// square.logArea()

console.log(square.isSquare())
console.log(square.logArea())

// console.log(Object.entries(square))
console.log(Object.getPrototypeOf(square))