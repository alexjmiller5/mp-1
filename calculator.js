// Function to get the input values
function getInputValues() {
    const num1 = Number(document.getElementById('first-number').value);
    const num2 = Number(document.getElementById('second-number').value);
    return { num1, num2 };
}

// Function to handle all operations
function calculate(operation) {
    const { num1, num2 } = getInputValues();
    let result;
    
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'power':
            result = 1;
            for (let i = 0; i < num2; i++) {
                result *= num1;
            }
            break;
        default:
            result = "Invalid operation";
    }

    displayResult(result);
}

// Function to clear the calculator
function clearCalculator() {
    document.getElementById('first-number').value = "";
    document.getElementById('second-number').value = "";
    document.getElementById('output').innerHTML = "";
}

// Function to display the result and change color if negative
function displayResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = String(result);
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

// Button triggers for different operations
function addition() { calculate('add'); }
function subtraction() { calculate('subtract'); }
function multiplication() { calculate('multiply'); }
function division() { calculate('divide'); }
function power() { calculate('power'); }