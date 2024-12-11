const express = require("express");

const gameBoardRouter = require("./Routes/Gameboard.js");
const app = express();
app.use(express.json());

app.use("/gameboard", gameBoardRouter);

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
