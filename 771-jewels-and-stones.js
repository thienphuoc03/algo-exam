/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i in jewels) {
    for (let j in stones) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }

  return count;
};

// numJewelsInStones('aA', 'aAAbbbb'); // 3
// numJewelsInStones('z', 'ZZ'); // 0
