const express = require('express');
const router = express.Router();
const Item = require('./../models/item');
const usersProfile = require('./../models/users-profile');

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

//get list of nitem 
router.get('/users', function(req,res,next){
    // db.foo.find().sort({_id:1}).limit(50);
    usersProfile.find().sort({followers:-1}).limit(10).then(function(usersProfile){
        res.send(usersProfile)
    })
})

// add
router.post('/insertUsers', function(req,res,next){

    usersProfile.create(req.body).then(function(usersProfile){
        res.send(usersProfile);
    }).catch(next)
})

// update
router.put('/item/:id', function(req,res,next){
    Item.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Item.findOne({_id: req.params.id}).then(function(item){
            res.send(item);
        })
        
    })
})

//delete
router.delete('/item/:id', function(req,res,next){
    Item.findByIdAndRemove({_id: req.params.id}).then(function(item){
        res.send(item)
    })
})

module.exports = router;