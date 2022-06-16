const { add } = require("./calculator.js");

describe("given the add function", () => {
  it("Given an empty string as input, it should return 0.", () => {
    // Arrange

    const input = "";
    const expected = 0;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given an input with two numbers in the string it should return the sum", () => {
    // Arrange

    const input = "1";
    const expected = 1;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given an input with a number in the string it should return the same number", () => {
    // Arrange

    const input = "1,2";
    const expected = 3;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given an input with a numbers in the string it should return the same number", () => {
    // Arrange

    const input = "1,2,3,4,5,6,7,8,9,10";
    const expected = 55;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given an input with a numbers in the string it should return the same number", () => {
    // Arrange

    const input = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10";
    const expected = 55;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given the input with numbers in string separated by different special characters returns the sum of all numbers", () => {
    // Arrange

    const input = "10 10.10\n10;10.5";
    const expected = 55;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given the input with numbers in string separated by different special characters returns the sum of all numbers", () => {
    // Arrange

    const input = "10 10.10\n10;10.5";
    const expected = 55;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given the input '-2,2,-3' it should return the value of the negative numbers '-2,-3' ", () => {
    // Arrange

    const expectedToThrow = () => add("-2,2,-3");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Negatives not allowed");
  });

  it("given the input '2,1001' you should ignore numbers greater than or equal to 1000", () => {
    // Arrange

    const input = "2,1001";
    const expected = 2;

    // Act

    const result = add(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given input a number should return an error ", () => {
    // Arrange

    const expectedToThrow = () => add(2);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a array should return an error", () => {
    // Arrange

    const expectedToThrow = () => add([]);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a null should return an error ", () => {
    // Arrange

    const expectedToThrow = () => add(null);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a undefined should return an error", () => {
    // Arrange

    const expectedToThrow = () => add(undefined);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a object should return an error", () => {
    // Arrange

    const expectedToThrow = () => add({});

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given empty input  should return an error", () => {
    // Arrange

    const expectedToThrow = () => add();

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a NaN should return an error", () => {
    // Arrange

    const expectedToThrow = () => add(NaN);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });
});
