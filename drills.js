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

/*
1st:
mergeSort(left)
21, 1, 26, 45, 29, 28, 2, 9

left: 21,1,26,45
right: 29, 28, 2, 9

  2nd:
  left = mergeSort(left);
    array of 21, 1, 26, 45

    left: 21, 1
    right: 26, 45

    3rd:
    left = mergeSort(left)
      array of 21,1
      left: 21
      right: 1

      4th:
      left = mergeSort(left)
        array of 21
        return 21

      5th:
      right = mergeSort(right)
        array of 1
        return 1
      merge([21], [1], [21,1]);
    
    6th:
    right = mergeSort(right)

      array of [26, 45]
      left: 26
      right: 45

      7th:
      mergeSort(left)
        array of 26
        return 26

      8th:
      mergeSort(right)
        array of 45
        return 45

      return merge([26], [45], [26, 45])

    return merge([1,21], [26, 45], [21, 1, 26, 45])

  9th::
  mergeSort(right)
    array of 29, 28, 2, 9

    left: 29, 28
    right: 2, 9

    10th::
    mergeSort(left)
      array of 29, 28

      11th::
      mergeSort(left)
        array of 29
        return 29

      12th:
      mergeSort(right)
        array of 28
        return 28

      merge([29], [28], [29, 28])

    13th:
    mergeSort(right)
      array of 2, 9

      14th:
      mergeSort(left)
        array of 2
        return 2

      15th:
      mergeSort(right)
        array of 9
        return 9

      merge ([2], [9], [2,9])

    merge([28, 29], [2, 9], [29, 28, 2, 9])

  merge([1, 21, 26, 45], [2, 9, 28, 29], [21, 1, 26, 45, 29, 28, 2, 9])

16th:
mergeSort([16, 49, 39, 27, 43, 34, 46, 40])
  
*/