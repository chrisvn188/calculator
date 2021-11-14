// VARIABLES
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let operatorBtnsClicked = false;
let equalBtnClicked = false;
let one = 0;
const MAX_NUM_LENGTH = 9;

// DOM ELEMENTS
const clearBtn = document.querySelector("#clear-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const percentageBtn = document.querySelector("#percentage-btn");
const lastDisplayingScreen = document.querySelector("#last-displaying-screen");
const currentDisplayingScreen = document.querySelector(
  "#current-displaying-screen"
);
const numberBtns = document.querySelectorAll(`button[data-number]`);
const operatorBtns = document.querySelectorAll(`button[data-operator]`);
const equalBtn = document.querySelector("#equal-btn");
const decimalPointBtn = document.querySelector("#decimal-point-btn");

// FUNCTIONS

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

// Operate calculation based on current operation
function operate(operator, firstNum, secondNum) {
  let firstNumber = Number(firstNum);
  let secondNumber = Number(secondNum);
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
      break;
    case "−": //shortcut: option + 2212
      return subtract(firstNumber, secondNumber);
      break;
    case "×": //shortcut: option + 00d7
      return multiply(firstNumber, secondNumber);
      break;
    case "÷": //shortcut: option + /
      return divide(firstNumber, secondNumber);
      break;
    default:
      return null;
  }
}

function clear() {
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
  operatorBtnsClicked = false;
  equalBtnClicked = false;
  currentDisplayingScreen.textContent = "0";
  lastDisplayingScreen.textContent = "";
}

function erase() {
  currentDisplayingScreen.textContent =
    currentDisplayingScreen.textContent.slice(0, -1);
}

// this function will be called whenever numbered btns clicked
function appendNumber(number) {
  if (
    currentDisplayingScreen.textContent === "0" ||
    operatorBtnsClicked ||
    equalBtnClicked
  ) {
    currentDisplayingScreen.textContent = "";
    operatorBtnsClicked = false;
    equalBtnClicked = false;
  }
  if(currentDisplayingScreen.textContent.length < MAX_NUM_LENGTH){
    currentDisplayingScreen.textContent += number;
  }
  
}

// this function will be called whenever operator btns clicked
function setOperationAndCalculate(operator) {
  if (currentOperator !== null && !operatorBtnsClicked) {
    evaluateExpression();
  };
  
  firstOperand = currentDisplayingScreen.textContent;
  currentOperator = operator;
  lastDisplayingScreen.textContent = `${firstOperand} ${currentOperator}`;
  operatorBtnsClicked = true;
}

function appendDecimalPointToNumber(){

}

function evaluateExpression() {
  if (currentOperator === null) return;
  secondOperand = currentDisplayingScreen.textContent;
  currentDisplayingScreen.textContent = String(
    roundNumber(operate(currentOperator, firstOperand, secondOperand))
  );
  lastDisplayingScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
  currentOperator = null;
  equalBtnClicked = true;
}

function appendDecimalPointToNumber(point) {
  if(currentDisplayingScreen.textContent.indexOf(point) == -1){
    currentDisplayingScreen.textContent = currentDisplayingScreen.textContent + point;
  }
}

function calculatePercentage() {
  return (currentDisplayingScreen.textContent = String(
    Number(currentDisplayingScreen.textContent) / 100
  ));
}

function roundNumber(number) {
  return Math.round(number * 10000) / 10000;
}

// EVENTS
numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => appendNumber(btn.textContent))
);
operatorBtns.forEach((btn) =>
  btn.addEventListener("click", () => setOperationAndCalculate(btn.textContent))
);

equalBtn.addEventListener("click", () => evaluateExpression());
decimalPointBtn.addEventListener("click", () => appendDecimalPointToNumber(decimalPointBtn.textContent));
percentageBtn.addEventListener("click", () => calculatePercentage());
clearBtn.addEventListener("click", () => clear());
eraserBtn.addEventListener("click", () => erase());
window.addEventListener(
  "load",
  () => (currentDisplayingScreen.textContent = "0")
);
