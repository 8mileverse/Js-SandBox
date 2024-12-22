const sym = Symbol();
const sym1 = Symbol("foo");
const sym2 = Symbol("bar");

console.log(sym, sym1, sym2);

console.log(sym1.description);

const userInfo = {
  [Symbol("id")]: 1,
  name: "Adeluola Ayomide",
  email: "Ayodelu4@gmail.com",
};

console.log(userInfo);

console.log(Object.getOwnPropertySymbols(userInfo));

const sym3 = Symbol.for('foo');
const sym4= Symbol.for('foo');


console.log(sym3 === sym4); // true
