function chunk(array, chunkSize) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
