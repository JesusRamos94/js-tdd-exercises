const { PasswordVerifier } = require("./password-verifier.js");

describe("given the verify function", () => {
  it("given the input Test1234 should return an OK", () => {
    // Arrange

    const input = new PasswordVerifier("Test1234");
    const expected = "OK";

    // Act

    const result = input.verify();

    // Assert

    expect(result).toEqual(expected);
  });

  it("given the null array should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const input = new PasswordVerifier(null);
    const expectedToThrow = () => PasswordVerifier.verify(input.verify());

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain letters and numbers"
    );
  });

  it("given the empty input should return an 'Your password must contain at least one lowercase letter'", () => {
    // Arrange
    const input = new PasswordVerifier("TEST12345");
    const expectedToThrow = () => PasswordVerifier.verify(input.verify());

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain at least one lowercase letter"
    );
  });

  it("given the empty input should return an 'Your password must contain at least one uppercase letter'", () => {
    // Arrange
    const input = new PasswordVerifier("test12345");
    const expectedToThrow = () => PasswordVerifier.verify(input.verify());

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain at least one uppercase letter"
    );
  });

  it("given the empty input should return an 'Your password must contain at least one digit'", () => {
    // Arrange
    const input = new PasswordVerifier("testTEST");
    const expectedToThrow = () => PasswordVerifier.verify(input.verify());

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain at least one digit"
    );
  });

  it("given the input with less than 8 characters when it calls the functions will throw an error'", () => {
    // Arrange
    const input = new PasswordVerifier("Test12");
    const expectedToThrow = () => PasswordVerifier.verify(input.verify());

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your Password must be a least 8 characters"
    );
  });

  it("given the input a1 should return an OK", () => {
    // Arrange

    const input = new PasswordVerifier("a1");
    const expected = "OK";

    // Act

    const result = input.verify(input.verify());

    // Assert

    expect(result).toEqual(expected);
  });
});

