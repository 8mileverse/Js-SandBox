// The practice of this code was carried out in the Shoppinig Cart Project Folder


let output;

output = document.all;  //deprecated but will reveal the Current HTML collection it has, Very similar to array
output = document.all[10]; //extension of the .all[] array method where we can acess elements by index in the total array list of .all elements
output = document.all.length // tells the total number of html elements in the document

output = document.documentElement; // showa all the element tags in the document
output = document.head; //we can call out the head of the document as well
output = document.body;// as the body of the document
output = document.head.children; // we can call out the children tag under the parent Head of the document as well
output = document.body.children; // we can call out the children tag under the Body Head of the document as well


output = document.doctype; // returns the type of the document

output = document.domain; // returns the domain of the document , however this is deprecated as well
output = document.URL; // returns the url of the document
output = document.characterSet; // returns the character set of the document
output = document.contentType; // returns the type/lang of the document

output = document.forms; // returns the forms of the document
output = document.forms[0]; // Access a specific form 
output = document.forms[0].id; // Access a specific form and the attribute with it {id, class, value} etc 
output = document.forms[0].method; // Access the method of the form used in getting information, GET, POST, PUT or DELETE
output = document.forms[0].action; // Access the action of the form where the link would go to next 

document.forms[0].id = 'new-form-id'; // this changes the form of the id to a new one 

// output = document.links; // returns all the links in the document
// // output = document.links[0].href; // returns all the links in the document specifn to the hyperlink reference
// // output = document.links[0].id = "Google-link-id"; // returns all the links in the document specifn to the hyperlink reference and id can also be changed
// output = document.links[0].className; // returns classes in a document
// output = document.links[0].classList; // returns classes in a document a list of class names

output = document.images; // returns all the images in the document
output = document.images[0]; // returns all the images in the document as an array
output = document.images[0].src; // returns all the images src in the document as an array


const form = Array.from(document.forms); // returns



form.forEach((form)=>console.log(form)); //

console.log(output);