var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/forum", function(req, res) {
  res.render("forum");
})

router.get("/om-oss", function(req, res) {
  res.render("about");
})

router.get("/kontakt", function(req, res) {
  res.render("contact");
})

router.get("/soek", function(req, res) {
  res.render("apply");
})

module.exports = router;
