const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

const { HoldingsModel } = require("./models/holdingsModel");
const { PositionModel } = require('./models/PositionModel');




// app.get("/addHoldings", async (req, res) => {
//     holdings = [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ]
//   holdings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });


// app.get("/allpostions", async(req,res)=>{
//   let  positions = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "MIS",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//         {
//           product: "NRML",
//           name: "TATASTEEL",
//           qty: 5,
//           avg: 450.50,
//           price: 455.00,
//           net: "+1.00%",
//           day: "+0.50%",
//           isLoss: false,
//         },
//         {
//           product: "CNC",
//           name: "RELIANCE",
//           qty: 3,
//           avg: 2100.00,
//           price: 2080.00,
//           net: "-0.95%",
//           day: "-0.50%",
//           isLoss: true,
//         },
//         {
//           product: "MIS",
//           name: "INFY",
//           qty: 4,
//           avg: 1500.00,
//           price: 1520.00,
//           net: "+1.33%",
//           day: "+0.67%",
//           isLoss: false,
//         },
//         {
//           product: "NRML",
//           name: "HDFCBANK",
//           qty: 6,
//           avg: 1400.00,
//           price: 1380.00,
//           net: "-1.43%",
//           day: "-0.71%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "ITC",
//           qty: 10,
//           avg: 200.00,
//           price: 205.00,
//           net: "+2.50%",
//           day: "+1.25%",
//           isLoss: false,
//         },
//       ]

//       positions.forEach((item) => {
//             let newPosition = new PositionModel({
//               product: item.product,
//               name: item.name,
//               qty: item.qty,
//               avg: item.avg,
//               price: item.price,
//               net: item.net,
//               day: item.day,
//               isLoss: item.isLoss,
//             });
        
//             newPosition.save();
//           });
//           res.send("Done!");
// })



// Correctly handle mongoose connection

app.get("/allPosition", async(req,res)=>{
    let allPostions = await PositionModel.find({})
    res.json(allPostions)
})

app.get("/allHoldings", async (req,res)=>{
    let allHolding = await HoldingsModel.find({})
    res.json(allHolding)
})

mongoose.connect(uri)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.error("Error:", err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
