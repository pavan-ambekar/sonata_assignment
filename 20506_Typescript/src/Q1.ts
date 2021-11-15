let a: number = 3
let b: number = 29
let c: number = 6

let greatestNumber: number
greatestNumber = a > b ? a : b
greatestNumber = greatestNumber > c ? greatestNumber : c

console.log(greatestNumber);
