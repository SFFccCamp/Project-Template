var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json([
    { name: 'Sherwin' },
    { name: 'Shav' },
    { name: 'Christian' },
    { name: 'Madhu' }
  ])
})

module.exports = router
