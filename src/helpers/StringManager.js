export default class StringManager {
	// used to pull out strings from an input when a
	// user wants to use a variable denoted by typing $_
	static extract = string => {
		let strArr = [];
		let varArr = [];
		let current = '';
		let currentArr = [];
		let isVar = false;

		for (let i = 0; i < string.length; i++) {
			if (string[i] === '[') {
				strArr.push(current);
				current = '';
				isVar = true;
			} else if (isVar) {
				if (string[i] === ']') {
					currentArr.push(current);
					current = '';
					varArr.push(currentArr);
					currentArr = [];
					isVar = false;
				} else if (string[i] === ',') {
					if (string[i + 1] === ' ') i++;
					currentArr.push(current);
					current = '';
				} else {
					current += string[i];
				}
			} else {
				current += string[i];
			}
		}

		if (current.length > 0) strArr.push(current);

		return [strArr, varArr];
	};

	// This is some static text with [some|many|none] variables.

	// rebuilds a string to add to a Note using an array
	// of inputs and an array of extracted strings
	static rebuild = (strArr, varArr) => {
		let outputStr = '';
		let len = strArr.length > varArr.length ? strArr.length : varArr.length;
		for (let i = 0; i < len; i++) {
			if (strArr[i]) outputStr += strArr[i];
			if (varArr[i]) outputStr += varArr[i];
		}
		return outputStr;
	};
}
