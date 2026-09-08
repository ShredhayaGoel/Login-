const express = require('express');
const router = express.Router();

/* GET users listing. */

const User = require("../models/User");
const { signup } = require("../controllers/user");

const { login } = require("../controllers/login");
const forgotPassword = require('../controllers/forgotPasswword');


router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
