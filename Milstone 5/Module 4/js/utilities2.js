function InputValueInFloat(id) {
    let value = document.getElementById(id).value;
    let valueInFloat = parseFloat(value);
    return valueInFloat;
}

function InputHtmlValueInFloat(id) {
    let value = document.getElementById(id).innerText;
    let valueInFloat = parseFloat(value);
    return valueInFloat;
}

function toggle(id) {
    document.getElementById("add-money-form").classList.add('hidden')
    document.getElementById("cash-out-form").classList.add('hidden')
    document.getElementById("transaction-section").classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}
