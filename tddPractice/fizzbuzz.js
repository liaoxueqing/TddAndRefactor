function fizzBuzz(number) {
    if (number % 3 === 0 || number.toString().includes('3')) {
        return 'Fizz'
    }
    return 'Buzz'
}

export default fizzBuzz;