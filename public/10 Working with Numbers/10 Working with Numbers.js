let x;

let num = new Number(5.268);

x = num.toString().length;

x = `${num.toFixed(2)}`;

x = `${num.toPrecision(1)}`;

x = `${num.toExponential(1)}`;

x = `${num.toLocaleString('zh-CN')}`;

console.log(x);

const date = new Date();
const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' };
alert(date.toLocaleString('en-US', options));
console.log(date.toLocaleDateString('en-US', options));
