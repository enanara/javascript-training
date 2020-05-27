/**
 * Write a function that accepts an array and determines 
 * if it contains a string item longer than 5 characters 
 * 
 * NOTE: use the some method
 */

const stringLengthChecker = (array) => {
    const checkLongerThan5 = string => {
        return string.length > 5;
    }
    return array.some(checkLongerThan5);
}

export default stringLengthChecker