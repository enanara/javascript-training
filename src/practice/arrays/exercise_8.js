/**
 * Write a function that accepts an array of numbers
 * and checks if all the numbers in the array are even.
 * 
 * NOTE: use the every method
 */

const evenNumbersChecker = (array) => {
    const isEven = number => number%2 === 0;
    return array.every(isEven);
}

export default evenNumbersChecker