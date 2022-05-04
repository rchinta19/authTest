const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  phone: { type: Number, unique: true },
  password: { type: String },
});
const user = mongoose.model("user", UserSchema);
module.exports = user;
