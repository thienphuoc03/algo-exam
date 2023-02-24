/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  let output = candies.map((item) => item + extraCandies >= max);

  return output;
};

// kidsWithCandies([2,3,5,1,3], 3); //[true,true,true,false,true]
// kidsWithCandies([4,2,1,1,2], 1); //[true,false,false,false,false]
// kidsWithCandies([12,1,12], 10); //[true,false,true]
