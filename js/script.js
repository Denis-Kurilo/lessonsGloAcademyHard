
let num = 266219; 

	num = ('' + num).split('');
let reducer = (accumulator, currentValue) => accumulator * currentValue;
let sum = num.reduce(reducer);

let exponentiation = sum ** 3;
let number = ('' + exponentiation).split('');
number = number[0] + number[1];
	

console.log(sum);
console.log(exponentiation);
console.log(parseInt(number));









/*let num = 266219; 
let arr = ('' + num).split('');
const num = 266219; 
const arr = ('' + num).split('');
const reducer = (accumulator, currentValue) => accumulator * currentValue;
console.log(arr.reduce(reducer));




/*for(i = 0; i < arr.length; i++) {

}*/




/*
let number = ('' + exponentiation).split('');
let result = arr.reduce(reducer);*/