var { factorial } = require("./factorial");

// describe("Factorial", function() {
//   test("Factorial", function() {
//     var in1 = 5;
//     var exp1 = 120;

//     var in2 = 9;
//     var exp2 = 362880;

//     var in3 = 1;
//     var exp3 = 1;

//     var in4 = 0;
//     var exp4 = 1;

//     var in5 = 3;
//     var exp5 = 6;

//     var out1 = factorial(in1);
//     var out2 = factorial(in2);
//     var out3 = factorial(in3);
//     var out4 = factorial(in4);
//     var out5 = factorial(in5);

//     expect(out1).toEqual(exp1);
//     expect(out2).toEqual(exp2);
//     expect(out3).toEqual(exp3);
//     expect(out4).toEqual(exp4);
//     expect(out5).toEqual(exp5);
//   });
// });

describe("Factorial", function() {
  it("Factorial", () => {
    
    // Arrange
    const in1 = 5;
    const exp1 = 120;

    const in2 = 9;
    const exp2 = 362880;

    const in3 = 1;
    const exp3 = 1;

    const in4 = 0;
    const exp4 = 1;

    const in5 = 3;
    const exp5 = 6;

    // Act
    const result1 = factorial(in1);
    const result2 = factorial(in2);
    const result3 = factorial(in3);
    const result4 = factorial(in4);
    const result5 = factorial(in5);

    // Assert

    expect(result1).toEqual(exp1);
    expect(result2).toEqual(exp2);
    expect(result3).toEqual(exp3);
    expect(result4).toEqual(exp4);
    expect(result5).toEqual(exp5);
  });

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => factorial();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => factorial(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => factorial(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => factorial(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => factorial(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });



  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => factorial("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
      factorial(["Jesus", "Ramos"]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
      factorial({ name: "Jesus", lastName: "Ramos" });

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
});