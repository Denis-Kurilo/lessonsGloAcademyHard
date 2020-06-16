function randomInteger(min, max) {
    return function(){
       return Math.floor(Math.random() * (max - min)) + 1;

    }  
};
let userRandom = randomInteger(1,100);
let userRun = userRandom();
console.log(userRun)

function count(){
    let count = 3;
        return function(){
            if(count == 1) {
                alert('Попытки закончились');
                return youWantToPlay();;
             }
              return --count;   
        }
}
let counter = count();

function youWantToPlay() {
  if(confirm('Хотели бы сыграть еще?')){
      return window.location.reload();  
  }else{
    alert('Завершить игру');
  }
}

function guessNum() {
    let num;
    num = +prompt('Угадайте число от 1 до 100');

     if (num == userRun) {
        alert('Поздравляю, Вы угадали!!! ');
        return youWantToPlay();
     } else if (num > userRun && num != '') {
        alert('Вы ввели число больше! Осталось попыток: ' + counter());
        guessNum();
     }else if (num < userRun && num != '') {
        alert('Вы ввели число меньше! Осталось попыток: ' + counter());
        guessNum();
     } else if (isNaN(parseFloat(num) && isFinite(num))) {
        alert('Введите число');
        guessNum();
     }else{
       alert('Завершить игру')
     }
}
guessNum();