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