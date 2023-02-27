/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  return [
    ...nums.filter((item) => item % 2 === 0),
    ...nums.filter((item) => item % 2 !== 0),
  ];
};
