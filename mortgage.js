
function calculateLoan(loanAmount, loanTerm, interestRate) {
    
    interestRate = interestRate / 1200;
    loanTerm = loanTerm * 12;

    const monthlyPayment = loanAmount*(interestRate*Math.pow((1+interestRate),loanTerm))/(Math.pow((1+interestRate),loanTerm)-1);

    console.log(monthlyPayment);
}

calculateLoan(100000, 30, 8);
calculateLoan(500000, 20, 7);
calculateLoan(200000, 30, 5);
calculateLoan(100000, 15, 3.5);