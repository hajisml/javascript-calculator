// Create calculator class
class Calculator{
    constructor(currentOperandTxt, previousOperandTxt){
        this.currentOperandTxt = currentOperandTxt;
        this.previousOperandTxt = previousOperandTxt;
        this.clear();
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){

    }
    calculate(){

    }
    inputNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    inputOperation(){

    }
    calculate(){

    }
    updateDisplay(){
        this.currentOperandTxt.innerHTML = this.currentOperand;
    }
}

// Select all Calculator elements used
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const currentOperandTxt = document.querySelector('[data-current-operand]');
const previousOperandTxt = document.querySelector('[data-previous-operand]');

// Instantiate the Calculator
const calculator = new Calculator(currentOperandTxt, previousOperandTxt);

// input numbers and update display
numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.inputNumber(btn.innerHTML);
        calculator.updateDisplay();
    })
});