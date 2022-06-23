// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

const factorial = (int) => {
  if (isNotValidParam(int)) {
    throw new Error("Invalid param");
  }

  let total = 1;

  for (let i = 1; i <= int; i++) {
    total = total * i;
  }

  return total;
};

module.exports = {
  factorial,
};


const isNotValidParam = (int) => {
  return isNotANumber(int) || isNotANumberValid(int);
};

const isNotANumberValid = (int) => {
  return int < 0;
};

const isNotANumber = (int) => {
  return typeof int !== "number";
};
