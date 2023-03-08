# Lab 3 - Part I - Arithmetic Calculator
Write JavaScript code for a calculator that can perform addition, subtraction, multiplication, and division:

## Demo
https://subtle-beignet-6e9d35.netlify.app/q1/

## Pseudo -ode
```js
  // Step 1: Define calculate function
function calculate(num1, operator, num2) {
    // TODO
    // Step 2: Switch on the operator
    // Step 3: Handle addition
    // Step 4: Handle subtraction
    // Step 5: Handle multiplication
    // Step 6: Handle division
    // Step 7: Handle invalid operator
}

// Get input from user
// ask the user for the first number
var num1 = parseFloat(prompt("Enter a number:"));
// ask the user for the operator
var operator = prompt("Enter an operator (+, -, *, /):");
// ask the user for the second number
var num2 = parseFloat(prompt("Enter another number:"));

// Perform calculation and display result
// perform the calculation based on the operator, and display the result
var result = calculate(num1, operator, num2);
alert("Result: " + result);
```
## Deliverables
Submit a Netlify link

## Hints
- Use either
  - `if-else` statements are used to check the operator entered by the user and perform the corresponding calculation or 
  - `switch` statement to perform the appropriate calculation based on the operator entered by the user.
- Use the `parseFloat() `function to convert the user input into a floating-point number. 

- Use the `prompt()` function is used to get input from the user and the `alert()` function to display the result.
