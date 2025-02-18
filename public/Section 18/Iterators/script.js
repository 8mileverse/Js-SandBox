const app = {
  nextIndex: 0,
  teams: ["Chealsea", "ManUnited", "Arsenal", "ManchesterCity"],

  next() {
    if (this.nextIndex >= this.teams.length) {
      return {
        done: true,
      };
    }
    const returnValue = {
      value: this.teams[this.nextIndex],
      done: false,
    };
    this.nextIndex++;
    return returnValue;
  },
};

console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());

const app1 = {
  teams: ["Chealsea", "ManUnited", "Arsenal", "ManchesterCity"],
  [Symbol.iterator]() {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? {
              value: this.teams[nextIndex++],
              done: false,
            }
          : {
              done: true,
            };
      },
    };
  },
};

const iterator = app1[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
