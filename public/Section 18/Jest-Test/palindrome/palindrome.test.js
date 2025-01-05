const palindrome = require('./palindrome');

describe('palindrome', () => {

    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function');
    });


    it('should return a palindrome', ()=> {
        expect(palindrome('racecar')).toEqual(true);
    });

    it('should return a boolean', ()=> {
        expect(typeof palindrome('madam')).toEqual('boolean');
    });


})