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


