const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {readFileSync, writeFileSync} = require('fs');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const port = 3000;

app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.static('public'))

const loansJSON = 'loansJSON.json';
const loansData = JSON.parse(readFileSync(loansJSON));

app.get('/', (req, res) => {    
    res.render('index', {loans})
})

app.post('/calculateLoan', urlEncodedParser, (req, res) => {
    const {loanAmount, loanTerm, interestRate} = req.body;


    loansData.push(completeLoanObject)
    writeFileSync(loansJSON, JSON.stringify(loansData, null, 2))

})
