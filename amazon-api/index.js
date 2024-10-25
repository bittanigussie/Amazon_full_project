
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.SSTRIPE_KEY);
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success !",
  });
});

app.post("/payment/create", async (req, res) => {
  console.log("request received");
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

app.listen(5000, (err) => {
    if (err) throw err
    console.log("Amazon serve running on port:5000, http://localhost:5000");
    
})

 
