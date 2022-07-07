import { default as defaultTree } from '../data/tree.json';

// Returns the data from 'userData/tree.json' in JSON format
// if data isn't found it returns the default tree that ships
// with the app.
const getSavedData = async () => {
	let data = await window.electron.readFile();

	if (data) {
		let str = binArrayToJson(data);
		return str;
	} else {
		console.log('Did not find user data');
		return defaultTree;
	}
};

// Converts U8IntArry into a
const binArrayToJson = binArray => {
	let str = '';
	for (let i = 0; i < binArray.length; i++) {
		str += String.fromCharCode(parseInt(binArray[i]));
	}
	return JSON.parse(str);
};

export default getSavedData;
