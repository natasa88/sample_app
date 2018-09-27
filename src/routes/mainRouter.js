(function() {
    'use strict';
    var express = require('express');
    var mainRouter = express.Router();
    var mainModel = require('../models/mainModel.js');
    
    var router = function() {
        mainRouter.route('/')
            .get(function(req, res) {
                mainModel.getAllData(function(data) {
                    res.render('index', {
                        data: data,
                        nav: nav
                    });
                });
        })
    }
    
}());