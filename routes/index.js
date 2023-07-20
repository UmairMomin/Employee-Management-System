const express = require('express');
const router = express.Router();
const db = require('../config/database').db;
router.get("/", (req, res) => {
    res.render("login", { pageTitle: 'Login', msg: false });
});

router.get("/wel", (req, res) => {
    res.render("wel", { pageTitle: 'Welcome' });
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard", { pageTitle: 'Dashboard' });
});

router.get("/createuser", (req, res) => {
    res.render("user", { pageTitle: 'Create User', msg: false });
});


module.exports = router;