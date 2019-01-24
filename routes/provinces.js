/**
 * Created by smtandabuzo on 2019/01/24.
 */
const fs = require("fs");

module.exports = function (app){
    /**
     *
     */
    app.get('/mock/provinces', function(req,res){
        var subjects = require('../data/provinces.json');
        res.send(subjects);
    });
}
