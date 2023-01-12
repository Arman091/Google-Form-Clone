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

app.post("/form/upload", async (req, res) => {
  let form = new Form(req.body);
  let result = await form.save();
  if (result) {
    res.status(200).send("inserted document");
  }
  else {
    res.status("Something went Wrong")
  }
});

app.get("/forms/data", (req, res) => {
 const findDB = async () => {
   let data = await Form.find();
   console.log(data);
   res.status(200).json(data)
 };
 findDB();
});
 

app.delete("/forms/delete/:id", (req, res) => {
  const { id } = req.params;
  const deleteInDb = async () => {
    let data = await Form.deleteOne({ form_id: id });
    console.log(data);
  };

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
