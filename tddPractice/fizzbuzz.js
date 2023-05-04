function isMetFizzCondition(number) {
    return number % 3 === 0 || number.toString().includes('3');
}

function isMetBuzzCondition(number) {
    return number % 5 === 0 || number.toString().includes('5');
}

function fizzBuzz(number) {
    if (isMetFizzCondition(number) && isMetBuzzCondition(number)) {
        return 'FizzBuzz'
    }
    if (isMetFizzCondition(number)) {
        return 'Fizz'
    }
    return 'Buzz'
}

export default fizzBuzz;