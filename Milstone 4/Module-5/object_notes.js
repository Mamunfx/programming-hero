// primitive
// basic, primary
const age = 21;
const school = 'rifle square';
const isPassed = true;
const subjects = ['bangla', 'English', 'Physics', 'Math']
const bottle_wrong = ['white', 45];
const bottleColor = 'white';

// object
// non-primitive
const subject = {
    name: 'biology',
    teacher: 'rasheda mam',
    examDate: '30 Feb', 
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'Final Exam',
        marks: 100
    }
}


//*********************accessing the values  ******************************
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const values = Object.values(computer);
console.log(values);

//*************** pushing values to object keys ***************************
const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bali', 'pataya']

const propName = 'profession';
person[propName] = 'devops'
console.log(person[propName]);


//*********************** loop through an object  *********************** 

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : array
// for in : object
for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);
//TO use for of in object we need to convert convert keys of object in an array first or for of cannot loop through an object but in array !

for(const key of keys){
    console.log(key, ':', mobile[key]);
    
}

//*********************** nested object and accessing them *************************** 

const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}

// console.log(college.unique.color)
college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit)
college.events[1] = '16 December'
console.log(college.events[1])
delete college.class;
console.log(college)