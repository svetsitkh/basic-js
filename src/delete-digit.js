const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nDigitsArr = n.toString().split('');
  let numbersArr = [];

  for (let i = 0; i < nDigitsArr.length; i += 1) {
    let nDigitsArrNew = [...nDigitsArr];
    nDigitsArrNew.splice(i, 1);
    numbersArr.push(Number(nDigitsArrNew.join('')));
  }

  return  Math.max(...numbersArr);
}

module.exports = {
  deleteDigit
};
