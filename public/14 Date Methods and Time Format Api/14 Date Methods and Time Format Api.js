let x;

let d = new Date();

x = d.getDate();
x = d.getUTCFullYear();
x = d.getUTCMonth();

x = d.getFullYear();

x = d.getMonth();

o = d.getDay();

x = d.getDay();

x = d.getHours();
x = d.getMinutes();

x = d.getSeconds();

x = `${d.getFullYear()} / ${d.getMonth() + 1}/ ${d.getDay()} : ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
console.log(d, typeof d);

console.log(o, typeof o);


// Using the Intl api

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', {month: 'short'}).format(d);

console.log(x);



