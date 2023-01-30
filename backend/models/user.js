const mongoose = require("moongose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true, minLength: 8, maxlength: 30 },
  email: {
    type: String,
    required: true,
    minLength: 8,
    maxlength: 200,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxlength: 1024,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
