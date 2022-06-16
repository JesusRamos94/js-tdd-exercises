const { verify } = require("./password-verifier.js");

describe("given the verify function", () => {
  it("given the input Test123 should return an OK", () => {
    // Arrange
    const input = "Test1234";
    const expected = "OK";

    // Act

    const result = verify(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given the input '123' should return an 'Your Password must be a least 8 characters'", () => {
    // Arrange
    const expectedToThrow = () => verify("123");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your Password must be a least 8 characters")
  });

  it("given the input 123 should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const expectedToThrow = () => verify(123);

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain letters and numbers")
  });

  it("given the object input  should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const expectedToThrow = () => verify({});

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain letters and numbers")
  });

  it("given the array input should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const expectedToThrow = () => verify([]);

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain letters and numbers")
  });

  it("given the undefined input should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const expectedToThrow = () => verify(undefined);

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain letters and numbers")
  });

  it("given the null array should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const expectedToThrow = () => verify(null);

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain letters and numbers")
  });

  it("given the empty input should return an 'Your cannot enter an empty password'", () => {
    // Arrange
    const expectedToThrow = () => verify("");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your cannot enter an empty password")
  });

  it("given the empty input should return an 'Your password must contain at least one lowercase letter'", () => {
    // Arrange
    const expectedToThrow = () => verify("TEST12345");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain at least one lowercase letter")
  });

  it("given the empty input should return an 'Your password must contain at least one uppercase letter'", () => {
    // Arrange
    const expectedToThrow = () => verify("test12345");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain at least one uppercase letter")
  });

  it("given the empty input should return an 'Your password must contain at least one digit'", () => {
    // Arrange
    const expectedToThrow = () => verify("testTEST");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain at least one digit")
  });

  it("given the empty input should return an 'Your password must contain at least one digit'", () => {
    // Arrange
    const expectedToThrow = () => verify("testTEST");

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your password must contain at least one digit")
  });


});
