function freeCoke(price) {
    price= price >500 ? price-30 : price-0 ;
    return price
}
// console.log(freeCoke(600));

function bmiCal(weight , height) {
    let bmi = weight / (height**2);
    if (bmi < 18.5) {
        console.log('you are underweight.');
    } else if(bmi >= 18.5 && bmi <= 24.9){
        console.log('you are normal.');
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log('you are overweight.');
    }
    else{
        console.log('you are obesse!');
    }
}
// console.log(bmiCal(68 ,1.70));

function gradeCal(num) {
    grade = num >=90 && num <=100 ? 'A' : ( num>=80 && num <=89) ? 'B' :  (num>=70 && num <=79) ? 'C' :  (num>=60 && num <=69) ? 'D' :  (num>=0 && num <=59) ? 'F'  : '00';
    return grade;
}
// console.log(gradeCal(69));

//if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

function simp(num1 , num2) {
    result = num1 > num2 ? num1*2 : num1+num2
    return result
}
// console.log(simp(20,12));
