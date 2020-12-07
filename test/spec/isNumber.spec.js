const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('isNumber method scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = undefined;
  });
  it('should return true if value is a number', function() {
    expect(calculator.isNumber(5)).to.be.true;
  });
  it('should return false if value is not a number', function() {
    expect(calculator.isNumber('string')).to.be.false;
  });
});
