const letters = ['d', 'b', 'a', 'c']

const quickSort = array => {

  if (Array.isArray(array)) {

    if (array.length < 2) {
      return array
    }

    var pivot = array[array.length - 1]
    var leftSide = []
    var rightSide = []

    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        leftSide.push(array[i])
      } else {
        rightSide.push(array[i])
      }
    }

    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)]

  } else {
    return 'Error - argument must be an array'
  }
}

quickSort(letters)

module.exports = quickSort
