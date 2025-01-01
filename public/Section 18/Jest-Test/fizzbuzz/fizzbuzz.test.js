// const { default: fizzbuzz } = require('./fizzbuzz');
// const fizzBuzz = require('./fizzbuzz');

// describe('fizzbuzz', () => {
//     it('should be a function', () => {
//         expect(typeof fizzBuzz).toEqual('function'); 
//     });

//     it('should return the correct output for given numbers if not divisible by 3 or 5', () => {
//         expect(fizzBuzz(3)).toEqual(3);   
//     })
// });

const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toEqual('function');
    });

    it('should return "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });

    it('should return "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });

    it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });

    it('should return the number if not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toEqual(7);
    });
});
