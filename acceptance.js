const puppeteer = require('puppeteer');
const assert = require('assert');

try {
    (async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');
        const loanAmountInput = await page.$('#loanAmount');
        await loanAmountInput.type('100000');
        const loanTermInput = await page.$('#loanTerm');
        await loanTermInput.type('30');
        const interestRateInput = await page.$('#interestRate');
        await interestRateInput.type('8');
        const submitButton = await page.$('#submitButton');
        await submitButton.click();
        await page.waitForSelector('#monthlyPayment');
        const monthlyPayment = await page.$eval('#monthlyPayment', el => el.textContent);
        assert.equal(monthlyPayment, '733.76');
        console.log('Test passed');
        await browser.close();
}) (); 
} 
catch (error) {
    console.log(error);
}   