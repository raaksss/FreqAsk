const mongoose = require('mongoose');
const Faq= require('../models/Faq');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();

const trainClassifier = async () => {
    const faqs = await Faq.find(); 
    faqs.forEach(faq => {
      classifier.addDocument(tokenizer.tokenize(faq.question.toLowerCase()), faq.answer);
    });
  
    classifier.train();
  };
  
  trainClassifier();
  

const HandleUserQueries = async (req, res) => {
    try{
    const userQuery = req.body.query.toLowerCase();
    const faqs = await Faq.find().lean(); 
    const input = JSON.stringify({ userQuery, faqs });
     exec('app.py', { input: input }, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);    
          return res.status(500).send('Internal server error');
        }
        res.json({ answer: stdout.trim() });
      });
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      res.status(500).send('Internal server error');
    }
  };


module.exports = { HandleUserQueries };