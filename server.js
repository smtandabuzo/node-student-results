/**
 * Created by smtandabuzo on 2019/01/23.
 */
const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');

var app = require('express')();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
