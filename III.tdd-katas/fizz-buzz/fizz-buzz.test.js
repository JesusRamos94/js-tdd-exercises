const { fizzbuzz } = require("./fizz-buzz");

describe("given the fizzbuzz function", () => {
  it("given the input 1 when it calls the function will return '1'", () => {
    const result = fizzbuzz(1);
    expect(result).toEqual("1");
  });

  it("given the input 1,2 when it calls the function will return '1,2' ", () => {
    const result = fizzbuzz(2);
    expect(result).toEqual("1,2");
  });

  it("", () => {
    // Arrange
    const input = 25;
    const expected = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,Fizz-Buzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz"

    // Act
    const result = fizzbuzz(input)

    // Assert
    expect(result).toEqual(expected);

  });  

  it("given string a number should return an error ", () => {
    // Arrange

    const expectedToThrow = () => fizzbuzz("Test");

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a array should return an error", () => {
    // Arrange

    const expectedToThrow = () => fizzbuzz([]);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a null should return an error ", () => {
    // Arrange

    const expectedToThrow = () => fizzbuzz(null);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a undefined should return an error", () => {
    // Arrange

    const expectedToThrow = () => fizzbuzz(undefined);

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given input a object should return an error", () => {
    // Arrange

    const expectedToThrow = () => fizzbuzz({});

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

  it("given empty input  should return an error", () => {
    // Arrange

    const expectedToThrow = () => fizzbuzz();

    // Act && Assert

    expect(expectedToThrow).toThrowError("invalid param");
  });

});
