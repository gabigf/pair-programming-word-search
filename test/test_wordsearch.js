const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return undefined if no word is provided", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], )
    assert.isUndefined(result);
  });

  it("should return true if word is present backwards horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'T', 'L', 'P'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')
    assert.isTrue(result);
  });

  it("should return true if word is present backwards vertically", function() {
    const result = wordSearch([
      ['S', 'E', 'I', 'N', 'F', 'T', 'D', 'P'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'L', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'E', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'F', 'L'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'N', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'I', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'E', 'L'],
      ['D', 'L', 'E', 'F', 'X', 'R', 'S', 'S'],
    ], 'SEINFELD')
    assert.isTrue(result);
  });

  it("should return true if word is present diagonally from top-left to bottom-right", function() {
    const result = wordSearch([
      ['S', 'E', 'I', 'N', 'F', 'T', 'D', 'D'],
      ['Y', 'R', 'C', 'F', 'Q', 'U', 'L', 'L'],
      ['H', 'M', 'G', 'T', 'E', 'E', 'E', 'G'],
      ['W', 'H', 'C', 'N', 'F', 'E', 'F', 'L'],
      ['U', 'B', 'T', 'N', 'F', 'P', 'N', 'I'],
      ['O', 'D', 'I', 'A', 'K', 'E', 'I', 'S'],
      ['E', 'E', 'K', 'F', 'Q', 'U', 'L', 'L'],
      ['S', 'L', 'E', 'F', 'X', 'R', 'S', 'D'],
    ], 'SEINFELD')
    assert.isTrue(result);
  });
  
  it("should return undefined if no grid or word is provided", function() {
    const result = wordSearch();
    assert.isUndefined(result);
  });

});
