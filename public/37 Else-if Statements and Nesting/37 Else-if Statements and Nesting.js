const d = new Date ('2024-3-23T13:43:45 '); //;

d = d.now()
const h = d.getHours();



if (h < 12) {

console.log ('Good Morning');

} else if(h >= 12 && h < 18 ) {


    console.log ('Good Afternoon');
} else {


    console.log ('Good Evening');
 
}








console.log(h);
console.log(d)
// const t=  d.getUTCDate(30-30-30)