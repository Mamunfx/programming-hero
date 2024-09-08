// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celToFah(cel) {
//     let fah = cel*(9/5)+32;
//     return fah;
// }
// console.log(celToFah(100));

// function fahToCel(fah) {
//     let Cel = (fah - 32)*5/9;
//     return Cel;
// }
// console.log(fahToCel(212));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// numbers = [5,6,11,12,98, 5]

// function find(checkNum) {
//     count = 0;
//     for (const element of numbers) {
//         if (checkNum==element) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(find(12));

// Task-3:
// Write a function to count the number of vowels in a string.

// function vowelCount(str) {
//     let lower = str.toLowerCase();
//     let splitt = lower.split("");
//     let count=0;
//     for (const element of splitt) {
//         if (element=='a'||element=='e'||element=='i'||element=='o'||element=='u') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCount("Amar shonar Bangla ami tomay vhalo bashi !"));

// Task-4:
// Write a function to find the longest word in a given string.

// function longestWord(str) {
//   let firstSplit = str.split(" ");
//   let testString = "";
//   for (const element of firstSplit) {
//     let a = element.length;
//     let b = testString.length;
//    if (a>b) {
//     testString = element;
//    }
//   }
//   return  testString;
// }
// console.log(longestWord("Amar shonar bangla ami tomay vhalobashi"));


// Task-5:
// Generate a random number between 10 to 20.

// let a = Math.round(Math.random()*20);
// function rand(param) {
//     if (a>=10) {
//         return a;
//     }
//     else {
//         return a= a+10;
//     }
// }
// console.log(rand(a));
