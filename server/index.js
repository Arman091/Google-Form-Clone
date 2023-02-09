const mongoose = require("mongoose");
const express = require("express");
const Form = require("./routes/model");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());



// const findDB = async () => {
 
//   return data;
// };
app.get("/forms/data", async(req, res) => {
 res.header("Access-Control-Allow-Origin", "http://localhost:3000");

 res.header(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept"
 );
   let data = await Form.find();
  res.send(data);
});

app.post("/form/upload", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let form = new Form(req.body);
  // let result = await form.save();

  // console.log(form.questions);
  if (form) {
    res.send("inserted document");
  } else {
    res.send("Something went Wrong");
  }
});

app.delete("/forms/delete/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { id } = req.params;
  const deleteInDb = async () => {
    let data = await Form.deleteOne({ form_id: id });
    console.log(data);
  };
  deleteInDb();
  res.status(200).send(data);
});

const PORT = process.env.PORT || 6001;

const uri =
  "mongodb+srv://coderbyte:armanK123@cluster0.rkx2xm3.mongodb.net/?retryWrites=true&w=majority";

const db = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
