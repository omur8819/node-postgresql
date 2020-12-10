var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

/*  /user */

router.get("/", usersController.get_users);

module.exports = router;