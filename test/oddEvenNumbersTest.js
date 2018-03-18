const { assert } = require("chai");
const { oddEvenNumbers } = require("../kata/oddEvenNumbers");

describe("oddEvenNumbers", () => {
  context("passing valid values", () => {
    it("should return 3", () => {
      const result = oddEvenNumbers("2 4 7 8 10");
      assert.equal(result, 3);
    });
    it("should return 1", () => {
      const result = oddEvenNumbers("1 2 2");
      assert.equal(result, 1);
    });
    it("should return 2", () => {
      const result = oddEvenNumbers("1 2 3 5 7");
      assert.equal(result, 2);
    });
    it("should return 4", () => {
      const result = oddEvenNumbers("0 6 4 9 2 2");
      assert.equal(result, 4);
    });
  });
});
