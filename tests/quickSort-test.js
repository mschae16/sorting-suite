const { expect, assert } = require('chai');
const quickSort = require('../scripts/quickSort.js');

describe('quickSort', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should be able to sort an array', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.deep.equal(['z', 'b', 'c', 'f', 'x']);

    let modifiedArray = quickSort(newArray);

    expect(modifiedArray).to.deep.equal(['b', 'c', 'f', 'x', 'z'])
  })

  it('should be able to sort a randomly-generated array', () => {
    let randomArray = [];
    let randomNumberCount = 9000;

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }
    let randomArrayCopy = Array.from(randomArray);

    expect(randomArray).to.deep.equal(randomArray);
    let modifiedArray = quickSort(randomArray);
    expect(modifiedArray).to.deep.equal(randomArrayCopy.sort(function (a, b) {
      return a - b
    }));

  })

})
