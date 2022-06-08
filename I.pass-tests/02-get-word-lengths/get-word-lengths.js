const getWordLengths = (someWords) => {
  if (
    !Array.isArray(someWords) ||
    someWords.some((i) => typeof i !== "string") ||
    someWords.length === 0
  ) {
    throw new Error("Invalid param");
  }

  const newWordLengths = [];

  for (let i = 0; i < someWords.length; i++) {
    newWordLengths.push(someWords[i].length);
  }

  return newWordLengths;
};

module.exports = {
  getWordLengths,
};
