const functions = require('firebase-functions');
const express = require('express');
const firebase = require('firebase-admin');
const path = require('path');

const data = require('./data');
const jsonData = data.jsonData();

require('dotenv').config();

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.render('index', jsonData);
});

app.get('/dummy', (request, response) => {
    response.render('index', jsonData);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

exports.app = functions.https.onRequest(app);
