const convertToOldRoman = (number) => {

  if (isNotValidParams(number)) {
    throw new Error("Invalid param");
  }


  const oldRoman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = "";

  for (key in oldRoman) {
    const repeatCounter = Math.floor(number / oldRoman[key]);

    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }

    number %= oldRoman[key];

    if (number === 0) return result;
  }

  return result;
};

const convertToNewRoman = (number) => {


  if (isNotValidParams(number)) {
    throw new Error("Invalid param");
  }
  const newRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (key in newRoman) {
    result += key.repeat(Math.floor(number / newRoman[key]));
    number %= newRoman[key];
  }

  return result;
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

module.exports = {
  convertToOldRoman,
  convertToNewRoman,
};
