/**
 * Write a function that accepts a list of numbers
 * and returns the sum of all numbers in the list.
 * If there are no numbers then return 0.
 * 
 * NOTE: use the reduce method
 */

const sumOfNumbers = (listOfNumbers) => {
    const getSum = (acc, cur) => acc+cur;
    return listOfNumbers.reduce(getSum, 0);
}

export default sumOfNumbers