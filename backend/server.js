const express = require('express');
const mongoose = require('mongoose');
const faqRoutes = require('./routes/faqRoutes');
const cors=require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;
frontend=process.env.FRONTEND_URL || 'http://localhost:3000';
console.log(frontend)
app.use(cors({ origin: frontend }));
app.use(express.json());
mongoURI=process.env.MONGO_URI

mongoose.connect(mongoURI, {
 
  }).then(() => {
    console.log("Connected to Database!")
    app.listen(PORT,()=>{
        console.log("Server running on port 7000")
    });
    
})

app.use('/api/faqs', faqRoutes);

