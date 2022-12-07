function separators(inputNumber) {
	if (typeof inputNumber !== "number") return "not a good input"; //validates input

	let n = Math.abs(inputNumber).toString().split("").reverse();
	let numberOfSeparators = parseInt((n.length - 1) / 3);
	for (let i = 0; i < numberOfSeparators; i++) {
		n.splice(4 * i + 3, 0, ",");
	}
	n.reverse();
	return inputNumber < 0 ? "-" + n.join("") : n.join("");
}

console.log(separators(19324388));
// console.log(separators(3343));
// console.log(separators(-558892295987));
// console.log(separators(-995987));
