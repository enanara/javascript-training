/**
 * Write a function that accepts an array returns a new array
 * with only even numbers. If no even numbers are found 
 * it should return an empty array.
 * 
 * NOTE: use the filter method
 */

const evenNumberFilter = (array) => {
    return array.filter(number => number%2 === 0);
}

export default evenNumberFilter