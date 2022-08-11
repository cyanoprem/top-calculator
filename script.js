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

let a = parseInt(prompt("Enter first number :"));

let operator = prompt("Enter the operator :");
operator.toString();

let b = parseInt(prompt("Enter the second number :"));

alert(operate(a,b,operator));


