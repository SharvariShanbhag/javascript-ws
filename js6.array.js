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
// function frequencyCount(arr) {
//     let freq = {};
//     arr.forEach(item => freq[item] = (freq[item] || 0) + 1);
//     return freq;
//   }
  
//  
//   function manualIncludes(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) return true;
//     }
//     return false;
//   }
  
// //
// function shiftLeft(arr) {
//     let first = arr.shift();
//     arr.push(first);
//     return arr;
//   }
  
// //
// function rotateRight(arr, k) {
//     k %= arr.length;
//     return arr.slice(-k).concat(arr.slice(0, -k));
//   }
  
// //
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }
  
// 
// function multiplicationTable() {
//     let table = [];
//     for (let i = 1; i <= 10; i++) {
//       let row = [];
//       for (let j = 1; j <= 10; j++) {
//         row.push(i * j);
//       }
//       table.push(row);
//     }
//     return table;
//   }
  
// //
// function arrayIntersection(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
//   }
  