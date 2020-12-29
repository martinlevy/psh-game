var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/game", usersController.index)
router.get("/game/create", usersController.create)
router.get("/game/topTen", usersController.topTen)


module.exports = router;
