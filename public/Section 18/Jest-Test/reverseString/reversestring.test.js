const revString = require("./reversestring");

describe("reverseString", () => {
  it("should return a function", () => {
    expect(typeof revString).toEqual("function");
  });

  it("should return a string", () => {
    expect(typeof revString("hello")).toEqual("string");
  });

  it("should reverse a string correctly", () => {
    expect(revString("hello world")).toEqual("dlrow olleh");
  });
});
