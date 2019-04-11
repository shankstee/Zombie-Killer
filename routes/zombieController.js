var express = require('express');
var router = express.Router();
var db = require("../models");

var name = "Trae";

// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
  db.zombiesTable.findAll({}).then(function (data) {
      res.render("index", {zombies: data});
      console.log(data);
  })
})

router.post('/addone', function (req, res) {
  db.zombiesTable.create({
    zombieName : req.body.zombieName
  }).then(function () {
      res.redirect("/");
      
  })
})

router.put('/update/:id', function (req, res) {
  db.zombiesTable.update(
    {
    headShot: true
    
  },{
    where: {
      id: req.params.id
    }
  }).then(function () {
      res.end();
      
  })
})

module.exports = router;