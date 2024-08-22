const mongoose = require("mongoose");
const {v4} = require("uuid")
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    userName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    phoneNumber: {
      type: Number,
      require: true
    },
    password: {
      type: String,   
      require: true
    },
    userId:{
        type: String,
        default: v4
    }
  }, {
    timestamps: true
  });
  
  const userRegister = mongoose.model("Userregistration", userSchema);
module.exports = userRegister