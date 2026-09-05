const express = require('express');
const router = express.Router();

/* GET users listing. */

const User = require("../models/User");

router.post("/signup", async (req, res) => {

  try {
    const user = await User.create(req.body);

    res.json({

      message: "User createed succesfully",
      user: user
    });


  }

  catch (error) {
    res.status(500).json({

      message: "something went wrong ",
      error: error.message
    });
  }
});

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
