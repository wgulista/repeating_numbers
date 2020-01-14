const repeat_numbers = require('./repeat_numbers');

describe("Repeat Numbers", () => {

	test('return 0 if no repeat', () => {
        	expect(repeat_numbers([])).toBe("0")
	});

	test('return 0 if one number', () => {
        	expect(repeat_numbers([1])).toBe("0");
	});

	test('return 1 if two number are 1', () => {
        	expect(repeat_numbers([1, 1])).toBe("1");
	});

	test('return 0 if two number not same', () => {
		expect(repeat_numbers([1, 2])).toBe("0");
	});

	test('return "2" if array have "2" twice', () => {
		expect(repeat_numbers([1,2,2])).toBe("2");
	});

	test('return "1, 2" if array have two 1 and two 2', () => {
		expect(repeat_numbers([1,1,2,2])).toBe("1, 2");
	});

	test('return "1, 2, 3, 4" if array contains minimun two time this numbers', () => {
		const numbers = [1,1,2,2,3,3,4,4,5,6,7,8,9,10];
		expect(repeat_numbers(numbers)).toBe("1, 2, 3, 4");
	});

});
