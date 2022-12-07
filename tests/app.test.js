const app = require("../app.js");

describe("Math tests here", () => {
  test("should equal 5 when passed 2 and 3", () => {
    expect(app.add(2, 3)).toEqual(5);
  });

  test("should equal 10 when 2 and 5 are passed ", () => {
    expect(app.multiply(2, 5)).toEqual(10);
  });

  test("should equal 5 when 10 and 5 are passed ", () => {
    expect(app.subtract(10, 5)).toEqual(5);
  });
});

describe("String tests here", () => {
  test("should contain Stuart", () => {
    expect(app.myArray).toContain("Stuart");
  });
});
