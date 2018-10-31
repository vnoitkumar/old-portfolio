const functions = require('firebase-functions');
const path = require('path');

const express = require('express');
const app = express();

const data = require('./data');
const jsonData = data.jsonData();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.render('index', jsonData);
});

exports.app = functions.https.onRequest(app);
