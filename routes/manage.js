const express = require('express');
const router = express.Router();
const db = require('../config/database').db;

router.get("/", (req, res) => {
    let qry = "select * from employee_db.employee_details";
    db.query(qry, (err, rows) => {
        if (err) throw err
        else
            res.render("manage", { pageTitle: 'Manage Users', data: rows });
    });
});

router.get("/deleteuser/:email", (req, res) => {
    let qry3 = " delete from employee_db.employee_details where email = ?";
    db.query(qry3, [req.params.email], (err, row) => {
        if (err) throw err
        res.render("delete", { pageTitle: 'Delete Users', msg: true });
    });
})
module.exports = router;     