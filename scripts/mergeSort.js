const letters = ['d', 'b', 'a', 'c']

const mergeSort = array => {

  if (array.length < 2) {
    return array;
  } else {
    let mid = Math.floor(array.length/2);
    let leftSide = array.slice(0, mid);
    let rightSide = array.slice(mid);

    console.log('leftSide ', leftSide)
    console.log('rightSide ', rightSide)
    return mergeSplitArrays(mergeSort(leftSide), mergeSort(rightSide))

  }
}

const mergeSplitArrays = (leftSide, rightSide) => {
  let newArray = [];
  let indexLeft = 0;
  let indexRight = 0;
  let count = 0;

  while (indexLeft < leftSide.length && indexRight < rightSide.length) {
    console.log('index Left', indexLeft)
     console.log('index right', indexRight)
    count++;

    console.log('current count ', count )

    if (leftSide[indexLeft] <= rightSide[indexRight]) {

      newArray.push(leftSide[indexLeft]);
      indexLeft++;

    } else {

      newArray.push(rightSide[indexRight]);
      indexRight++;
    }
  }

  console.log('newArray ', newArray)
  console.log('leftSide array ', leftSide.slice(indexLeft))
  console.log('rightSide array ', rightSide.slice(indexRight))


  return [...newArray, ...leftSide.slice(indexLeft), ...rightSide.slice(indexRight)];
}

mergeSort(numberArray);

module.exports = mergeSort;
