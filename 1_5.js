function splicer(arr) {
	arr = arr.map((e) => e.split("-"));
	let result = [];
	for (let i = 0; i < arr[i].length; i++) {
		let tmp = [];
		for (let j = 0; j < arr.length; j++) {
			tmp.includes(arr[j][i]) ? null : tmp.push(arr[j][i]);
		}
		result.push(tmp);
	}
	return result;
}

console.log(
	splicer(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"])
);
