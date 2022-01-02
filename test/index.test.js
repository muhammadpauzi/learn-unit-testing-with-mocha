const { describe, it } = require("mocha");
const assert = require("assert");
const { sum } = require("../index.js");

describe("Test Math Functions", () => {
  it("Test sum function", () => {
    assert.equal(sum([1, 2, 5], 8));
  });
});
