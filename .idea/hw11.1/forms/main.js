'use strict'
const form = document.querySelector('form');
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     console.log(name)
//     console.log(email)
// });
form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    if (name == '') {
        alert ('Please enter your name');
    }
    if (!email.includes('@')){
        alert('Please enter a valid email');
    }
});