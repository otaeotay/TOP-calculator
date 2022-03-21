let input = '';
let first = '';
let second = '';
let inputOp = '';
let output = 0;
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equals');


numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        input += e.target.innerText;
        display.textContent = input;
    })
});

opButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!inputOp) {
            first = input;
            input = '';
        }
        inputOp = e.target.innerText;
        display.textContent = inputOp;
    })
})


clear.addEventListener('click', (e) => {
    clearAll();
    display.textContent = input;
});

equal.addEventListener('click', () => {
    second = input;
    output = operate(inputOp, first, second);
    display.textContent = `${output}`;
    clearAll();
})

function clearAll() {
    first = '';
    second = '';
    input = '';
    inputOp = '';
}

function add(a, b){
    return a + b;
};

function subtract(a, b){
	return a - b;
};

function multiply(a, b){
    return a * b;
//   return a.reduce((total, step) => total *= step, 1);
};

function divide(a, b){
    return a / b;
};

function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
          return add(a, b)
        case '-':
          return subtract(a, b)
        case '*':
          return multiply(a, b)
        case '/':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
    }
}
