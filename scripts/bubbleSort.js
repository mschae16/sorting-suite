const numbers = [10, 7, 8, 5, 6]

const bubbleSort = array => {

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - i; j++) {

      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}

bubbleSort(numbers);

module.exports = bubbleSort;
