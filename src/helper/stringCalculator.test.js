import { add } from "./stringCalculator.js";

describe("stringCalculator", () => {
	console.log("starting now");
	it("should return 0 for an empty string", () => {
		expect(add("")).toBe(0);
	});

	it("should return the same number for a single number string", () => {
		expect(add("1")).toBe(1);
	});

	it("should return the sum of two numbers", () => {
		expect(add("1,5")).toBe(6);
	});
	it("should handle any amount of inputs", () => {
		expect(add("1,5,4,5,7,8,2,1,1,553,6,3,4,3,2")).toBe(605);
	});

	it("should handle new line between numbers", () => {
		expect(add("1\n2,3")).toBe(6);
	});

	it("should handle multiple new lines", () => {
		expect(add("1\n2\n3")).toBe(6);
	});

	it("should handle new lines and commas together", () => {
		expect(add("1,2\n3")).toBe(6);
	});

	it("handles custom delimiter", () => {
		expect(add("//;\n1;2")).toBe(3);
	});

	it("handles custom delimiter with multiple numbers", () => {
		expect(add("//<\n1<2<3")).toBe(6);
	});

	it("handles custom delimiter with new lines", () => {
		expect(add("//;\n1;2\n3")).toBe(6);
	});
});
