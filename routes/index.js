'use strict';

const { Router } = require('express');
const router = Router();

router.post('/dark', (req, res, next) => {
  let { body } = req;
  res.status(200).json(body);
});

module.exports = router;