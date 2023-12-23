const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const cat = '^^';
  let catsCounter = 0;

  for (const row of matrix) {
    let index = row.indexOf(cat);
    while (index != -1) {
      catsCounter += 1;
      index = row.indexOf(cat, index + 1);
    }
  }

  return catsCounter;
}

module.exports = {
  countCats
};
