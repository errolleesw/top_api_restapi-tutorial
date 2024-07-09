const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Set up simple routes for API tutorial

app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
    return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
});

module.exports = app;
