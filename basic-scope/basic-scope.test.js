const outerFunction = require('./basic-scope');

test('should not return any undefined values', function(){
  expect(outerFunction()).not.toEqual(expect.arrayContaining([undefined]));
});