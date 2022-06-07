const { getWordLengths } = require("./get-word-lengths");

// test("Get word lengths", function() {
//   var words = ["sun", "potato", "roundabout", "pizza"];
//   var expected = [3, 6, 10, 5];

//   var output = wordLengths(words);
//   expect(output).toEqual(expected);
// });

describe("given the getWordLengths" , () => {

  it("given the words ['sun', 'potato', 'roundabout', 'pizza'] when the input that call the function will return [3, 6, 10, 5", () => {
  
    // Arange

    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
  
    // Act

    const result = getWordLengths(words);

    // Assert

    expect(result).toEqual(expected);
  
  })

})