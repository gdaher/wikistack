const express = require('express');
const router = express.Router();
module.exports = router;
const addPage = require('../views/addPage');



router.get('/', (req, res, next) => {
    res.redirect('../');
})


router.get('/add', (req, res, next) => {
    res.send(addPage())
})
//same as /wiki/
router.post('/', (req, res, next) => {
    console.log('req', req.body);
    let title = res.body.title;
    res.redirect(`/${title}`);
    console.log('res', res.body);

})

