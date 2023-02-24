/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let output = [];
  let length = nums.length;

  for (let i = 1; i <= length; i++) {
    if (!nums.includes(i)) output.push(i);
  }

  return output;
};
