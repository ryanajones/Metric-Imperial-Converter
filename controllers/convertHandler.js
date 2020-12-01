/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    const regexSplit = /[a-z]/i;
    const index = input.search(regexSplit);
    let result = input.slice(0, index);
    const regexNum = /[1-9]\d*(\.\d+)?\/?[1-9]?(\d*)?(\.\d+)?/;
    if (result === '') result = '1';
    if (regexNum.test(result) === false) result = 'invalid number';
    return result;
  };

  this.getUnit = function (input) {
    const regex = /[a-z]/i;
    const index = input.search(regex);
    const result = input.slice(index, input.length);
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = 'invalid unit';
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const literToGal = 0.264172;
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmTomi = 0.621371;

    let result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum * literToGal;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum * kgToLbs;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum * kmTomi;
        break;
      default:
        result = 'invalid';
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      result = 'invalid number and unit';
    }

    if (initNum === 'invalid number' && initUnit !== 'invalid unit') {
      result = 'invalid number';
    }

    if (initNum !== 'invalid number' && initUnit === 'invalid unit') {
      result = 'invalid unit';
    }

    if (initNum !== 'invalid number' && initUnit !== 'invalid unit') {
      result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}.`;
    }

    return result;
  };
}

module.exports = ConvertHandler;
