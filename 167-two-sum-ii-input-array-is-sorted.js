/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [++start, ++end];
    else sum > target ? end-- : start++;
  }
};
