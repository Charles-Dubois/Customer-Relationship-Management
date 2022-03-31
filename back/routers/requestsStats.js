const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Requests = require("../models/requestsModel");

router.get("/stats", async (req, res) => {
  let nbRequest, mostUsedURL, mostUsedVerb;
  try {
    nbRequest = await Requests.count();
    mostUsedVerb = await Requests.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$verb" },
        },
      },
    ]);
    mostUsedVerb = mostUsedVerb[0].max;
    mostUsedURL = await Requests.aggregate([
      {
        $group: {
          _id: null,
          max: { $max: "$url" },
        },
      },
    ]);
    mostUsedURL = mostUsedURL[0].max;
  } catch (error) {
    console.log(`error from requestsStats.js    ==>   ${error} `);
    return res.status(400).json({ message: "error 400 from requestsStats.js" });
  }
  const result = { nbRequest, mostUsedURL, mostUsedVerb };
  res.json(result);
});

module.exports = router;
