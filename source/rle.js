'use strict';
const rle = function(string) {
	let retString = '';
	const matchArray = string.match(/([\wа-яА-Я])\1*/ig);
	if (matchArray === null) {
		return '';
	}
	retString = matchArray.reduce(function(retString, item) {
		return  `${retString}${item[0]}${item.length > 1 ? item.length : ''}`;
	}, '');
	return retString;
}