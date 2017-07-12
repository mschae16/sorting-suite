const { expect, assert } = require('chai');
const { mergeSort, mergeSplitArrays } = require('../scripts/mergeSort.js');

describe('mergeSort functions', () => {

  it('should have a mergeSort and mergeSplitArrays function and they should be functions', () => {
    assert.isFunction(mergeSort);
    assert.isFunction(mergeSplitArrays);
  })

  it('should be able to sort an array', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.deep.equal(['z', 'b', 'c', 'f', 'x']);

    let modifiedArray = mergeSort(newArray);

    expect(modifiedArray).to.deep.equal(['b', 'c', 'f', 'x', 'z'])
  })

  it('should be able to sort a randomly-generated array', () => {
    let randomArray = [];
    let randomNumberCount = 5000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)}
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    let modifiedArray = mergeSort(randomArray);
    expect(modifiedArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b
    }));

  })

})
