const chunk = require('./arraychunking')
const assert = require('assert');



describe('arrayChunk', () => {
    it('should create chunks of arrays', () => {
        assert.deepEqual(chunk([1,2,3,4,5,6], 2), [[1,2], [3,4], [5,6]]);
        assert.deepEqual(chunk([1,2,3,4,5,6], 3), [[1,2,3], [4,5,6]]);
    })
});