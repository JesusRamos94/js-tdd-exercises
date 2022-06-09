const getWordLengths = (someWords) => {
  if (
    !Array.isArray(someWords) ||
    someWords.some((i) => typeof i !== "string") ||
    someWords.length === 0
  ) {
    throw new Error("Invalid param");
  }

  const newWordLengths = someWords.map((e) => e.length);

  return newWordLengths;
};

module.exports = {
  getWordLengths,
};
