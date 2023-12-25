const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resultArr = [];
  arr.forEach((item, i, arr) => {
    if (arr[i - 1] === '--discard-next') {
      resultArr.push(undefined);
    } else {
      switch (item) {
        case '--double-prev':
          resultArr.push(resultArr[resultArr.length - 1]);
          break;
        case '--double-next':
          resultArr.push(arr[i + 1]);
          break;
        case '--discard-prev':
          resultArr.pop();
          break;
        case '--discard-next':
          break;
        default: resultArr.push(item);
      }
    }
  });

  return resultArr.filter((item) => item !== undefined);
}

module.exports = {
  transform
};
