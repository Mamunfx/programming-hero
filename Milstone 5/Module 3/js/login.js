document.getElementById("logInBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const phone = document.getElementById("phone").value;
    const pin = document.getElementById("pin").value;

    if (phone==="5" && pin==="12345") {
        console.log("you are loged in");
        
    }
    else {
        console.log("get out");
        
    }
})
