const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, default: 'user' },
  dp: { type: String, default: '' },
  bio: { type: String, default: '' },
  weblink: { type: String, default: '' },
  facebook: { type: String, default: '' },
  whatsapp: { type: String, default: '' },
  twitter: { type: String, default: '' },
  instagram: { type: String, default: '' },
  phoneno: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

// Create model
const Profile = mongoose.model("profile", profileSchema);

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://bhanu:1234@nodeexpress.vkh6d.mongodb.net/Blogging-main?retryWrites=true&w=majority&appName=nodeExpress",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("profile connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
}
 

connectDB();

module.exports = Profile;
