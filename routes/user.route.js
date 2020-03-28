const express = require('express');
const router = express.Router();

// Low db
const db = require('../db');

router.get('/', function (req, res) {
    let data = db.get('users').value();
    res.render('list', { list: data });
});

router.get('/:id', (req,res) => {
    let user = db.get('users').find({ id: req.params.id }).value();
    res.render('user', { user });
});

module.exports = router;