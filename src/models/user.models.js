const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  month: {
    type: String,
    enum: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
});

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  accStatus: {
    type: String,
    required: false,
  },
  month: {
    type: monthSchema,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
