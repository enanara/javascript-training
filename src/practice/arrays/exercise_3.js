/**
 * Write a function that accepts a list of strings
 * and transforms each string to uppercase and returns
 * a new array of all uppercase strings.
 * 
 * NOTE: Use the map method
 */

const uppercaseStrings = (arrayOfStrings) => {
    const makeUppercase = string => string.toUpperCase();
    return arrayOfStrings.map(string => makeUppercase(string));
}

export default uppercaseStrings