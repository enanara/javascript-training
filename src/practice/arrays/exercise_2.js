/**
 * Write a function that iterates over a string
 * and returns the count of all vowels numbers
 * present in the input string.
 * 
 * NOTE: Use the forEach method
 */

const vowelsCounter = (string) => {
    const arrayOfCharacters = string.split('');
    const vowels = ['e','y', 'u', 'i', 'o', 'a'];
    let count = 0;
    arrayOfCharacters.forEach(element => {
        if(vowels.includes(element)){
            count ++;
        }
    });
    return count;
}

export default vowelsCounter