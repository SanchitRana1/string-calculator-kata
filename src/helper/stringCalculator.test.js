import { add } from "./stringCalculator.js";

describe("stringCalculator", () => {
	it("should return 0 for an empty string", () => {
		expect(add("")).toBe(0);
	});

	it("should return the same number for a single number string", () => {
		expect(add("1")).toBe(1);
	});

	it("should return the sum of two numbers", () => {
		expect(add("1,5")).toBe(6);
	});

	it("should handle new line as a delimiter", () => {
		expect(add("1\n2,3")).toBe(6);
	});

	it("should handle multiple new lines", () => {
		expect(add("1\n2\n3")).toBe(6);
	});

	it("should handle new lines and commas together", () => {
		expect(add("1,2\n3")).toBe(6);
	});
});
