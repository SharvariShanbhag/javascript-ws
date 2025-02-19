let compare =(a , b) =>{
    return a-b
}

//If the result of a - b is negative (a < b), a will be placed before b in the sorted array.
// If the result is positive (a > b), b will be placed before a in the sorted array.
// If the result is zero (a === b), their order will remain unchanged.


let num = [123,12,435,56,67,1]
num.sort(compare)
console.log(num)