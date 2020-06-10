function inputOfaLine(data){
	if (typeof data == 'string' && data.length >= 30){
		if(data.length >= 30){
			return data.substr(0, 30).trim() + '...';
		}
	}else {
		return 'Вы ввели число, введите строку';
	}
}
console.log(inputOfaLine('   gdfgsdjgsjdlgjldfjfsdhaslfhakfhL;JFHLJKAsgflakjsgdflaafdfghfgfjksdfksjgdfg1  '));



