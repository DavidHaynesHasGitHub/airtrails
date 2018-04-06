var express = require('express');
var router = express.Router();
var unirest = require('unirest');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Airtrail'});
});

router.post("/location", (req, res) => {
  let location = req.body.location
  console.log('location', location)
  let Result = unirest.get("https://trailapi-trailapi.p.mashape.com/?limit=25&q[city_cont]=" + location + "&radius=25")
    .header("X-Mashape-Key", "qSCn2S9q6LmshglEQPriE2xmI6MSp1aAvSAjsnaTX0LGLXfmTZ")
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });

  res.redirect('/', Result);
})

module.exports = router;
