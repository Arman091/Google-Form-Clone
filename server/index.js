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

app.get("/forms/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const findDB = async () => {
    let data = await Form.find();

    res.status(200).send(JSON.stringify(data));
  };
  findDB();
});

app.post("/form/upload", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // let form = new Form(req.body);
  // let result = await form.save();
  let data = await req.body;
  console.log(JSON.stringify(data));
  if (1) {
    res.status(200).send("inserted document");
  } else {
    res.status("Something went Wrong");
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
let url = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.rkx2xm3.mongodb.net/Forms?retryWrites=true&w=majority`;
const db = mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
