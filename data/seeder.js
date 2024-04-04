require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const Customer = require("../models/customersModel");

const DB = process.env.DATABASE;

mongoose
.connect(DB,{ // buat connect ke database
  useNewUrlParser: true,
})
.then((con) => {
  console.log("connection ke database success");
  // console.log(con.connections);
});

const customers = JSON.parse(fs.readFileSync('./data/customers.json', 'utf8'));
const importData = async () => {
    try{
        console.log (customers);
        await Customer.create(customers);
        console.log("Data success di import");
    }catch(err){
        console.log(err);
    }
    process.exit();
};

console.log (process.argv);
const clearData = async () => {
    try{
        await Customer.deleteMany()
        console.log("Data sukses di Clear");
    }catch(err){
        console.log(err);
    }
    process.exit();
};
if (process.argv[2] == "--import"){
    importData()
}else if (process.argv[2] == "--delete"){
    clearData();
}

