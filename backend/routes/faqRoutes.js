const express = require('express');
const router = express.Router();
const faqController = require('../controller/faqController');

// GET all FAQs
router.get('/', faqController.getAllFAQs);

// GET a single FAQ by ID
router.get('/:id', faqController.getFAQ, faqController.getFAQById);

// Create a new FAQ
router.post('/', faqController.createFAQ);

// Update a FAQ by ID
router.patch('/:id', faqController.getFAQ, faqController.updateFAQById);

// Delete a FAQ by ID
router.delete('/:id', faqController.deleteFAQById);

module.exports = router;
