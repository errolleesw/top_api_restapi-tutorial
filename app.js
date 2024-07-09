const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const routes = require('./routes');
const models = require('./models');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    // context object is a container for everything that is passed to the routes. Not necessary, but good practice.
    // console.log("middleware");
    req.context = {
        models,
        me: models.users[1],
    };
    console.log(req.context);
    next();
})

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
