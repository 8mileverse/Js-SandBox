class Person {
    constructor(firstName, lastName, age, height){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._height = height;
    }

    get firstName(){
        return this.capitalizeFirstName(this._firstName)  
    }

    set firstName(val){
        this._firstName = this.capitalizeFirstName(val);
    }

    capitalizeFirstName(val){
        return val.charAt(0).toUpperCase() + val.slice(1);
    }


    get lastName(){
        return this.capitalizelastName(this._lastName)  
    }

    set lastName(val){
        this._lastName = this.capitalizelastName(val);
    }

    capitalizelastName(val){
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('john', "doe", 30, 175);

console.log(person1.firstName); // Output: John

person1.firstName = 'jane';
console.log(person1.firstName); // Output:

person1.lastName = 'Smith';
console.log(person1.lastName); // Output:


console.log(person1.fullname); // Output: John Smith