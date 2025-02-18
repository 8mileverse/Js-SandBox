const querystring = require('querystring');

// parse()
const myUrl = 'https://example.com/listing?id=1000&premium=true';
console.log((require('url')).parse(myUrl));


//format()
 const myUrl2 = (require('url')).format({
        protocol: 'https',
        host: 'example.com',
        pathname: '/listing',
        query: {
            id: 1000,
            premium: true
        }
 });
 console.log(myUrl2);

//  querystring.parse()
const myQs = 'year=2025&month=january&day=9';
const qs = querystring.parse(myQs);
console.log(qs)
console.log(qs.year);
console.log(qs.month);
console.log(qs.day);

// querystring.stringify()
const myQs2 = querystring.stringify({
    year: 2025,
    month: 'january',
    day: 9
});

console.log(myQs2);