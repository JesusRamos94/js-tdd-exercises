const { PasswordVerifier } = require("./password-verifier.js");

describe("given the verify function", () => {
  it("given the input Test1234 should return an OK", () => {
    // Arrange

    const input = new PasswordVerifier("Test1234");
    const expected = "OK";

    // Act

    const result = PasswordVerifier.verify(input.password);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given the input '123' should return an 'Your Password must be a least 8 characters'", () => {
    // Arrange
    const input = new PasswordVerifier("123")
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your Password must be a least 8 characters"
    );
  });

  it("given the input 123 should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const input = new PasswordVerifier(123)
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain letters and numbers"
    );
  });

  it("given the object input  should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const input = new PasswordVerifier({})
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain letters and numbers"
    );
  });

  it("given the array input should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const input = new PasswordVerifier([])
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain letters and numbers"
    );
  });

  it("given the undefined input should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const input = new PasswordVerifier(undefined)
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain letters and numbers"
    );
  });

  it("given the null array should return an 'Your password must contain letters and numbers'", () => {
    // Arrange
    const input = new PasswordVerifier(null)
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain letters and numbers"
    );
  });

  it("given the empty input should return an 'Your cannot enter an empty password'", () => {
    // Arrange
    const input = new PasswordVerifier("")
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError("Your cannot enter an empty password");
  });

  it("given the empty input should return an 'Your password must contain at least one lowercase letter'", () => {
    // Arrange
    const input = new PasswordVerifier("TEST12345")
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain at least one lowercase letter"
    );
  });

  it("given the empty input should return an 'Your password must contain at least one uppercase letter'", () => {
    // Arrange
    const input = new PasswordVerifier("test12345")
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain at least one uppercase letter"
    );
  });

  it("given the empty input should return an 'Your password must contain at least one digit'", () => {
    // Arrange
    const input = new PasswordVerifier("testTEST")
    const expectedToThrow = () => PasswordVerifier.verify(input.password);

    // Act && Assert

    expect(expectedToThrow).toThrowError(
      "Your password must contain at least one digit"
    );
  });

});
