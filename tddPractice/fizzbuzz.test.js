import fizzBuzz from "./fizzbuzz.js";


describe('fizzBuzz', () => {
    it('should return Fizz when the number is multiple of 3', () => {
        const actual = fizzBuzz(3)
        expect(actual).toBe('Fizz')
    })

    it('should return Buzz when the number is multiple of 5', () => {
        const actual = fizzBuzz(5)
        expect(actual).toBe('Buzz')
    })

    it('should return Fizz when the number includes 3', () => {
        const actual = fizzBuzz(13)
        expect(actual).toBe('Fizz')
    })
})