/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    const regex = /[a-z]/;
    const index = input.search(regex);
    let result = input.slice(0, index);
    if (result === '') result = '1';
    return result;
  };

  this.getUnit = function (input) {
    const regex = /[a-z]/;
    const index = input.search(regex);
    const result = input.slice(index, input.length);
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
