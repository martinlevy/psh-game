var express = require('express');
var router = express.Router();
const apiController = require("../../controllers/api/apiController")

/* GET home page. */
router.get("/game/create", apiController.create)
router.get("/game/topTen", apiController.topTen)


module.exports = router;
