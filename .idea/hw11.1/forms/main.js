'use strict'
// const form = document.querySelector('form');
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     console.log(name)
//     console.log(email)
// });
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     const name = document.querySelector('#name');
//     const email = document.querySelector('#email');
//     if (name.value == '') {
//         alert ('Please enter your name');
//     }
//     if (!email.value.includes('@')){
//         alert('Please enter a valid email');
//     }
// });
// const name_ = document.querySelector('#name');
// const checkbox = document.querySelector('#checkbox');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     const nameValue = name_.value;
//     console.log(name_.value)
// });

// checkbox.addEventListener('change',function(){
//     const isCheckboxChecked = checkbox.checked;
//     name_.disabled = !isCheckboxChecked;
// });
const select = document.querySelector('#country');
select.addEventListener('change', () => console.log('Selected country:' + select.value));

const radioButtons = document.querySelectorAll('.gender');
radioButtons.forEach(function(radio){
    radio.addEventListener('change', function(){
        console.log('Selected gender: ' + radio.value);
    })
})