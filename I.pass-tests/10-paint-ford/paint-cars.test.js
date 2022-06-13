const { paintShop } = require("./paint-cars");

describe("given the paintShop function", () => {
  it("given the inputs cars return the repainted inputsCars and do not modify the input cars", () => {
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const result = paintShop(cars, "Pink");

    expect(result).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  })

  it("given an empty input when the function is called, it will throw an error", () => {
    // Arrange

    const expectedToThrow = () => paintShop();

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given a number when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(12);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input undefined when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(undefined);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input null when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(null);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input false when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(false);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input true when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(true);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input -1 when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(-1);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a number when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop(4);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a string when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop("MobDev");

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given the input a empty array when it calls the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop([]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param");
  });

  it("given input an array with bad data when you call the function it will throw an error ", () => {
    // Arrange

    const expectedToThrow = () => paintShop([{make: 2, model : 2 , colour: 2 , price: "test"}]);

    // Act & Assert

    expect(expectedToThrow).toThrowError("Invalid param")})

    it("given the input a number when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop(4 , 4);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input a string when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop("MobDev" , "mobdev");
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input a array null when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop([null, null, null], "hola");
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input a array true when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop([true, true, true], false);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input a array false when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop([false, false, false], 12);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input a array undefined when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop([undefined, undefined, undefined], ["Test"]);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input a empty array when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop([]);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input array with string when it calls the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () => paintShop([1, "string", true], false);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });
  
    it("given the input array with an object when you call the function it will throw an error ", () => {
      // Arrange
  
      const expectedToThrow = () =>
      paintShop([{ nombre: "Jesus", apellido: "Ramos" }], undefined);
  
      // Act & Assert
  
      expect(expectedToThrow).toThrowError("Invalid param");
    });

    
});
