let arr = [4, 5, 10, 2, 1, 3];

function bucketSort(arr, low, high) {
  let buckets = [];
  let output = [];

  arr.forEach(n => {
    if(! buckets[n]) buckets[n] = [];
    buckets[n].push(n);
  });

  buckets.forEach(bucket => {
    if(bucket) output.push(bucket[0]);
  });

  return output;
}

console.log(bucketSort(arr));