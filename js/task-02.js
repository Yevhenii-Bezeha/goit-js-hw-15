const input = document.querySelector('#font-size-control');

const span = document.querySelector('#text');

const changeText = (event) => {
    event.preventDefault();
    span.style.fontSize = `${event.currentTarget.value}px`;
};

input.addEventListener('input', changeText);