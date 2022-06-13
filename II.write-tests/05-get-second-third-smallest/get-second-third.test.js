const { getSecondThird } = require("./get-second-third.js");

describe("given the getSecondThird function", () => {

    it("given the input [90, 5, 11, 8, 6] when it calls the function will return [6, 8] and keep the original array ", () =>{
    // Arrange
    const input = [90, 5, 11, 8, 6];
    const expected = [6, 8];

    // Act 
    const result = getSecondThird(input);

    // Assert

    expect(result).toEqual(expected);
    
    });

    it("given an empty input when the function is called, it will throw an error", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird();
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given a number when you call the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(12);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input undefined when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(undefined);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input null when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(null);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input false when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(false);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input true when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(true);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input -1 when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(-1);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a number when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird(4);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a string when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird("MobDev");
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a array null when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird([null, null, null]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a array true when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird([true, true, true]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a array false when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird([false, false, false]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a array undefined when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird([undefined, undefined, undefined]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input a empty array when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird([]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input array with string when it calls the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () => getSecondThird([1, "string", "string"]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });
    
      it("given the input array with an object when you call the function it will throw an error ", () => {
        // Arrange
    
        const expectedToThrow = () =>
          getSecondThird([{ nombre: "Jesus", apellido: "Ramos" }]);
    
        // Act & Assert
    
        expect(expectedToThrow).toThrowError("Invalid param");
      });

});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
