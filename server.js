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

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
