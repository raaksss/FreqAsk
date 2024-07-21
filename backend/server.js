require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');

const faqRoutes = require('./routes/faqRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');


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
    });
  })
  .catch(err => console.error('Error connecting to database:', err));

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rakshitamanocha09@gmail.com', 
      pass: 'Rmrm@1234' 
    }
  });

app.use('/api/faqs', faqRoutes);
app.use('/api/chatbot', chatbotRoutes);
