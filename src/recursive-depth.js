const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let resultDepth = 0;

    if (Array.isArray(arr)) {
      resultDepth = 1;

      for (const item of arr) {
        const depth = this.calculateDepth(item) + 1;
        resultDepth = Math.max(resultDepth, depth);
      }

    }

    return resultDepth;
  }
}

module.exports = {
  DepthCalculator
};
