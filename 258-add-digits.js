/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let output = num.toString();
  if (output.length === 1) return output;
  do {
    let toArray = output.split('').map(Number);
    let lengthArray = toArray.length;
    let sum = 0;

    for (let i = 0; i < lengthArray; i++) {
      sum += toArray[i];
    }
    output = sum.toString();
  } while (output.length > 1);

  return output;
};
