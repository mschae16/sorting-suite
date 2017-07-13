const letters = ['d', 'b', 'a', 'c']

const mergeSort = array => {

  if (Array.isArray(array)) {

    if (array.length < 2) {
      return array
    } else {
      let mid = Math.floor(array.length / 2)
      let leftSide = array.slice(0, mid)
      let rightSide = array.slice(mid)
      return mergeSplitArrays(mergeSort(leftSide), mergeSort(rightSide))
    }

  } else {
    return 'Error - argument must be an array'
  }
}

const mergeSplitArrays = (leftSide, rightSide) => {
  let newArray = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < leftSide.length && indexRight < rightSide.length) {

    if (leftSide[indexLeft] <= rightSide[indexRight]) {

      newArray.push(leftSide[indexLeft])
      indexLeft++

    } else {

      newArray.push(rightSide[indexRight])
      indexRight++
    }
  }  return [...newArray, ...leftSide.slice(indexLeft), ...rightSide.slice(indexRight)]
}

mergeSort(letters)

module.exports = {mergeSort, mergeSplitArrays}
