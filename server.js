require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;

const DB = process.env.DATABASE;

mongoose
.connect(DB,{ // buat connect ke database
  useNewUrlParser: true,
})
.then((con) => {
  console.log("connection ke database success");
  // console.log(con.connections);
});

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

const Customer = mongoose.model('Customer', customerSchema);

const customerTest = new Customer ({
  name: 'coba4',
  email: 'coba4a@gmail.com',
  phoneNumber: '0853859458'
})
customerTest
.save() // suuccese handler
.then(doc => {
  console.log(doc);
})
.catch ((err)=>{ //error handler
  console.log("ERROR : " + err);
});


app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
