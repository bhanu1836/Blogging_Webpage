const mongoose = require('mongoose');
// Assuming you have a User model
const Profile = require('../profiledb');

mongoose.connect('mongodb+srv://bhanu:1234@nodeexpress.vkh6d.mongodb.net/Blogging-main?retryWrites=true&w=majority&appName=nodeExpress', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const createAdmin = async () => {
     // Replace 'adminpassword' with your desired password
  const profileData = {
    username: "Bhanu prakash",
    email: "bhanubroh@gmail.com",
    password: "bhanu04545",
    type: "admin",
    fullname: "",
    dp: "",
    bio: "",
    weblink: "",
    facebook: "",
    whatsapp: "",
    twitter: "",
    instagram: "",
    phoneno: "",
  };

  const admin = new Profile(profileData);

  await admin.save();
  console.log('Admin user created');
  mongoose.disconnect();
};

createAdmin();