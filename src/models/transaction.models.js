const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    primaryKey: true,
  },
  type: {
    type: String,
    required: true,
    primaryKey: true,
  },
  amount: {
    type: String,
    required: true,
    primaryKey: true,
  },
  status: {
    type: String,
    required: true,
    primaryKey: true,
  },
  date: {
    type: Date,
    default: null,
    primaryKey: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
