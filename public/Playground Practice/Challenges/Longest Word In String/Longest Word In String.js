// The first part of the challenge is to know what data type you are working with and which methods can be used to execute it , this is a string challenge

function longestWord(str){


    let words = str.split(" "); // if its is closed like this "" ,then every character including spaces will be seperated, to seperate words do this " ". Also this splits up the arguments into arrays.

    //after seperation this has become an array

// to represent every individual word of the function

let longestWord = ' ';

for (word of words){

    if(word.length > longestWord.length){  //to get how long a string or an array is use length
        longestWord = word;
    }
}



    console.log(words);
return str


}


console.log(longestWord("I want to go to the ball park in berlin"));  // it has to be within the function scope

console.log(word);



// Certainly! Let's break down the code snippet you've provided:

// ```javascript
// for (word of words) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }
// ```

// ### Explanation:

// 1. **For...of Loop:**
//    - `for (word of words)` is a `for...of` loop in JavaScript. It iterates over each element (`word`) in the `words` array (or iterable).

// 2. **Condition:**
//    - `if (word.length > longestWord.length)` checks if the length of the current `word` is greater than the length of `longestWord`.

// 3. **Updating `longestWord`:**
//    - If the condition (`word.length > longestWord.length`) is true, then `longestWord` is updated to be equal to `word`.
//    - This means that `longestWord` will always hold the word from the `words` array that has the longest length encountered so far during the iteration.

// ### Example Scenario:

// Let's say `words` is an array of strings: `['apple', 'banana', 'pear', 'grapefruit']`.

// - Initially, assume `longestWord` is initialized to an empty string (`longestWord = ''`).
// - During the loop:
//   - First iteration (`word = 'apple'`):
//     - `word.length` is 5.
//     - Since `5 > 0` (initial length of `longestWord`), `longestWord` is updated to `'apple'`.
//   - Second iteration (`word = 'banana'`):
//     - `word.length` is 6.
//     - Since `6 > 5` (`longestWord.length` is now 5 from the first iteration), `longestWord` is updated to `'banana'`.
//   - Third iteration (`word = 'pear'`):
//     - `word.length` is 4.
//     - `4` is not greater than `6`, so `longestWord` remains `'banana'`.
//   - Fourth iteration (`word = 'grapefruit'`):
//     - `word.length` is 11.
//     - `11` is greater than `6`, so `longestWord` is updated to `'grapefruit'`.

// After the loop completes, `longestWord` will contain `'grapefruit'`, which is the longest word in the `words` array based on character length.

// ### Summary:

// - The `for...of` loop iterates over each element (`word`) in the `words` array.
// - The `if` statement checks if the current `word` is longer than the current `longestWord`.
// - If true, `longestWord` is updated to the current `word`.
// - After the loop, `longestWord` will hold the longest word found in the `words` array based on character length.

// This code snippet is useful for finding the longest word in an array of words and storing it in the variable `longestWord`. If you have any more questions or if there's anything else you'd like to explore, feel free to ask!
