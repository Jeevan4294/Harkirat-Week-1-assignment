/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

var result = 0;

class Calculator {
  constructor(res) {
    if(res != undefined){
      result = res;
    }
  }

  clear() {
    result = 0;
  }

  add(num) {
    result += num;
  }

  subtract(num) {
    result -= num;
  }

  multiply(num) {
    result *= num;
  }

  divide(num) {
    if(num === 0) {
      throw new Error();
    }
    result /= num;
  }

  performOperation(operand1, operator, operand2) {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      default:
        throw new Error("Invalid operator found: " + operator);
    }
  }

  calculate(expression) {
    // Remove all continuous spaces from the expression.
    expression = expression.replace(/\s+/g, "");
  
    // Create a stack to store the operands and operators.
    let stack = [];
  
    // Iterate over the expression and parse the operands and operators.
    var isNum = false;
    for (let i = 0; i < expression.length; i++) {
      const character = expression[i];

      // If the character is a digit, push it onto the stack.
      if (!isNaN(character)) {
        var tempCharacter = character;
        if(isNum === true){
          tempCharacter = stack.pop() + "" + character;
        }
        isNum = true;
        stack.push(parseInt(tempCharacter));
      } else if (character === "*" || character === "/" || character === "+" || character === "-") {
        isNum = false;
        stack.push(character);
      } else if (character === "(" && expression.lastIndexOf(")") != -1) {
        isNum = false;
        console.log(expression.slice(i+1,expression.lastIndexOf(")")))
        stack.push(this.calculate(expression.slice(i+1,expression.lastIndexOf(")"))));
        i=expression.lastIndexOf(")")+1;
      } else {
        isNum = false;
        // Throw an error for invalid characters.
        throw new Error("Invalid character found: " + character);
      }
    }

    let result = undefined;
    console.log(stack)
    var top = stack.pop()
    var operation = undefined;
    while (top != null){
      var operand2 = result;
      if (result === undefined) {
        operand2 = top;
        operation = stack.pop();
      } else {
        operation = top;
      }
      var operand1 = stack.pop();
      result = this.performOperation(operand1, operation, operand2);
      top = stack.pop()
    }
  
    // The result of the expression is the top element on the stack.
    return result;
  }
  
  
  
  getResult() {
    return result;
  }
}

const expression = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
var calculator = new Calculator();
const result1 = calculator.calculate(expression);
console.log("The result of the expression is: " + result1);

module.exports = Calculator;
