require ('dotenv'). config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const db = require('./models')
try {
    db.sequelize.authenticate()
    console.log('SEQUELIZE: conection has been established succesfully.')
}
catch(error){
    console.error('*SEQUELIZE: unable to connect to the database:',error)
    process.exit(1) //encerra o servidor com erro
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*********ROTAS************** */
const users = require('./routes/users')
app.use('/users', users)

module.exports = app;
