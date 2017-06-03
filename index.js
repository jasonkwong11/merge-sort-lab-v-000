function findMinAndRemoveSorted(array) {
  return array.splice(array.indexOf(Math.min(...array)), 1)
}

function merge(sortedOne, sortedTwo) {
  // combine two sorted arrays into one sorted array
  var sortedArray = []

  while(sortedOne.length != 0 && sortedTwo.length != 0){
    var firstOne = sortedOne[0]
    var firstTwo = sortedTwo[0]
    if(firstOne < firstTwo){
      sortedArray.push(sortedOne.shift())
    } else {
      sortedArray.push(sortedTwo.shift())
    }
  }
  return sortedArray.concat(sortedOne).concat(sortedTwo)
}

function mergeSort(array) {
  let mid = array.length/2
  let firstHalf = array.slice(0, mid)
  let secondHalf = array.slice(mid, array.length)

  if(array.length == 1){ return array }
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
