function convertRomanNumeralSymbol(symbol) {
    let romanSymbol = symbol;

    if(romanSymbol === 'I' || romanSymbol ==='i') {
        return 1;
    } else if (romanSymbol === 'V' || romanSymbol === 'v') {
        return 5;
    } else if (romanSymbol === 'X' || romanSymbol === 'x') {
        return 10;
    } else if (romanSymbol === 'L' || romanSymbol === 'l') {
        return 50;
    } else if (romanSymbol === 'C' || romanSymbol === 'c') {
        return 100;
    } else {
        return NaN;
    }
}

// console.log(convertRomanNumeralSymbol('C'));
// console.log(convertRomanNumeralSymbol('hello'))
// console.log(convertRomanNumeralSymbol('l'))

function enterRomanNumeral() {
    let romanNumeral = prompt("Enter a Roman Numeral");
    let sumOfNumbers = 0;

    for(let i = 0; i < romanNumeral.length; i++) {
        sumOfNumbers += convertRomanNumeralSymbol(romanNumeral.charAt(i));
    }

    if(isNaN(sumOfNumbers)) {
        document.getElementById("output1").innerHTML = romanNumeral + " is not a proper Roman Numeral"
    } else {
        document.getElementById("output1").innerHTML = romanNumeral.toLocaleUpperCase() + " is equal to " + sumOfNumbers;
    }
}

function complexRomanNum() {
    let complexRomanNum = prompt("Enter a Roman Numeral");
    let sumOfNumbers = 0;

    for(let i = 0; i < complexRomanNum.length; i++){
        let currentChar = complexRomanNum.charAt(i);
        let nextChar = complexRomanNum.charAt(i + 1);
        
        if(convertRomanNumeralSymbol(currentChar) < convertRomanNumeralSymbol(nextChar)) {
            sumOfNumbers -= convertRomanNumeralSymbol(currentChar);
        } else {
            sumOfNumbers += convertRomanNumeralSymbol(currentChar);
        }
    }

    if(isNaN(sumOfNumbers)) {
        document.getElementById("output2").innerHTML = complexRomanNum + " is not a proper Roman Numeral"
    } else {
        document.getElementById("output2").innerHTML = complexRomanNum.toLocaleUpperCase() + " is equal to " + sumOfNumbers;
    }
}