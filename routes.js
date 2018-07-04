'use strict';

const { Router } = require('express');
const router = Router();

const {
  genTheme,
  genSettings
} = require('./theme');

router.post('/new', (req, res, next) => {
  let { body } = req;
  let { syntax, fg, bg } = body;
  if (!syntax || !fg || !bg) {
    res.status(400).json({
      message: "Please provide a valid `syntax`, `fg`, and `bg`."
    });
  } else {
    let data = req.query.settings ? genSettings(body) : genTheme(body);
    res.status(200).json(data);
  }
});

module.exports = router;