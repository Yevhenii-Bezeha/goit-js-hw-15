const registerForm = document.querySelector('.login-form');

const checkInfo = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === '' || password === '') {
        return alert('Всі поля повинні бути заповнені!');
    }

    const infoObject = {
        email,
        password,
    }
 
    console.log(infoObject);
    form.reset();
};

registerForm.addEventListener('submit', checkInfo);
