const express = require('express');
const router = express.Router();
const faqController = require('../controller/faqController');

// GET all FAQs or by category
router.get('/', faqController.getFAQs);

//GET all FAQs by category

router.get('/:categorySlug', faqController.getFAQsByCategorySlug);


// GET a single FAQ by ID
router.get('/faq/:id', faqController.getFAQById);

// Create a new FAQ
router.post('/', faqController.createFAQ);

// Update a FAQ by ID
router.patch('/:id', faqController.updateFAQById);

// Delete a FAQ by ID
router.delete('/:id', faqController.deleteFAQById);

module.exports = router;
