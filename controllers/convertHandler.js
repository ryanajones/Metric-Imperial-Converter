/* eslint-disable no-eval */
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
    let result;
    if (regexSplit.test(input) === true) {
      const indexSplit = input.search(regexSplit);
      result = input.slice(0, indexSplit);
    } else {
      result = input;
    }
    const regexNum = /[1-9]\d*(\.\d+)?\/?[1-9]?(\d*)?(\.\d+)?/;
    const regexDoubleFraction = /\//g;

    if (result === '') {
      result = 1;
      return result;
    }

    if (regexNum.test(result) === false) {
      result = 'invalid number';
    } else if (
      result.match(regexDoubleFraction) !== null &&
      result.match(regexDoubleFraction).length >= 2
    ) {
      result = 'invalid number';
    } else {
      result = eval(result);
      const resultString = result.toString();
      const index = resultString.indexOf('.');
      if (resultString.length - index - 1 > 5) {
        result = parseFloat(result.toFixed(5));
      }
    }
    return result;
  };

  this.getUnit = function (input) {
    const regex = /[a-z]/i;
    const index = input.search(regex);
    let result = input.slice(index, input.length);

    if (result === 'l' || result === 'L') {
      result = 'L';
    } else {
      result = result.toLowerCase();
    }

    const possibleUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    let count = 0;

    possibleUnits.forEach((ele) => {
      if (ele === result) {
        count++;
      }
    });

    if (count === 0) {
      result = 'invalid unit';
    }

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
    /*  const literToGal = 0.264172; */
    const lbsToKg = 0.453592;
    /*  const kgToLbs = 2.20462; */
    const miToKm = 1.60934;
    /*   const kmToMi = 0.62137; */

    let result;

    if (initNum === 'invalid number') {
      result = 'invalid number';
    }

    if (result !== 'invalid number') {
      switch (initUnit) {
        case 'gal':
          result = initNum * galToL;
          break;
        case 'L':
          result = initNum / galToL;
          break;
        case 'lbs':
          result = initNum * lbsToKg;
          break;
        case 'kg':
          result = initNum / lbsToKg;
          break;
        case 'mi':
          result = initNum * miToKm;
          break;
        case 'km':
          result = initNum / miToKm;
          break;
        default:
          result = 'invalid number';
      }
    }

    if (result !== 'invalid number') {
      const resultString = result.toString();
      const index = resultString.indexOf('.');
      if (resultString.length - index - 1 > 5) {
        result = Number.parseFloat(result.toFixed(5));
      }
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
      result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    }

    return result;
  };
}

module.exports = ConvertHandler;
