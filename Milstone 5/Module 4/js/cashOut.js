document.getElementById("btn-cash-out").addEventListener('click',function(event){
    event.preventDefault();
    let amount = InputValueInFloat("input-cash-out");
    let pin = InputValueInFloat("input-cash-out-pin");
    const currentbalance = InputHtmlValueInFloat("account-balance");
    
    if (pin=='1234') {
        let newBalance = currentbalance-amount;
        document.getElementById("account-balance").innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Cash out money : ${amount} | New Balance : ${newBalance}`

        document.getElementById("transaction-container").appendChild(p);
    }
    else{
        alert('Incorrect password')
    }
})