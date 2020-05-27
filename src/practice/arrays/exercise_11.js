/**
 * Write a function that accepts an array and a separator and
 * returns a string where each item in the array is concatenated 
 * in the string separated by the separator
 * 
 * NOTE: use the join method
 */

const arrayToString = (array, separator) => {
    if(typeof(separator)==='undefined'){
        return array.join('');
    }
    return array.join(separator);
}

export default arrayToString