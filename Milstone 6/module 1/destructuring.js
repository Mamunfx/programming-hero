// DEsturing is basically obj , arr or str er kono specific elment re arekta variable e store kora !

const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545
}
// if right side is an object left side of destructuring will be object as well 
// use property name as a variable that contains the property value
const {phone, age: boyos} = actor   // ekhane phone normally call kora hoise but age take replace kora hoise boyosh nam diye !

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos)


// array destructuring. 
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66]; // we can replace both varibale name and value at a time by this destructuting !
console.log(x,y);

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(6, 9);

console.log(prothom, ditiyo)