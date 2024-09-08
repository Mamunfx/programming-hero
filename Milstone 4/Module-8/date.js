const today = new Date();
const date = new Date('2062-10-19') // string diye date declare kora !
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26) // coma diye direct number style e date dewa !
console.log(specificDate)
specificDate.setMonth(10); // it will convert the month 0 to 10 !
console.log(specificDate.toLocaleString('en-GB')); // it will change the date format !
