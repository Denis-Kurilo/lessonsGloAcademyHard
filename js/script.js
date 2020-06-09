/*
1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

*/
function inputOfaLine(data){

	let sum = data.length;
	console.log(sum)
	if (typeof data == 'string'){
		return data.trim();

		// console.log(data.length);
		
	}else {
		return 'Вы ввели число, введите строку';
	}

}
console.log(inputOfaLine('   gdfgsdjgsjdlgjldfjfsdhaslfhakfhL;JFHLJKAsgflakjsgdflaafdfghfgfjksdfksjgdfg1  '));



