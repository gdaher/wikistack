const express = require('express');
const router = express.Router();
module.exports = router;
const addPage = require('../views/addPage');
const main = require('../views/main');

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


router.post('/', async (req, res, next) => {
    // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: req.body.title.split(' ').join('_'),
    status: req.body.status
  });
  console.log('this worked!',page);
  res.send();
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }

})

