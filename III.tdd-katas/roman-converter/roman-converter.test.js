const { convertToOldRoman, convertToNewRoman } = require("./roman-converter");

describe("Given the function convertToOldRoman", () => {
  it("given the input 1 when calls the function it will return 'I' ", () => {
    //Arrange
    const input = 1;
    const expected = "I";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 5 when calls the function it will return 'V' ", () => {
    //Arrange
    const input = 4;
    const expected = "IIII";

    //Act
    const result = convertToOldRoman(input);
    console.log(result);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 10 when calls the function it will return 'X' ", () => {
    //Arrange
    const input = 10;
    const expected = "X";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 50 when calls the function it will return 'L' ", () => {
    //Arrange
    const input = 50;
    const expected = "L";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 100 when calls the function it will return 'C' ", () => {
    //Arrange
    const input = 100;
    const expected = "C";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 500 when calls the function it will return 'D' ", () => {
    //Arrange
    const input = 500;
    const expected = "D";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 1000 when calls the function it will return 'M' ", () => {
    //Arrange
    const input = 1000;
    const expected = "M";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 4 when calls the function it will return 'IIII' ", () => {
    //Arrange
    const input = 4;
    const expected = "IIII";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 9 when calls the function it will return 'VIIII' ", () => {
    //Arrange
    const input = 9;
    const expected = "VIIII";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 14 when calls the function it will return 'XIIII' ", () => {
    //Arrange
    const input = 14;
    const expected = "XIIII";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 44 when calls the function it will return 'XXXXIIII' ", () => {
    //Arrange
    const input = 44;
    const expected = "XXXXIIII";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 99 when calls the function it will return 'XCIX' ", () => {
    //Arrange
    const input = 99;
    const expected = "LXXXXVIIII";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 400 when calls the function it will return 'CCCC' ", () => {
    //Arrange
    const input = 400;
    const expected = "CCCC";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 944 when calls the function it will return 'DCCCCXXXXIIII' ", () => {
    //Arrange
    const input = 944;
    const expected = "DCCCCXXXXIIII";

    //Act
    const result = convertToOldRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });
});

describe("Given the function convertToNewRoman", () => {
  it("given the input 1 when calls the function it will return 'I' ", () => {
    //Arrange
    const input = 1;
    const expected = "I";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 5 when calls the function it will return 'V' ", () => {
    //Arrange
    const input = 5;
    const expected = "V";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 10 when calls the function it will return 'X' ", () => {
    //Arrange
    const input = 10;
    const expected = "X";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 50 when calls the function it will return 'L' ", () => {
    //Arrange
    const input = 50;
    const expected = "L";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 100 when calls the function it will return 'C' ", () => {
    //Arrange
    const input = 100;
    const expected = "C";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 500 when calls the function it will return 'D' ", () => {
    //Arrange
    const input = 500;
    const expected = "D";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 1000 when calls the function it will return 'M' ", () => {
    //Arrange
    const input = 1000;
    const expected = "M";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 4 when calls the function it will return 'IV' ", () => {
    //Arrange
    const input = 4;
    const expected = "IV";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 9 when calls the function it will return 'IX' ", () => {
    //Arrange
    const input = 9;
    const expected = "IX";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 14 when calls the function it will return 'XIV' ", () => {
    //Arrange
    const input = 14;
    const expected = "XIV";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 44 when calls the function it will return 'XLIV' ", () => {
    //Arrange
    const input = 44;
    const expected = "XLIV";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 99 when calls the function it will return 'XCIX' ", () => {
    //Arrange
    const input = 99;
    const expected = "XCIX";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 400 when calls the function it will return 'CD' ", () => {
    //Arrange
    const input = 400;
    const expected = "CD";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });

  it("given the input 944 when calls the function it will return 'CMXLIV' ", () => {
    //Arrange
    const input = 944;
    const expected = "CMXLIV";

    //Act
    const result = convertToNewRoman(input);

    //Assert

    expect(result).toEqual(expected);
  });
});
