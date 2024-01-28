const value = document.getElementById('value');
const plusButton = document.getElementById('mais');
const minusButton = document.getElementById('menos');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('click', () => {
    count += 1;
    updateValue();
});

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

plusButton.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

minusButton.addEventListener('click', () => {
    count -= 1;
    updateValue();
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

minusButton.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});
