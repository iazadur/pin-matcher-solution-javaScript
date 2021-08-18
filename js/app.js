let getPin = function () {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    } else {
        return getPin()
    }
}

let generatePin = function () {
    let pin = getPin()
    document.getElementById('display-pin').value = pin
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calcInput = document.getElementById('typed-numbers')

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    } else {

        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber

    }
})


let verifyPin = function () {
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value
    if (pin == typedNumbers) {
        console.log('verify')
    } else {
        
    }
}