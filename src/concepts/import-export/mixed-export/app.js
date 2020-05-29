import myGreeting from './math'
import greeting, { add, sub } from './math'

// import myGreeting, { add, sub } from './math'

const addResult = add(2, 4)
const subResult = sub(8, 3)
const greetingResult = myGreeting('Bob')

console.log(addResult)
console.log(subResult)
console.log(greetingResult)

// import * as math from './math'
// it imports everything as object but stores the default export funcion as default key
// {
//     add : add(),
//     sub : sub(),
//     default : greeting()
// }

