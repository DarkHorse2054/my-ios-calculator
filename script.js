document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (button.classList.contains('number') || button.classList.contains('decimal')) {
                inputDigit(buttonText);
                updateDisplay();
            } else if (button.classList.contains('operator')) {
                handleOperator(buttonText);
                updateDisplay();
            } else if (button.classList.contains('function')) {
                handleFunction(buttonText);
                updateDisplay();
            }
        });
    });

    function inputDigit(digit) {
        if (waitingForSecondOperand) {
            currentInput = digit;
            waitingForSecondOperand = false;
        } else {
            if (currentInput === '0' && digit !== '.') {
                currentInput = digit;
            } else if (digit === '.' && currentInput.includes('.')) {
                return; // Only one decimal point allowed
            } else {
                currentInput += digit;
            }
        }
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);

        if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            return;
        }

        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation[operator](firstOperand, inputValue);
            currentInput = String(result);
            firstOperand = result;
        }

        waitingForSecondOperand = true;
        operator = nextOperator;

        // Visual feedback for active operator
        document.querySelectorAll('.operator').forEach(opButton => {
            opButton.classList.remove('active');
        });
        const activeOperatorButton = Array.from(buttons).find(btn => btn.textContent === nextOperator && btn.classList.contains('operator'));
        if (activeOperatorButton) {
            activeOperatorButton.classList.add('active');
        }
    }

    const performCalculation = {
        '÷': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '×': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '=': (firstOperand, secondOperand) => secondOperand // For equals, just return second operand after calculation
    };

    function handleFunction(func) {
        if (func === 'AC') {
            currentInput = '0';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
            // Clear active operator class
            document.querySelectorAll('.operator').forEach(opButton => {
                opButton.classList.remove('active');
            });
        } else if (func === '+/-') {
            currentInput = String(parseFloat(currentInput) * -1);
        } else if (func === '%') {
            currentInput = String(parseFloat(currentInput) / 100);
        }
    }

    updateDisplay(); // Initialize display
});