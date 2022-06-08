var { findNeedle } = require("./find-needle");

// test("Find the needle", function() {
//   var words = ["house", "train", "slide", "needle", "book"];
//   var expected = 3;

//   var output = findTheNeedle(words, "needle");
//   expect(output).toEqual(expected);
// });

// test("Find the plant", function() {
//   var words = ["plant", "shelf", "arrow", "bird"];
//   var expected = 0;

//   var output = findTheNeedle(words, "plant");
//   expect(output).toEqual(expected);
// });

describe("Find the needle", () => {
  it("given ...", () => {
    // Arange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    // Act
    const output = findNeedle(words, "needle");

    // Assert
    expect(output).toEqual(expected);
  });

  it("given...", () => {
    // Arange
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    //Act
    const output = findNeedle(words, "plant");

    // Assert
    expect(output).toEqual(expected);
  });

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => findNeedle();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(12, 12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(undefined, undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(null , null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(false, false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(true, true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle(4 , 4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle("MobDev" , "mobdev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle([null, null, null], "hola");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle([true, true, true], false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle([false, false, false], 12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle([undefined, undefined, undefined], ["Test"]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => findNeedle([1, "string", true], false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
    findNeedle([{ nombre: "Jesus", apellido: "Ramos" }], undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
  
});
