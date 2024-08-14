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
            display = '';
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

function addition(a, b){
    return a + b;
}
function substraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function division(a, b){
    if (b === 0){
        return "ERROR";
    } else{
        return a / b;
    }
}
function operate(numa, operator, numb){
    switch(operator){
        case "+":
            return numa + numb;
            break;
        case "-":
            return numa - numb;
            break;
        case "*":
            return numa * numb;
            break;
        case "/":
            return b === 0 ? 'ERROR' : a / b;
            break;
        default:
            return null;
            break;
    }
}
