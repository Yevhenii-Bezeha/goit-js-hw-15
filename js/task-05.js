function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}

const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divCollection = document.querySelector('#boxes');

function createBoxesHandler() {
  const amount = Number(input.value);
  createBoxes(amount);
}

function destroyBoxesHandler() {
  destroyBoxes();
}

btnCreate.addEventListener('click', createBoxesHandler);
btnDestroy.addEventListener('click', destroyBoxesHandler);

function createBoxes(amount) {
  let boxSize = 30;
  let newDivArray = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    newDivArray.push(box);
    boxSize += 10;
  }
  divCollection.append(...newDivArray);
}

function destroyBoxes() {
  divCollection.innerHTML = '';
}