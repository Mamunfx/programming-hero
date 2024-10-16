//example 1: 
let a = [10,12,10,132,200]
let [x,y,...z]=a;
console.log([x,y,z]);

//example 2:
function arryfi(num1 ,num2){
    let nums = [num1,num2] // in this way we can make array btw ..
    return nums;
}
let [p,q] = arryfi(12,24);
console.log([p,q]);

//example 3:
let obj = {
    name:'abul',
    phone:123,
    movies:['king kong','tumhi ho']
}
let [firstMovie,secondMovie]=obj.movies;
console.log([firstMovie,secondMovie]);


// Object destructuring ::
let {names,age}={names:'abul', num:123, age:23}
console.log({names});

let obj2 = {
    nam:'abul',
    phone:123,
    movies:['king kong','tumhi ho'],
    specs:{
        num1:12,
        num2:13,
        num3:14
    }
}

let {nam,phone}=obj2;
console.log({nam,phone});

let [num1,num2]=obj2.movies;
console.log({num1,num2});