const express=require('express');
const router=express.Router();
const db = require('../config/database').db;
router.get("/",(req,res)=>{
    const {email,password} = req.query;
    if (email == "admin@admin.com" && password == "admin")
    {
        res.render("wel", { pageTitle: 'Welcome'});
    } 
    else 
    {   
        res.render("login",{ pageTitle: 'Login', msg: true})
    }
});
module.exports = router;