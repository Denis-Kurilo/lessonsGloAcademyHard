const game = function(){
    let min = 0,
        max = 100,
        count = 3,
        rundomNum;

    rundomNum = Math.floor(Math.random() * (max - min)) + 1;
    // console.log(rundomNum);
    
    function counts(){
    return function(){
        if(count == 1) {
            alert('Попытки закончились');
            return youWantToPlay();
         }
          return --count;   
        }
    }
    let counter = counts();

    function youWantToPlay() {
      if(confirm('Хотели бы сыграть еще?')){
          return window.location.reload();  
      }else{
        alert('Завершить игру');
      }
    }
    
    return function guessNum() {
        let num = +prompt('Угадайте число от 1 до 100');
         if (num == rundomNum) {
            alert('Поздравляю, Вы угадали!!!');
            return youWantToPlay();
         } else if (num > rundomNum && num != '') {
            alert(`Загаданное число меньше, осталось попыток ${counter()}` );
            guessNum();
         }else if (num < rundomNum && num != '') {
            alert(`Загаданное число больше, осталось попыток ${counter()}`);
            guessNum();
         } else if (isNaN(parseFloat(num) && isFinite(num))) {
            alert('Введите число');
            guessNum();
         }else{
           alert('Завершить игру')
         }
        }
         return guessNum();
    }
let startGame = game();
startGame();
// console.dir(startGame)