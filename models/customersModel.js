const mongoose = require("mongoose");

//schema kyak model struktur dari datanya
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"] ,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber:{
    type: Number,
    required: true,
  },
  city: String,
  country: {
    type: String,
    required: true,
    default:"Indonesia",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;