
const sum = ( num1, num2 ) => {
	const result = num1 + num2
	return result
}
const sub = ( num1, num2 ) => {
	const result = num1 - num2
	return result
}
const div = ( num1, num2 ) => {
	const result = num1 / num2
	return result
}
const mul = ( num1, num2 ) => {
	const result = num1 * num2
	return result
}

const fizzBuzz = ( num ) => {
	if( num % 3 === 0 && num % 5 === 0 ) return 'FizzBuzz';
	if( num % 3 === 0 ) return 'Fizz';
	if( num % 5 === 0 ) return 'Buzz';
}

const yo = ( ) => 'yo';

export {
	sum,
	sub,
	div,
	mul,
	fizzBuzz
}

// const objModuleExports = {
// 	sum,
// 	sub,
// 	div,
// 	mul
// }
// module.exports = objModuleExports;
