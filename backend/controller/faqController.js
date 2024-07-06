const FAQ = require('../models/Faq');

const getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getFAQById = async (req, res) => {
  res.json(res.faq);
};

const createFAQ = async (req, res) => {
  const faq = new FAQ({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
  });

  try {
    const newFAQ = await faq.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateFAQById = async (req, res) => {
  if (req.body.question != null) {
    res.faq.question = req.body.question;
  }
  if (req.body.answer != null) {
    res.faq.answer = req.body.answer;
  }
  if (req.body.category != null) {
    res.faq.category = req.body.category;
  }
  res.faq.dateModified = Date.now();

  try {
    const updatedFAQ = await res.faq.save();
    res.json(updatedFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteFAQById = async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getFAQ = async (req, res, next) => {
  let faq;
  try {
    faq = await FAQ.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.faq = faq;
  next();
};

module.exports = {
  getAllFAQs,
  getFAQById,
  createFAQ,
  updateFAQById,
  deleteFAQById,
  getFAQ,
};
