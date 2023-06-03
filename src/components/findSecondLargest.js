function findSecondLargest(arr) {
  let secondLargest = -Infinity;
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [10, 8, 3, 5, 9];
console.log(findSecondLargest(arr));
