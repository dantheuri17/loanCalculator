const { calculateLoan } = require("./index");

describe("calculateLoan", () => {
	test("calculates monthly payment correctly with typical values", () => {
		const loanAmount = 100000;
		const loanTerm = 30;
		const interestRate = 8;
		const expectedPayment = 733.76;
		const actualPayment = calculateLoan(loanAmount, loanTerm, interestRate);
		expect(actualPayment).toBeCloseTo(expectedPayment, 2);
	});

	test("returns NaN if any arguments are missing", () => {
		const loanAmount = 100000;
		const loanTerm = 30;
		const interestRate = undefined;
		const expectedPayment = NaN;
		const actualPayment = calculateLoan(loanAmount, loanTerm, interestRate);
		expect(actualPayment).toEqual(expectedPayment);
	});

	test("returns NaN if any arguments are not numbers", () => {
		const loanAmount = "not a number";
		const loanTerm = 30;
		const interestRate = 8;
		const expectedPayment = NaN;
		const actualPayment = calculateLoan(loanAmount, loanTerm, interestRate);
		expect(actualPayment).toEqual(expectedPayment);
	});
});

describe("calculateLoan", () => {
  test("Should return 0 for loanAmount of 0", () => {
    expect(calculateLoan(0, 30, 0.05)).toBe(0);
  });

  test("Should return loanAmount for loanTerm of 1 year and interest rate of 0", () => {
    expect(calculateLoan(50000, 1, 0)).toBeCloseTo(4166.67, 2);
  });

  test("Should return correct value for loanAmount of 200000, loanTerm of 30 years, and interest rate of 5%", () => {
    expect(calculateLoan(200000, 30, 5)).toBeCloseTo(1073.64, 2);
  });

  test("Should return correct value for loanAmount of 100000, loanTerm of 15 years, and interest rate of 3.5%", () => {
    expect(calculateLoan(100000, 15, 3.5)).toBeCloseTo(714.88, 2);
  });

  test("Should return correct value for loanAmount of 500000, loanTerm of 20 years, and interest rate of 7%", () => {
    expect(calculateLoan(500000, 20, 7)).toBeCloseTo(3876.49, 2);
  });

  test("returns NaN if any arguments are missing", () => {
    expect(calculateLoan(50000, 30)).toBeNaN();
    expect(calculateLoan(50000)).toBeNaN();
    expect(calculateLoan()).toBeNaN();
  });

}); 


