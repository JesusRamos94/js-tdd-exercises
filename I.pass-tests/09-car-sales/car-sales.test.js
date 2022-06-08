const { sales } = require("./car-sales");

describe("Given the sales function", () => {
  it("given the input 'carsSold' given the input 'totals' ", () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];

    const totals = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500,
    };

    // Act
    const result = sales(carsSold);

    // Assert
    expect(result).toEqual(totals);
  });

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => sales();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales(4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given input an array with bad data when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => sales([{make: 2, model : 2 , colour: 2 , price: "test"}]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });
});
