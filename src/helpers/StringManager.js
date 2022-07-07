export default class StringManager {
	// used to pull out strings from an input when a
	// user wants to use a variable denoted by typing $_
	static extract = string => {
		string = string + '$_';
		let strArr = [];
		let current = '';
		for (let i = 0; i < string.length; i++) {
			if (string[i] === '$' && string[i + 1] === '_') {
				strArr.push(current);
				current = '';
				i++;
			} else {
				current += string[i];
			}
		}
		return strArr;
	};

	// rebuilds a string to add to a Note using an array
	// of inputs and an array of extracted strings
	static rebuild = (strArr, inputArr) => {
		let outputStr = '';
		for (let i = 0; i < inputArr.length; i++) {
			outputStr += strArr[i] + inputArr[i];
		}
		outputStr += strArr[inputArr.length];
		return outputStr;
	};
}
