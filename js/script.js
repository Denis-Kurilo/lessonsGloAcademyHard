let number,
  count = 3;

function randomInteger(min, max) {
    return  Math.floor(Math.random() * (max - min)) + 1; 
    };
number = randomInteger(1,100);

function youWantToPlay() {
  if(confirm('Хотели бы сыграть еще?')){
      window.location.reload();  
  }else{
    alert('Завершить игру');
  }
}

// console.log(number)

function guessNum() {
     let num;
     num = +prompt('Угадайте число от 1 до 100');
     if(count == 1) {
        if(alert('Попытки закончились, хотите сыграть еще?')){
            window.location.reload(); 
        }
        return youWantToPlay();
     } 
     count--;

     if (num == number) {
        alert('Поздравляю, Вы угадали!!! ');
       return youWantToPlay();
     } else if (num > number && num != '') {
        alert('Вы ввели число больше! Осталось попыток: ' + count);
        guessNum();
     }else if (num < number && num != '') {
        alert('Вы ввели число меньше! Осталось попыток: ' + count);
        guessNum();
     } else if (isNaN(parseFloat(num) && isFinite(num))) {
        alert('Введите число');
        guessNum();
     }else{
       alert('Завершить игру')
     }
}
guessNum();