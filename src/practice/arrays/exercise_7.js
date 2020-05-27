/**
 * Write a function that accepts a list of numbers
 * and returns the largest number in the list.
 * If there are no numbers then return 0.
 * 
 * NOTE: use the reduce method
 */

const largestNumber = (listOfNumbwer) => {
    const whichIsLarge = (accumulator, currentValue) => {
        if(accumulator>currentValue){
            return accumulator;
        } return (currentValue)
    };
    return listOfNumbwer.reduce(whichIsLarge, 0);
}

export default largestNumber