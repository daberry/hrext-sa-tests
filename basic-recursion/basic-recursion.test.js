const getNumericValues = require("./basic-recursion");

test('should return only the numbers in the object', ()=>{

  const exampleNestedObject = {
    name: 'Dan',
    age: 99,
    home: {
      roommates: 2,
      address: {
        number: 13,
        city: 'Oakland',
        zip: 94618
      }
    }
  }; // returns

  expect(getNumericValues(exampleNestedObject)).toEqual([99, 2, 13, 94618]);
});