// dependencies
var express = require('express');
var router = express.Router();

// import burger models
var burger = require('../models/burger');

// define homepage
router.get('/', function(req, res){
    burger.all(function(data){
        var hbsBurger = {
            burgers: data
        };
        console.log(hbsBurger);
        res.sender('index', hbsBurger);
    });
});

router.post('/api/burgers', function(req,res){
    burger.create([
        'name', 'isDevoured'
    ], [
        req.body.name, req.body.isDevoured
    ], function(result){
        res.json({id: result.insertId});
    });
});