const {formatCities} = require("./cities");

describe("given the formatCities",() => {
it("Cities", () => {
  const capitals = [
    { city: "Paris", country: "France" },
    { city: "Madrid", country: "Spain" },
    { city: "Rome", country: "Italy" }
  ];

  const transform = ({ city, country }) => {
    return `${city} is the capital of ${country}`;
  }

  const expected = [
    "Paris is the capital of France",
    "Madrid is the capital of Spain",
    "Rome is the capital of Italy"
  ];

  const result = formatCities(capitals, transform);

  expect(result).toEqual(expected);
});

it("given an empty input when the function is called, it will throw an error", () => {
  // Arrange

  const expectedToThrow = () => formatCities();

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});


it("given a number when you call the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(12);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input undefined when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(undefined);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input null when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(null);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input false when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(false);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input true when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(true);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input -1 when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(-1);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input a number when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities(4);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input a string when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities("MobDev");

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given the input a empty array when it calls the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities([]);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param");
});

it("given input an array with bad data when you call the function it will throw an error ", () => {
  // Arrange

  const expectedToThrow = () => formatCities([{make: 2, model : 2 , colour: 2 , price: "test"}]);

  // Act & Assert

  expect(expectedToThrow).toThrowError("Invalid param")})

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities(4 , 4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities("MobDev" , "mobdev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities([null, null, null], "hola");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities([true, true, true], false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities([false, false, false], 12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a array undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities([undefined, undefined, undefined], ["Test"]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => formatCities([1, "string", true], false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input array with an object when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () =>
    formatCities([{ nombre: "Jesus", apellido: "Ramos" }], undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });


})
