const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe('add method scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = undefined;
  });
  it('should return 42 if sum 40 and 2', function() {
    expect(calculator.add(40, 2)).to.be.equal(42);
  });
  it('should work correctly with more than two parameters', function() {
    expect(calculator.add(10, 20, 30, 40)).to.be.equal(100);
  });
  it('should work correctly with negative numbers', function() {
    expect(calculator.add(10, -50)).to.be.equal(-40);
  });
  it('should throw error if any of parameters is not a number', function() {
    // eslint-disable-next-line max-len
    expect(() => calculator.add({}, 4)).to.throw(Error, 'some of arguments is not a number!');
  });
});
