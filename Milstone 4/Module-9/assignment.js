
// function calculateTax(income, expenses) {
//     if ((income<0||expenses<0) || (expenses>income)) {
//         return "Invalid Input";
//     } else {
//         let tax = ((income-expenses)*.20) ;
//         return tax;
//     }
// }

// function sendNotification(email) {
//     let countkey=0;
//     for (const element of email) {
//         if (element==='@') {
//             countkey++;
//         }
//     }
//     if (countkey !== 1) {
//         return "Invalid Email"
//     }
//     let newStr = email.split("@");
//     let username = newStr[0];
//     let domain  = newStr[1];
//     let resultString = `${username} sent you an email from ${domain} `   
//     return resultString;
// }

// function checkDigitsInName(name) {
//     if (typeof name !== 'string') {
//         return "Invalid Input";
//     }
//     const num = "0123456789";
//     for (const element of name) {
//          if (num.includes(element)) {
//             return true;
//          } 
//     }
//     return false;
// }

/*function signature/sample */
function calculateFinalScore(obj) {
    if ( typeof obj !== 'object') {
        return "Invalid Input";
    }
    // else{
    //     return "Invalid Input"
    // }
}

console.log(calculateFinalScore({name:'nnoo'}));
// && value !== null && !Array.isArray(obj)