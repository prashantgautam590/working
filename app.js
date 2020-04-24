const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/user');
const timelineRoutes = require('./api/routes/attendance-approval');
const leaveRoutes = require('./api/routes/leave');

mongoose.connect('mongodb+srv://lomousHead:lomous_data@lomous-timesheet-p3ijh.mongodb.net/test?retryWrites=true&w=majority');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        req.header('Acces-Control-Allow-Method', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();

});

app.use('/user', userRoutes);
app.use('/timeline', timelineRoutes);
app.use('/leave', leaveRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;