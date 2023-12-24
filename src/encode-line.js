const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultStr = '';
  let letterCounter = 1;
  let prevLetter = '';
  for (let i = 0; i <= str.length; i += 1) {
    if (i === str.length) {
      resultStr += letterCounter === 1 ? prevLetter : (letterCounter + prevLetter);
    } else {
      if (str[i] === prevLetter) {
        letterCounter += 1;
      } else {
        resultStr += letterCounter === 1 ? prevLetter : (letterCounter + prevLetter);
        letterCounter = 1;
        prevLetter = str[i];
      }
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine
};
