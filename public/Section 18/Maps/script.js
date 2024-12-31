const myMap = new Map();
myMap.set("name", "john");
myMap.set(1, "Blue");
myMap.set(2, "red");

console.log(myMap);
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.has("name"));

myMap.delete("name");

console.log(myMap.has("name"));

console.log(myMap);

const ppleMap = new Map();

ppleMap.set("bradon", {
  phone: "123 3030 3030",
  email: "dashboard23@gmail.com",
  address: "no 3, james street london United Kingdom",
});
ppleMap.set("badn", {
  phone: "123 3030 3030",
  email: "dasboard23@gmail.com",
  address: "no 3, james street london United Kingdom",
});
ppleMap.set("radon", {
  phone: "123 3030 3030",
  email: "dashard23@gmail.com",
  address: "no 3, james street london United Kingdom",
});


ppleMap.forEach((person) => console.log(person.email));

console.log(ppleMap.size , ppleMap.keys(), ppleMap.values(), ppleMap.entries());

const iterator = ppleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());