const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('multiply method scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = undefined;
  });
  it('should return 42 if multiply 21 and 2', function() {
    expect(calculator.multiply(21, 2)).to.be.equal(42);
  });
  it('should work correctly with more than two parameters', function() {
    expect(calculator.multiply(2, 4, 10)).to.be.equal(80);
  });
  it('should work correctly with negative numbers', function() {
    expect(calculator.multiply(5, -2)).to.be.equal(-10);
  });
  it('should return zero when multiply by zero', function() {
    expect(calculator.multiply(42, 0)).to.be.equal(0);
  });
  // eslint-disable-next-line max-len
  it('should throw an error, when some of parameters is not a number', function() {
  // eslint-disable-next-line max-len
    expect(() => calculator.multiply([], 55)).to.throw('some of arguments is not a number!');
  });
});
