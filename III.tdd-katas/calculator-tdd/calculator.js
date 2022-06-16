const add = (numberString) => {
  if (numberString.includes("-")) {
    let newNumberString = [];
    numberString.split(",").map((e) => {
      if (Math.sign(e) === -1) {
        return newNumberString.push(e.toString());
      }
      return newNumberString.toString();
    });

    const negativeNumbers = newNumberString.toString();
    throw new Error(`Negatives not allowed: ${negativeNumbers} `);
  }

  if (numberString === "") {
    return 0;
  } else {
    return separateTransformAdd(numberString);
  }
};

const separateTransformAdd = (numberString) => {
  return numberString
    .split(/[\s,;.+]/g)
    .map((e) => {
        if(parseInt(e) >= 1000){
           return e = 0;
        }
        return parseInt(e);
      ;
    })
    .reduce((acc, curr) => (acc += curr));
};

console.log(add("2,1001"));

module.exports = {
  add,
};
