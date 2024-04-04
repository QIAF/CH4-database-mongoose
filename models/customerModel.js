const mongoose = require("mongoose");

//schema kyak model struktur dari datanya
//remodel
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"] ,
  },
  age: Number,
  email: {
    type: String,
    unique: true,
  },
  role:{// yang masuk ke web
    type: String,
    enum:['admin', 'user'],
    default:'user'// kalo ada yang register ya cuma user saja
  },
  active:{
    type: Boolean,
    default:true,
  },
  photo:{
    type:String,
    default:"user-default.jpg"
  },
  password:{
    type: String,
    select:false,// jangan tampilin pass

  },
  createdAt:{
    type: Date,
    default: Date.now()
  }


});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;