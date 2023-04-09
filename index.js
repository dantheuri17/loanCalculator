const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { readFileSync, writeFileSync } = require("fs");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;

app.set("views", "views");
app.set("view engine", "hbs");
app.use(express.static("public"));

const loansJSON = "loansJSON.json";
const loansData = JSON.parse(readFileSync(loansJSON));

app.get("/", (req, res) => {
	res.render("index", { loansData });
});

function calculateLoan(loanAmount, loanTerm, interestRate) {
	// if (isNaN(loanAmount) || isNaN(loanTerm)) {
	// 	return NaN;
	// }

	// if (loanTerm === 0) {
	// 	return loanAmount;
	// }

	interestRate = interestRate / 1200;
	loanTerm = loanTerm * 12;

	const monthlyPayment =	loanAmount *(interestRate * Math.pow((1 + interestRate), loanTerm)) / (Math.pow((1 + interestRate), loanTerm) - 1);

	return monthlyPayment;
}

app.post("/calculateLoan", urlEncodedParser, (req, res) => {
	const { loanAmount, loanTerm, interestRate } = req.body;

	const calculatedMonthlyLoanPayment = calculateLoan(
		loanAmount,
		loanTerm,
		interestRate
	);
	const completeLoanObject = {
		...req.body,
		monthlyPayment: calculatedMonthlyLoanPayment,
	};

	loansData.push(completeLoanObject);
	writeFileSync(loansJSON, JSON.stringify(loansData, null, 2));
	res.render("resultMonthlyPayment", {completeLoanObject});
});

app.listen(port);
console.log(`server is listening on port ${port}`);

module.exports = { calculateLoan };
