const socials =  ['facebook', 'twitter', 'Spotify', 'whatsapp', 'instagram', 'snapchat', 'tiktok','telegram', 'linkedin'];

// console.log(socials.__proto__);


// socials.forEach(function (socials) {

//  console.log(socials);
// //  console.log(socials.toLowerCase().replace(/\s/g, ''));

// });


// One Line Expressions

socials.forEach((social, index, arr) => console.log(`${index}-${social}`,arr)); 




console.log('=========================================================================================================================================================');



// For Each on a Named Function

function logSocials (social){

    console.log('items: ' + JSON.stringify(social));
}

socials.forEach(logSocials);

// Foreach on array of object

const pressSocials =  [

    {
        name: 'facebook',
        url: 'https://www.facebook.com/',
    },
    {
        name: 'twitter',
        url: 'https://www.twitter.com/',
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/',
    }
];

pressSocials.forEach((social) => console.log(`${social.name} - ${social.url}`));

pressSocials.forEach((items) => console.log(items.url));
























