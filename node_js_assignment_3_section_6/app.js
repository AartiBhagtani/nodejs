const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require('./routes/user');
const showRoute = require('./routes/show');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRoute.route);
app.use(showRoute.route);

app.listen(3000);
