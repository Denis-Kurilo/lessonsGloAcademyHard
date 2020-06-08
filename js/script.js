/*
Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
через if, 
через switch-case 
через многомерный массив без ифов и switch.
*/

/*let lang = prompt('Введите значение ru или en'),
	daysOfTheWeekRu = ['Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	daysOfTheWeekEn = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];*/

/*if(lang == 'ru'){
	daysOfTheWeekRu.forEach((item) => {
		console.log(item);
	})
}else if (lang == 'en'){
	daysOfTheWeekEn.forEach((item) => {
		console.log(item);
	})
} else {
	console.log('Вы ввели не коректное значение');
}*/



/*switch(lang){
	case 'ru':
		daysOfTheWeekRu.forEach((item) => {
			console.log(item);
		});
	break;
	case 'en':
		daysOfTheWeekEn.forEach((item) => {
			console.log(item);
		});
	break;
	default: 
		console.log('Вы ввели не коректное значение');
}*/





/*let daysOfTheWeekRu = [['ru'],['Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
	daysOfTheWeekEn = [['en'],['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']],
	question = prompt('Введите значение ru или en');

	question.daysOfTheWeekRu == true;
	question.daysOfTheWeekEn == false;


	console.log(question);*/


let namePerson = prompt('Введите имя!');
let name = (namePerson == 'Артем') ? "директор" : (namePerson == 'Максим') ? "преподаватель" : "студент";
console.log(name);




