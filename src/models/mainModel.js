(function() {
 'use strict';
    var config = require('../../config.js')
    var db = require('cloudant'); //get db
    var cloudant = db(config.cloudantConnection);
    
    module.exports = {
        getAllData
    };
    
    function getAllData (callback) {
        var selector = {
            _id: {
                '$gt': '0'
            }
        }
        
        cloudant.find(selector, function(data, error) {
            if (error) {
                console.log(error);
            } else {
                callback(data);
            }
        });
    }
    
}());