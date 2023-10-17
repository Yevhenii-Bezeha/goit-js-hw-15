const input = document.querySelector('#validation-input');

const checkInput = (event) => {
    event.preventDefault();
    if (event.currentTarget.value.length === 6) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }

};

input.addEventListener('blur', checkInput);