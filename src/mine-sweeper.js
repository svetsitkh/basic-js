const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const iMax = matrix.length - 1;
  const jMax = matrix[0].length - 1;
  const matrixNew = [];
  for (let i = 0; i <= iMax; i += 1) {
    const matrixNewRow = [];
    for (let j = 0; j <= jMax; j += 1) {
      let n = 0;

      //row before
      if (i - 1 >= 0 && j - 1 >= 0) {
        n += matrix[i - 1][j - 1] ? 1 : 0;
      }

      if (i - 1 >= 0) {
        n += matrix[i - 1][j] ? 1 : 0;
      }

      if (i - 1 >= 0 && j + 1 <= jMax) {
        n += matrix[i - 1][j + 1] ? 1 : 0;
      }

      //this row
      if (j - 1 >= 0) {
        n += matrix[i][j - 1] ? 1 : 0;
      }

      if (j + 1 <= jMax) {
        n += matrix[i][j + 1] ? 1 : 0;
      }

      //row after
      if (i + 1 <= iMax && j - 1 >= 0) {
        n += matrix[i + 1][j - 1] ? 1 : 0;
      }

      if (i + 1 <= iMax) {
        n += matrix[i + 1][j] ? 1 : 0;
      }

      if (i + 1 <= iMax && j + 1 <= jMax) {
        n += matrix[i + 1][j + 1] ? 1 : 0;
      }

      matrixNewRow.push(n);
    }
    matrixNew.push(matrixNewRow);
  }

  return matrixNew;
}

module.exports = {
  minesweeper
};
