
function calculateTax(income, expenses) {
    if ((income<0||expenses<0) || (expenses>income)) {
        return "Invalid Input";
    } else {
        let tax = ((income-expenses)*.20) ;
        return tax;
    }
}

console.log(calculateTax(6000, -1500));


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

// function calculateFinalScore(obj) {
//     if (Array.isArray(obj)=== true) {
//         return "Invalid Input";
//     }
//     else if(typeof obj !== 'object'){
//         return "Invalid Input";
//     }
//     let familyMarks=0;
//     if (obj.isFFamily==true) {
//         familyMarks=20;
//     }
//     let totalMarks = obj.testScore + obj.schoolGrade + familyMarks;
//     if (totalMarks>=80) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function  waitingTime(waitingTimes  , serialNumber) {
//     if (Array.isArray(waitingTimes)===false) {
//         return "Invalid Input"
//     }
//     else if (typeof serialNumber !== 'number' ){
//         return "Invalid Input"
//     }
//     let count = 0;
//     for (const element of waitingTimes) {
//         count = count+element;
//     }
//     let avgInterTime = Math.round(count/waitingTimes.length);
//     let seriaLeft = serialNumber-(waitingTimes.length+1);
//     let prediction = seriaLeft*avgInterTime;
//     return prediction; 
// }