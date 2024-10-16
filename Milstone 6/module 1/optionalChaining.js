const user = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Wonderland'
    },
    arr:[
        {
            street: '123 Main St',
            city: 'Wonderland'
        }
    ]
};

console.log(user.address?.street); // Output: '123 Main St'
console.log(user.address?.zipCode); // Output: undefined
console.log(user.contact?.phone); // Output: undefined
console.log(`${user.arr[0]?.city}`);  
console.log(`${user.arr[1]?.city}`);  //optional chain works with available object property no unavailable!
