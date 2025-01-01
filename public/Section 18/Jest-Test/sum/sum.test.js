const sum = require('./sum');

test("Adding 1+2 to be equal to 3", () => {
  expect(sum(1, 2)).toEqual(3);
});
