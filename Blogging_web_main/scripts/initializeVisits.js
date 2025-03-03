const mongoose = require('mongoose');
const Visits = require('../database/visits'); // Import the Visits model

mongoose.connect('mongodb+srv://bhanu:1234@nodeexpress.vkh6d.mongodb.net/BlogsDB?retryWrites=true&w=majority&appName=nodeExpress', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const initializeVisits = async () => {
  const visits = new Visits({ visits: 0 });
  await visits.save();
  console.log('Visits collection initialized');
  mongoose.disconnect();
};

initializeVisits();