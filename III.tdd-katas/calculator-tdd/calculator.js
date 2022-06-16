const add = (numberString) => {
  if (notStringValue(numberString)) {
    throw new Error("invalid param");
  }

  if (theValueIsNegative(numberString)) {
    let newNumberString = [];
    filtersAndReturnsNegativeValues(numberString, newNumberString);

    const negativeNumbers = newNumberString.toString();
    throw new Error(`Negatives not allowed: ${negativeNumbers} `);
  }

  if (theValueIsEmpty(numberString)) {
    return 0;
  } else {
    return separateTransformAdd(numberString);
  }
};

module.exports = {
  add,
};

const filtersAndReturnsNegativeValues = (numberString, newNumberString) => {
  numberString.split(",").map((e) => {
    if (Math.sign(e) === -1) {
      return newNumberString.push(e.toString());
    }
    return newNumberString.toString();
  });
};

const separateTransformAdd = (numberString) => {
  return numberString
    .split(/[\s,;.+]/g)
    .map((e) => {
      if (parseInt(e) >= 1000) {
        return (e = 0);
      }
      return parseInt(e);
    })
    .reduce((acc, curr) => (acc += curr));
};

const theValueIsNegative = (numberString) => {
  return numberString.includes("-");
};

const notStringValue = (numberString) => {
  return typeof numberString !== "string";
};
const theValueIsEmpty = (numberString) => {
  return numberString === "";
};
