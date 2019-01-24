/**
 * Created by smtandabuzo on 2019/01/23.
 */
const fs = require("fs");

module.exports = function (app){
    /**
     *
     */
    app.get('/mock/schools', function(req,res){
        var schools = require('../data/schools.json');
        res.send(schools);
    });
}
