'use strict';
import { error } from 'console';
import express from 'express';
const app = express();
import open from 'open'; //allows automatic opening of localhost address


// define all endpoints here


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server started on port " + PORT);
    open('http://localhost:8000/hello');   //opens the local host address in browser
});

app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});
app.get('/hello/name/', function (req, res) {
    let errorText = 'Missing Required GET parameters:';
    if(!req.query['first']) {errorText = errorText + " first"};
    if(!req.query['last'])  {errorText = errorText + " last"};
    if (!req.query['first'] || !req.query['last']){  //either are missing
        res.type('text').status(400).send(errorText);
    }
    
    let firstName =  req.query['first'];
    let lastName =  req.query['last'];
    res.type('text');
    res.send('Hello ' + firstName + " " + lastName);
});
app.get('/math/circle/:r', function (req, res) {
    let r = req.params['r'];
    res.type('json');
    res.send({ "Area": Math.PI * r * r, "Circumference": 2 * r })

})