/**
 * Created by smtandabuzo on 2019/01/24.
 */
const fs = require("fs");

module.exports = function (app){
    /**
     *
     */
    app.get('/mock/subjects', function(req,res){
        var subjects = require('../data/subjects.json');
        res.send(subjects);
    });
}
