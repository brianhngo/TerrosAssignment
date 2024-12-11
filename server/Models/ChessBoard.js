class GameBoard {
  constructor() {
    this.board = [
      [
        "w rook",
        "w knight",
        "w bishop",
        "w queen",
        "w king",
        "w bishop",
        "w knight",
        "w rook",
      ],
      [
        "w pawn",
        "w pawn",
        "w pawn",
        "w pawn",
        "w pawn",
        "w pawn",
        "w pawn",
        "w pawn",
      ],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      [
        "b pawn",
        "b pawn",
        "b pawn",
        "b pawn",
        "b pawn",
        "b pawn",
        "b pawn",
        "b pawn",
      ],
      [
        "b rook",
        "b knight",
        "b bishop",
        "b queen",
        "b king",
        "b bishop",
        "b knight",
        "b rook",
      ],
    ];
    this.pieceDirection = {
      rook: [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ],
      bishop: [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ],
      queen: [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ],
      king: [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ],
      knight: [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
      ],
      pawn: {
        white: [
          [0, -1],
          [0, -2],
          [-1, -1],
          [1, -1],
        ],
        black: [
          [0, 1],
          [0, 2],
          [-1, 1],
          [1, 1],
        ],
      },
    };
    this.playersTurn = "w"; // 'w for white' or 'b black'
    this.gameStatus = "unstarted"; // 'started', 'finished', 'unstarted'
    this.gameResult = null; // null, black, white, stale
  }

  // 3 Functions - PlayersMove, CheckValidation, checkGameStatus
  PlayersMove(from, to) {
    // from [X,Y] ,  to [X2,Y2]
    if (this.gameStatus === "finished") {
      return; // game is over
    }

    let currentPiece = this.board[from[0]][from[1]];
    if (this.checkValidation(from, to, currentPiece)) {
      // if the move is valid move, then  update pieces to new location;
      this.board[to[0]][to[1]] = this.board[from[0]][from[1]];
      this.board[from[0]][from[1]] = "";
      let result = this.checkGameStatus(); // checks game status
      if (result === "black") {
        // black wins
        this.gameResult = "black";
        this.gameStatus = "finished";
      } else if (result === "white") {
        // white wins
        this.gameResult = "white";
        this.gameStatus = "finished";
      } else if (!result) {
        // game still going on
        if (this.playersTurn === "w") {
          this.playersTurn = "b";
        } else {
          this.playersTurn = "w";
        }
        return;
      }
    } else {
      // Move is not valid, ask user to input another movement
      return false;
    }
  }

  checkValidation(from, to, currentPiece) {
    // will Check if the user move is valid
    let [color, piece] = currentPiece.split(" ");
    let direction;
    if (piece === "pawn") {
      // only pawn has specific color direction
      direction = this.pieceDirection[piece][color];
    } else {
      direction = this.pieceDirection[piece];
    }
    let [x1, y1] = from;
    let [x2, y2] = to;
    let dx = x2 - x1;
    let dy = y2 - y1;

    for (let [dirX, dirY] of direction) {
      if (dx === dirX && dy === dirY) {
        return true;
      }
    }

    return false;
  }

  checkGameStatus() {
    // Need to check if Kings are still on board;
    let blackKing = null;
    let whiteKing = null;

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        if (this.board[i][j] === "w king") {
          whiteKing = true;
        }

        if (this.board[i][j] === "b king") {
          blackKing = true;
        }
      }
    }

    if (!blackKing && whiteKing) {
      return "white";
    } else if (!whiteKing && blackKing) {
      return "black";
    } else {
      return false;
    }
  }
}

module.exports = {
  GameBoard,
};
