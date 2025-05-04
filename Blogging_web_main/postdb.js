const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
async function main() {

  await mongoose.connect(
    "mongodb+srv://bhanu:1234@nodeexpress.vkh6d.mongodb.net/Blogging-main?retryWrites=true&w=majority&appName=nodeExpress",
    { useNewUrlParser: true }
  );
  console.log("post connected");
}
main()     
const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    thumbnail:String,
    date:Number,
    like:Number,
    likedby:[String]
    });
  
    

const PosT = mongoose.model("post", postSchema);
module.exports = PosT