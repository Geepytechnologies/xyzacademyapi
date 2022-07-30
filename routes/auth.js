const router = require('express').Router();
const User = require('../models/user');
const Congress = require('../models/congress');
const cryptoJS = require('crypto-js');

//REGISTER 
router.post('/register', async (req,res)=>{
    const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try{
        const savedUser = await newuser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;