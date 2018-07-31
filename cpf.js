const calcChecker1 = firstNineDigits => {
    let sum = null

    for (let j = 0; j < 9; ++j) {
        sum += firstNineDigits.toString().charAt(j) * (10 - j)
    }

    const lastSumChecker1 = sum % 11
    const checker1 = (lastSumChecker1 < 2) ? 0 : 11 - lastSumChecker1

    return checker1
}

const calcChecker2 = cpfWithChecker1 => {
    let sum = null

    for (let k = 0; k < 10; ++k) {
        sum += cpfWithChecker1.toString().charAt(k) * (11 - k)
    }

    const lastSumChecker2 = sum % 11
    const checker2 = (lastSumChecker2 < 2) ? 0 : 11 - lastSumChecker2

    return checker2
}

const gerarCPF = () => {
    let firstNineDigits = ''

    // Generating the first 9 digits of the CPF
    for (let i = 0; i < 9; ++i) {
        firstNineDigits += String(Math.floor(Math.random() * 9))
    }

    const checker1 = calcChecker1(firstNineDigits)
    console.log(firstNineDigits + checker1 + calcChecker2(firstNineDigits + checker1))
}


gerarCPF();