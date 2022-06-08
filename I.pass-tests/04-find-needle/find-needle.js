const findNeedle = (words, word) => {
  if (
    !Array.isArray(words) ||
    words.some((i) => typeof i !== "string") ||
    typeof word !== "string" ||
    words.length === 0
  ) {
    throw new Error("Invalid param");
  }

  return words.indexOf(word);
};

module.exports = {
  findNeedle,
};
