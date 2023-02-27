/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let exponent = (Math.log(n) / Math.log(3)).toFixed(10);

  return exponent % 1 === 0 ? true : false;
};
