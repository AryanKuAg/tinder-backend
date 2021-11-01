import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import Cards from "./dbCards.js";

// App config
const app = express();
const port = process.env.PORT || 7000;
const connectionUrl =
  "mongodb+srv://admin:QXJtHslccjwuLJp3@cluster0.c9hse.mongodb.net/tinderdb?retryWrites=true&w=majority";


// middleware
app.use(express.json())
app.use(cors())

// db configs

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Works fine");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  console.log(dbCard)
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.send(400).send("There is something wrong with your data");
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find({}, (err, data) => {
    if (err) {
      res.send(400).send("There is something wrong with your data");
    } else {
      res.status(201).send(data);
    }
  });
});
// listner
app.listen(port, () => {
  console.log("The app is up and running on port", port);
});

// name - admin & password - QXJtHslccjwuLJp3
