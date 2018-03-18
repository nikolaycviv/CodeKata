const { assert } = require("chai");
const { anagrams } = require("../kata/anagrams");

describe("Anagrams", () => {
  it("abba -> ['aabb', 'bbaa']", () => {
    assert.deepEqual(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), [
      "aabb",
      "bbaa"
    ]);
  });
  it("racer -> ['carer', 'racer']", () => {
    assert.deepEqual(
      anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]),
      ["carer", "racer"]
    );
  });
  it("laser -> []", () => {
    assert.deepEqual(anagrams("laser", ["lazing", "lazy", "lacer"]), []);
  });
});
