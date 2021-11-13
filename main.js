let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldResetScreen = false;

// get UI elements
const calculatingArea = document.querySelector("#calculating-area");
const resultArea = document.querySelector("#result-area");
const clearBtn = document.querySelector("#clear-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const numberBtns = document.querySelectorAll(`button[data-number]`);
const operatorBtns = document.querySelectorAll(`button[data-operator]`);
const equalBtn = document.querySelector("#equal-btn");
const decimalPointBtn = document.querySelector("#decimal-point-btn");

// Basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// operate calculation
function operate(operation, firstNum, secondNum) {
  let firstNumber = Number(firstNum);
  let secondNumber = Number(secondNum);
  switch (operation) {
    case "+":
      return add(firstNumber, secondNumber);
      break;
    case "-":
      return subtract(firstNumber, secondNumber);
      break;
    case "×": //option 00d7
      return multiply(firstNumber, secondNumber);
      break;
    case "÷":
      return divide(firstNumber, secondNumber);
      break;
    default:
      return null;
  }
}
