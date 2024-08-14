/* SCRIPT FOR CALCULATOR */
let firstValue = '';
let secondValue = '';
let currentOperator = '';
let displayValue = '';

const display = document.querySelector('.display');

const numberBtn = document.querySelectorAll('.number');

numberBtn.forEach(button => {
    button.addEventListener('click', function() {
        displayValue += button.textContent;
        display.textContent = displayValue;
    })
});

const operatorBtn = document.querySelectorAll('.operator');
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

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', function() {
    if (firstValue !== '' && displayValue !== '' && currentOperator !== ''){
        secondValue = displayValue;
        display.textContent = operate(firstValue, currentOperator, secondValue);
        firstValue = display.textContent;
        displayValue = '';
        currentOperator = '';
    }
})

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', function () {
    firstValue = '';
    currentOperator = '';
    secondValue = '';
    displayValue = '';
    display.textContent = 0;
})

const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', function() {
    if (!displayValue.includes('.')){
        displayValue += '.';
        display.textContent = displayValue;
    }
})

function operate(numa, operator, numb){
    numa = parseFloat(numa);
    numb = parseFloat(numb);
    
    switch(operator){
        case "+":
            return numa + numb;
        case "-":
            return numa - numb;
        case "*":
            return numa * numb;
        case "/":
            return numb === 0 ? 'ERROR' : numa / numb;
        default:
            return null;
    }
}
