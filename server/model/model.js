const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name required"]
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  gender: String,
  status: String

})

const UserDB = mongoose.model("userdb", userSchema);

module.exports = UserDB
