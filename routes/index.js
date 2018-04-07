const express = require('express');
const router = express.Router();
const unirest = require('unirest');
const bodyparser = require("body-parser");



/* GET home page. */
router.get('/', function(req, res, next) {
  let result = unirest.get("https://trailapi-trailapi.p.mashape.com/?limit=25&q[city_cont]=Vancouver&radius=25")
    .header("X-Mashape-Key", "qSCn2S9q6LmshglEQPriE2xmI6MSp1aAvSAjsnaTX0LGLXfmTZ")
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  res.send(result)
  res.render('index', { title: 'Airtrail'});
});

// router.post("/location", (req, res) => {
//   let location = req.body.location;
//   console.log('location', location);
//   let Result = {};
//   Result = unirest.get("https://trailapi-trailapi.p.mashape.com/?limit=25&q[city_cont]=" + location + "&radius=25")
//     .header("X-Mashape-Key", "qSCn2S9q6LmshglEQPriE2xmI6MSp1aAvSAjsnaTX0LGLXfmTZ")
//     .header("Accept", "text/plain")
//     .end(function (result) {
//       console.log(result.status, result.headers, result.body);
//     });
//
//   res.redirect('/');
// });

module.exports = router;
