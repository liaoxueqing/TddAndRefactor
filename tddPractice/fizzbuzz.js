function isMetFizzCondition(number) {
    return number % 3 === 0 || number.toString().includes('3');
}

function fizzBuzz(number) {
    if (isMetFizzCondition(number)) {
        return 'Fizz'
    }
    return 'Buzz'
}

export default fizzBuzz;