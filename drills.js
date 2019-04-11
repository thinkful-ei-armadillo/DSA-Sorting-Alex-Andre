// Drill #1: Understanding Merge Sort

// data : 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 
/* 
1: 
The third recusive call would be on the 'array' of [21].

2:
The 16th recursive call would be on the array of [16, 49, 39, 27, 43, 34, 46, 40]

3:
The first two lists to be merged are [21], [1] from [21, 1]

4:
The seventh merge is between: [1, 21, 26, 45], [2, 9, 28, 29]
*/


// Drill #2: Understanding quicksort

/* 1)
  The pivot could have been either 14 or 17.
  All of them numbers to the left of 14 are less than 14, and all
  the numbers on the right of it are greater. The same is true for 17.
  So both of these numbers could be the pivot.

  2)
  show the resulting list after the second partitioning
  [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

  - when using the last item as a pivot
  [3, 9, 10, 12, 19, 14, 17, 16, 13, 15]

  - when using the first item as a pivot
   [10, 3, 9, 12, 13, 14, 16, 19, 17, 15]
*/
const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

const quickSort = require('./qsort');

function testQuickSort() {
  console.log(quickSort(data));
}


const mergeSort = require('./msort');

function testMergeSort() {
  console.log(mergeSort(data));
}

testMergeSort();