//if-else
let lang = prompt('Введите значение ru или en'),
	daysOfTheWeekRu = ['Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	daysOfTheWeekEn = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if(lang == 'ru'){
	daysOfTheWeekRu.forEach((item) => {
		console.log(item);
	})
}else if (lang == 'en'){
	daysOfTheWeekEn.forEach((item) => {
		console.log(item);
	})
} else {
	console.log('Вы ввели не коректное значение');
}


//switch-case
switch(lang){
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
}


//[[],[]]
let daysOfTheWeekRu = [['ru'],['Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']],
	daysOfTheWeekEn = [['en'],['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']],
	question = prompt('Введите значение ru или en');
let language= (question == 'ru') ? daysOfTheWeekRu[1] : (question == 'en') ? daysOfTheWeekEn[1] : "Введите ru или en";
language.forEach(function(item){
	console.log(item);
});



let namePerson = prompt('Введите имя!');
let name = (namePerson == 'Артем') ? "директор" : (namePerson == 'Максим') ? "преподаватель" : "студент";
console.log(name);




