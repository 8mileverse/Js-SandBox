const set = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

set.add(9)
console.log(set.has(10));
console.log(set);

set.delete(9);




const setArray = Array.from(set);
console.log(setArray);

for (let item of setArray) {

    console.log(item)

}