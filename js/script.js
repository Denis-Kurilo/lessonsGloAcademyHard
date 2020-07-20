const daysOfTheWeek = () => {
  const weeks = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
  toDay = new Date().getDay() - 1;

  for (let i = 0; i < weeks.length; i++) {
   if (i == toDay) {
     if (weeks[i] == 'Суббота' || weeks[i] == 'Воскресенье') {
       document.write(`<p><b>${toDay[i]}</b></p>`);
     } else {
       document.write(`<p><b>${weeks[i]}</b></p>`);
     }
   } else if (weeks[i] == 'Суббота' || weeks[i] == 'Воскресенье') {
     document.write(`<p><i>${weeks[i]}</i></p>`);
   } else {
     document.write(`<p>${weeks[i]}</p>`);
   }
 };
};
daysOfTheWeek();
