const flatten = require('./recursion-flatten-array');

test('should return a single flat array of values', () => {
  expect(flatten([1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5])
});
