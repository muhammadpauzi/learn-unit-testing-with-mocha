const { describe, it } = require("mocha");
const assert = require("assert");
const { sum, subtract, divide, multiply } = require("../index.js");

describe("Test Math Functions", () => {
  it("Test sum function", () => {
    assert.equal(sum([1, 2, 5]), 8);
    assert.notEqual(sum([1, 1]), 4);
  });
  it("Test subtract function", () => {
    assert.equal(subtract([10, 5]), 5);
    assert.notEqual(subtract([10, 1]), 8);
  });
  it("Test multiply function", () => {
    assert.equal(multiply([10, 5]), 50);
    assert.notEqual(multiply([10, 1]), 20);
  });
  it("Test divide function", () => {
    assert.equal(divide([10, 5]), 2);
    assert.notEqual(divide([10, 1]), 0);
  });
});
