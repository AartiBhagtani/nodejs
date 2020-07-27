const express = require('express');

const app = express();

app.use('/add-items',(req, res, next) => {
    console.log('in first middleware');
    res.send('<h1>Welcome to add Items page</h1>')
    // next(); //Allows request to go in next middleware in the subsequent line
});

app.use('/',(req, res, next) => {
    console.log('in second middleware');
    res.send('<h1>Welcome to Express!</h1>')
});
app.listen(3000)