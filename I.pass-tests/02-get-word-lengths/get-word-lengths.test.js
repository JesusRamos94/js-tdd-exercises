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

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths(4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths([null, null, null]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths([true, true, true]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths([false, false, false]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths([undefined, undefined, undefined]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => getWordLengths([1, 2, 3]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
    getWordLengths([{ nombre: "Jesus", apellido: "Ramos" }]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });


})