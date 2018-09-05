const makeIncrementer = require("./basic-closure");

test("incrementer should add 1 each time it is invoked based on the first use of makeIncrementer", () => {
  const incrementer = makeIncrementer(4);
  expect(incrementer()).toBe(5); // -> 5
  expect(incrementer()).toBe(6);  // -> 6
  expect(incrementer()).toBe(7);  // -> 7
  expect(incrementer()).not.toBe(7);  // -> 7
});