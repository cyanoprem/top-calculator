const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display')


buttons.forEach(click => click.addEventListener('click', CalcDisplay));

let displayNumber = 0;
let temp = 0;
let total = 0;
// let final = 0;
let operator = "";

function CalcDisplay (e) {
    if (e.target.id === "+") {
        operator = "+";
        total = displayNumber;
        displayNumber = 0;
        temp = 0;
    } else if (e.target.id === "="){
        total = operate(total, displayNumber, operator);
        display.textContent = total;
    } 
    else {
    displayNumber = (temp * 10) + (parseInt(e.target.id));
    display.textContent = displayNumber;
    temp = displayNumber;
    }
}




let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;

let operate = (a,b,operator) => {
    if (operator === "+") {
        value = add(a,b);
    } else if (operator === "-") {
        value = subtract(a,b);
    } else if (operator === "*") {
        value = multiply(a,b);
    } else if (operator === "/") {
        value = divide(a,b);
    }
    return value;
}
/*
let a = parseInt(prompt("Enter first number :"));

let operator = prompt("Enter the operator :");
operator.toString();

let b = parseInt(prompt("Enter the second number :"));

alert(operate(a,b,operator));
*/

