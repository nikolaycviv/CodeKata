const { assert } = require("chai");
const { isogram } = require("../kata/isogram");

describe("Isogram?", () => {
  describe("Yes", () => {
    it("asdfgh", () => {
      assert.equal(isogram("asdfgh"), true);
    });
  });
  describe("No", () => {
    it("aasd", () => {
      assert.equal(isogram("aasd"), false);
    });
    it("a sd", () => {
      assert.equal(isogram("a sd"), false);
    });
    it("' '", () => {
      assert.equal(isogram(" "), false);
    });
  });
});
