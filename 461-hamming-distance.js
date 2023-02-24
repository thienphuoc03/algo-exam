/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  xBinary = x.toString(2);
  yBinary = y.toString(2);

  while (xBinary.length < yBinary.length) xBinary = '0' + xBinary;
  while (yBinary.length < xBinary.length) yBinary = '0' + yBinary;

  distance_count = 0;
  for (let i = 0; i < xBinary.length; i++) {
    if (xBinary[i] !== yBinary[i]) distance_count++;
  }

  return distance_count;
};

// hammingDistance(3, 1); // 1
// hammingDistance(1, 4); // 2
