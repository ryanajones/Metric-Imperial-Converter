/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');

const { assert } = chai;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  suite('Function convertHandler.getNum(input)', function () {
    test('Whole number input', function (done) {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test('Decimal Input', function (done) {
      const input = '32.5L';
      assert.equal(convertHandler.getNum(input), 32.5);
      done();
    });

    test('Fractional Input', function (done) {
      const input = '32/64L';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });

    test('no Letter', function (done) {
      const input = '12345';
      assert.equal(convertHandler.getNum(input), 12345);
      done();
    });

    test('Fractional Input w/ Decimal', function (done) {
      const input = '3.5/7L';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });

    test('Invalid Input (double fraction)', function (done) {
      const input = '3//L';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });

    test('No Numerical Input', function (done) {
      const input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite('Function convertHandler.getUnit(input)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      const input = [
        'gal',
        'l',
        'mi',
        'km',
        'lbs',
        'kg',
        'GAL',
        'L',
        'MI',
        'KM',
        'LBS',
        'KG',
      ];
      const output = [
        'gal',
        'L',
        'mi',
        'km',
        'lbs',
        'kg',
        'gal',
        'L',
        'mi',
        'km',
        'lbs',
        'kg',
      ];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getUnit(ele), output[i]);
      });
      done();
    });

    test('Unknown Unit Input', function (done) {
      assert.equal(convertHandler.getUnit('unknown'), 'invalid unit');
      done();
    });
  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      const input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
      const expect = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.spellOutUnit(unit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      const input = ['gal', 'L', 'km', 'mi', 'kg', 'lbs'];
      const expect = [
        'gallons',
        'liters',
        'kilometers',
        'miles',
        'kilograms',
        'pounds',
      ];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.convert(num, unit)', function () {
    test('Gal to L', function (done) {
      const input = [5, 'gal'];
      const expected = 18.92705;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test('L to Gal', function (done) {
      const input = [5, 'L'];
      const expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test('Mi to Km', function (done) {
      const input = [5, 'mi'];
      const expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test('Km to Mi', function (done) {
      const input = [5, 'km'];
      const expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test('Lbs to Kg', function (done) {
      const input = [5, 'lbs'];
      const expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test('Kg to Lbs', function (done) {
      const input = [5, 'kg'];
      const expected = 11.02312;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
});
