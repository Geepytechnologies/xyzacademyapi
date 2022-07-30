const router = require('express').Router();
const Congress = require('../models/congress');

// register XYZ financial congress
router.post('/', async (req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*");
    const newuser = new Congress({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        phone: req.body.phone
    });
    try{
        const savedUser = await newuser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;