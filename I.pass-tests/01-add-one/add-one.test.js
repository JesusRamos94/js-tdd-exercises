const { addOne } = require("./add-one.js");

// test("Add 1 to each item in myArray", function() {
//   var myArray = [31, 57, 12, 5];

//   var unchanged = [31, 57, 12, 5];
//   var expected = [32, 58, 13, 6];
//   var output = addOne(myArray);

//   expect(output).toEqual(expected);
//   expect(myArray).toEqual(unchanged);
// });

describe("given the addOne function", () => {
  // it("it will return [32, 58, 13, 6] given the input [31, 57, 12, 5] ", ()=>{})
  it("given the input [31, 57, 12, 5] when the input that call the function will return [32, 58, 13, 6] and keep the original array", () => {
    // arrange

    const input = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const unchanged = [31, 57, 12, 5];

    // act

    const result = addOne(input);

    // assert

    expect(result).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  it("given the no input when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => addOne();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => addOne(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => addOne(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => addOne(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => addOne(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => addOne(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
});
