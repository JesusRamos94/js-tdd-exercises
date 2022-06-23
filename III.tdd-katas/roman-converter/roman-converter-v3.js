const oldRoman = (number) => {

    if (isNotValidParams(number)) {
        throw new Error("Invalid param");
      }

  const roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let string = "";
 

  for (const key of Object.keys(roman)) {
    string += key.repeat(Math.floor(number / roman[key]));
    number %= roman[key];
  }

  return string;
};


const newRoman = (number) => {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD :400,
      C: 100,
      XC:90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let string = "";

  
    for (const key of Object.keys(roman)) {
      string += key.repeat(Math.floor(number / roman[key]));
      number %= roman[key];
    }
  
    return string;
  };

  const isLessThan0 = (number) => {
    return number <= 0;
  };
  
  const isNotNumber = (number) => {
    return typeof number !== "number";
  };
  
  const isNull = (number) => {
    return number === null;
  };
  
  const isNotValidParams = (number) => {
    return isNull(number) || isNotNumber(number) || isLessThan0(number);
  };