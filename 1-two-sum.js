/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] + nums[i + 1] === target) return (output = [i, i + 1]);
  }

  return output;
};

twoSum();
