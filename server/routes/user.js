const express = require('express')
let router = express.Router();
const User = require('./../model/User')
const mongoose = require('mongoose')
router.get('/',function(req,res){
    res.send('user api')
})
router.post('/register',function(req,res){
    console.log(req.body.username)
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    User.find({username:req.body.username})
    .exec()
    .then(user=>{
        console.log(user);
        if(user.length > 0){
            res.status(409).json({
                message:'User already exists'
            })
        }
        else{
            let user =new User({
                _id:new mongoose.Types.ObjectId,
                username: username,
                password: password,
                email: email,
            })
            console.log(user)
            user.save().then((result)=>{
                console.log(result)
            })   
            res.status(202).json({
                errors:'',
                message:'Successfully registered a new user',
                username: username
            })
        
        }
    })
    
})




router.post('/login',function (req,res){
    let username = req.body.username
    let password = req.body.password
    User.find({username:req.body.username})
    .exec()
    .then(user=>{
        console.log(user);
        if(user.length > 0 && user.password == password){
            res.status(202).json({
                message:'Successfully logged in',
                username: username
            })
        }
        else{ 
            res.status(401).json({
                errors:'',
                message:'Couldnt find username',
            })
        
        }
    })



})
module.exports = router