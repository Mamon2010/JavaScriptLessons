function sumDevider(number) {
    'use strict';
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    return sum;
}

function getFriendlyNumbers(start, end) {
    'use strict';
    let secondFiendlyNumber = 0,
        deviderSecondNumber = 0,
        newArr = [];
    for (let firstFriendlyNumber = start; firstFriendlyNumber <= end; firstFriendlyNumber++) {
        secondFiendlyNumber = sumDevider(firstFriendlyNumber);
        deviderSecondNumber = sumDevider(secondFiendlyNumber);
        if (firstFriendlyNumber == deviderSecondNumber &&
            firstFriendlyNumber != secondFiendlyNumber &&
            firstFriendlyNumber < secondFiendlyNumber) {
            newArr.push([firstFriendlyNumber, secondFiendlyNumber]);
        }
    }

    return newArr;
}

console.log(getFriendlyNumbers(1, 10000));