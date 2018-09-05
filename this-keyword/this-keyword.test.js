const thisKeyword = require("./this-keyword");

test("Should return array with player names", () => {
  const sixthFloorCounselor = {
    name: "Liz"
  };
  let actualLiz = thisKeyword.someoneSays(sixthFloorCounselor, "blammo!"); // returns
  let expectedLiz = 'Liz says: blammo!';
  expect(actualLiz).toEqual(expectedLiz);

  let expected = ["LeBron James plays basketball", "Kevin Durant plays basketball"];
  let actual = thisKeyword.sport.playerNames();
  expect(actual).toEqual(expected);
});
