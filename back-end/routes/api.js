const express = require('express');
const User = require('../models/users')
const router = express.Router();

//Get a list users from database
router.get('/users', function(req, res, next){
    res.send({type: 'GET'});
});

//Add a new user to database
router.post('/users', function(req, res, next){
    //You need to wait mongo create data completely then you send your response
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
    
});

//Update a user in database
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    });
});

//Delete a user in database
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports = router;