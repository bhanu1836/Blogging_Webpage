const mongoose = require('mongoose');
const PosT = require('../database/postdb'); // Adjust the path as necessary

mongoose.connect('mongodb+srv://bhanu:1234@nodeexpress.vkh6d.mongodb.net/BlogsDB?retryWrites=true&w=majority&appName=nodeExpress', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const fetchPosts = async () => {
  try {
    const posts = await PosT.find({}, 'title thumbnail').exec(); // Fetch title and thumbnail fields
    console.log('Posts with thumbnails:', posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    mongoose.disconnect();
  }
};

fetchPosts();
