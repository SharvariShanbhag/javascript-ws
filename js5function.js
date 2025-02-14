// factorial of a number

// function factorial(n){
//     if(n === 0 || n === 1) return 1;

//     let result = 1;
//     for(i =2;i<=n ;i++){
//     result *= i;
//     } 
//     return result ;
// }

// console.log("Factorial of 5 is" ,factorial(3));


//even odd checking

// function isEvenOdd(n){
//     return n % 2 === 0 ? "even" : "Odd";
// }
// console.log("7 is a" ,isEvenOdd(7));

// console.log("90 is a" ,isEvenOdd(90));


// Reverse string

// function reverseString(str){
//     reverse = "";
//     for (i=str.length-1; i>=0; i--){
//         reverse += str[i]
//     }
//     return reverse;
// }

// console.log("reverse of seri is" ,reverseString("seri"));


// // largest of three  

// function largestOfThree(a, b, c){
//     if(a > b && a > c ) return a;
//     if(b > a && b > c ) return b;
//     return c;
// }

// console.log("largest of  3 5 7 is" , largestOfThree(3,5,7));


//sum of array elements

// function sumOfArrayEle(arr){
//     let sum = 0;
//     for (i = 0; i< arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log("sum of [1,1,1,1,1]", sumOfArrayEle([1,1,1,1,1]));

// console.log("sum of [3,5,6,7,8]", sumOfArrayEle([3,5,6,7,8]));


// //calculate area and perimeter of rectangle

// function areaPeimeter(l,b){
//     const area = l*b;
//     const perimeter = 2 *(l+b);
//     return{area, perimeter};
// }

// const {area, perimeter} = areaPeimeter(3 ,4);
// console.log("area", area);
// console.log("Perimeter", perimeter);


// // leap Year 

// function isLeapYear(year){
//     if( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//         return true;
//     }
//     return false;
// }

// console.log("2024", isLeapYear(2024));


//multiplication table of number

// function multiplicationTable(num){
//     let mul
//     for(i = 1 ; i<=10 ;i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// multiplicationTable(5);


// palaindrome 

// function isPalaindrome(str){
//     let reversed = "";
//     for(i = str.length -1; i>=0; i--){
//         reversed+= str[i];
//     }return str === reversed ;
// }

// console.log("sharvari",isPalaindrome("sharvari"));


//GCD
// function GCD(a,b){
//     while (b != 0){
//         let temp = b;
//         b= a%b;
//         a =temp;
//     }
//     return a;
// }

// console.log("GCD of 3 and 9 is ",GCD(3,9));


//convert celcius to fahrenenheit

function celsiusToFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5 )+32;
    return `${fahrenheit}oF`;
}
let tempInput = 45;
let tempConversion = celsiusToFahrenheit(tempInput);
console.log(`input temp :${tempInput} oC to output :${tempConversion}`);