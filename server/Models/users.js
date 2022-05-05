const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Session = new mongoose.Schema({
  refreshToken: { type: String, default: "" },
});
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  authStrategy: { type: String, default: "local" },
  points: {
    type: Number,
    default: 10,
  },
  refreshToken: {
    type: [Session],
  },
});
UserSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken;
    return ret;
  },
});
UserSchema.plugin(passportLocalMongoose);

const user = mongoose.model("User", UserSchema);
module.exports = user;
