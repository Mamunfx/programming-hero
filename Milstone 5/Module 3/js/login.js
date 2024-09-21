document.getElementById("logInBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const phone = document.getElementById("phone00").value;
    const pin = document.getElementById("pin00").value;

    if (phone === "5" && pin === "1234") {
        console.log("kiree");
        window.location.assign('other.html');
    }
    else {
        console.log("get out");
    }
})
