require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const faqRoutes = require('./routes/faqRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const Faq = require('./models/Faq');
const { setFAQInCache, clearCache, printCache } = require('./cache');

const app = express();
const PORT = process.env.PORT || 7000;
const frontend = process.env.FRONTEND_URL || 'http://localhost:3000';
console.log(frontend);

app.use(cors({ origin: frontend }));
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(PORT, () => {
      console.log("Server running on port 7000");
      initializeCache().catch(err => console.error('Error initializing cache:', err));
    });
  })
  .catch(err => console.error('Error connecting to database:', err));

const initializeCache = async () => {
  try {
    const faqs = await Faq.find({});
    clearCache();
    faqs.forEach((faq) => setFAQInCache(faq));
    //printCache()
  } catch (err) {
    console.error('Error initializing cache:', err);
  }
};

app.use('/api/faqs', faqRoutes);
app.use('/api/chatbot', chatbotRoutes);
