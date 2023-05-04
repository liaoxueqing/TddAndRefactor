import fizzBuzz from "./fizzbuzz.js";


describe('fizzBuzz', () => {
    it('should return Fizz when the number is multiple of 3', () => {
        const actual = fizzBuzz(3)
        expect(actual).toBe('Fizz')
    })
})