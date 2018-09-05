const makeGetterSetter = require('./js-getter-setter-factory');


test('should get and set based on arguments', () => {
  const getterSetter = makeGetterSetter();
  expect(getterSetter()).not.toBeDefined(); // returns undefined
  getterSetter(5);
  expect(getterSetter()).toEqual(5); // returns 5
  getterSetter('hi');
  expect(getterSetter()).toEqual('hi'); // returns 'hi'
});
