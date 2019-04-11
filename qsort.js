function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const j = partition(array, start, end);
  array = quickSort(array, start, j);
  array = quickSort(array, j+1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] < pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tempI = array[i];
  array[i] = array[j];
  array[j] = tempI;
}

module.exports = quickSort;