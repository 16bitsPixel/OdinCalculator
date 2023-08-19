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

// variables for our calculations
let num1 = "", operator = "", num2 = "", num3 = "";
let result = 0;
let operatorSet = false;

// query selectors for changing texts
let resultDisplay = document.querySelector(".resultDisplay");
let exprDisplay = document.querySelector(".expression");

// add event listeners to the buttons
(Array.from(document.querySelectorAll("button"))).forEach(button => {
    button.addEventListener("click", () => {
        if (operatorSet == false) {
            if (button.className == "number") {
                num1 += button.id;
            }
            else if (button.className == "operator") {
                switch (button.id) {
                    case "clear":
                        num1 = ""; operator = "";
                        break;
                    case "delete":
                        num1 = num1.slice(0, -1);
                        break;
                    case "sign":
                        if (num1.charAt(0) != "-") {
                            num1 = "-" + num1;
                        }
                        else {
                            num1 = num1.slice(1);
                        }
                        break;
                    case "equals":
                        resultDisplay = num1;
                        break;
                    default:
                        operator = button.id;
                        operatorSet = true;
                }
            }
        }
        else {
            if (button.className == "number") {
                num2 += button.id;
            }
            else if (button.className == "operator") {
                switch (button.id) {
                    case "clear":
                        if (num2 == "") {
                            operator = "";
                            operatorSet = false;
                        }
                        else {
                            num2 = "";
                        }
                        break;
                    case "delete":
                        if (num2 == "") {
                            operator = "";
                            operatorSet = false;
                        }
                        else {
                            num2 = num2.slice(0, -1);
                        }
                        break;
                    case "sign":
                        if (num2.charAt(0) != "-") {
                            num2 = "-" + num2;
                        }
                        else {
                            num2 = num2.slice(1);
                        }
                        break;
                    case "/":
                        break;
                    case "*":
                        break;
                    case "-":
                        break;
                    case "+":
                        break;
                    case "equals":
                        result = operate(operator, Number(num1), Number(num2));
                        break;
                }
            }
        }
        exprDisplay.textContent = num1 + " " + operator + " " + num2;
        resultDisplay.textContent = result;
    });
});
