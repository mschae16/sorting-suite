const { expect, assert } = require('chai');
const insertionSort = require('../scripts/insertionSort.js');

describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should be able to sort an array', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.deep.equal(['z', 'b', 'c', 'f', 'x']);

    insertionSort(newArray);

    expect(newArray).to.deep.equal(['b', 'c', 'f', 'x', 'z'])
  })

  it('should be able to sort a randomly-generated array', () => {
    let randomArray = [];
    let randomNumberCount = 5000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    insertionSort(randomArray);
    expect(randomArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b
    }));

  })

})
