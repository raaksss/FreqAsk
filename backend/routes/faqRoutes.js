const express = require('express');
const router = express.Router();
const cacheController = require('../controller/cacheController');

// GET all FAQs or by category
router.get('/', cacheController.getFAQs);

//GET all FAQs by category

router.get('/:categorySlug', cacheController.getFAQsByCategorySlug);

// GET a single FAQ by ID
router.get('/faq/:id', cacheController.getFAQById);

// Create a new FAQ
router.post('/', cacheController.createFAQ);

// Update a FAQ by ID
router.patch('/:id', cacheController.updateFAQById);

// Delete a FAQ by ID
router.delete('/:id', cacheController.deleteFAQById);

//Search a FAQ
router.get('/wocat/search', cacheController.searchFAQs);


module.exports = router;
