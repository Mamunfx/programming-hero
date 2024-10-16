const addLocalStorage=() =>{
    let inputField = document.getElementById('id')
    let idName = inputField.value
    let inputFieldOfData = document.getElementById('data')
    let idData = inputFieldOfData.value

    // 
    if (idName && idData) {
        localStorage.setItem(idName,idData)
    }
    
    inputField.value="";
    inputFieldOfData.value="";
    let output = document.getElementById('output')
    output.innerText=`the id of data ${idName} and id data ${idData}`
}



localStorage.setItem('name',{name1:12,nam2:45});
localStorage.setItem('nam',JSON.stringify({name1:12,nam2:45}));
localStorage.setItem('nam2',JSON.stringify([12,34]));
localStorage.setItem('nam3',JSON.stringify([{eru:33,euro:67}]));


console.log(JSON.parse(localStorage.getItem('nam')));

let obje=JSON.parse(localStorage.getItem('nam'));
console.log(obje.name1);


