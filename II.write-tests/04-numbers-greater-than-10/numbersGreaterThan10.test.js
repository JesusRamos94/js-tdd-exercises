const { largerThanTe } = require("./numbersGreaterThan10.js");

describe("Given the largerThanTe function", () => {
  it("Given the input [4, 10, 32, 9, 21] when it calls the function will return [32, 21] and keep the original array", () => {
    // Arrange
    const input = [4, 10, 32, 9, 21];
    const expected = [32, 21];

    // Act

    const result = largerThanTe(input);

    // Assert

    expect(result).toEqual(expected);
  });

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe(4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe([null, null, null]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe([true, true, true]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe([false, false, false]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe([undefined, undefined, undefined]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => largerThanTe([1, "string", "string"]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
      largerThanTe([{ nombre: "Jesus", apellido: "Ramos" }]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
