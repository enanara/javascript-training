/**
 * Write a function that accepts a list of numbers
 * and transforms each number to its square and
 * returns a new array of all square numbers
 * 
 * NOTE: use the map method
 */

const squareNumbers = (listOfNumbers) => {
    return listOfNumbers.map(number => number * number);
}

export default squareNumbers