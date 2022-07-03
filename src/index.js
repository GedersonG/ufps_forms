const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
//Hola
// Importing routes
const adminRoutes = require('./routes/admin');
const encuestadoRoutes = require('./routes/encuestado');
const encuestaRoutes = require('./routes/encuesta');
const preguntaRoutes = require('./routes/pregunta');
const opcionRoutes = require('./routes/opcion');
const respuestaRoutes = require('./routes/respuesta');
const loginRoutes = require('./routes/login');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'sql5.freesqldatabase.com',
    user: 'sql5502633',
    password: 'mTS2tVmBhA',
    port: 3306,
    database: 'sql5502633'
}, 'single'))
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/encuestados', encuestadoRoutes);
app.use('/encuesta', encuestaRoutes);
app.use('/pregunta', preguntaRoutes);
app.use('/opcion', opcionRoutes);
app.use('/respuesta', respuestaRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
