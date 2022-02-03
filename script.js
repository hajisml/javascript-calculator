// Create calculator class
class Calculator{
    constructor(currentOperandTxt, previousOperandTxt){
        this.currentOperandTxt = currentOperandTxt;
        this.previousOperandTxt = previousOperandTxt;
        this.clear();
    }
    clear(){

    }
    delete(){

    }
    calculate(){

    }
    inputNumber(){

    }
    inputOperation(){

    }
    calculate(){

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