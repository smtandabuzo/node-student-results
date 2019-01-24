/**
 * Created by smtandabuzo on 2019/01/23.
 */
const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');

const schoolsRoutes = require('./routes/schools.js');
const subjectsRoutes = require('./routes/subjects.js');
const provincesRoutes = require('./routes/provinces.js');

var app = require('express')();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

schoolsRoutes(app);
subjectsRoutes(app);
provincesRoutes(app);

var server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
