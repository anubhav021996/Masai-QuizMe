const express = require("express");
const router = express.Router();

const Questions = require("../models/questions.model");

router.get("/", async (req, res) => {
  try {
    let category = req.query.category;
    let difficulty = req.query.difficulty;
    let limit = req.query.limit;

    let questions = await Questions.find({ category, difficulty }).limit(limit);
    res.status(200).send({ results: questions });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
