var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {



  let location = getLocation();
  console.log('the location is', location);
  // res.render('index', { title: 'Airtrail', city: location});
});

module.exports = router;
