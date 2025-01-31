// //opetators and expressions in js

// //arithmatic operations

// // let num1=prompt("Enter first number:");
// // let num2=prompt("Enter Second number:");

// //addition
// // console.log("sum is ",parseInt(num1)+parseInt(num2));

// // // //substraction
// // console.log("substraction is ",parseInt(num1) - parseInt(num2));

// // // Multiplication
// // console.log("multiplication of two num is",parseInt(num1)* parseInt(num2));

// // // Division
// // console.log("Division of two num is",parseInt(num1)/ parseInt(num2));

// // // modulous
// // console.log("modulous of two num is",parseInt(num1) % parseInt(num2));


// // //logical operator
// // let mathScore= prompt("enter your math score ");
// // let sciScore= prompt("enter your science score ");

// // if(mathScore>=90 && sciScore>=85){
// //     console.log("Scholarship Eligibility : True");
// // }else{
// //     console.log("Scholarship Eligibility : False");
// // }


// // Assignment Operator

// let x = 0;
// console.log("initial value of x :" ,x);

// x += 5;
// console.log("after adding:",x);

// x *= 3;
// console.log("after multiplaying: ",x);

// x -=10;
// console.log("after substracting:",x);

// x /= 2;
// console.log("after dividing :",x);

// x %= 3;
// console.log("modulous with 3 :",x);


// //complex calculations     Operator precedence

// let a=10;
// let b=3;
// let c=5;

// console.log("10 + 3 * 5 =", a+b*c);

// console.log("(10 + 3) * 5 =",(a+b)*c);

// console.log("20 / 2 + 3 =", a/b+c);

// console.log("20 /( 4 + 4 ) =", a/b+c);

// //explain the difference in result due to presedence


// //combined example

// let length= 100;
// let breadth=4;

// console .log("length :",length);
// console .log("breadth:",breadth);
// perimeter = console.log("Perimeter of the rectangle :" ,2*(length+breadth));
// area = console.log("Area of rectangle :", length * breadth);

// if(perimeter >area){
//     console.log("Is perimeter greater than area ? 'True");
// }else{
//     console.log("Is perimeter greater than area ? 'False'");
// }


//assignment 7:

// let age =prompt("Enter your age:");
// let citizenship= prompt("Are you a citizen (True / False)?");

// if(age>=18 && citizenship=== True){
//     console.log("Eligible to vote : True");
// }else{
//     console.log("Eligible to vote : False");
// }


// BMI calculator

//  let weight = prompt("Enter your weight (kg) :");
//  console.log("Height :",weight);
//  let height =prompt("Enter your height (m) :");
//  console.log("Weight :", height);


//  let bmi= parseFloat(weight) / (parseFloat(height)*parseFloat(height))
//  console.log("BMI =",bmi);
 
//  if(bmi<18.5){
//     console.log("Underweight");
//  }else if(bmi<24.9 || bmi>=18.5){
//     console.log("Normal weight");
//  }else if(bmi<29.9 || bmi>=25){
//     console.log("Overweight");
//  }else if(bmi>=30){
//     console.log("Obesity")
//  }


// Even or Odd

// let number= prompt("Enter any number:");

// if(number%2 === 0){
//     console.log("number is even ");
// }else {
//     console.log("number is odd");
// }


// Shopping Discount

let totalAmount= prompt("Enter Total Amount :");

if(totalAmount>100){
    discount = totalAmount/10
    totalAmount= totalAmount-discount
}

console.log("Discounted total Amount :" ,totalAmount);