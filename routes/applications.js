var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let allTheApps = []
  for (let i = 1; i <= 100; i++) {
    if (i < 10) allTheApps.push({ name: `my-app-00${i}`, id: `${i}` })
    if (i >= 10) allTheApps.push({ name: `my-app-0${i}`, id: `${i}` })
  }
  res.json({
    data: allTheApps
  });
});

module.exports = router;
