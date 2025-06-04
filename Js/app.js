let currentInput = '';
let operator = '';
let firstOperand = null;

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    document.getElementById('result').value = '';
}

function performOperation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
        document.getElementById('result').value = '';
    }
}

function calculateResult() {
    if (firstOperand === null || currentInput === '' || operator === '') return;
    let secondOperand = parseFloat(currentInput);
    let result = '';
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand === 0 ? 'Error' : firstOperand / secondOperand;
            break;
        default:
            result = 'Error';
    }
    document.getElementById('result').value = result;
    // Reset for next calculation
    currentInput = '';
    operator = '';
    firstOperand = null;
}

function calculateSquare() {
    if (currentInput === '') return;
    let num = parseFloat(currentInput);
    let result = num * num;
    document.getElementById('result').value = result;
    currentInput = result.toString();
}

function calculateCube() {
    if (currentInput === '') return;
    let num = parseFloat(currentInput);
    let result = num * num * num;
    document.getElementById('result').value = result;
    currentInput = result.toString();
}
document.addEventListener('DOMContentLoaded', () => {
    const resultDisplay = document.getElementById('result');
    const numberInput = document.getElementById('numberInput');
    const numberInput2 = document.getElementById('numberInput2');

    document.getElementById('addBtn').addEventListener('click', () => {
        const result = add(Number(numberInput.value), Number(numberInput2.value));
        resultDisplay.textContent = result;
    });

    document.getElementById('subtractBtn').addEventListener('click', () => {
        const result = subtract(Number(numberInput.value), Number(numberInput2.value));
        resultDisplay.textContent = result;
    });

    document.getElementById('multiplyBtn').addEventListener('click', () => {
        const result = multiply(Number(numberInput.value), Number(numberInput2.value));
        resultDisplay.textContent = result;
    });

    document.getElementById('divideBtn').addEventListener('click', () => {
        const result = divide(Number(numberInput.value), Number(numberInput2.value));
        resultDisplay.textContent = result;
    });

    document.getElementById('squareBtn').addEventListener('click', () => {
        const result = square(Number(numberInput.value));
        resultDisplay.textContent = result;
    });

    document.getElementById('cubeBtn').addEventListener('click', () => {
        const result = cube(Number(numberInput.value));
        resultDisplay.textContent = result;
    });
});