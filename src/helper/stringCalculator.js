export function add(numbers) {
	if (numbers === "") return 0;

	let delimiter = ",";

    // checks for custom delimiters
	// Check if the string starts with '//'
	if (numbers.startsWith("//")) {
		// Extract the custom delimiter and the numbers
		const parts = numbers.split("\n");
		delimiter = parts[0].substring(2); // Get the custom delimiter
		numbers = parts.slice(1).join("\n"); // Get the rest of the numbers
		console.log("numbers", numbers);
	}

	// Replace new lines with the delimiter to handle both delimiters
	const normalizedNumbers = numbers.replace(/\n/g, delimiter);

	// Split by the custom delimiter and convert to numbers
	const numberArray = normalizedNumbers.split(delimiter).map(Number);
    console.log('numberArray',numberArray);
    // Check for negative numbers
    const negativeNumbers = numberArray.filter(num => num < 0);
    console.log('negativeNumbers',negativeNumbers);
    if (negativeNumbers.length > 0) {
        throw new Error("Negative numbers not allowed: " + negativeNumbers.join(", "));
    }

	return numberArray.reduce((sum, num) => sum + num, 0);
}
