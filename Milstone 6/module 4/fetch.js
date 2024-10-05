function loadusers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => namePrinterHandler(data))
}


function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data2 => postPrinterHandler(data2))
}

function  namePrinterHandler(data) {
    const ul = document.getElementById("unordered")
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


function postPrinterHandler(data2) {
    const div = document.getElementById("posts");
    for (const post of data2) {
        console.log(post);
        
        const divInner = document.createElement('div')
        divInner.innerHTML=`
        <h1> ${post.id}</h1>
        <h1> ${post.body}</h1>
        `;
        div.appendChild(divInner);
    }
}