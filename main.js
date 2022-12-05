let firstName = document.querySelector('#firstName');
let input = document.querySelectorAll('input');
let error = document.querySelectorAll('.error');
let email = document.querySelector('#email');
let form = document.querySelector('form');

function notice(event) {
  for(i = 0; i < 4; i++) {
    input[i].classList.remove("errorImg");
    error[i].style.display = 'none';
    if(!email.validity.valid) {
      input[2].classList.add('errorImg');
      email.style.display = 'block';
      event.preventDefault();
    }

    if(input.type != 'email' && input[i].value =='') {
      input[i].classList.add('errorImg');
      error[i].style.display = 'block';
      event.preventDefault();
    }
  }
}

form.addEventListener('submit', notice);