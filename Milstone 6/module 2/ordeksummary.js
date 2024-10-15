const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// map
const names = products.map(product => product.name) //foreach er moto prottektay traverse korbe but eitar subidha hocche etar moddhe kichu return kora jay soo we will use map instead of foreach in react .
// console.log(names)
const prices = products.map(p => p.price)
// console.log(prices)


// forEach
products.forEach(p => console.log(p.id)) // map er motoi just etate kono kisu  return nai .

// filter
const expensive = products.filter(p => p.price > 50000) // filter er moddhe condition dile ow arr or object er vitore joto gula matching pabe sei condition onushare shob return korbe !!
// console.log(expensive)

// find 
const affordable = products.find(p => p.price < 50000) // filter er moto eta shob deyna fakibazi kore just jeita first e mil pay seta dey !
console.log(affordable)

// reduce
const total = products.reduce( (acum, current) => acum + current.price , 0) // eita muloto use hoy kono kisu sum up korar khetre , niche example dewa holo jekhane reduce er maddhome object er vitore jooto price ase shob jog kore than return kora hoise !
console.log(total);