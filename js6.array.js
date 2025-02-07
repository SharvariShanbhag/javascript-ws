 //reverse the array manually
// function reverseArray(num){
//     let reversed = [];
//     for(i=num.length-1; i>=0; i--){
//         reversed.push(num[i]);
//     }return reversed;
// }

// console.log(reverseArray([1,2,3,4,5]));


//find second largest number in an array 


// function secondLargestNumber(arr){
//     let largest= -Infinity , second= -Infinity;
//     for(let num of arr){
//         if(num> largest){
//             second = largest;
//             largest = num; 
//     } else if(num >second && num <largest){
//         second = num;
//         }
//     }return second;
// }

// console.log(secondLargestNumber([10,40,60,80,76]));


// function mergeArray(arr1, arr2){
//     const mergedArray = [...new set ([...arr1, ...arr2])];
//     return mergedArray;
// }
// const arr1 =[1,2,3,4,5,6];
// const arr2 =[6,7,8,9,10];
// const result =mergeArray(arr1, arr2);
// console.log(result);


// 