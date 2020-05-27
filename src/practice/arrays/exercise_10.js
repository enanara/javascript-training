/**
 * Write a function that accepts an array and determines
 * if a given search item exists in the array
 * 
 * Return "Found <item>" if the item is present or
 * return  "<item> does not exist" if the item is not present
 * 
 * NOTE: use the includes method
 */

const arrayToSearchIn = ['red', 'blue', 'green', 'pink']

const itemChecker = (item) => {
    if(arrayToSearchIn.includes(item)){
        return `Found ${item}`;
    } return `${item} does not exist`;
}

export default itemChecker