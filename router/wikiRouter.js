const express = require('express');
const router = express.Router();
module.exports = router;
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
    res.send('we got to wiki')
})

router.post('/', (req, res, next) => {
    res.send('we got to wiki')
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})
