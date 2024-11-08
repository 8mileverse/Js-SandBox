// Constructor Functions
function person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  // For the first name
  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName); //
    },
    set: function (value) {
      this._firstName = value;
    },
  }),
    // For the last name
    Object.defineProperty(this, "lastName", {
      get: function () {
        return this.capitalizeFirst(this._lastName);
      },
      set: function (value) {
        this._lastName = value;
      },
    }),
    // For the full name
    Object.defineProperty(this, "fullName", {
      get: function () {
        return `${this.firstName} ${this.lastName}`; // i dont have to use the capitalizeFirst Property can be called directly
      },
    });
}

// Creating an instance of the person class
person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// Object Literals

const personObj = {
  // Object can only be single
  _firstName: "John",
  _lastName: "Hackey",
  get firstName() {
    person.prototype.capitalizeFirst(this._firstName);
  },
  set firstName(val) {
    this._firstName = val;
  },
  get lastName() {
    person.prototype.capitalizeFirst(this._firstName);
  },
  set lastName(val) {
    this._firstName = val;
  },
  get fullName() {
    return `${this._firstName} ${this._lastName}`; // i dont have to use the capitalizeFirst Property can be called directly
  },
};

const hiThere = new person("joe", "gomo"); //multiple objects can be created
console.log(hiThere.firstName);
console.log(hiThere.lastName);
console.log(hiThere.fullName);

const person2 = Object.create(personObj);
console.log(person2._firstName);
console.log(person2._lastName);

console.log(person2._firstName + ' ' + person2._lastName)