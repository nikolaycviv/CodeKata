const { assert } = require("chai");
const { toWeirdCase } = require("../kata/toWeirdCase");

describe("toWeirdCase", () => {
  describe("should return the correct value for a single word", () => {
    it("ThIs", () => {
      assert.equal(toWeirdCase("this"), "ThIs");
    });
    it("should return the correct value for a single word", () => {
      assert.equal(toWeirdCase("is"), "Is");
    });
    it("A", () => {
      assert.equal(toWeirdCase("a"), "A");
    });
    it("TeSt", () => {
      assert.equal(toWeirdCase("test"), "TeSt");
    });
    it("LoOkS", () => {
      assert.equal(toWeirdCase("looks"), "LoOkS");
    });
    it("LiKe", () => {
      assert.equal(toWeirdCase("like"), "LiKe");
    });
    it("YoU", () => {
      assert.equal(toWeirdCase("you"), "YoU");
    });
    it("PaSsEd", () => {
      assert.equal(toWeirdCase("passed"), "PaSsEd");
    });
  });

  describe("should return the correct value for a single word", () => {
    it("ThIs Is A TeSt", () => {
      assert.equal(toWeirdCase("This is a test"), "ThIs Is A TeSt");
    });
    it("WeIrD StRiNg CaSe", () => {
      assert.equal(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe");
    });
    it("LoOkS LiKe YoU PaSsEd", () => {
      assert.equal(
        toWeirdCase("Looks like you passed"),
        "LoOkS LiKe YoU PaSsEd"
      );
    });
    it("ThIs Is ThE FiNaL TeSt CaSe", () => {
      assert.equal(
        toWeirdCase("This is the final test case"),
        "ThIs Is ThE FiNaL TeSt CaSe"
      );
    });
    it("JuSt KiDdInG", () => {
      assert.equal(toWeirdCase("Just kidding"), "JuSt KiDdInG");
    });
    it("Ok FiNe YoU ArE DoNe NoW", () => {
      assert.equal(
        toWeirdCase("Ok fine you are done now"),
        "Ok FiNe YoU ArE DoNe NoW"
      );
    });
  });
});
