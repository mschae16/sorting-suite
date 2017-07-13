const letters = ['d', 'b', 'a', 'c']

const mergeSortTwo = array => {

  if (array.length < 2) {
    return array;
  } else {
    let mid = Math.floor(array.length / 2);
    let leftSide = array.slice(0, mid);
    let rightSide = array.slice(mid);
    return mergeSplit(mergeSortTwo(leftSide), mergeSortTwo(rightSide))
  }
}

const mergeSplit = (leftSide, rightSide) => {
  let newArray = [];

  while (leftSide.length && rightSide.length) {
    if (leftSide[0] < rightSide[0]) {
      newArray.push(leftSide.shift());
    } else {
      newArray.push(rightSide.shift());
    }
  }

  newArray.push(...leftSide, ...rightSide);

  return newArray;
}

mergeSortTwo(letters)

module.exports = {mergeSortTwo, mergeSplit};
