const { removeMiddle } = require("./remove-middle");

describe("Remove middle", () => {
  it("Remove middle test", () => {
    // Arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];

    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    // Act
    const result = removeMiddle(words);

    // Assert
    expect(result).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle(4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle([null, null, null]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle([true, true, true]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle([false, false, false]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
      removeMiddle([undefined, undefined, undefined]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => removeMiddle([1, 2, 3]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
      removeMiddle([{ nombre: "Jesus", apellido: "Ramos" }]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
});
