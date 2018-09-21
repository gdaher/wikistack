const express = require('express');
const router = express.Router();
module.exports = router;
const addPage = require('../views/addPage');
const main = require('../views/main')

router.get('/', (req, res, next) => {

    try {
        res.send(main())
    }
    catch(err) {
        next(err)
    }
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

router.post('/', (req, res, next) => {
    console.log('req', req.body);

})

