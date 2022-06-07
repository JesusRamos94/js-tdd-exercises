const getWordLengths = (someWords) => {

    const newWordLengths = [];

    for (let i = 0; i < someWords.length; i++) {
       newWordLengths.push(someWords[i].length);
    }

    return newWordLengths;
};



module.exports = {
  getWordLengths,
};
