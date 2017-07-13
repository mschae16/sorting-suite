const { expect, assert } = require('chai')
const { mergeSort, mergeSplitArrays } = require('../scripts/mergeSort.js')

describe('mergeSort functions', () => {

  it('should have mergeSort and mergeSplitArrays functions', () => {
    assert.isFunction(mergeSort)
    assert.isFunction(mergeSplitArrays)
  })

  it('should not accept anything but an array as an argument', () => {
    const myObject = {name: 'Margo'}

    expect(mergeSort(myObject)).to.equal('Error - argument must be an array')
  })

  it('should be able to sort an array of letters', () => {
    let newArray = ['z', 'b', 'c', 'f', 'x']
    expect(newArray).to.deep.equal(['z', 'b', 'c', 'f', 'x'])

    let modifiedArray = mergeSort(newArray)

    expect(modifiedArray).to.deep.equal(['b', 'c', 'f', 'x', 'z'])
  })

  it('should be able to sort an array that includes negative numbers', () => {
    let newArray = [3, -1, -7, 5, -4]
    expect(newArray).to.deep.equal([3, -1, -7, 5, -4])

    let modifiedArray = mergeSort(newArray)

    expect(modifiedArray).to.deep.equal([-7, -4, -1, 3, 5])
  })

  it.skip('should be able to sort a randomly-generated array', () => {
    let randomArray = []
    let randomNumberCount = 400000

    for (let i = 0; i < randomNumberCount; i++) {
      randomArray.push(Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
    }
    let randomArrayCopy = Array.from(randomArray)

    expect(randomArray).to.deep.equal(randomArray)
    let modifiedArray = mergeSort(randomArray)
    expect(modifiedArray).to.deep.equal(randomArrayCopy.sort((a, b) => a - b))

  })

})
