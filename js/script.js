let date = document.querySelector('.date');
function showTime1() {
  const monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  const daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const dateObj = new Date();

  let year = dateObj.getFullYear(),
     month = dateObj.getMonth(),
     numDay = dateObj.getDate(),
     day = dateObj.getDay(),
     hour = dateObj.getHours(),
     minute = dateObj.getMinutes(),
     second = dateObj.getSeconds(),
     hours;

  if (minute < 10) minute = "0" + minute;

  if (second < 10) second = "0" + second;

  if(hour === 1){
    hours = 'час';
  }else if(hour > 1 && hour <= 4 || hour >= 22 && hour <= 24){
    hours = 'часа';
  }else if(hour >= 5 && hour <= 21){
    hours = 'часов';
  }
date.innerHTML = out = `Сегодня ${daysArr[day]}, ${numDay} ${monthsArr[month]} ${year} год, ${hour} ${hours} : ${minute} минут : ${second} секунд`;
}
setInterval(showTime1, 1000);


function showTime2() {
    let tm = new Date();
    let resTxt = '';

    resTxt += `${tm.getDate()}. ${tm.getMonth() + 1}. ${tm.getFullYear()} - `;

    resTxt += `${tm.getHours()} : ${tm.getMinutes()} : ${tm.getSeconds()}`; 

    resTxt = resTxt.replace(/\b(\d{1})\b/g, '0$1');

    document.write(resTxt);
}
showTime2();

