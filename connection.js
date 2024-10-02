const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cse341.xe5s3.mongodb.net/ExampleData?retryWrites=true&w=majority&appName=CSE341`;
async function connectDB() {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.error("connection to database failed: " + err);
  }
}
module.exports = connectDB;