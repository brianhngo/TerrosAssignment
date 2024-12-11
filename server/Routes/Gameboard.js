const GameBoardModel = require("../Models/ChessBoard");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const gameBoard = new GameBoardModel();
    if (gameBoard) {
      res.status(200).json(gameBoard);
    } else {
      res.status(404).json(gameBoard);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
