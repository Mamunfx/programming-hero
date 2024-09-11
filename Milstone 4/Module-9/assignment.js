
// function calculateTax(income, expenses) {
//     if ((income<0||expenses<0) || (expenses>income)) {
//         return "Invalid Input";
//     } else {
//         let tax = ((income-expenses)*.20) ;
//         return tax;
//     }
// }


// function sendNotification(email) {
//     let a = email.split('');
//     let countkey=0;
//     for (const element of a) {
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


