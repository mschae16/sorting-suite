const { expect, assert } = require('chai');
const mergeSort = require('../scripts/mergeSort.js');

describe('mergeSort', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should be able to sort an array', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.deep.equal(['z', 'b', 'c', 'f', 'x']);

    mergeSort(newArray);

    expect(newArray).to.deep.equal(['b', 'c', 'f', 'x', 'z'])
  })

  it.skip('should be able to sort a randomly-generated array', () => {
    let randomArray = [];
    let randomNumberCount = 9000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)}
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    mergeSort(randomArray);
    expect(randomArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b
    }));

  })

})
