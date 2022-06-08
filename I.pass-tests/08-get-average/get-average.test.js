const { average } = require("./get-average");

describe("given the Average fuction", () => {
  it("given the input [4, '-', 8, 11, 'hello', '57', 0, 2] when the input that call the function will return 5 and keep the original array", () => {
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;

    const result = average(numbers);

    expect(result).toEqual(expected);
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average(4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => average("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input objet with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
      average({ nombre: "Jesus", apellido: "Ramos" });

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
});
