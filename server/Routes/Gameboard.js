const GameBoardModel = require("../Models/ChessBoard");
const express = require("express");
const router = express.Router();

// gameboard/newGame => Starts new game
router.post("/newGame", async (req, res) => {
  try {
    const gameBoard = new GameBoardModel();
    if (gameBoard) {
      res.status(200).json({ game: gameBoard, message: "New game" });
    } else {
      res.status(404).json(gameBoard);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
// gameboard/move => Players Move
router.post("/move", async (req, res) => {
  try {
    const { gameBoard, from, to } = req.body;
    await gameBoard.PlayersMove(from, to);

    if (gameBoard) {
      res.status(200).json({ game: gameBoard, message: "Players Turn" });
    } else {
      res.status(404).json(gameBoard);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// gameboard/state => Checks state of the game
router.post("/state", async (req, res) => {
  try {
    const { gameBoard } = req.body;
    await gameBoard.gameResult;

    if (gameBoard) {
      res.status(200).json({ message: "Game is over" });
    } else {
      res.status(404).json(gameBoard);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
