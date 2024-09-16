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