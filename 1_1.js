const arr1 = [-1, 12, 20];
const arr2 = [10, [25, 13], [14, [55]], 2];

function arrayDepth(arr) {
	if (!Array.isArray(arr)) return "not a good input"; //validates input

	let depth = 1;
	while (true) {
		if (arr.every((item) => !Array.isArray(item))) return depth;
		arr = arr.flat();
		depth++;
	}
}

console.log(arrayDepth(arr1));
console.log(arrayDepth(arr2));
