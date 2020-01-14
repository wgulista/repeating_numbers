function repeat_numbers(numbers_array) {
	
	if (numbers_array.length > 1) {
		let sorted_array = numbers_array.slice().sort();

		let results = [];
		for (let i = 0; i < sorted_array.length - 1; i++) {
			if (sorted_array[i + 1] === sorted_array[i])
				results.push(sorted_array[i]);
		}
		if (results.length === 0)
			return "0";
		return results.join(", ");
	}
	return "0";
}

module.exports = repeat_numbers;
