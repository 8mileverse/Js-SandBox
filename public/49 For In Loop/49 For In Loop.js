const techCom = {
 
Microsoft:  {
 techCom: 'Microsoft Corporation',
 employees: 13000000,
 headquarters: 'Redmond, Washington',
 founded: 1975,
 ceo: 'Bill Gates'

},

Google: {

 techCom: 'Google LLC',
 employees: 20000000,
 headquarters: 'Mountain View, California',
 founded: 1998,
 ceo: 'Larry Page'
}, 

Apple: {
    techCom: 'Apple Inc.',
    employees: 20000000,
    headquarters: 'Cupertino, California',
    founded: 1976,
    ceo: 'Steve Jobs'
 },

Facebook: {
    techCom: 'Facebook, Inc.',
    employees: 29000000,
    headquarters: 'Menlo Park, California',
    founded: 2004,
    ceo: 'Mark Zuckerberg'
 },

Netflix: {
    techCom: 'Netflix, Inc.',
    employees: 19000000,
    headquarters: 'New York City, New York',
    founded: 2007,
    ceo: 'Chris Hemsworth'
 }


}

console.table(techCom);


for ( const key in techCom){
    console.log(`${key} - ${techCom[key].techCom}`);
    console.log(`Employees: ${techCom[key].employees}`);
    console.log(`Headquarters: ${techCom[key].headquarters}`);
    console.log(`Founded: ${techCom[key].founded}`);
    console.log(`CEO: ${techCom[key].ceo}`);
    console.log('---');
 
}