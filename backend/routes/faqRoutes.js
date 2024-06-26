
const express = require('express');
const router = express.Router();
const FAQ = require('../models/Faq');

router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getFAQ, (req, res) => {
  res.json(res.faq);
});


router.post('/', async (req, res) => {
  const faq = new FAQ({
    question: req.body.question,
    answer: req.body.answer,
  });

  try {
    const newFAQ = await faq.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.patch('/:id', getFAQ, async (req, res) => {
  if (req.body.question != null) {
    res.faq.question = req.body.question;
  }
  if (req.body.answer != null) {
    res.faq.answer = req.body.answer;
  }
  res.faq.dateModified = Date.now();

  try {
    const updatedFAQ = await res.faq.save();
    res.json(updatedFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (faq == null) {
      return res.status(404).json({ message: 'Cannot find FAQ' });
    }
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


async function getFAQ(req, res, next) {
  let faq;
  try {
    faq = await FAQ.findById(req.params.id);
    if (faq == null) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.faq = faq;
  next();
}

module.exports = router;
