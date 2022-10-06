const buttons = document.querySelectorAll("button");
const display = document.querySelector('.display')


buttons.forEach(click => click.addEventListener('click', CalcDisplay));

let displayNumber = 0;
let temp = 0;
let total = 0;
let operator = "";
let newOperator = "";

function CalcDisplay (e) {
    if ((e.target.id === "+" || 
        e.target.id === "-" ||
        e.target.id === "*" ||
        e.target.id === "/") && 
        total == 0) {
        operator = e.target.id;
        total = displayNumber;
        displayNumber = 0;
        temp = 0;
    } else if ((e.target.id === "+" || 
                e.target.id === "-" ||
                e.target.id === "*" ||
                e.target.id === "/") && 
                total != 0) {
        newOperator = e.target.id;
        total = operate(total, displayNumber, operator);
        display.textContent = total;
        displayNumber = 0;
        temp = 0;
        operator = newOperator;
    } 
    else if (e.target.id === "=") {
        total = operate(total, displayNumber, operator);
        display.textContent = total;
        displayNumber = 0;
        temp = 0;
        operator = "";
        newOperator = "";
    } else if (e.target.id === "clear") {
        displayNumber = 0;
        temp = 0;
        total = 0;
        operator = "";
        newOperator = "";
        display.textContent = displayNumber;
    }  else if (e.target.id === "percent") {
        displayNumber = displayNumber/100;
        display.textContent = displayNumber;
    } else if (e.target.id === "sign-change") {
        displayNumber = displayNumber * (-1);
        display.textContent = displayNumber;
    } else {
    displayNumber = (temp * 10) + (parseInt(e.target.id));
    display.textContent = displayNumber;
    temp = displayNumber;
    }
}

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => (Math.round(a/b * 1000)/1000);

let operate = (a,b,operator) => {
    if (operator === "+") {
        value = add(a,b);
    } else if (operator === "-") {
        value = subtract(a,b);
    } else if (operator === "*") {
        value = multiply(a,b);
    } else if (operator === "/") {
        if (b === 0) {
            display.textContent = "Oops!!";
        } else {
            value = divide(a,b);
        }        
    }
    return value;
}


