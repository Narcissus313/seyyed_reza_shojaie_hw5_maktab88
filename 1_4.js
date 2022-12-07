function caseInsensitiveSearch(str, word) {
	if (typeof str !== "string" || typeof word !== "string")
		return "not good inputs"; //validates inputs

	return str.includes(word.toLowerCase());
}

console.log(caseInsensitiveSearch("hi hello world", "Hello"));
