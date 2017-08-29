const rle = function(string) {
	var retString = "";
	var matchArray = string.match(/([a-zA-Z])\1*/ig);
	if (matchArray == null) {
		return "";
	}
	matchArray.forEach(function(item) {
		retString += item[0];
		if (item.length > 1) {
			retString += item.length;
		}
	})
	return retString;
}