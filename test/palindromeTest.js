const { assert } = require("chai");
const { isPalindrome } = require("../kata/palindrome");

describe("Palindromes", () => {
  context("passing non-valid values", () => {
    describe("Given I have passed undefined", () => {
      it("should return false", () => {
        const result = isPalindrome();
        assert.equal(result, false);
      });
    });
    describe("Given I have passed null", () => {
      it("should return false", () => {
        const result = isPalindrome(null);
        assert.equal(result, false);
      });
    });
    describe("Given I have passed a numeric int ", () => {
      it("should return false", () => {
        const result = isPalindrome(1245);
        assert.equal(result, false);
      });
    });
    describe("Given I have passed a numeric real", () => {
      it("should return false", () => {
        const result = isPalindrome(12.45);
        assert.equal(result, false);
      });
    });
    describe("Given I have passed a numeric negative", () => {
      it("should return false", () => {
        const result = isPalindrome(-1234);
        assert.equal(result, false);
      });
    });
  });
  describe("Given I am passing strings", () => {
    describe("Given I have passed a blank", () => {
      it("should return true", () => {
        const result = isPalindrome("");
        assert.equal(result, true);
      });
    });
    it("should return true if a word is a palindrome", () => {
      const result = isPalindrome("abba");
      assert.equal(result, true);
    });
    describe("Given I have passed a simple symmetric value", () => {
      it("should return true", () => {
        const result = isPalindrome("ABBA");
        assert.equal(result, true);
      });
    });
    describe("Given I have passed a simple asymmetric value", () => {
      it("should return true", () => {
        const result = isPalindrome("ABCBA");
        assert.equal(result, true);
      });
    });
    describe("Given I have passed a simple symmetric mix value", () => {
      it("should return true", () => {
        const result = isPalindrome("ABba");
        assert.equal(result, true);
      });
    });
    describe("Given I have passed a simple asymmetric mix value", () => {
      it("should return true", () => {
        const result = isPalindrome("ABCba");
        assert.equal(result, true);
      });
    });
    it("should return false when it is not a Palindrome", () => {
      const result = isPalindrome(
        "The quick brown fox jumps over the lazy dog"
      );
      assert.equal(result, false);
    });
    it("should return true when it is Palindrome of lower case", () => {
      const result = isPalindrome("a toyotas a toyota");
      assert.equal(result, true);
    });
    it("should return true when it is Palindrome of mixed case", () => {
      const result = isPalindrome("a tOyoTaS A toYota");
      assert.equal(result, true);
    });
    it("should return true when it is Palindrome of mixed case with punctuation", () => {
      const result = isPalindrome("A Toyota’s a Toyota.");
      assert.equal(result, true);
    });
  });
});
