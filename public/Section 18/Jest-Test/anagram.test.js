const anagram = require('./anagram');

describe('anagram', () => {
    it('should be a function', () => {
        expect(typeof anagram).toEqual('function');
    });

    it('should return a boolean', () => {
        expect(typeof anagram('hello', 'world')).toEqual('boolean');
    });

    it('should return a boolean', () => {
        expect(typeof anagram('arm', 'ram')).toEqual('boolean');
    });

    it('should return true', () => {
        expect(anagram('arm', 'ram')).toBeTruthy();
        expect(anagram('cinema', 'iceman')).toBeTruthy();
        expect(anagram('listen', 'silent')).toBeTruthy();
        
    });

    it('should return false if not anagram', () => {
        expect(anagram('hello', 'fellow')).toBeFalsy();
        expect(anagram('cinema', 'seaman')).toBeFalsy();
        expect(anagram('arm', 'rmaon')).toBeFalsy();
    });
});