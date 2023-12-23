const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  domains.forEach(domain => {
    const domainArr = domain.split('.').reverse();
    //let i = 1;
    let str = '';
    domainArr.forEach(domainPart => {
        str = str + '.' + domainPart;
        arr.push(str);
    })
  });

  let result = {};
  arr.forEach(el => {
    if (!result[el]) {
      result[el] = 1;
    } else {
      result[el] += 1;
    }
  })

  return result;
}

module.exports = {
  getDNSStats
};
