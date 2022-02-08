
class Formatter {

	static product1(value) {
		return value.split('-')[0];
	}

	static product2(value) {
		return value.split('-')[1];
	}

	static crypto(value) {
		let buffer = '';
		if (typeof value === "string"){
			buffer = parseFloat(value).toFixed(2);
		} else {
			buffer = value.toFixed(2);
		}
		if (buffer[0] === '-') {
			buffer = buffer.slice(1);
		}
		return buffer;
	}

	static money(value) {
		let buffer = ''
		if (typeof value === "string"){
			buffer = parseFloat(value).toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD'
			});
		} else {
			buffer = value.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD'
			});
		}
		if (buffer[0] === '-') {
			buffer = buffer.slice(1);
		}
		return buffer;
	}

	static percent(value) {
		let buffer = ''; 
		if (typeof value === 'string'){
			buffer = String(parseFloat(value) + '%');
		} else {
			buffer = String(value.toFixed(2) + '%');
		}
		return buffer;
	}

	static bigNumber(value) {
		return Math.abs(Number(value)) >= 1.0e+9
			? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
			: Math.abs(Number(value)) >= 1.0e+6
			? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
			: Math.abs(Number(value)) >= 1.0e+3
			? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"
			: Math.abs(Number(value));
	}

}

export default Formatter;
