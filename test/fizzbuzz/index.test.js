'use strict'
/* eslint-env jest */

const fizzbuzz = require('../../lib/fizzbuzz')

describe('Fizzbuzz', () => {
  it('should return "fizz" when divisible by 3', () => {
    expect(fizzbuzz.valueFor(3)).toEqual('fizz')
    expect(fizzbuzz.valueFor(6)).toEqual('fizz')
  })

  it('should return "buzz" when divisible by 5', () => {
    expect(fizzbuzz.valueFor(5)).toEqual('buzz')
    expect(fizzbuzz.valueFor(10)).toEqual('buzz')
  })

  it('should return a string of the input when not divisible by 3 and not equal to 5', () => {
    expect(fizzbuzz.valueFor(1)).toEqual('1')
    expect(fizzbuzz.valueFor(2)).toEqual('2')
    expect(fizzbuzz.valueFor(4)).toEqual('4')
  })
})
