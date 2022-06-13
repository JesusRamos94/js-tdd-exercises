const findNeedle = (words, word) => {
  if (
    isNotValidParam(words, word)
  ) {
    throw new Error("Invalid param");
  }

  return words.indexOf(word);
};

module.exports = {
  findNeedle,
};
const isNotValidParam = (words, word) => {
  return isNotAnArray(words) ||
    valuesAreNoTAString(words) ||
    isNotAString(word) ||
    isNotEmptyArray(words);
}

const valuesAreNoTAString=(words) => {
  return words.some((i) => typeof i !== "string");
}

const isNotEmptyArray=(words)  =>{
  return words.length === 0;
}

const isNotAString=(word) => {
  return typeof word !== "string";
}

const isNotAnArray=(words) => {
  return !Array.isArray(words);
}

