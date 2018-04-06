var express = require('express');
var router = express.Router();
var unirest = require('unirest');


/* GET home page. */
router.get('/', function(req, res, next) {
  let Result = unirest.get("https://trailapi-trailapi.p.mashape.com/?lat=49.28&limit=100&lon=-123.12&radius=25")
    .header("X-Mashape-Key", "qSCn2S9q6LmshglEQPriE2xmI6MSp1aAvSAjsnaTX0LGLXfmTZ")
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log(result.body);
      res.send(Result.body);

    });
  res.render('index', { title: 'Airtrail'});

});

module.exports = router;
