/**
 * Write a function that accepts an array and a search word to 
 * determine if the search word is found in the array.
 * 
 * Return the item found in the array that matches the search word
 * otherwise return a string 'Sorry no such item found'
 * 
 * NOTE: use the find method
 */

const itemFinder = (array, keyword) => {
    let returnString = array.find(word => word.includes(keyword));
    if(returnString===undefined){
        return 'Sorry no such item found';
    } return returnString;
}

export default itemFinder