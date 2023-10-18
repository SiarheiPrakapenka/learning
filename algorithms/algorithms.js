export const binSearch = (arr, toSearch) => {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    
    if (arr[mid] === toSearch) {
      return mid;
    }
    
    if (arr[mid] > toSearch) {
      high = --mid;
    } else {
      low = ++mid;
    }
  }
  
  return -1;
}