const getWordLengths = (someWords) => {
  if (isNotValidParam(someWords)) {
    throw new Error("Invalid param");
  }
  return someWords.map(extractLengths);
};

module.exports = {
  getWordLengths,
};
const isNotValidParam = (someWords) => {
  return (
    isNotArray(someWords) ||
    isNotAString(someWords) ||
    isNotEmptyString(someWords)
  );
};

const isNotEmptyString = (someWords) => {
  return someWords.length === 0;
};

const isNotAString = (someWords) => {
  return someWords.some((i) => typeof i !== "string");
};

const isNotArray = (someWords) => {
  return !Array.isArray(someWords);
};
const extractLengths = (e) => e.length;
