const mongoose = require("mongoose");
const connect = ()=>{
    mongoose.connect("mongodb+srv://Jayakumar:Iamjk1801@layadb.hsx5hvy.mongodb.net/Layadb")
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error in Database connection:", err);
  });
}

module.exports = connect
