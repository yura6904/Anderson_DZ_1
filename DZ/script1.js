let firstNumber = prompt('Введите первое число: ');
let secondNumber = prompt('Введите второе число: ');

let checkNumber = (number) => {
    if (!(number - 0))  return false;
    else return true;
}

if (checkNumber(firstNumber) && checkNumber(secondNumber) && (secondNumber > 1) && (secondNumber < 36)) {
    firstNumber -= 0;
    secondNumber -= 0;
    console.log(firstNumber.toString(secondNumber));
}
else {
    console.log('Некорректный ввод!');
}