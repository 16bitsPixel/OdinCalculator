// ----------OPERATION FUNCTIONS------------

// function adds num1 and num2 together
function add(num1, num2) {
    return num1 + num2;
}

// functions subtracts num2 from num1
function subtract(num1, num2) {
    return num1 - num2;
}

// function mutiplies the numbers together
function multiply(num1, num2) {
    return num1 * num2;
}

// function divides num2 from num1
function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "OOPS";
    }
}

// ----------MAIN------------
let num1, operator, num2;
