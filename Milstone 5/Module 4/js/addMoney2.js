document.getElementById("btn-add-money").addEventListener('click',function(event){
    event.preventDefault();
    let amount = InputValueInFloat("input-add-money");
    let pin = InputValueInFloat("input-pin-number");
    const currentbalance = InputHtmlValueInFloat("account-balance");
    
    if (pin=='1234') {
        let newBalance = currentbalance+amount;
        document.getElementById("account-balance").innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = `Added money : ${amount} | New Balance : ${newBalance}`

        document.getElementById("transaction-container").appendChild(p);
    }
    else{
        alert('Incorrect password')
    }
})