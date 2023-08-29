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
            return add(Number(num1), Number(num2));
        case "-":
            return subtract(Number(num1), Number(num2));
        case "*":
            return multiply(Number(num1), Number(num2));
        case "/":
            return divide(Number(num1), Number(num2));
        default:
            return "OOPS";
    }
}

// ----------MAIN------------

// variables for our calculations
let num1 = "", operator = "", num2 = "";
let result = 0;
let operatorSet = false;
let decimalSet1 = false, decimalSet2 = false;

// query selectors for changing texts
let resultDisplay = document.querySelector(".resultDisplay");
let exprDisplay = document.querySelector(".expression");

// add event listeners to the buttons
(Array.from(document.querySelectorAll("button"))).forEach(button => {
    button.addEventListener("click", () => {
        if (operatorSet == false) {
            if (button.className == "number") {
                if (button.id == ".") {
                    if (decimalSet1 == false) {
                        num1 += button.id;
                        decimalSet1 = true;
                    }
                }
                else if (button.id == "0" && decimalSet1 == false && num1 == "") {
                    // nothing happens
                }
                else {
                    num1 += button.id;
                }
            }
            else if (button.className == "operator") {
                switch (button.id) {
                    case "clear":
                        num1 = ""; operator = ""; result = "0"; decimalSet1 = false;
                        break;
                    case "delete":
                        if (num1.charAt(num1.length - 1) == "." && num1 != "") {
                            decimalSet1 = false;
                        }
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
                if (button.id == ".") {
                    if (decimalSet2 == false) {
                        num2 += button.id;
                        decimalSet2 = true;
                    }
                }
                else if (button.id == "0" && decimalSet2 == false && num2 == "") {
                    // nothing happens
                }
                else {
                    num2 += button.id;
                }
            }
            else if (button.className == "operator") {
                switch (button.id) {
                    case "clear":
                        num1 = ""; num2 = ""; operator = ""; result = "0"; operatorSet = false; decimalSet1 = false; decimalSet2 = false;
                        break;
                    case "delete":
                        if (num2 == "") {
                            operator = "";
                            operatorSet = false;
                        }
                        else if (num2.charAt(num2.length - 1) == ".") {
                            decimalSet2 = false;
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
                        result = operate(operator, num1, num2);
                        num1 = "" + result;
                        num2 = "";
                        operator = "/";
                        break;
                    case "*":
                        result = operate(operator, num1, num2);
                        num1 = "" + result;
                        num2 = "";
                        operator = "*";
                        break;
                    case "-":
                        result = operate(operator, num1, num2);
                        num1 = "" + result;
                        num2 = "";
                        operator = "-";
                        break;
                    case "+":
                        result = operate(operator, num1, num2);
                        num1 = "" + result;
                        num2 = "";
                        operator = "+";
                        break;
                    case "equals":
                        result = operate(operator, num1, num2);
                        break;
                }
            }
        }
        exprDisplay.textContent = num1 + " " + operator + " " + num2;
        resultDisplay.textContent = Math.round(result * 100) / 100;
        if (exprDisplay.textContent == "  ") {
            exprDisplay.textContent = "0";
            resultDisplay.textContent = "0";
        }
    });
});
