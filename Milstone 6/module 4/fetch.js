function loadusers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => namePrinterHandler(data))
}


function  namePrinterHandler(data) {
    const ul = document.getElementById("unordered")
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}