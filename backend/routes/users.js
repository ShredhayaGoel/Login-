const express = require('express');
const router = express.Router();

/* GET users listing. */

const User = require("../models/User");
const { signup, login } = require("../controllers/user");

router.post('/signup', signup);
router.post('/login', login);

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
