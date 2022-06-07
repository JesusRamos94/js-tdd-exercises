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
  
});
