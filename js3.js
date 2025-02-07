//calculate factorial of number

//  5! = 1*2*3*4*5    the product all number from 1 to that number itself

// let number = prompt("Enter a number for factorial");
// let fact= 1;
// for(i=1; i<=number ;i++){
//     fact = fact * i;
// }
// console.log(`Factorial of the ${number} is ${fact}`)


// number checker

// let number = prompt ("Enter a number:");

// if(number> 0){
//     console.log("number is positive");
// }else if (number<0 ){
//     console.log("number is negative");
// }else{
//     console.log("number is zero");
// }


//number guessing system

// let systemGeneratedNumber = Math.floor(Math.random() * 10 + 1);    
//random range 0.0 to 0.9999999......
//number range is betn 1 - 10 
//so random * 10 
//number will be betn 0- 9 
// random * 10 + 1 = ( 0 to 10 )range numbers

// let userNumber = prompt("Enter a number ");

// if (userNumber == systemGeneratedNumber){
//     console.log("correct!! your guess is perfect");
// }else{
//     console.log("Too Low !!Try Again");
// }


// //Sum of digits

// let num= prompt("enter a number");

// sum=0;

// do{
//     sum = sum+num%10;    // Extract last digit
//     num = Math.floor(num / 10);    // Extract last digit
// }while(num>0)     // Stop when num becomes 0
//     console.log(sum);


//fizz buzz fizzbuzz

// for(i=1;i<=50;i++){
//     if(i % 3 == 0){
//         console.log("Fizz")
//     }else if(i % 5 == 0 ){
//         console.log("Buzz");
//     }else if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }else{
//         console.log(i)
//     }
// }


// prime number

// let number =prompt("Enter a number");

// var isprime= true;

// for(i=2; i< number; i++){
//     if(number % 1 == 0){
//         isprime = false;
//     }
// }

// if(isprime== true){
//     console.log(`${number} is prime`);
// }else if(number < 0){
//     console.log(`${number} is not a prime`);
// }
// else {
//     console.log(`${number} is not a prime`);
// }


// if(number === 1){
//     console.log(`${number} is not a prime number`);
// }else if(number < 0){
//     console.log(`${number} is negative and negative number cant be a prime number`);
// }else{
//     for(i = 2; i< number; i++){
//         if(number%i == 0){
//             console.log(`${number} is not a prime number`);
//             break;
//             //break statement cause if the number got divided by the i even one time it will come out of the loop
//         }else{
//             console.log(`${number} is prime number`);
//         }
//     }
// }


//star pattern

//iteration
// Value of i	Output of '*'.repeat(i)
// 1	                *
// 2	                **
// 3	                ***
// 4	                ****
// 5	                *****

// function printStar(n){
//     for(i= 1; i<= n ;i++){
//         console.log('*'.repeat(i));
//     }
// }
// printStar(4);


//find largest of the three

// let a =prompt("enter first number");
// let b =prompt("enter Second number");
// let c =prompt("enter third number");

// function largestOFThree(a,b,c){
//     if (a > b && a> c) return a;
//     if (b > a && b> c) return b;
//     return c;
// }
// console.log("the largest of three is " ,largestOFThree(a,b,c));


//palaindrome

// let word =prompt("Enter a word");

// function isPalaindrome(str){
//     let reverse ="";
//     for(i=str.length - 1; i>=0;i--){
//         reverse += str[i];
//     }
//     return reverse === str;
// }

// if(isPalaindrome(word)){
//     console.log(`${word} is a palaindrome`);
// }else{
//     console.log(`${word} is not a palaindrome`);

// }


//count the vowels and consonents

// let word = prompt("Enter a word").toLowerCase(); // Convert input to lowercase for easy comparison

// function countVowelsAndConsonants(str) {
//     let vowels = "aeiou";
//     let vowelCount = 0, consonantCount = 0;
    
//     for (let char of str) {
//         if (char >= 'a' && char <= 'z') { // Ensure it's an alphabetic character
//             if (vowels.includes(char)) {
//                 vowelCount++;
//             } else {
//                 consonantCount++;
//             }
//         }
//     }
    
//     return { vowelCount, consonantCount };
// }

// let counts = countVowelsAndConsonants(word);
// console.log(`Vowels: ${counts.vowelCount}, Consonants: ${counts.consonantCount}`);


// reverse the number

// let num = Number(prompt("Enter a number")); // Convert input to a number

// function reverseNumber(n) {
//     let reversed = 0;
    
//     while (n > 0) {
//         let digit = n % 10;         // Extract the last digit
//         reversed = reversed * 10 + digit; // Build the reversed number
//             // If reversed = 0 and digit = 3, then reversed = 0 * 10 + 3 = 3
//             // Next iteration: digit = 2, so reversed = 3 * 10 + 2 = 32
//             // Next iteration: digit = 1, so reversed = 32 * 10 + 1 = 321
//         n = Math.floor(n / 10);      // Remove the last digit
//     }
//     return reversed;
// }

// let reversedNum = reverseNumber(num);
// console.log(`Reversed number: ${reversedNum}`);


//sum of odd and sum of even 

// let evenSum = 0;
// let oddSum = 0;

// for (i= 1;i<=100;i++){
//     if(i%2 === 0){
//         evenSum += i;
//     }else{
//         oddSum += i;
//     }
// }
// console.log("sum of even number is " ,evenSum);

// console.log("sum of odd number is " ,oddSum);


//Factorial using while loop

// let n = prompt("Enter a number");

// let fact = 1;

// while (n>=1){
//     fact *= n;
//     n--;
// }
// console.log(`the factorial is ${fact}`);


//Average of n numbers
// my logic

// let n = prompt("how many numbers ?");
// let number = prompt[("Enter a number")];
// let sum = 0
// for(i = 0;i<= number.length; i++){
//     sum +=  number[i];
//     let average= sum/n
// }
// console.log("average is 0" , average);



// //leap year 
// let year = prompt("Enter a Year :");

// if( (year%4 === 0 && year %100 !==0) ||( year % 400 ===0)){
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`)
// }


// divisors of number

// let number = prompt("Enter a number :");

// let divisors =[];

// for (i=1;i<=number;i++){
//     if(number%i === 0){
//         divisors.push(i);  
//     }   
// }
// console.log(`the divisors of ${number} are ${divisors}`);


//fibbonachhi series

// let number = parseInt(prompt("Enter the number of terms:"));  

// let a = 0, b = 1, next;  

// console.log("Fibonacci Series:");  

// for (let i = 1; i < number; i++) {  
//     console.log(a);  
//     next = a + b;  
//     a = b;  
//     b = next;  
// }



// 