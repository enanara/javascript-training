/** 
 * Write a function that iterates over an array
 * and returns the count of all even numbers
 * present in the input array.
 * 
 * NOTE: Use the forEach method
 */

const evenNumbersCounter = (array) => {
   let result = 0;
   array.forEach(element => {
       if(element%2 === 0){
           result ++;
       }
   });
   return result;
}

export default evenNumbersCounter