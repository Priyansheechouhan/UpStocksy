require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

const app = express();

//----------------this is to fill some temp data in db----------------
// app.get("/addPositions", async (req, res) => {
//   const tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((position) => {
//     const newPosition = new PositionModel({
//       product: position.product,
//       name: position.name,
//       qty: position.qty,
//       avg: position.avg,
//       price: position.price,
//       net: position.net,
//       day: position.day,
//       isLoss: position.isLoss,
//     });
//     newPosition.save();
//   });

//   res.send("Positions added");
// });

app.get("/allHoldings", async (req, res) => {
    let holdings = await HoldingModel.find({});
    res.json(holdings);
});

app.get("/allPositions", async (req, res) => {
    let positions = await PositionModel.find({});
    res.json(positions);
});

app.listen(port, () => {
  console.log("server started");
  mongoose.connect(mongoUrl);
  console.log("db connected");
});
