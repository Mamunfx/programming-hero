// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// //way-1
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let reversed = [];
// for (const values of colors ) {
//     reversed.unshift(values)
// }
// console.log(reversed);

// //way-2
// let rev_arr = [];
// for (let i =colors.length-1 ; i >= 0 ; i--) {
//     rev_arr.push(colors[i]);
    
// }
// console.log(rev_arr);


// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// const numbers = [12, 98, 5, 41, 23, 78, 46]
// let even =[];
// for (const element of numbers) {

//     if (element%2 == 0) {
//         even.push(element);
//     }
// }
// console.log(even);



// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// let fin=[];
// for (const element of numbers) {
//     fin.push(element)
    
// }
// console.log(fin.join(''));


// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// const statement = 'I am a hard working person'
// let result = [];
//     Element= statement.split(" ");

//     for (const element of Element) {
//         result.unshift(element)
//     }
// // for (const element of statement) {
    
// // }

// console.log(result.join(" "));



function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

getMenu();