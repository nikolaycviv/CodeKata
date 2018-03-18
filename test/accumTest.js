const { assert } = require("chai");
const { accum } = require("../kata/accum");

describe("Cases that should return true", () => {
  it("abcd -> A-Bb-Ccc-Dddd", () => {
    assert.equal(accum("abcd"), "A-Bb-Ccc-Dddd");
  });

  it("RqaEzty -> R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy", () => {
    assert.equal(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
  });
  it("cwAt -> C-Ww-Aaa-Tttt", () => {
    assert.equal(accum("cwAt"), "C-Ww-Aaa-Tttt");
  });
});
