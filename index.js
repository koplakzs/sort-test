const formSmallestNumber = (sequence) => {
  if (sequence.length > 8) {
    return "Panjang Inputan tidak boleh lebih dari 8";
  } else if (!/^[MN]+$/.test(sequence)) {
    return "Inputan haruis terdiri dari 'M' and 'N'";
  }

  const numbers = new Set();
  const result = [];

  for (const char of sequence) {
    if (char === "M") {
      for (let num = 9; num >= 1; num--) {
        if (!numbers.has(num)) {
          numbers.add(num);
          result.push(num);
          break;
        }
      }
    } else {
      for (let num = 1; num <= 9; num++) {
        if (!numbers.has(num)) {
          numbers.add(num);
          result.push(num);
          break;
        }
      }
    }
  }

  return result.join("");
};

console.log(formSmallestNumber("M"));
console.log(formSmallestNumber("N"));
console.log(formSmallestNumber("MM"));
console.log(formSmallestNumber("NN"));
console.log(formSmallestNumber("MNMN"));
console.log(formSmallestNumber("NNMMM"));
console.log(formSmallestNumber("MMNMMNNM"));
