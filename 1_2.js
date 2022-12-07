const arr1 = [10, [25, 13,[6]], [14, [55]], 2];
function arrayFlatter(arr) {
	if (!Array.isArray(arr)) return "not a good input"; //validates input

	let result = [];
	for (let item of arr) {
		if (Array.isArray(item)) {
			result.push(...arrayFlatter(item));
			continue;
		}
		result.push(item);
	}
	return result;
}

console.log(arrayFlatter(arr1));
