const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Conectar BD
mongoose.connect('mongodb://localhost/helper').
then(db => console.log('Conectado a BD')).
catch(err => console.log(err));

// Importacion rutas
const indexRoutes = require('./routes/index');

// Config
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Rutas
app.use('/', indexRoutes);

// Inicializa el servidor
app.listen(app.get('port'), () => {
    console.log("Servidor inicializado en puerto " + app.get('port'));
});