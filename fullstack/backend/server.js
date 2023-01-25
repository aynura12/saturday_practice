const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("/product", productSchema);
app.get("/product", (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.send(docs);
        res.status(200);
      } else {
        res.status(404).json({ message: "NOT FOUND" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.post("/product", (req, res) => {
  let newproduct = new Product({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
  });
  newproduct.save();
  res.send({ message: "Succes" });
});

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send({ message: "delete" });
    } else {
      res.status(500).json({ message: err });
    }
  });
});
mongoose.set('strictQuery', false);
const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;
const DB = process.env.DB_URL.replace("<password>", PASSWORD);
mongoose.connect(DB, (err) => {
  if (!err) {
    console.log("DB connect");
    app.listen(PORT, () => {
      console.log(`port is ${PORT}`);
    });
  }
});
