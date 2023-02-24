/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let output = [];
  for (let i = left; i <= right; i++) {
    let digits = i.toString().split('').map(Number);
    let count = 0;
    for (let j = 0; j < digits.length; j++) {
      if (i % digits[j] === 0) count++;
    }
    if (count === digits.length) output.push(i);
  }

  return output;
};

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

// Input: left = 47, right = 85
// Output: [48,55,66,77]

// selfDividingNumbers(left, right)
