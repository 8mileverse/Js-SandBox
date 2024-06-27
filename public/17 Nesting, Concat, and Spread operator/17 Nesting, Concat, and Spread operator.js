//Nesting  Arrays

let x;

const techComp = ['Andriod', 'Apple', 'Windows'];

const techprod =['Smasung', 'Iphone', 'Copilot'];


// techComp.push(techprod); this was commented out to prevent them from being joined together to facilitate the use of concat below

// x = techComp[3][0];

// const allTech = [techComp ,techprod]


// x = allTech;

// x = allTech[0][3];

// Concatinating Arrays

x = techComp.concat(techprod);


// Spread Operator

    x = [...techComp, ...techprod];


    const poose = [1,13,4,5,5,6,6,[932393,4,5,5,5,5,3,4]];
poose.flat();

x = poose


// Stactic Array Operators

x = Array.isArray(techComp) ;

x = Array.from('34256534rert643rt3yuu')

const a = 1;
const b = 2;
const d = 4;
const c = 3;

x = Array.of(a, b, d, c);

x = x.reverse();

    console.log(x)

// console.table(x);



