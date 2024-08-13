let num1 = 0;
let operator;
let num2 = 0;

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
            addition(numa, numb);
            break;
        case "-":
            substraction(numa, numb);
            break;
        case "*":
            multiplication(numa, numb);
            break;
        case "/":
            division(numa, numb);
        default:
            console.log("ERROR! wrong operator");
            break;
    }
}
