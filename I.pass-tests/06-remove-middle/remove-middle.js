const removeMiddle = (words) => {
  if (
    isNotValidParam(words)
  ) {
    throw new Error("Invalid param");
  }

  const amount = words.length / 2;
  const approximate = Math.round(amount - 1);
  const indexRemove = words[approximate];
  const newWord = words.filter((word) => word === indexRemove);
  words.splice(approximate, 1);

  return newWord;
};

module.exports = {
  removeMiddle,
};

const isNotValidParam =(words) =>{
  return isNotArray(words) ||
    valuesAreNotAString(words) ||
    isNotEmptyArray(words);
}

const isNotEmptyArray =(words)=> {
  return words.length === 0;
}

const valuesAreNotAString =(words) =>{
  return words.some((i) => typeof i !== "string");
}

const isNotArray =(words)=> {
  return !Array.isArray(words);
}

