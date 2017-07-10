const { expect, assert } = require('chai');
const insertionSort = require('../scripts/insertionSort.js');

describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should be able to sort an array', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.equal(newArray, ['z', 'b', 'c', 'f', 'x']);

    insertionSort(newArray);

    expect(newArray).to.equal(newArray, ['b', 'c', 'f', 'x', 'z'])
  })

  it('should be able to sort a randomly-generated array', () => {
    let randomArray = [];
    for (let i = 0; i < 1000; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)}

    insertionSort(randomArray);

    expect(randomArray).to.equal(randomArray, randomArray.sort());

  })

})
