'use strict';

const { Router } = require('express');
const router = Router();

const { genTheme } = require('./dark');

router.post('/dark', (req, res, next) => {
  let { body } = req;
  let { syntax, fg, bg } = body;
  if (!syntax || !fg || !bg) {
    res.status(400).json({
      message: "Please provide a valid `syntax`, `fg`, and `bg`."
    });
  } else {
    res.status(200).json(genTheme(body));
  }
});

module.exports = router;