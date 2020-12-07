/**
 * Class for operate with numbers
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator
     * @memberOf Calculator
     */
  constructor() {
  }

  /**
     *
     * @param {Number} testValue number to test
     * @return {boolean} returns true if testValue is a number
     */
  isNumber(testValue) {
    return typeof testValue === 'number';
  }

  /**
     *
     * @param {Number} args numbers to summarize
     * @return {Number} returns sum of arguments
     */
  add(...args) {
    if (!args.every(this.isNumber)) {
      throw new Error('some of arguments is not a number!');
    } else {
      let sum = 0;
      for (const arg of args) {
        sum += arg;
      }
      return sum;
    }
  }

  /**
     *
     * @param {Number } args numbers to multiply
     * @return {Number} result of multiplication arguments
     */
  multiply(...args) {
    if (!args.every(this.isNumber)) {
      throw new Error('some of arguments is not a number!');
    } else {
      let sum = 1;
      for (const arg of args) {
        sum *= arg;
      }
      return sum;
    }
  }
}

module.exports = Calculator;
