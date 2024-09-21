document.getElementById("btn-add-money").addEventListener('click',function(event){
    event.preventDefault();
    const ammount = document.getElementById("input-add-money").value ;
    const pin = document.getElementById("input-pin-number").value ;
    let prevBalance = document.getElementById("account-balance").innerText ; 
    if (pin==="1234") {
        let newBalance = parseInt(prevBalance)+parseInt(ammount);
        document.getElementById("account-balance").innerHTML= newBalance;
    }
})

document.getElementById("btn-cash-out").addEventListener('click',function(event){
    event.preventDefault();
    const ammount = document.getElementById("input-cash-out").value ;
    const pin = document.getElementById("input-cash-out-pin").value ;
    let prevBalance = document.getElementById("account-balance").innerText ; 
    if (pin==="1234") {
        let newBalance = parseFloat(prevBalance)-parseFloat(ammount);
        document.getElementById("account-balance").innerHTML= newBalance;
    }
})


document.getElementById("btn-show-cash-out").addEventListener('click',function(){
    document.getElementById("cash-out-form").classList.remove('hidden');
    document.getElementById("add-money-form" ).classList.add('hidden');

})

document.getElementById("btn-show-add-money").addEventListener('click',function(){
    document.getElementById("cash-out-form").classList.add('hidden');
    document.getElementById("add-money-form" ).classList.remove('hidden');

})