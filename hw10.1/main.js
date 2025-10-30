const  paragraph = document.querySelector('#myBox');
paragraph.style.background = 'yellow';

let changeBackgroundColor = function (id, color){
    let target = document.getElementById(id);
    target.style.background = color;
};

const first_paragraph = document.querySelector('p');
first_paragraph.style.color = 'blue';
first_paragraph.classList.add('active');

let removeClassActive = (classname) => first_paragraph.classList.remove(classname); 