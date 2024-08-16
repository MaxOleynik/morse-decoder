const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0'
};

function decode(expr) {
	// write your solution here
	let message = '';

	for (let i = 0; i < expr.length; i += 10) {
		let encodeLetter = expr.slice(i, i + 10);
		if (encodeLetter === '**********') {
			message += ' ';
		} else {
			let morse = '';
			for (let j = 0; j < 10; j += 2) {
				let symbol = encodeLetter.slice(j, j + 2);
				if (symbol === '10') {
					morse += '.';
				} else if (symbol === '11') {
					morse += '-';
				}
			}
			message += MORSE_TABLE[morse] || '';
		}
	}
	return message;
}

module.exports = {
	decode
};
