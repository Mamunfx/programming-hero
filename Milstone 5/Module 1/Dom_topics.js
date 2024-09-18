/* 
<script>
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}

// option-1: getElementsByTagName
const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    // console.log(h1.innerText);
}

// option-2: getElementById
const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits changed by JS';

// option-3: getElementsByClassName
const places = document.getElementsByClassName('important-places');
for(const place of places){
    // console.log(place.innerText)
}

// option-4: querySelector
eita just first child return korbe !

// option-5: querySelectorAll
const someLi = document.querySelectorAll('.fruits-container li');
// console.log(someLi);
for(const li of someLi){
    // console.log(li.innerText);
}
</script> 
*/


// Dynamic Style, GetAttribute, SetAttribute, InnerText, InnerHTML



// Styling Dom Properties, Add And Remove Css Class Using JS
/*

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text')

*/


//  NodeList, Htmlcollection, ParentNode, Childnodes, CreateElement

/*
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
main.appendChild(section);
*/



// append 

/*
// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);

// 1. where to ad
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='biryani' 
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='borhani' 
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='salad' 
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);
*/