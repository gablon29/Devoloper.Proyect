console.log('hello world')

const URL =  'https://api.thecatapi.com/v1/images/search';

fetch(URL) //La funsion de fetch nos devuelve una promesa
.then(res => res.json())
.then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;

})