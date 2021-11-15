const { response } = require('express');
const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, '/views'));

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', function(request, response){
    response.render('index.ejs');
});