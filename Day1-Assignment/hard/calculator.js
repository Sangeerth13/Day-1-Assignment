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
*/

class Calculator {
  result = 0;

  add(num) {
    this.result = this.result + num;
  }

  subtract(num) {
    this.result = this.result - num;
  }

  multiply(num) {
    this.result = this.result * num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result = this.result / num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    let expr = expression.replace(/\s+/g, '');

    for (let i = 0; i < expr.length; i++) {
      let ch = expr[i];
      if (
        !(ch >= '0' && ch <= '9') &&
        ch !== '+' &&
        ch !== '-' &&
        ch !== '*' &&
        ch !== '/' &&
        ch !== '(' &&
        ch !== ')'
      ) {
        throw new Error("Invalid characters in expression");
      }
    }

    
    this.result = eval(expr);
  }
}

module.exports = Calculator;
