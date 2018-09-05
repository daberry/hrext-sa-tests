var groupBy = require('./underbar-group-by');

test('groupBy should return a collection split into sets', ()=> {
  const numbers = [1.3, 2.1, 2.4];
  const animals = ['cat', 'hat', 'horse'];
  const roundDown = function(num) {
    return Math.floor(num);
  };

  const length = (element) => {
    return element.length;
  };


  expect(groupBy(numbers, roundDown)).toEqual({ 1: [1.3], 2: [2.1, 2.4] });
  expect(groupBy(animals, length)).toEqual({ 3: ['cat', 'hat'], 5: ['horse'] });

});