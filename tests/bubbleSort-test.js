const { expect, assert } = require('chai');
const bubbleSort = require('../scripts/bubbleSort.js');

describe('bubbleSort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should be able to sort an array', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.equal(newArray, ['z', 'b', 'c', 'f', 'x']);

    bubbleSort(newArray);

    expect(newArray).to.equal(newArray, ['b', 'c', 'f', 'x', 'z'])
  })

  it('should be able to sort a randomly-generated array', () => {
    let randomArray = [];
    for (let i = 0; i < 1000; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)}

    bubbleSort(randomArray);

    expect(randomArray).to.equal(randomArray, randomArray.sort());

  })

})
