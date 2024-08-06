const FAQ = require('../models/Faq');
const { setFAQInCache, clearCache } = require('../cache');

const getFAQs = async (req, res) => {
  try {
    let query = {};
    const faqs = await FAQ.find(query);
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFAQById = async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);

    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createFAQ = async (req, res) => {
  const { question, answer, category } = req.body;

  const validCategories = [
    'Basic Installation and Configuration',
    'Account Management and Settings',
    'Booking and Managing Ticketing',
    'Paperless Ticketing',
    'R Wallet',
    'ATVM [Smart Card]'
  ];

  const lowercaseCategory = category.toLowerCase();

  if (!validCategories.some(validCat => validCat.toLowerCase() === lowercaseCategory)) {
    return res.status(400).json({ message: 'Invalid category provided' });
  }

  const faq = new FAQ({
    question,
    answer,
    category,
  });

  try {
    const newFAQ = await faq.save();
    setFAQInCache(newFAQ); // Add FAQ to cache
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create FAQ', error: err.message });
  }
};

const updateFAQById = async (req, res) => {
  const updates = {};

  if (req.body.question) {
    updates.question = req.body.question;
  }
  if (req.body.answer) {
    updates.answer = req.body.answer;
  }
  if (req.body.category) {
    updates.category = req.body.category;
  }

  if (Object.keys(updates).length > 0) {
    updates.dateModified = Date.now();
  }

  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, updates, { new: true });

    if (!updatedFAQ) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    // Update the cache with the updated FAQ
    setFAQInCache(updatedFAQ);

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
    clearCache(); // Clear cache after deletion
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

const getCategoryNameFromSlug = (slug) => {
  switch (slug) {
    case 'basic-installation-and-configuration':
      return 'Basic Installation and Configuration';
    case 'account-management-and-settings':
      return 'Account Management and Settings';
    case 'booking-and-managing-ticketing':
      return 'Booking and Managing Ticketing';
    case 'paperless-ticketing':
      return 'Paperless Ticketing';
    case 'rwallet':
      return 'R Wallet';
    case 'atvm':
      return 'ATVM [Smart Card]';
    default:
      return null;
  }
};

const getFAQsByCategorySlug = async (req, res) => {
  const { categorySlug } = req.params;

  if (!categorySlug) {
    return res.status(400).json({ message: 'CategorySlug is required' });
  }

  try {
    console.log(`CategorySlug received from frontend: ${categorySlug}`);

    const category = getCategoryNameFromSlug(categorySlug);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    console.log(`Resolved category from slug: ${category}`);

    const faqs = await FAQ.find({ category });

    if (!faqs || faqs.length === 0) {
      return res.status(404).json({ message: 'No FAQs found for this category' });
    }

    res.json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({ message: 'Failed to fetch FAQs' });
  }
};

const searchFAQs = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      console.log("Query parameter is missing");
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const faqs = await FAQ.find(
      {
        $text: {
          $search: query,
          $caseSensitive: false,
        }
      },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    res.status(200).json(faqs);
  } catch (error) {
    console.error("Error occurred during search:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getFAQs,
  getFAQById,
  createFAQ,
  updateFAQById,
  deleteFAQById,
  getFAQ,
  getFAQsByCategorySlug,
  searchFAQs
};
