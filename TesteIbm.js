
function encontrarSomaMaxima(arr) {
  
  let currentSum = arr[0];
  let maximumSum = arr[0];
 
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maximumSum = Math.max(maximumSum, currentSum);
  }
  return maximumSum;
}
