const mocha = require('mocha');
const chai = require('chai');
var should = chai.should();
const calc = require('../calc')



var assert = require('assert');
describe('Calculator', function() {
  describe('tambah', function() {
    it('should return 3 when the input 1, 2 and "+" ', function() {
      should.equal(3, calc(1,2,'+'));
    });
  });

  describe('kurang', function() {
    it('should return 1 when the input 1, 2 and "-" ', function() {
      should.equal(1, calc(2,1,'-'));
    });
  });

  describe('kali', function() {
    it('should return 2 when the input 1, 2 and "*" ', function() {
      should.equal(2, calc(1,2,'*'));
    });
  });

  describe('bagi', function() {
    it('should return 2 when the input 1, 2 and "/" ', function() {
      should.equal(2, calc(2,1,'/'));
    });
  });

  describe('pangkat', function() {
    it('should return 4 when the input 2, 2 and "^" ', function() {
      should.equal(4, calc(2,2,'^'));
    });
  });

  describe('akar', function() {
    it('should return 2 when the input 4, 2 and "#" ', function() {
      should.equal(2, calc(4,2,'#'));
    });
  });
});
