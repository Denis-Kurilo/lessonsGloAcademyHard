/*const arr = ['21','20','12','41','23','43','92'];

for(let i = 0; i < arr.length; i++) {
	if(arr[i].startsWith('2') || arr[i].startsWith('4')){
		console.log(arr[i]);
	}
}*/

nextPrime:
for (let i = 2; i <= 100; i++){
	for (let n = 2; n < i; n++){
		if( i % n === 0) continue nextPrime; 
	}
	console.log(`${i} - Делители этого числа: 1 и n`);
}


