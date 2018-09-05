const should = require('should');
const app = require('../app')

describe('Exercise', () => {
  describe('Exercise 1 - Merge two arrays of sorted integers in a linear fashion', () => {
    it('should return a sorted array, given two correct arguments', () => {
      app.exercise1([1,1,3,5], [1,2,3,4]).should.be.eql([1,1,1,2,3,3,4,5])
    });

    it('should return an empty array, given two empty arrays', () => {
      app.exercise1([], []).should.be.eql([])
    });

    it('should return an sorted array, given two arrays including negative numbers', () => {
      app.exercise1([-2,-3,-5,0], [9,2,4,12]).should.be.eql([-5,-3,-2,0,2,4,9,12])
    });

    it('should thrown an error, given one invalid arguments', () => {      
      should(() => {app.exercise1('Invalid Argument', [9,2,4,12]);} ).throw('Wrong type')
    });

    it('should thrown an error, given two invalid arguments', () => {      
      should(() => {app.exercise1('Invalid Argument 1', 'Invalid Argument 2');} ).throw('Wrong type')
    });
  });

  describe('Exercise 2 - Write a library for generating random PIN codes', () => {
    it('should return an array with a length of 1000', () => {
      app.exercise2().length.should.be.eql(1000)
    });    

    it('should return an array with only unique values', () => {
      const result = app.exercise2()      

      app.hasDuplicates(result).should.be.eql(false)
    });

    it('should not contain two consecutive digits', () => {
      const result = app.exercise2().some((pin) => app.notContainTwoConsecutiveDigits(pin))      

      result.should.be.eql(true)
    });    

    it('should not contain three incremental consecutive digits', () => {
      const result = app.exercise2().some((pin) => app.notContainThreeConsecutiveAndIncrementalDigits(pin))      

      result.should.be.eql(true)
    });    
  });
});