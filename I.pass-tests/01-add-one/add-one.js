const addOne = (numbers) => {
  if (
    isNotValidParam(numbers)
  ) {
    throw new Error("Invalid param");
  }

  return numbers.map(addOneToElement);
};

module.exports = {
  addOne,
};

const isNotValidParam=(numbers)=> {
  return isNotAnArray(numbers) ||
    isNotANumber(numbers) ||
    isNotEmptyArray(numbers);
}

const isNotANumber=(numbers)=> {
  return numbers.some((i) => typeof i !== "number");
}

const isNotEmptyArray=(numbers)=> {
  return numbers.length === 0;
}

const isNotAnArray =(numbers)=> {
  return !Array.isArray(numbers);
}

const addOneToElement = (n) => n + 1;

