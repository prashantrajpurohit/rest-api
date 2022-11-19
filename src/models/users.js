const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String },
  address: { type: String },
  Mno: { type: Number, require: true, unique: true, min: 10 },
  Email: {
    type: String,
    require: true,
    unique: [true, "Email id is  already present "],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
});
const user = new mongoose.model("user ", userSchema);
module.exports = user;
