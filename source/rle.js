'use strict';
const rle = function(string) {
	let retString = '';
	var matchArray = string.match(/([a-zA-Zа-яА-Я])\1*/ig);
	if (matchArray === null) {
		return '';
	}

	retString = matchArray.reduce(function(retString, currentValue) {
		retString += currentValue[0];
		if (currentValue.length > 1) {
			retString += currentValue.length;
		}
		return retString;
	}, '');
	return retString;
}