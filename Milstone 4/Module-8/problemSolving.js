// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

// interesting :
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction); // parseInt just like math.floor .
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2)


// *******************************************************************************

// array Duplication checker :

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);

// *******************************************************************************