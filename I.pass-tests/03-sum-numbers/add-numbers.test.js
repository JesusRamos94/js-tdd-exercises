const { addNumbers } = require("./add-numbers");

// test("Add all numbers", function() {
//   var numbers = [9, 23, 10, 3, 8];
//   var expected = 53;

//   var output = addAllnumbers(numbers);

//   expect(output).toEqual(expected);
// });

describe("given the addNumbers function", () => {

  it("given the numbers [9, 23, 10, 3, 8] ", () => {

    // Arange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;

    // Act
    const result =  addNumbers(numbers);

    // Assert
    expect(result).toEqual(expected);

  })

})
