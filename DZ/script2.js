let checkNumber = (number) => {
    if (!(number - 0))  {
        console.log('Некорректный ввод!');
        return false;
    }
    else return true;
}

let firstNumber = prompt('Введите первое число: ');
if (checkNumber(firstNumber)) {
    let secondNumber = prompt('Введите второе число: ');
    if (checkNumber(secondNumber)) {
        firstNumber -= 0;
        secondNumber -= 0;
        console.log(firstNumber + secondNumber + ', ' + firstNumber /secondNumber);
    }
}