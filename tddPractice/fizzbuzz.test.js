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

    it('should return Buzz when the number includes 5', () => {
        const actual = fizzBuzz(25)
        expect(actual).toBe('Buzz')
    })

    it('should return FizzBuzz when the number is multiple 3 and 5', () => {
        const actual = fizzBuzz(15)
        expect(actual).toBe('FizzBuzz')
    })

    it('should return FizzBuzz when the number is multiple 5 and includes 3', () => {
        const actual = fizzBuzz(35)
        expect(actual).toBe('FizzBuzz')
    })

    it('should return FizzBuzz when the number is multiple 3 and includes 5', () => {
        const actual = fizzBuzz(54)
        expect(actual).toBe('FizzBuzz')
    })

    it('should return FizzBuzz when the number is includes 3 and 5', () => {
        const actual = fizzBuzz(53)
        expect(actual).toBe('FizzBuzz')
    })
})