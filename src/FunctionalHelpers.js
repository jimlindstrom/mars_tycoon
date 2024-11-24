function arraySum(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0);
}

function unzipPairs(pairs) {
  return [
    pairs.map((pair) => pair[0]),
    pairs.map((pair) => pair[1])
  ];
}

export { unzipPairs, arraySum };
