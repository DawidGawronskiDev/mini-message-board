const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs = require("express-handlebars");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messageRouter = require("./routes/message");

const app = express();

// Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', exphbs.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/new", messageRouter);

module.exports = app;