function inputOfaLine(data){
	if (typeof data == 'string' && data.length < 30){
		console.log(data.trim());
	}else if( data.length >= 30) {
		console.log(data.slice(0, 30).trim() + '...');
	}else{
		console.log('Вы ввели число, введите строку');
	}
}
inputOfaLine('sdfsdgdfgdfgdfgdfgdfgdddddfsddf  ');



