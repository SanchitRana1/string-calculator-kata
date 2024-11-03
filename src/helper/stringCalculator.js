export function add(numbers) {
    console.log("Initial input",numbers);
	if (numbers === "") return 0;
	// Replace new lines with commas to handle both delimiters
	const normalizedNumbers = numbers.replace(/\n/g, ",");

	const numberArray = normalizedNumbers.split(",").map(Number);
    console.log(numberArray);
	return numberArray.reduce((sum, num) => sum + num, 0);
}
