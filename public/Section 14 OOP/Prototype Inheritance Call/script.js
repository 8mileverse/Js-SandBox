function shape (name, color) {
    this.name = name;
    this.color = color;

}

function rectangle (name, width, height, color) {

    shape.call(this, name , color);

    this.height = height,
    this.width = width

}

// Here the Rectangle Inherits the shape prototype
shape.prototype.logName = function () {

    console.log(`shape Name: ${this.name}`)
}

rectangle.prototype = Object.create(shape.prototype);

// Set the Rectangle Prototype Constructor 
rectangle.prototype.constructor = rectangle;




const rect1 = new rectangle('Rectangle-1', 10, 20, 'green');
console.log(rect1);


function circle (name, circumference, radius, color) {

    shape.call(this, name);

    this.radius = radius
    this.circumference = circumference  
    this.color = color
}



// Here the Circle Inherits the shape prototype
shape.prototype.logName = function () {

    console.log(`shape Name: ${this.name}, color: ${this.color}`)
}


// override the default prototype method

circle.prototype.logName = function () {

    console.log(`shape Name: ${this.name}, color: ${this.color}, radius: ${this.radius}`)
}

circle.prototype = Object.create(shape.prototype);
// Set the circle Prototype Constructor 
circle.prototype.constructor = circle;



const circle1 = new circle('Circle-1', 2 * Math.PI * 23, 5, 'red');
console.log(circle1)






    
rect1.logName()
circle1.logName()
console.log(circle1.constructor)
console.log(rect1.constructor)



// // Constructor function to create a shape with a name  
// function shape(name) {  
//     this.name = name; // Assign the name property to the shape  
// }  

// // Constructor function for rectangle that inherits from shape  
// function rectangle(name, width, height) {  
//     // Call the shape constructor to set the name property  
//     shape.call(this, name);  
    
//     // Assign width and height properties  
//     this.width = width;  
//     this.height = height;  
// }  

// // Set up inheritance from shape's prototype  
// rectangle.prototype = Object.create(shape.prototype);  
// rectangle.prototype.constructor = rectangle; // Set constructor back to rectangle  

// // Method to log the name of the shape to the console  
// rectangle.prototype.logName = function () {  
//     // Check if name property exists  
//     if (this.name) {  
//         console.log(`Shape Name: ${this.name}`);  
//     } else {  
//         console.error('Name property is missing');  
//     }  
// };  

// // Constructor function for circle that inherits from shape  
// function circle(name, circumference, radius) {  
//     // Call the shape constructor to set the name property  
//     shape.call(this, name);  
    
//     // Assign radius and circumference properties  
//     this.radius = radius;  
//     this.circumference = circumference;  
// }  

// // Set up inheritance from shape's prototype for circle  
// circle.prototype = Object.create(shape.prototype);  
// circle.prototype.constructor = circle; // Set constructor back to circle  

// // Create an instance of circle with valid parameters  
// const circle1 = new circle('Circle-1', 2 * Math.PI * 23, 5);  
// console.log(circle1);  

// // Create an instance of rectangle with valid parameters  
// const rect1 = new rectangle('Rectangle-1', 10, 20);  
// console.log(rect1);  

// // Call logName method on the rectangle instance  
// rect1.logName();  

// // Error checks for instances  
// // Ensure that rect1 and circle1 have the correct properties  
// if (!rect1.width || !rect1.height) {  
//     console.error('Rectangle properties are missing');  
// }  

// if (!circle1.radius || !circle1.circumference) {  
//     console.error('Circle properties are missing')0;  
// }