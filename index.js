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
const loans = JSON.parse(readFileSync(loansJSON));

app.get('/', (req, res) => {    
    res.render('index', {loans})
})

