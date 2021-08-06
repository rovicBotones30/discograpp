const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click' , function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
//modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.style.display ='none';
    }
})

//Form Validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//show error message
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}
//show valid message
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}


//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`); 
        } else {
            showValid(input);
        }
    }) 
}
//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be at less than ${max} characters`)
    }else {
        showValid(input);
    }
}
//checkpassword
function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

//get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
//users
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})

//image gallery
/*let galleryImages = document.querySelectorAll('.album');
let getLatestOpenedImg;
let windowWidth = window.InnerWidth;

galleryImages.forEach(function(image, index){
    image.onclick = function(){

        getLatestOpenedImg = index+1;

        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute('class', 'img-window');
        newImgWindow.setAttribute('onclick','closeImg()');

        let newImg = image.firstElementChild.cloneNode();
        newImgWindow.appendChild(newImg)
        console.log(newImg);
        newImg.classList.remove('d-cell_img');
        newImg.classList.add('popup-img');
        newImg.setAttribute('id', 'current-img');
    }
     
})*/