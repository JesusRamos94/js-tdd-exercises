const addNumbers = (numbers) => {

    let total = 0;

    for (const number of numbers) {
        total = total + number;
    }

    return total;
};


module.exports = { 
    addNumbers
};
