/* SCRIPT FOR CALCULATOR */
let firstValue = '';
let secondValue = '';
let currentOperator = '';
let displayValue = '';

const display = document.querySelector('.display');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const decimalBtn = document.querySelector('.decimal');
const backspaceBtn = document.querySelector('.backspace');

numberBtn.forEach(button => {
    button.addEventListener('click', function() {
        displayValue += button.textContent;
        display.textContent = displayValue;
    })
});

operatorBtn.forEach(button => {
    button.addEventListener('click', function() {
        if (firstValue === '') {
            firstValue = displayValue;
            currentOperator = button.textContent;
            displayValue = '';
        } else if (displayValue !== '') {
            secondValue = displayValue;
            display.textContent = operate(firstValue, currentOperator, secondValue);
            firstValue = display.textContent;
            displayValue = '';
            currentOperator = button.textContent;
        }
    })
})

equalsBtn.addEventListener('click', function() {
    if (firstValue !== '' && displayValue !== '' && currentOperator !== ''){
        secondValue = displayValue;
        display.textContent = operate(firstValue, currentOperator, secondValue);
        firstValue = display.textContent;
        displayValue = '';
        currentOperator = '';
    }
})

clearBtn.addEventListener('click', function () {
    firstValue = '';
    currentOperator = '';
    secondValue = '';
    displayValue = '';
    display.textContent = 0;
})

decimalBtn.addEventListener('click', function() {
    if (!displayValue.includes('.')){
        displayValue += '.';
        display.textContent = displayValue;
    }
})

backspaceBtn.addEventListener('click', function() {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue || '0';
})

function operate(numa, operator, numb){
    numa = parseFloat(numa);
    numb = parseFloat(numb);
   
    let result;
    switch(operator){
        case "+":
            result = numa + numb;
            break;
        case "-":
            result = numa - numb;
            break;
        case "*":
            result = numa * numb;
            break;
        case "/":
            result = numb === 0 ? 'ERROR' : numa / numb;
            break;
        default:
            return null;
    }
    if (result !== 'ERROR'){
        result = parseFloat(result.toFixed(5));
    }
    return result;
}

// Key Support

window.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9'){
       appendNumber(e.key); 
    }
    if (e.key === '.'){
        appendDecimal();
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        chooseOperator(e.key);
    }
    if (e.key === '=' || e.key === 'Enter'){
        equalsBtn.click();
    }
    if (e.key === 'Backspace'){
        backspaceBtn.click();
    }
    if (e.key === 'Escape'){
        clearBtn.click()
    }
})

function appendNumber(num) {
    if (currentOperator && !secondValue){
        displayValue = '';
    }
    displayValue += num;
    display.textContent = displayValue;
}

function appendDecimal() {
    if (!displayValue.includes('.')){
        displayValue += '.';
        display.textContent = displayValue;
    }
}

function chooseOperator(operator) {
    const operatorButton = Array.from(operatorBtn).find(btn => btn.textContent === operator);
    if (operatorButton){
        operatorButton.click();
    }
}