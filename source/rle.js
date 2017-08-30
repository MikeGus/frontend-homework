'use strict';
const rle = string => {
	const matchArray = string.match(/(.)\1*/ig);
	if (matchArray === null) {
		return '';
	}
	return matchArray.reduce((retString, item) => 
		`${retString}${item[0]}${item.length > 1 ? item.length : ''}`, '');
};