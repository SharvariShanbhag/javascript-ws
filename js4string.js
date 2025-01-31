// string to count no of vowels in string

// Define a function countVowels(str).
// Loop through each character in the string.
// Check if the character is in the vowels list (aeiouAEIOU).
// If true, increase the count.
// Return the final count.

// function countVowels(str){
//     let count = 0;
//     let vowels= "aeiouAEIOU"

//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }return count;
// }
// let inputword = prompt("Enter a word");
// console.log(`the count of vowels is ${countVowels(inputword)}`);


//palaindrom 
//eg.    non - reverse of non is 'non'
//it is palaindrome

// function isPalindrome(str){
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("seri"));


//first word extract

// function firstWord(sentence){
//     let fWord= "";
//     for(let i= 0; i< sentence.length ;i++){
//         if (sentence[i]===" ")
//             break;
//         fWord= fWord + sentence[i];
//     }
//     return fWord;
// }
// console.log(firstWord("hfjdfjhdjshfjsdhf hfsjhjshd dhjshdjshd"));


//replace all spaces in string with hypens

// function replaceWithHypen(str){
//      let result ="";
//      for (i=0;i<str.length;i++){
//         result += str[i]===" " ? "-" : str[i];
//         //if current caracter is equals to the space then replace space with hypen ? is for replace
//      }return result;
// }
// console.log(replaceWithHypen("i Want to be a good coder"));


//split string in array of words

// function splitIntoWords(sentence){
//     let words =[];
//     let currentWord = "";  //for storing iterated word
//     //to build words as function processes each character in sentence
//     for(i=0 ; i< sentence.length; i++){
//         if (sentence[i] === " "){
//             words.push(currentWord);
//             //if spaces found then the current formed till the space will be pushed in the array defined
//             currentWord= "";
//             //one word is pushed so for another word we have to empty the string defined reviously
//         }else{
//             currentWord += sentence[i];
//             //if statement is not correct then kepp adding characters to the currrentword 
//         }
//     }
//     //and the remained last word is being added to the string 
//     if(currentWord){
//         words.push(currentWord);
//         return words;
//     }
// }
// console.log(splitIntoWords("i am improving myself day by day"));


//convert first letter of each word to upper case

// function capitalizeFirstLetter(str){
//     let result ="";
//     let capitalizeNext= true;
//     //this will capitalize after calling it
//     for (i=0;i<str.length; i++){
//         if(str[i] === " "){
//             result += " ";  // if space then it will be addes to the result
//             capitalizeNext = true; // after space it sets the next character should be capitalized
//         }else if(capitalizeNext){
//             result += str[i].toUpperCase(); //this makes the result of next character to upper case
//             capitalizeNext= false;
//         }else{
//             //this else is for when the cgharacter is not space and not should be capitalized
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(capitalizeFirstLetter("i will master this very soon"));


//reverse the string

// function reverseString(str){
//     let reverse = "";
//     for(i=str.length - 1; i>=0;i--){
//         reverse += str[i];
//     }
//     return reverse;
// }

// console.log(reverseString("love"));


//count the number of occuerances of specific character

//  function characterOccurance(str, char){    //here we passed the str and char for counting the perticular characters occurances 
//                                             //eg . char = i in word hiii it will iterate the count
//     let count = 0;
//     for(i= 0; i<=str.length;i++){
//         if(str[i] === char){
//             count ++;
//         }
//     }return count;
//  }
 
//  console.log(characterOccurance("missseri" ,"s"));


//remove all non alphanumaric characters

// function nonAlphaNumaric(str){
//     let result ="";
//     for(i= 0; i <= str.length; i++){
//         if((str[i]>="a" && str[i]<="z") || (str[i]>="A" && str[i]<="Z")  || (str[i]>="0" && str[i]<="9")){
//             result+= str[i];
//         }
//     }return result;
// }

// console.log(nonAlphaNumaric("fhfjdh4342=@$HJDHGJH43535"));


// CHECK IF STRING starts and ends with same character

// function checkFirstLastChar(str){
//     if(str.length === 0 )
//         return false;
//     return (str[0] === str[str.length-1]);
// }
// console.log(checkFirstLastChar("hahhhhhah"))