
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      console.log(req.body.history);
      console.log(req.body.message);


    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });